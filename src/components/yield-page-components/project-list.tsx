"use client";

import { useProjectMetadata } from "@/hooks/use-project-metadata";
import type { Project } from "@/lib/types";
import { DetailedInfoLabel } from "../detailed-info-label";
import LogoComponent from "../logo";
import { ProjectCard } from "../project-card";
import { FormattedYield } from "./top-section";

export const ProjectList = () => {
  const projects: Project[] = [
    {
      id: "0x4201a4ad6468dff549edc3096367ac4beec946b701f94da7abc11182320d15a3",
      name: "Project title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      shareOfYield: 400.45,
      membershipInitialization: "2022-12-31",
      membershipExpiration: "2022-12-31",
      projectLinks: [
        {
          href: "/",
          label: "View on Charmverse",
        },
        {
          href: "/",
          label: "Treasury",
        },
      ],
    },
  ];

  const { allMetadata } = useProjectMetadata([
    "0x4201a4ad6468dff549edc3096367ac4beec946b701f94da7abc11182320d15a3",
  ]); // TODO - add ProjectUID

  const totalYield = 400000.45;

  const getMonthsLeft = (date: string) => {
    const currentDate = new Date();
    const expirationDate = new Date(date);
    const monthsLeft = expirationDate.getMonth() - currentDate.getMonth();
    return monthsLeft;
  };

  const getPercentageOfTotalYield = (shareOfYield: number) => {
    return ((shareOfYield / totalYield) * 100).toFixed(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">
          PROJECTS RECEIVING YIELD ({projects.length})
        </h2>
        <span className="text-sub-text text-lg">
          This list provides all projects or teams that are currently receiving
          yield. All yield is equally divided and distributed on a monthly
          basis.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            projectMetadata={allMetadata?.get(project.id)}
          >
            <DetailedInfoLabel
              detailedInfo={`${getPercentageOfTotalYield(project.shareOfYield)}% of total`}
              label="Share of monthly yield"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <div className="size-6 bg-primary rounded-full flex items-center justify-center">
                <LogoComponent className="text-white" width={18} height={18} />
              </div>
              <div className="[&>span]:text-[1rem] italic">
                <FormattedYield yieldNumber={project.shareOfYield} />
              </div>
            </DetailedInfoLabel>
            <DetailedInfoLabel
              detailedInfo={`${getMonthsLeft(project.membershipExpiration)} months left`}
              label="Membership expiration"
              className="flex items-center gap-2 font-bold italic"
            >
              {project.membershipExpiration}
            </DetailedInfoLabel>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};
