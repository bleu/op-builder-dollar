"use client";
import { useCitizen } from "@/hooks/use-citizen";
import { useEligibleProjects } from "@/hooks/use-eligible-projects";
import { useProjectMetadata } from "@/hooks/use-project-metadata";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { CheckCircle, ThumbsUp } from "phosphor-react";
import { useAccount } from "wagmi";
import { AccountName } from "../account-name";
import { ProjectCard } from "../project-card";
import { Button } from "../ui/button";

export const EligibleProjects = () => {
  const projects: Project[] = [
    {
      id: "1",
      name: "Project title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      shareOfYield: 400.45,
      membershipInitialization: "2022-12-31",
      membershipExpiration: "2022-12-31",
      projectLinks: [
        {
          href: "/",
          label: "Read full description on Charmverse",
        },
      ],
      endorsers: [
        { address: "0x29Ee17661f172424150d7AA6460F15edf47eDF6b" },
        { address: "0x7A3b4F8D2c9E5f1B6a0D8e3C4d5E2F1a9B8C7D6E" },
      ],
    },
  ];

  const { projects: projectsFromHook } = useEligibleProjects();
  const { allMetadata } = useProjectMetadata(
    projectsFromHook?.map((p) => p.projectRefUID as string) || [],
  );

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
      <div className="grid grid-cols-4 md:grid-cols-8 gap-y-4 gap-x-6">
        {projectsFromHook.map((project) => (
          <div key={project.id} className="col-span-4">
            <ProjectCard
              key={project.id}
              projectMetadata={allMetadata?.get(
                project.projectRefUID as string,
              )}
              className="grid grid-cols-8 w-full gap-2"
            >
              <EndorsementSection endorsers={projects[0].endorsers || []} />
            </ProjectCard>
          </div>
        ))}
      </div>
    </div>
  );
};

const EndorsementSection = ({
  endorsers,
}: { endorsers: Project["endorsers"] }) => {
  return (
    <div className="w-full col-span-8 flex flex-col gap-4">
      <div className="w-full col-span-8 flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Cohort approval progress</h3>
        <EndorseProgressBar votes={2} />
        <span className="text-sub-text-2 italic">Endorsed by</span>
        <ul className="list-disc list-inside ml-4">
          {endorsers?.map((endorser) => (
            <li key={endorser.address} className="italic text-foreground">
              <AccountName address={endorser.address} />
            </li>
          ))}
          {endorsers && endorsers.length < 3 && (
            <li className="italic text-sub-text">
              {3 - endorsers.length} more endorsement missing
            </li>
          )}
        </ul>
      </div>
      <EndorseButton endorsers={endorsers} />
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

interface EndorseButtonProps {
  endorsers: Project["endorsers"];
}

const EndorseButton = ({ endorsers }: EndorseButtonProps) => {
  const { address } = useAccount();
  const { isCitizen, fetching } = useCitizen(address);

  const isEndorsed = endorsers?.some(
    (endorser) => endorser.address === address,
  );

  const buttonStyle = "w-full rounded-[16px] py-4 text-lg font-semibold";

  if (address && fetching) {
    return (
      <div className="w-full rounded-[16px] h-10 bg-card-border animate-pulse" />
    );
  }

  if (isCitizen && isEndorsed) {
    return (
      <Button
        className={cn(
          buttonStyle,
          "w-full bg-success/10 text-success disabled:opacity-100 rounded-[16px] py-4 text-lg font-semibold",
        )}
        disabled
      >
        <CheckCircle className="text-success" weight="bold" size={24} />
        ENDORSED
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <div>
            <Button
              className={buttonStyle}
              variant="default"
              disabled={!isCitizen}
            >
              <ThumbsUp weight="bold" size={24} /> ENDORSE PROJECT
            </Button>
          </div>
        </TooltipTrigger>
        {!isCitizen && (
          <TooltipContent>
            <p>Only Optimism Citizens can endorse projects</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
