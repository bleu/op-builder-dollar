"use client";
import { useYieldStats } from "@/hooks/use-yield-stats";
import { addCommasToInt, cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowSquareOut, Info } from "phosphor-react";
import { Card } from "../ui/card";
import LoadingDots from "../ui/loading-dots";
import ObUsd from "../ui/obusd";
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
              <ObUsd size={18} />
            </div>
            {obusdYieldFormatted ? (
              <span className="font-extrabold italic text-4xl [&>span]:text-">
                <FormattedYield yieldString={obusdYieldFormatted} />
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
          <span className="font-bold italic">
            {apy ? `${apy}%` : <LoadingDots />}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">Cohort size</span>
          <span className="font-bold italic">
            {cohortSize ?? <LoadingDots />}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">
            Est. yield per project
          </span>
          <span className="font-bold italic">
            {yieldPerProject ? (
              `$${yieldPerProject}`.replace("$<", "~$")
            ) : (
              <LoadingDots />
            )}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="text-sub-text font-normal">Distribution round</span>
          <span className="font-bold italic">{round ?? <LoadingDots />}</span>
        </div>
      </Card>
      <div className="col-span-4 md:col-span-8 py-4 px-8 bg-background rounded-[30px] border border-card-border">
        <p className="flex justify-start items-center gap-2 text-sub-text md:font-bold md:text-foreground">
          <Info size={24} className="text-sub-text-2" />
          Maintenance fee
        </p>
        <p className="text-sub-text font-bold text-xs my-4">
          The obUSD core team collects a{" "}
          <span className={cn("text-sm text-foreground md:text-sub-text")}>
            10%
          </span>{" "}
          fee from each month's yield distribution to sustain the platform.
        </p>
        <Link
          href="https://app.safe.global/home?safe=oeth:0x918dEf5d593F46735f74F9E2B280Fe51AF3A99ad"
          target="_blank"
        >
          <p className="w-full flex justify-center items-center gap-2 text-primary font-bold md:text-xl hover:cursor-pointer hover:text-error">
            View core team treasury <ArrowSquareOut weight="bold" size={24} />
          </p>
        </Link>
      </div>
      <div className="col-span-4 md:col-span-8 flex flex-col gap-4">
        {daysToNextDistribution !== undefined ? (
          <span className="text-xl text-sub-text font-semibold">
            Distributing{" "}
            {daysToNextDistribution === 0
              ? "in less than 1 day"
              : `in ${daysToNextDistribution} day${daysToNextDistribution === 1 ? "" : "s"}`}
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

export const FormattedYield = ({ yieldString }: { yieldString: string }) => {
  if (yieldString) if (yieldString.includes("<")) return yieldString;
  if (yieldString) if (yieldString.includes(",")) return yieldString;

  const [whole, decimal] = Number(yieldString).toFixed(4).split(".");
  const wholeWithCommas = addCommasToInt(whole);
  return (
    <>
      {wholeWithCommas}.<span className="font-normal">{decimal}</span>
    </>
  );
};
