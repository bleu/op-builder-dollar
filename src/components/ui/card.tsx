import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface CardProps extends ComponentProps<"div"> {}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "col-span-4 justify-between items-center flex flex-col py-4 px-8 border-card-border border rounded-[30px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
