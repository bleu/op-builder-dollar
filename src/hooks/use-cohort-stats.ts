import { useReadBuildersManager } from "./use-read-builders-manager";
import { useReadNewCohortProjects } from "./use-read-new-cohort-projects";

export function useCohortStats() {
  const { data } = useReadBuildersManager();
  const { currentProjectRecipients, optimismFoundationAttesters } = data ?? {};
  const { newCohortProjects } = useReadNewCohortProjects();

  const newMembersCount = newCohortProjects ?? 0;

  const newMembersPercentage =
    currentProjectRecipients && newCohortProjects
      ? currentProjectRecipients.length - newCohortProjects < 0
        ? 100
        : newCohortProjects /
          (currentProjectRecipients.length - newCohortProjects)
      : 0;

  const monthlyExitCount = 7;
  const monthlyExitPercentage = -4;
  const currentSeason = 7; // TODO: get this info from citizens attestations

  const totalOpCollectiveCitizens = optimismFoundationAttesters
    ? String(optimismFoundationAttesters.length)
    : "";

  const cohortSize = currentProjectRecipients
    ? String(currentProjectRecipients.length)
    : "";

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
