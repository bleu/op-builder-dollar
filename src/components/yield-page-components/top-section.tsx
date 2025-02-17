"use client";
import { addCommasToInt } from "@/lib/utils";
import LogoComponent from "../logo";
import { Card } from "../ui/card";
import { ProgressBar } from "../ui/progress-bar";

export const TopSection = ({ totalYield }: { totalYield: number }) => {
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
            <span className="font-extrabold italic text-4xl [&>span]:text-">
              <FormattedYield yieldNumber={totalYield} />
            </span>
          </div>
        </div>
      </Card>
      <Card className="h-40 col-span-4 bg-background flex flex-col justify-between">
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
      <div className="col-span-4 md:col-span-8 flex flex-col gap-4">
        <span className="text-xl text-sub-text font-semibold">
          Distributing in 20 days
        </span>
        <ProgressBar progress={25} />
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
