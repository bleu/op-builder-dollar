import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ComponentProps } from "react";

export const TopSection = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-4">
      <Card className="justify-center gap-2">
        <h5 className="text-sub-text">Total yield to distribute</h5>
        <div className="flex flex-row items-center gap-2">
          <div className="size-6 bg-primary rounded-full flex items-center justify-center">
            <Image
              src="/icons/logo.svg"
              width={24}
              height={24}
              alt="obUSD_logo"
            />
          </div>
          <span className="font-extrabold italic text-4xl">
            400,000.<span className="text-3xl font-normal not-italic">45</span>
          </span>
        </div>
      </Card>
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
