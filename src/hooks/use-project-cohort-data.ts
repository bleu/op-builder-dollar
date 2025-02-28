import type { CohortProject } from "@/lib/types";

type CohortData = Omit<
  CohortProject,
  "id" | "name" | "description" | "projectLinks"
>;

export function useProjectCohortData(): Map<string, CohortData> {
  //TODO: read cohort projects dtaa
  return new Map<string, CohortData>();
}
