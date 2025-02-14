import texture from "@/../public/images/texture.png";
import MintBurn from "@/components/MintBurn";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/useThemeStore";
import ObUsd from "../ui/obusd";

export default function MintSection() {
  const { theme } = useThemeStore();

  const lightBorderClass = cn({
    "border-[1px] border-card-border": theme === "light",
  });

  return (
    <div
      className="flex flex-col w-full justify-center items-center bg-cover pt-16 md:pt-32 px-4 md:px-0 rounded-b-[30px] md:rounded-b-[60px] border-b-[1px] border-card-border"
      style={{ backgroundImage: `url(${texture.src})` }}
    >
      <h1 className="text-center italic font-bold text-xl md:text-2xl mt-5 px-4">
        OPTIMISTIC BUILDER DOLLAR
      </h1>
      <h2 className="text-center text-sub-text italic mb-4 px-4 text-sm md:text-base">
        Mint obUSD to generate funds for builder grantees of Optimism
      </h2>
      <MintBurn />
      <div className="h-8 md:h-16" />
      <div className="w-full md:w-[636px] flex flex-col md:flex-row gap-4 md:gap-6">
        <div
          className={cn(
            "w-full md:w-[306px] h-[89px] bg-content rounded-2xl md:rounded-4xl px-4 md:px-8 py-4 shadow-lg",
            lightBorderClass,
          )}
        >
          <span className="font-normal text-sub-text">Total obUSD minted</span>
          <div className="flex w-fit justify-center items-center gap-2">
            <ObUsd size={24} />
            <span className="text-2xl font-bold">0.0</span>
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
          <span className="text-2xl font-bold">100</span>
        </div>
      </div>
      <div className="h-8 md:h-[58px]" />
    </div>
  );
}
