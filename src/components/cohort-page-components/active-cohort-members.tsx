"use client";

import { useProjects } from "@/hooks/use-projects";
import type { CohortProject } from "@/lib/types";
import { AccountName } from "../account-name";
import { DetailedInfoLabel } from "../detailed-info-label";
import { ProjectCard } from "../project-card";
import { Card } from "../ui/card";
import SealCheck from "./seal-check";

export const ActiveCohortMembers = () => {
  const projects = useProjects();
  const cohortProjects = projects.filter(
    (project) => project.isCohortMember,
  ) as CohortProject[];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">
          ACTIVE COHORT MEMBERS ({cohortProjects.length})
        </h2>
        <span className="text-sub-text text-lg">
          This list features cohort projects endorsed by three Optimistic
          citizens, with membership lasting eight months.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {cohortProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="grid grid-cols-4 md:grid-cols-8 w-full gap-2"
          >
            <Card className="rounded-[15px] flex flex-col justify-center gap-2 px-6 py-3 col-span-4">
              <span className="text-sub-text">Cohort member</span>
              <SealCheck className="size-6 text-success" />
            </Card>
            <Card className="rounded-[15px] flex flex-col justify-center gap-2 px-6 py-3 col-span-4">
              <span className="text-sub-text">Endorsed by</span>
              <div className="flex gap-1 flex-wrap">
                {project.endorsers?.map((endorser, index, array) => (
                  <div className="font-bold italic" key={endorser.address}>
                    <AccountName address={endorser.address} />
                    {index !== array.length - 1 && ", "}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="rounded-[15px] flex flex-col justify-center gap-2 px-6 py-3 col-span-4">
              <span className="text-sub-text">Member since</span>
              <span className="font-bold italic">
                {/* {project?.membershipStartDate} */}
                20/11/2024
              </span>
            </Card>
            <div className="col-span-4 flex flex-col justify-center items-end">
              <DetailedInfoLabel
                detailedInfo="5 months left"
                label="Membership expiration"
              >
                05/25
              </DetailedInfoLabel>
            </div>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};
