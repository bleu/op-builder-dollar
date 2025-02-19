import { TokenAmountInput } from "@/components/mint-burn-card-components/token-amount-input";
import ObUsd from "@/components/ui/obusd";
import Usdc from "@/components/ui/usdc";
import { useTokenBalances } from "@/hooks/use-token-balances";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { formatUnits } from "viem";

type TradeToken = "USDC" | "obUSD";

const tokenCardClass =
  "flex gap-2 p-1 bg-card-bg-2 border-[1px] border-card-border rounded-xl";

const tokenCardMap: Record<TradeToken, ReactNode> = {
  USDC: (
    <div className={tokenCardClass}>
      <Usdc size={24} />
      USDC
    </div>
  ),
  obUSD: (
    <div className={tokenCardClass}>
      <ObUsd size={24} />
      obUSD
    </div>
  ),
};

export const TokenAmountContainer = ({
  token,
  balance,
  title,
  value,
  onValueChange,
  className,
}: {
  token: TradeToken;
  balance: string;
  title: string;
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
}) => {
  const { obusdBalance, usdcBalance, obusdDecimals, usdcDecimals } =
    useTokenBalances();

  const handleClickOverBalance = () => {
    if (token === "USDC" && usdcBalance && usdcDecimals)
      onValueChange(formatUnits(usdcBalance, usdcDecimals));
    if (token === "obUSD" && obusdBalance && obusdDecimals)
      onValueChange(formatUnits(obusdBalance, obusdDecimals));
  };

  const fiatBalance = value ? `~ $${Number(value).toFixed(2)}` : "$0.00";

  return (
    <div
      className={cn(
        "flex flex-col justify-between w-full max-w-[384px] h-[104px] rounded-3xl border-[1px] border-card-border p-3",
        className,
      )}
    >
      <span className="text-sm text-sub-text">{title}</span>
      <div className="flex justify-between items-center">
        <TokenAmountInput value={value} onValueChange={onValueChange} />
        {tokenCardMap[token]}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-sub-text-2 font-medium hover:text-sub-text hover:cursor-pointer">
          {fiatBalance}
        </span>
        <span
          onClick={handleClickOverBalance}
          className="text-xs text-sub-text-2 font-medium hover:text-sub-text hover:cursor-pointer"
        >
          {`Balance: ${balance} ${token}`}
        </span>
      </div>
    </div>
  );
};
