"use client";

import MintBurn from "@/components/MintBurn";
import ObUsd from "@/components/ui/obusd";

export default function YieldPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-center italic font-bold text-2xl mt-5">
        OPTIMISTIC BUILDER DOLLAR
      </h1>
      <h2 className="text-center text-sub-text italic mb-4">
        Mint obUSD to generate funds for builder grantees of Optimism
      </h2>
      <MintBurn />
      <div className="h-16" />
      <div className="w-[636px] h-[89px] flex justify-between">
        <div className="w-[306px] h-[89px] bg-content rounded-4xl px-8 py-4">
          <span className="font-normal text-sub-text">Total obUSD minted</span>
          <div className="flex w-fit justify-center items-center gap-2">
            <ObUsd size={24} />
            <span className="text-2xl font-bold">0.0</span>
          </div>
        </div>
        <div className="flex flex-col w-[306px] h-[89px] bg-content rounded-4xl px-8 py-4">
          <span className="font-normal text-sub-text whitespace-nowrap">
            Total superchain builders funded
          </span>
          <span className="text-2xl font-bold">100</span>
        </div>
      </div>
      <div className="h-[58px]" />
      <span>Scroll to explore</span>
    </div>
  );
}
