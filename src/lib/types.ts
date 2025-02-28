import type { Address } from "viem";

export interface EligibleProject {
  id: string;
  name: string;
  description: string;
  projectLinks: ProjectLink[];
  socialLinks: { website: string[] };
  endorsers: { address: Address }[];
  isCohortMember: false;
}

export interface CohortProject {
  id: string;
  name: string;
  description: string;
  projectLinks: ProjectLink[];
  socialLinks: { website: string[] };
  endorsers: { address: Address }[];
  isCohortMember: true;
  shareOfYield: number;
  membershipStartDate: string;
  membershipExpirationDate: string;
  membershipExpirationTimeLeft: string;
}

export type Project = EligibleProject | CohortProject;

type ProjectLink = {
  href: string;
  label: string;
};
