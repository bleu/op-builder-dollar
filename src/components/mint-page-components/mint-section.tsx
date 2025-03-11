import textureRed from "@/../public/images/texture-red.png";
import MintBurn from "@/components/mint-burn";
import { useDuneStats } from "@/hooks/use-dune-stats";
import { useReadObusd } from "@/hooks/use-read-obusd";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/use-theme-store";
import LoadingDots from "../ui/loading-dots";
import ObUsd from "../ui/obusd";

export default function MintSection() {
  const { obusdTotalSupplyFormatted } = useReadObusd();
  const { data } = useDuneStats();
  const { totalTeamsFunded } = data ?? {};
  const { theme } = useThemeStore();

  const lightBorderClass = cn({
    "border-[1px] border-card-border": theme === "light",
  });

  return (
    <div
      id="mint-section"
      className="flex flex-col w-full justify-center items-center bg-cover pt-20 md:pt-32 px-4 md:px-0 rounded-b-[30px] md:rounded-b-[60px] border-b-[1px] border-card-border"
      style={{
        backgroundImage: `url(${textureRed.src})`,
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-center italic font-bold text-xl md:text-2xl mt-4 px-4">
        OPTIMISTIC BUILDER DOLLAR
      </h1>
      <h2 className="text-center text-sub-text italic mb-4 px-4 text-sm md:text-base">
        Mint obUSD to generate funds for builder grantees of Optimism
      </h2>
      <MintBurn />
      <div className="h-4 md:h-16" />
      <div className="w-full md:w-[636px] flex flex-col md:flex-row gap-2 md:gap-6">
        <div
          className={cn(
            "w-full md:w-[306px] h-[89px] bg-content rounded-2xl md:rounded-4xl px-4 md:px-8 py-4 shadow-lg",
            lightBorderClass,
          )}
        >
          <span className="font-normal text-sub-text">Total obUSD minted</span>
          <div className="flex w-fit justify-center items-center gap-2">
            <ObUsd size={24} />
            <span className="text-2xl font-bold">
              {obusdTotalSupplyFormatted}
            </span>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col w-full md:w-[306px] h-[89px] bg-content rounded-2xl md:rounded-4xl px-4 md:px-8 py-4 shadow-lg",
            lightBorderClass,
          )}
        >
          <span className="font-normal text-sub-text whitespace-nowrap">
            Total superchain builders funded
          </span>
          <span className="text-2xl font-bold">
            {totalTeamsFunded ?? <LoadingDots />}
          </span>
        </div>
      </div>
      <div className="h-4 md:h-[58px]" />
    </div>
  );
}
