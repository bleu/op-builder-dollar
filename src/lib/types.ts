export type Project = {
  id: string;
  name: string;
  description: string;
  shareOfYield: number;
  membershipExpiration: string;
  projectLinks: ProjectLink[];
};

type ProjectLink = {
  href: string;
  label: string;
};
