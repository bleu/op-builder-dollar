"use client";

import { useProjects } from "@/hooks/use-projects";
import type { CohortProject } from "@/lib/types";
import { DetailedInfoLabel } from "../detailed-info-label";
import { ProjectCard } from "../project-card";
import Obusd from "../ui/obusd";
import { FormattedYield } from "./top-section";

export const ProjectList = () => {
  const projects = useProjects();
  const cohortProjects = projects.filter(
    (project) => project.isCohortMember,
  ) as CohortProject[];

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
          PROJECTS RECEIVING YIELD ({cohortProjects.length})
        </h2>
        <span className="text-sub-text text-lg">
          This list provides all projects or teams that are currently receiving
          yield. All yield is equally divided and distributed on a monthly
          basis.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {cohortProjects.map((project) => (
          <ProjectCard key={project.id} project={project}>
            <DetailedInfoLabel
              detailedInfo={
                project.shareOfYield
                  ? `${getPercentageOfTotalYield(project.shareOfYield)}% of total`
                  : ""
              }
              label="Share of monthly yield"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <div className="size-6 bg-primary rounded-full flex items-center justify-center">
                <Obusd size={18} />
              </div>
              <div className="[&>span]:text-[1rem] italic">
                <FormattedYield
                  yieldString={
                    project?.shareOfYield ? project.shareOfYield.toString() : ""
                  }
                />
              </div>
            </DetailedInfoLabel>
            <DetailedInfoLabel
              detailedInfo={`${getMonthsLeft("10/05/2025")} months left`}
              label="Membership expiration"
              className="flex items-center gap-2 font-bold italic"
            >
              05/10
            </DetailedInfoLabel>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};
