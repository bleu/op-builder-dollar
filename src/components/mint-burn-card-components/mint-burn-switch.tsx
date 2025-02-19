import { cn } from "@/lib/utils";

export const MintBurnSwitch = ({
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
