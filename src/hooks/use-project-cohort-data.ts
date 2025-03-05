import type { CohortProject } from "@/lib/types";
import { formatTokenBalance } from "@/utils/formatting";
import { useMemo } from "react";
import { useEndorsements } from "./use-endorsements";
import { useReadBuildersManager } from "./use-read-builders-manager";
import { useReadNewCohortProjects } from "./use-read-new-cohort-projects";
import { useReadObusd } from "./use-read-obusd";

type CohortData = Omit<
  CohortProject,
  "id" | "name" | "description" | "projectLinks"
>;

export function useProjectCohortData(
  ids: `0x${string}`[],
): Map<string, CohortData> {
  const endorsements = useEndorsements(ids);
  const { newMemberEvents } = useReadNewCohortProjects() ?? {};
  const { obusdYield, obusdDecimals } = useReadObusd();
  const { data } = useReadBuildersManager();
  const { currentProjectRecipients } = data ?? {};

  const cohortSize = currentProjectRecipients
    ? currentProjectRecipients.length
    : undefined;

  const shareOfYield =
    obusdYield !== undefined &&
    obusdDecimals !== undefined &&
    cohortSize !== undefined
      ? cohortSize > 0
        ? Number(
            formatTokenBalance(
              obusdYield / BigInt(cohortSize),
              obusdDecimals,
            ).replace("<", ""),
          )
        : 0.0
      : undefined;

  const projectCohortData = useMemo(() => {
    if (ids) {
      const dataMap = new Map<string, Partial<CohortData>>();

      if (endorsements) {
        for (const [id, endorsers] of endorsements) {
          dataMap.set(id, {
            ...dataMap.get(id),
            endorsers,
            isCohortMember: endorsers.length >= 3,
          });
        }
      }

      if (newMemberEvents) {
        for (const id of ids) {
          const event = newMemberEvents.find(
            (event) => event.recipient.toLowerCase() === id.toLowerCase(),
          );

          if (event) {
            const {
              membershipStartDate,
              membershipExpirationDate,
              membershipExpirationTimeLeft,
            } = event;
            dataMap.set(id, {
              ...dataMap.get(id),
              membershipStartDate,
              membershipExpirationDate,
              membershipExpirationTimeLeft,
            });
          }
        }
      }

      if (shareOfYield) {
        for (const id of ids) {
          dataMap.set(id, {
            ...dataMap.get(id),
            shareOfYield,
          });
        }
      }

      return dataMap as Map<string, CohortData>;
    }

    return new Map<string, CohortData>();
  }, [endorsements, newMemberEvents, shareOfYield, ids]);
  return projectCohortData;
}
