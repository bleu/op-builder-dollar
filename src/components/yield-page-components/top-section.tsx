import Image from "next/image";
import LogoComponent from "../logo";
import { Card } from "../ui/card";
import { ProgressBar } from "../ui/progress-bar";

export const TopSection = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-4">
      <div
        className="p-[1px] col-span-4 rounded-[30px] overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, #FF0420, #7D1AFF)",
        }}
      >
        <Card className="w-full border-none relative rounded-[29px] h-40">
          <div className="bg-background absolute inset-0 rounded-[29px] size-full" />
          <Image
            src="/total_yield_bg.png"
            alt="bg"
            width={1000}
            height={1000}
            className="absolute inset-0 object-cover rounded-[29px] size-full opacity-40"
          />
          <div className="z-10 justify-center gap-2 items-center h-full flex flex-col">
            <h5 className="text-sub-text text-2xl">
              Total yield to distribute
            </h5>
            <div className="flex flex-row items-center gap-2">
              <div className="size-6 bg-primary rounded-full flex items-center justify-center">
                <LogoComponent className="text-white" width={18} height={18} />
              </div>
              <span className="font-extrabold italic text-4xl [&>span]:text-3xl">
                <FormattedYield yieldNumber={400000.45} />
              </span>
            </div>
          </div>
        </Card>
      </div>
      <Card className="h-40">
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

  const wholeWithCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      {wholeWithCommas}.<span className="font-normal">{decimal}</span>
    </>
  );
};
