import { useProjectMetadata } from "@/hooks/use-project-metadata";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ProjectCardProps extends ComponentProps<"div"> {
  projectUID?: string;
}

export const ProjectCard = ({
  projectUID,
  children,
  className,
}: ProjectCardProps) => {
  const { metadata } = useProjectMetadata(projectUID);

  const websiteLink = metadata?.socialLinks.website?.[0] as string;

  return (
    <Card className="p-4 items-start flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-2xl italic">{metadata?.name}</h4>
        <span className="italic text-sub-text line-clamp-6 md:line-clamp-3">
          {metadata?.description}
        </span>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        {websiteLink && (
          <Link href={websiteLink} key={websiteLink}>
            <Button variant="tertrairy" size="sm" className="font-bold">
              View more on project Website
              <ArrowSquareOut size={24} />
            </Button>
          </Link>
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
