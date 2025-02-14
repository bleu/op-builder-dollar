import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface CardProps extends ComponentProps<"div"> {
  variant?: "flunkyBorder" | "default";
}

export const Card = ({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) => {
  const CardComponent = (
    <div
      className={cn(
        "py-4 px-8 bg-content rounded-[30px] border border-card-border",
        variant === "flunkyBorder" && "border-none rounded-[29px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );

  if (variant === "flunkyBorder") {
    return (
      <div
        className="p-[1px] col-span-4 rounded-[30px] overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, #FF0420, #7D1AFF)",
        }}
      >
        {CardComponent}
      </div>
    );
  }

  return CardComponent;
};
