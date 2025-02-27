import type { ProjectMetadata } from "@/hooks/use-project-metadata";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ProjectCardProps extends ComponentProps<"div"> {
  projectUID: string;
  projectMetadata?: ProjectMetadata;
}

export const ProjectCard = ({
  projectUID,
  projectMetadata,
  children,
  className,
}: ProjectCardProps) => {
  const websiteLink = projectMetadata?.socialLinks?.website?.[0] as string;
  const attestationLink = `https://optimism.easscan.org/attestation/view/${projectUID}`;

  return (
    <Card className="p-4 items-start flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-full">
        {!projectMetadata ? (
          <>
            <div className="max-w-[250px] w-full h-8 rounded-md bg-card-border animate-pulse" />
            <div className="h-36 md:h-[72px] w-full rounded-md bg-card-border animate-pulse" />
          </>
        ) : (
          <>
            <h4 className="font-bold text-2xl italic">
              {projectMetadata?.name}
            </h4>
            <span className="italic text-sub-text line-clamp-6 md:line-clamp-3">
              {projectMetadata?.description}
            </span>
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href={attestationLink}>
          <Button variant="tertrairy" size="sm" className="font-bold">
            View project attestation
            <ArrowSquareOut size={24} />
          </Button>
        </Link>
        {!projectMetadata ? (
          <div className="w-[250px] min-h-[36px] rounded-md bg-card-border animate-pulse shrink-0" />
        ) : (
          websiteLink && (
            <Link href={websiteLink} key={websiteLink}>
              <Button variant="tertrairy" size="sm" className="font-bold">
                View more on project Website
                <ArrowSquareOut size={24} />
              </Button>
            </Link>
          )
        )}
      </div>
      <div
        className={cn("flex flex-col gap-y-3 gap-x-8 md:flex-row", className)}
      >
        {children}
      </div>
    </Card>
  );
};
