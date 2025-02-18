import { useBurn } from "@/hooks/use-burn";
import { useMint } from "@/hooks/use-mint";
import { useTokenBalances } from "@/hooks/use-token-balances";
import { tokenAmountStringToBigint } from "@/utils/formatting";
import { ArrowDown } from "phosphor-react";
import { useState } from "react";
import { MintBurnButton } from "./mint-burn-card-components/mint-burn-button";
import { MintBurnSwitch } from "./mint-burn-card-components/mint-burn-switch";
import { TokenAmountContainer } from "./mint-burn-card-components/token-amount-container";
import { LoadingTxModal } from "./mint-page-components/loading-tx-modal";

export default function MintBurn() {
  const [isMint, setIsMint] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const {
    usdcBalance,
    obusdBalance,
    usdcFormattedBalance: usdcBal,
    obusdFormattedBalance: obusdBal,
    obusdDecimals,
  } = useTokenBalances();

  const amount =
    value && obusdDecimals
      ? tokenAmountStringToBigint(value, obusdDecimals)
      : undefined;

  const mintHookOutput = useMint({ amount });
  const burnHookOutput = useBurn({ amount });

  const { txHashes, trigger, isLoading, loadingMessage, error, reset } = isMint
    ? mintHookOutput
    : burnHookOutput;

  const isInsufficientUsdc = Boolean(
    isMint && amount && usdcBalance && amount > usdcBalance,
  );
  const isInsufficientObusd = Boolean(
    !isMint && amount && obusdBalance && amount > obusdBalance,
  );

  const handleMintBurnButton = () => {
    setDialogOpen(true);
    trigger();
  };

  return (
    <div className="w-full max-w-[416px] h-[364px] flex flex-col bg-content rounded-4xl border-[1px] border-card-border p-4 shadow-lg">
      <MintBurnSwitch isMint={isMint} setIsMint={setIsMint} />
      <div className="flex flex-col items-center mb-6">
        <TokenAmountContainer
          token={isMint ? "USDC" : "obUSD"}
          balance={isMint ? usdcBal : obusdBal}
          title={isMint ? "You send" : "You burn"}
          value={value}
          onValueChange={(newValue: string) => setValue(newValue)}
          className="mb-2"
        />
        <TokenAmountContainer
          token={isMint ? "obUSD" : "USDC"}
          balance={isMint ? obusdBal : usdcBal}
          title="You receive"
          value={value}
          onValueChange={(newValue: string) => setValue(newValue)}
        />
        <div className="w-7 h-7 bg-content flex justify-center items-center rounded-md border-[1px] border-card-border mt-[-122px] mb-[96px]">
          <ArrowDown className="text-sub-text" size={20} />
        </div>
      </div>
      <MintBurnButton
        isMint={isMint}
        amount={amount}
        isLoading={isLoading}
        trigger={handleMintBurnButton}
        isInsufficientObusd={isInsufficientObusd}
        isInsufficientUsdc={isInsufficientUsdc}
      />
      <LoadingTxModal
        isOpen={dialogOpen}
        isMint={isMint}
        trigger={trigger}
        reset={reset}
        txHash={
          txHashes && txHashes.length > 0
            ? txHashes[txHashes.length - 1]
            : undefined
        }
        loadingMessage={loadingMessage}
        onClose={() => setDialogOpen(false)}
        error={error}
        amount={value}
      />
    </div>
  );
}
