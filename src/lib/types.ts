import type { Address } from "viem";

export interface EligibleProject {
  id: string;
  refUid: string;
  name: string;
  description: string;
  projectLinks: ProjectLink[];
  socialLinks: { website: string[] };
  endorsers: { address: Address }[];
  isCohortMember: false;
}

export interface CohortProject {
  id: string;
  refUid: string;
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
