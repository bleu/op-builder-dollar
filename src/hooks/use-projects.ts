import type { Project } from "@/lib/types";
import { useMemo } from "react";
import { useEligibleProjects } from "./use-eligible-projects";
import { useProjectCohortData } from "./use-project-cohort-data";
import { useProjectMetadata } from "./use-project-metadata";

export function useProjects(): Partial<Project>[] {
  const { projects: eligibleProjects } = useEligibleProjects();

  const ids = eligibleProjects.map((eligibleProject) => eligibleProject.id);

  const { data: metadatas } = useProjectMetadata(ids);

  const projectsCohortData = useProjectCohortData();

  const projects = useMemo(() => {
    const newProjects = [];

    if (eligibleProjects) {
      for (const eligibleProject of eligibleProjects) {
        const { id } = eligibleProject;
        newProjects.push({ id });
      }

      if (metadatas) {
        for (const [id, metadata] of metadatas) {
          const idx: number = newProjects.findIndex(
            (newProject) => newProject.id === id,
          );
          const { name, description, socialLinks } = metadata;
          if (idx !== -1)
            newProjects[idx] = {
              ...newProjects[idx],
              name,
              description,
              socialLinks,
            };
        }
      }

      if (projectsCohortData) {
        for (const [id, projectCohortData] of projectsCohortData) {
          const idx: number = newProjects.findIndex(
            (newProject) => newProject.id === id,
          );
          const {
            isCohortMember,
            shareOfYield,
            membershipStartDate,
            membershipExpirationDate,
            membershipExpirationTimeLeft,
            endorsers,
          } = projectCohortData;
          if (idx !== -1)
            newProjects[idx] = {
              ...newProjects[idx],
              isCohortMember,
              shareOfYield,
              membershipStartDate,
              membershipExpirationDate,
              membershipExpirationTimeLeft,
              endorsers,
            };
        }
      }
    }

    return newProjects as Partial<Project>[];
  }, [eligibleProjects, metadatas, projectsCohortData]);

  return projects;
}
