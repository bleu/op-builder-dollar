import type { CohortProject } from "@/lib/types";
import { useMemo } from "react";
import { useEndorsements } from "./use-endorsements";

type CohortData = Omit<
  CohortProject,
  "id" | "name" | "description" | "projectLinks"
>;

export function useProjectCohortData(
  ids: `0x${string}`[],
): Map<string, CohortData> {
  const endorsements = useEndorsements(ids);

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

      return dataMap as Map<string, CohortData>;
    }

    return new Map<string, CohortData>();
  }, [endorsements, ids]);

  return projectCohortData;
}
