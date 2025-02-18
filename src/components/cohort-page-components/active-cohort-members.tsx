"use client";

import type { Project } from "@/lib/types";
import { AccountName } from "../account-name";
import { DetailedInfoLabel } from "../detailed-info-label";
import { ProjectCard } from "../project-card";
import { Card } from "../ui/card";
import SealCheck from "./seal-check";

export const ActiveCohortMembers = () => {
  const projects: Project[] = [
    {
      id: "1",
      name: "Project title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      shareOfYield: 400.45,
      membershipInitialization: "2022-12-31",
      membershipExpiration: "2025-12-31",
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
      endorsers: [
        { address: "0x29Ee17661f172424150d7AA6460F15edf47eDF6b" },
        { address: "0x7A3b4F8D2c9E5f1B6a0D8e3C4d5E2F1a9B8C7D6E" },
        { address: "0x3A1B4C2D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0" },
      ],
    },
    {
      id: "2",
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
          label: "Proof of endorsement",
        },
      ],
      endorsers: [
        { address: "0x29Ee17661f172424150d7AA6460F15edf47eDF6b" },
        { address: "0x7A3b4F8D2c9E5f1B6a0D8e3C4d5E2F1a9B8C7D6E" },
        { address: "0x3A1B4C2D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0" },
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
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
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
                {project.membershipInitialization}
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
