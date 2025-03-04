import type { Address } from "viem";

export interface EligibleProject {
  id: string;
  refUid: string;
  name: string;
  description: string;
  projectLinks: ProjectLink[];
  socialLinks: { website: string[] };
  endorsers: { address: Address }[];
  isCohortMember: boolean;
}

export interface CohortProject extends EligibleProject {
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
