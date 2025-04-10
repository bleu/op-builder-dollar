import { useBurn } from "@/hooks/use-burn";
import { useMint } from "@/hooks/use-mint";
import { useReadObusd } from "@/hooks/use-read-obusd";
import { tokenAmountStringToBigint } from "@/utils/formatting";
import { ArrowDown, ArrowRight } from "phosphor-react";
import { useState } from "react";
import { ConfirmBurnModal } from "./mint-burn-card-components/confirm-burn-modal";
import { MintBurnButton } from "./mint-burn-card-components/mint-burn-button";
import { MintBurnSwitch } from "./mint-burn-card-components/mint-burn-switch";
import { TokenAmountContainer } from "./mint-burn-card-components/token-amount-container";
import { LoadingTxModal } from "./mint-page-components/loading-tx-modal";
import ObUsd from "./ui/obusd";
import Usdc from "./ui/usdc";

export default function MintBurn() {
  const [isMint, setIsMint] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [confirmBurnOpen, setConfirmBurnOpen] = useState<boolean>(false);

  const {
    usdcBalance,
    obusdBalance,
    usdcFormattedBalance: usdcBal,
    obusdFormattedBalance: obusdBal,
    obusdDecimals,
  } = useReadObusd();

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
    isMint && ((amount && usdcBalance && amount > usdcBalance) || !usdcBalance),
  );
  const isInsufficientObusd = Boolean(
    !isMint &&
      ((amount && obusdBalance && amount > obusdBalance) || !obusdBalance),
  );

  const handleStartMintBurn = () => {
    setDialogOpen(true);
    trigger();
  };

  const handleMintBurnButton = () => {
    if (isMint) {
      handleStartMintBurn();
      return;
    }
    setConfirmBurnOpen(true);
  };

  const TxComponent = () => (
    <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-0 sm:justify-between items-center w-full border-[1px] border-card-border rounded-2xl p-6">
      <div className="flex justify-center items-center w-52 gap-2">
        {isMint ? <Usdc size={24} /> : <ObUsd size={24} />}
        <span className="font-bold text-foreground text-lg">{value}</span>
        <span className="font-normal text-subtext text-lg">
          {isMint ? "USDC" : "obUSD"}
        </span>
      </div>
      <ArrowRight size={24} />
      <div className="flex justify-center items-center w-52 gap-2">
        {isMint ? <ObUsd size={24} /> : <Usdc size={24} />}
        <span className="font-bold text-foreground text-lg">{value}</span>
        <span className="font-normal text-subtext text-lg">
          {isMint ? "obUSD" : "USDC"}
        </span>
      </div>
    </div>
  );

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
        <div
          className="w-7 h-7 bg-content flex justify-center items-center rounded-md border-[2px] border-card-border text-sub-text mt-[-122px] mb-[96px] hover:border-primary hover:text-foreground hover:cursor-pointer"
          onClick={
            isMint
              ? () => {
                  setIsMint(false);
                }
              : () => {
                  setIsMint(true);
                }
          }
        >
          <ArrowDown size={20} />
        </div>
      </div>
      <MintBurnButton
        isMint={isMint}
        amount={amount}
        isLoading={isLoading}
        trigger={handleMintBurnButton}
        isInsufficientBalance={isInsufficientObusd || isInsufficientUsdc}
      />
      <LoadingTxModal
        isOpen={dialogOpen}
        title={isMint ? "Mint status" : "Burn status"}
        successMessage={isMint ? "Mint success!" : "Burn success!"}
        txComponent={<TxComponent />}
        trigger={trigger}
        reset={reset}
        txHash={
          txHashes && txHashes.length > 0
            ? txHashes[txHashes.length - 1]
            : undefined
        }
        loadingMessage={loadingMessage}
        onClose={() => {
          setDialogOpen(false);
          setValue("");
        }}
        error={error}
      />
      <ConfirmBurnModal
        isOpen={confirmBurnOpen}
        trigger={handleStartMintBurn}
        onClose={() => setConfirmBurnOpen(false)}
        amount={value}
      />
    </div>
  );
}
