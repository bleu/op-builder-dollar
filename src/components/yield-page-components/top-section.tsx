"use client";
import { useYieldStats } from "@/hooks/use-yield-stats";
import { addCommasToInt } from "@/lib/utils";
import LogoComponent from "../logo";
import { Card } from "../ui/card";
import LoadingDots from "../ui/loading-dots";
import { ProgressBar } from "../ui/progress-bar";

export const TopSection = () => {
  const {
    round,
    daysToNextDistribution,
    pctgToNextDistribution,
    obusdYieldFormatted,
    yieldPerProject,
    cohortSize,
    apy,
  } = useYieldStats();

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-4">
      <Card
        className="w-full col-span-4 relative h-40 bg-background"
        variant="flunkyBorder"
        style={{ backgroundImage: "url('/images/texture.png')" }}
      >
        <div className="z-10 justify-center gap-2 items-center h-full flex flex-col">
          <h5 className="text-sub-text text-2xl">Total yield to distribute</h5>
          <div className="flex flex-row items-center gap-2">
            <div className="size-6 bg-primary rounded-full flex items-center justify-center">
              <LogoComponent className="text-white" width={18} height={18} />
            </div>
            {obusdYieldFormatted ? (
              <span className="font-extrabold italic text-4xl [&>span]:text-">
                <FormattedYield yieldNumber={Number(obusdYieldFormatted)} />
              </span>
            ) : (
              <LoadingDots className="font-extrabold italic text-4xl [&>span]:text-" />
            )}
          </div>
        </div>
      </Card>
      <Card className="h-40 col-span-4 bg-background flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">APY</span>
          {apy ? (
            <span className="font-bold italic">{apy}%</span>
          ) : (
            <LoadingDots className="font-bold italic" />
          )}
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">Cohort size</span>
          {cohortSize ? (
            <span className="font-bold italic">{cohortSize}</span>
          ) : (
            <LoadingDots className="font-bold italic" />
          )}
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">
            Est. yield per project
          </span>
          {yieldPerProject ? (
            <span className="font-bold italic">${yieldPerProject}</span>
          ) : (
            <LoadingDots className="font-bold italic" />
          )}
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">Distribution round</span>
          {round ? (
            <span className="font-bold italic">{round}</span>
          ) : (
            <LoadingDots className="font-bold italic" />
          )}
        </div>
      </Card>
      <div className="col-span-4 md:col-span-8 flex flex-col gap-4">
        {daysToNextDistribution ? (
          <span className="text-xl text-sub-text font-semibold">
            Distributing in {daysToNextDistribution} days
          </span>
        ) : (
          <div className="h-7 w-60 bg-card-border rounded-lg animate-pulse" />
        )}
        {pctgToNextDistribution ? (
          <ProgressBar progress={pctgToNextDistribution} />
        ) : (
          <div className="h-5 w-full bg-card-border rounded-lg animate-pulse" />
        )}
      </div>
    </div>
  );
};

export const FormattedYield = ({ yieldNumber }: { yieldNumber: number }) => {
  const [whole, decimal] = yieldNumber.toFixed(2).split(".");

  const wholeWithCommas = addCommasToInt(whole);
  return (
    <>
      {wholeWithCommas}.<span className="font-normal">{decimal}</span>
    </>
  );
};
