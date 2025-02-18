export type Project = {
  id: string;
  name: string;
  description: string;
  shareOfYield: number;
  membershipInitialization: string;
  membershipExpiration: string;
  projectLinks: ProjectLink[];
  endorsers?: { address: `0x${string}` }[];
};

type ProjectLink = {
  href: string;
  label: string;
};
