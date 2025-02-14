"use client";

import type { Project } from "@/lib/types";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";
import type { ComponentProps } from "react";
import LogoComponent from "../logo";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { FormattedYield } from "./top-section";

export const ProjectList = ({ totalYield }: { totalYield: number }) => {
  const projects: Project[] = [
    {
      id: "1",
      name: "Project title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      shareOfYield: 400.45,
      membershipExpiration: "2022-12-31",
      charmverseUrl: "/",
      treasuryUrl: "/",
    },
    {
      id: "1",
      name: "Project title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      shareOfYield: 400.45,
      membershipExpiration: "2022-12-31",
      charmverseUrl: "/",
      treasuryUrl: "/",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">PROJECTS RECEIVING YIELD (100)</h2>
        <span className="text-sub-text text-lg">
          This list provides all projects or teams that are currently receiving
          yield. All yield is equally divided and distributed on a monthly
          basis.
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            totalYield={totalYield}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  totalYield,
}: { project: Project; totalYield: number }) => {
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
    <Card className="bg-card-bg-1 p-4 items-start flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-2xl italic">{project.name}</h4>
        <span className="italic text-sub-text line-clamp-6">
          {project.description}
        </span>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <Link href={project.charmverseUrl}>
          <Button variant="tertrairy" size="sm" className="font-bold">
            View on Charmverse
            <ArrowSquareOut size={24} />
          </Button>
        </Link>
        <Link href={project.treasuryUrl}>
          <Button variant="tertrairy" size="sm" className="font-bold">
            Treasury
            <ArrowSquareOut size={24} />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
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
      </div>
    </Card>
  );
};

interface DetailedInfoLabelProps extends ComponentProps<"div"> {
  detailedInfo: string;
  label: string;
}

const DetailedInfoLabel = ({
  children,
  detailedInfo,
  label,
  className,
  ...props
}: DetailedInfoLabelProps) => {
  return (
    <div className="space-y-2">
      <span className="text-sub-text-2">{label}</span>
      <div className="flex gap-2 items-center">
        <span className={className} {...props}>
          {children}
        </span>
        <div className="bg-card-bg-2 h-3 w-[1px] rounded-full" />
        <span className="text-sub-text">{detailedInfo}</span>
      </div>
    </div>
  );
};
