import type { CohortProject } from "@/lib/types";
import { useMemo } from "react";
import { useEndorsements } from "./use-endorsements";
import { useReadNewCohortProjects } from "./use-read-new-cohort-projects";

type CohortData = Omit<
  CohortProject,
  "id" | "name" | "description" | "projectLinks"
>;

export function useProjectCohortData(
  ids: `0x${string}`[],
): Map<string, CohortData> {
  const endorsements = useEndorsements(ids);
  const { newMemberEvents } = useReadNewCohortProjects() ?? {};

  const projectCohortData = useMemo(() => {
    if (ids) {
      const dataMap = new Map<string, Partial<CohortData>>();

      if (endorsements) {
        for (const [id, endorsers] of endorsements) {
          dataMap.set(id, {
            ...dataMap.get(id),
            endorsers: endorsers.map((e) => ({ address: e })),
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

      return dataMap as Map<string, CohortData>;
    }

    return new Map<string, CohortData>();
  }, [endorsements, newMemberEvents, ids]);

  return projectCohortData;
}
