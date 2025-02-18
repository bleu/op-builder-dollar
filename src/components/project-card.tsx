import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ProjectCardProps extends ComponentProps<"div"> {
  project: Project;
}

export const ProjectCard = ({
  project,
  children,
  className,
}: ProjectCardProps) => {
  return (
    <Card className="p-4 items-start flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-2xl italic">{project.name}</h4>
        <span className="italic text-sub-text line-clamp-6 md:line-clamp-3">
          {project.description}
        </span>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        {project.projectLinks.map((projectLink) => (
          <Link href={projectLink.href} key={projectLink.label}>
            <Button variant="tertrairy" size="sm" className="font-bold">
              {projectLink.label}
              <ArrowSquareOut size={24} />
            </Button>
          </Link>
        ))}
      </div>
      <div
        className={cn("flex flex-col gap-y-3 gap-x-8 md:flex-row", className)}
      >
        {children}
      </div>
    </Card>
  );
};
