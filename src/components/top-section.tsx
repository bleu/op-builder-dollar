import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const TopSection = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8">
      <div className="col-span-4 h-40 flex flex-col justify-center py-4 px-8">
        Total yield to distribute
      </div>
      <Card>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">APY</span>
          <span className="font-bold italic">0.0%</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">Cohort size</span>
          <span className="font-bold italic">100</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">
            Est. yield per project
          </span>
          <span className="font-bold italic">$0</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">Distribution round</span>
          <span className="font-bold italic">6</span>
        </div>
      </Card>
      <div className="col-span-4 md:col-span-8">Distributing in 20 days</div>
    </div>
  );
};

interface CardProps extends ComponentProps<"div"> {}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "col-span-4 h-40 justify-between items-center flex flex-col py-4 px-8 border-card-border border rounded-[30px]",
        className,
      )}
    >
      {children}
    </div>
  );
};
