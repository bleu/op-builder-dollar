import { useReadBuildersManager } from "./use-read-builders-manager";
import { useReadNewCohortProjects } from "./use-read-new-cohort-projects";

export function useCohortStats() {
  const { data } = useReadBuildersManager();
  const { currentProjectRecipients, optimismFoundationAttesters } = data ?? {};
  const { newCohortProjects } = useReadNewCohortProjects();

  const newMembersCount = newCohortProjects;

  const newMembersPercentage =
    currentProjectRecipients && newCohortProjects
      ? currentProjectRecipients.length - newCohortProjects <= 0
        ? 100
        : newCohortProjects /
          (currentProjectRecipients.length - newCohortProjects)
      : undefined;

  const monthlyExitCount = undefined;
  const monthlyExitPercentage = undefined;
  const currentSeason = undefined;

  const totalOpCollectiveCitizens = optimismFoundationAttesters
    ? String(optimismFoundationAttesters.length)
    : undefined;

  const cohortSize = currentProjectRecipients
    ? String(currentProjectRecipients.length)
    : undefined;

  return {
    newMembersCount,
    newMembersPercentage,
    monthlyExitCount,
    monthlyExitPercentage,
    totalOpCollectiveCitizens,
    currentSeason,
    cohortSize,
  };
}
