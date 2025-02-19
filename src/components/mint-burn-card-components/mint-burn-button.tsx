import { cn } from "@/lib/utils";
import { ConnectKitButton } from "connectkit";
import { Butterfly, Fire } from "phosphor-react";
import { useAccount, useSwitchChain } from "wagmi";
import { Button } from "../ui/button";

interface MintBurnButtonProps {
  isMint: boolean;
  amount: bigint | undefined;
  isLoading: boolean;
  trigger: () => void;
  isInsufficientUsdc: boolean;
  isInsufficientObusd: boolean;
}

export const MintBurnButton = ({
  isMint,
  amount,
  isLoading,
  trigger,
  isInsufficientUsdc,
  isInsufficientObusd,
}: MintBurnButtonProps) => {
  const { chainId, address } = useAccount();
  const { switchChain } = useSwitchChain();

  const buttonClassName = cn(
    "w-full max-w-[384px] h-[56px]",
    "bg-primary hover:bg-error rounded-2xl",
    "flex justify-center items-center gap-2",
    "disabled:bg-sub-text-2",
    "text-2xl font-medium",
  );

  // No wallet connected
  if (!address) {
    return (
      <ConnectKitButton.Custom>
        {({ show }) => (
          <Button onClick={show} className={buttonClassName}>
            SIGN IN
          </Button>
        )}
      </ConnectKitButton.Custom>
    );
  }

  // Temporary, for while only sepolia works
  if (chainId !== 11155111) {
    return (
      <Button
        onClick={() => switchChain({ chainId: 11155111 })}
        className={buttonClassName}
      >
        SWITCH TO SEPOLIA
      </Button>
    );
  }

  // No amount entered
  if (!amount) {
    return (
      <Button disabled className={buttonClassName}>
        ENTER AMOUNT
      </Button>
    );
  }

  if (isInsufficientObusd) {
    return (
      <Button disabled className={buttonClassName}>
        INSUFFICIENT OBUSD
      </Button>
    );
  }

  if (isInsufficientUsdc) {
    return (
      <Button disabled className={buttonClassName}>
        INSUFFICIENT USDC
      </Button>
    );
  }

  // Active state - Mint or Burn
  return (
    <Button onClick={trigger} disabled={isLoading} className={buttonClassName}>
      {isMint ? (
        <Butterfly className="min-w-6 min-h-6" />
      ) : (
        <Fire className="min-w-6 min-h-6" />
      )}
      <span>{isMint ? "MINT" : "BURN"}</span>
    </Button>
  );
};
