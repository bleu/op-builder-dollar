import { ArrowDown, Fire } from "phosphor-react";
import { Button } from "./ui/button";

export default function MintBurn() {
  return (
    <div className="w-[416px] h-[364px] flex flex-col bg-content rounded-4xl border-[1px] border-card-border p-4">
      <div className="flex gap-2 mb-4">
        <span className="font-bold">Mint</span>
        <span className="font-normal text-sub-text">Burn</span>
      </div>
      <div className="flex flex-col items-center mb-6">
        <div className="w-[384px] h-[104px] rounded-3xl border-[1px] border-card-border p-3 mb-2">
          <span className="text-sm text-sub-text">You burn</span>
          <div className="flex justify-between items-center">
            <span className="text-3xl">5000</span>
            <span>Token</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-sub-text font-medium">~$0.00</span>
            <span className="text-xs text-sub-text font-medium">
              Balance: 50,000.00 obUSD
            </span>
          </div>
        </div>
        <div className="w-[384px] h-[104px] rounded-3xl border-[1px] border-card-border p-3">
          <span className="text-sm text-sub-text">You receive</span>
          <div className="flex justify-between items-center">
            <span className="text-3xl">5000</span>
            <span>Token</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-sub-text font-medium">~$0.00</span>
            <span className="text-xs text-sub-text font-medium">
              Balance: 0.00 DAI
            </span>
          </div>
        </div>
        <div className="w-7 h-7 bg-content flex justify-center items-center rounded-md border-[1px] border-card-border mt-[-122px] mb-[96px]">
          <ArrowDown className="text-sub-text" size={20} />
        </div>
      </div>
      <Button className="w-[384px] h-[56px] bg-primary hover:bg-error rounded-2xl flex justify-center items-center gap-2 text-2xl font-bold">
        <Fire className="min-w-6 min-h-6" />
        <span>MINT</span>
      </Button>
    </div>
  );
}
