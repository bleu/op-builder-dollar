"use client";
import { useCohortStats } from "@/hooks/use-cohort-stats";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export const TopSection = () => {
  const {
    newMembersCount,
    newMembersPercentage,
    monthlyExitCount,
    monthlyExitPercentage,
    totalOpCollectiveCitizens,
    currentSeason,
    cohortSize,
  } = useCohortStats();

  const newMembers = {
    count: newMembersCount,
    percentage: newMembersPercentage,
  };

  const monthlyExit = {
    count: monthlyExitCount,
    percentage: monthlyExitPercentage,
  };

  const formatCountAndPercentage = ({
    count,
    percentage,
  }: { count: number; percentage: number }) => {
    return `${count}(${percentage > 0 ? "+" : ""}${percentage}%)`;
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-4">
      <Card
        className="w-full col-span-4 relative h-40 bg-background"
        variant="flunkyBorder"
        style={{ backgroundImage: "url('/images/texture.png')" }}
      >
        <div className="z-10 justify-center gap-2 items-start h-full flex flex-col">
          <h5 className="text-sub-text text-2xl">Cohort size</h5>
          <div className="flex gap-2 items-end">
            <span className="font-extrabold italic text-4xl">{cohortSize}</span>
            <span className="font-semibold text-xl">PROJECTS</span>
          </div>
        </div>
      </Card>
      <Card className="h-40 col-span-4 bg-background flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">New members</span>
          <span
            className={cn(
              "font-bold italic",
              newMembers.percentage > 0 ? "text-success" : "text-error",
            )}
          >
            {formatCountAndPercentage(newMembers)}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">Monthly member exit</span>
          <span
            className={cn(
              "font-bold italic",
              monthlyExit.percentage > 0 ? "text-success" : "text-error",
            )}
          >
            {formatCountAndPercentage(monthlyExit)}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">
            Total OP collective citizens
          </span>
          <span className="font-bold italic">{totalOpCollectiveCitizens}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">Optimism Gov season</span>
          <span className="font-bold italic">{currentSeason}</span>
        </div>
      </Card>
    </div>
  );
};
