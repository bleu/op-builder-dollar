"use client";

import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ProjectCard } from "../project-card";

export const EligibleProducts = () => {
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
          PROJECTS ELIGIBLE FOR COHORT ({projects.length})
        </h2>
        <span className="text-sub-text text-lg">
          This list includes projects eligible for endorsemests by Optimism
          citizens, determined by an approved Optimism grant council proposal.
          Projects need three citizen endorsemests to join the active cohort,
          with membership typically lasting eight months.
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="grid grid-cols-8 w-full gap-2"
          >
            <EndorsementComponent />
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};

const EndorsementComponent = () => {
  const endorsers = [
    { address: "0x1234...5678" },
    { address: "0x1234...5678" },
  ];

  return (
    <div className="w-full col-span-8 flex flex-col gap-2">
      <h3 className="font-semibold text-xl">Cohort approval progress</h3>
      <EndorseProgressBar votes={2} />
      <span className="text-sub-text-2 italic">Endorsed by</span>
      <ul className="list-disc list-inside ml-4">
        {endorsers.map((endorser) => (
          <li key={endorser.address} className="italic text-foreground">
            {endorser.address}
          </li>
        ))}
        {endorsers.length < 3 && (
          <li className="italic text-sub-text">
            {3 - endorsers.length} more endorsement missing
          </li>
        )}
      </ul>
    </div>
  );
};

const EndorseProgressBar = ({ votes }: { votes: number }) => {
  return (
    <div className="w-full bg-background p-[3px] rounded-full flex gap-1">
      {[1, 2, 3].map((value) => (
        <div
          className={cn(
            "bg-card-border h-[6px]  w-1/3",
            votes >= value && "bg-success",
            value === 1 && "rounded-l-full",
            value === 3 && "rounded-r-full",
          )}
          key={value}
        />
      ))}
    </div>
  );
};
