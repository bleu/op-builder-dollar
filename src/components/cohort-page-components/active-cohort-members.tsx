"use client";

import type { Project } from "@/lib/types";
import { DetailedInfoLabel } from "../detailed-info-label";
import { ProjectCard } from "../project-card";
import { Card } from "../ui/card";

export const ActiveCohortMembers = () => {
  const projects: Project[] = [
    {
      id: "1",
      name: "Project title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      shareOfYield: 400.45,
      membershipExpiration: "2022-12-31",
      projectLinks: [
        {
          href: "/",
          label: "View on Charmverse",
        },
        {
          href: "/",
          label: "Proof of endorsement",
        },
      ],
    },
    {
      id: "2",
      name: "Project title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      shareOfYield: 400.45,
      membershipExpiration: "2022-12-31",
      projectLinks: [
        {
          href: "/",
          label: "View on Charmverse",
        },
        {
          href: "/",
          label: "Proof of endorsement",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">
          ACTIVE COHORT MEMBERS ({projects.length})
        </h2>
        <span className="text-sub-text text-lg">
          This list features cohort projects endorsed by three Optimistic
          citizens, with membership lasting eight months.
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="grid grid-cols-8 w-full gap-2"
          >
            <Card className="rounded-[15px] flex flex-col justify-center gap-2 px-6 py-3 col-span-4">
              <span className="text-sub-text">Cohort member</span>
              Check
            </Card>
            <Card className="rounded-[15px] flex flex-col justify-center gap-2 px-6 py-3 col-span-4">
              <span className="text-sub-text">Cohort member</span>
              Check
            </Card>
            <Card className="rounded-[15px] flex flex-col justify-center gap-2 px-6 py-3 col-span-4">
              <span className="text-sub-text">Cohort member</span>
              Check
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
