import { useEligibleProjects } from "./use-eligible-projects";
import { useReadBuildersManager } from "./use-read-builders-manager";
import { useReadNewCohortProjects } from "./use-read-new-cohort-projects";

export function useCohortStats() {
  const { data } = useReadBuildersManager();
  const { currentProjectRecipients, optimismFoundationAttesters } = data ?? {};
  const { newMembersCount, monthlyExitCount } =
    useReadNewCohortProjects() ?? {};
  const { projects } = useEligibleProjects();

  const newMembersPercentage =
    currentProjectRecipients && newMembersCount
      ? currentProjectRecipients.length - newMembersCount <= 0
        ? 100
        : (100 * newMembersCount) /
          (currentProjectRecipients.length - newMembersCount)
      : undefined;

  const monthlyExitPercentage =
    currentProjectRecipients && monthlyExitCount
      ? currentProjectRecipients.length - monthlyExitCount <= 0
        ? -100
        : (-100 * monthlyExitCount) /
          (currentProjectRecipients.length - monthlyExitCount)
      : undefined;

  const currentSeason = Math.max(
    ...projects.map((proj) => Number(proj.season)),
  );

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
