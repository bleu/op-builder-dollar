import { cn } from "@/lib/utils";
import { ArrowDown, Butterfly, Fire } from "phosphor-react";
import { useState } from "react";
import { TokenAmountContainer } from "./ui/TokenAmountContainer";
import { Button } from "./ui/button";

export default function MintBurn() {
  const [isMint, setIsMint] = useState<boolean>(true);

  return (
    <div className="w-full max-w-[416px] h-[364px] flex flex-col bg-content rounded-4xl border-[1px] border-card-border p-4 shadow-lg">
      <MintBurnButtons isMint={isMint} setIsMint={setIsMint} />
      <div className="flex flex-col items-center mb-6">
        <TokenAmountContainer
          token={isMint ? "USDC" : "obUSD"}
          balance="50,000.00"
          className="mb-2"
        />
        <TokenAmountContainer
          token={isMint ? "obUSD" : "USDC"}
          balance="0.00"
        />
        <div className="w-7 h-7 bg-content flex justify-center items-center rounded-md border-[1px] border-card-border mt-[-122px] mb-[96px]">
          <ArrowDown className="text-sub-text" size={20} />
        </div>
      </div>
      <Button className="w-full max-w-[384px] h-[56px] bg-primary hover:bg-error rounded-2xl flex justify-center items-center gap-2 text-2xl font-bold">
        {isMint ? (
          <Butterfly className="min-w-6 min-h-6" />
        ) : (
          <Fire className="min-w-6 min-h-6" />
        )}
        <span>{isMint ? "MINT" : "BURN"}</span>
      </Button>
    </div>
  );
}

const MintBurnButtons = ({
  isMint,
  setIsMint,
}: { isMint: boolean; setIsMint: (newMint: boolean) => void }) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => {
          setIsMint(true);
        }}
        type="button"
        className={cn("font-normal text-sub-text hover:cursor-pointer", {
          "font-bold text-foreground": isMint,
        })}
      >
        Mint
      </button>
      <button
        onClick={() => {
          setIsMint(false);
        }}
        type="button"
        className={cn("font-normal text-sub-text hover:cursor-pointer", {
          "font-bold text-foreground": !isMint,
        })}
      >
        Burn
      </button>
    </div>
  );
};
