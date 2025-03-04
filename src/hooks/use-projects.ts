import type { Project } from "@/lib/types";
import { useMemo } from "react";
import { useEligibleProjects } from "./use-eligible-projects";
import { useProjectCohortData } from "./use-project-cohort-data";
import { useProjectMetadata } from "./use-project-metadata";

export function useProjects(): Partial<Project>[] {
  const { projects: eligibleProjects } = useEligibleProjects();

  const recipients = eligibleProjects.map(
    (eligibleProject) => eligibleProject.recipient,
  ) as `0x${string}`[];
  const refUids = eligibleProjects.map(
    (eligibleProject) => eligibleProject.refUid,
  );

  const { data: metadatas } = useProjectMetadata(refUids);

  const projectsCohortData = useProjectCohortData(recipients);

  const projects = useMemo(() => {
    const newProjects = [];

    if (eligibleProjects) {
      for (const eligibleProject of eligibleProjects) {
        const { id, refUid, recipient } = eligibleProject;
        newProjects.push({ id, refUid, recipient });
      }

      if (metadatas) {
        for (const [id, metadata] of metadatas) {
          const idx: number = newProjects.findIndex(
            (newProject) => newProject.refUid === id,
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
            (newProject) => newProject.recipient === id,
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
