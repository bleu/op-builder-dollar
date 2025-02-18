import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import {
  ArrowRight,
  ArrowSquareOut,
  CheckCircle,
  Warning,
} from "phosphor-react";
import { Button } from "../ui/button";
import ObUsd from "../ui/obusd";
import Spinner from "../ui/spinner";
import Usdc from "../ui/usdc";

interface ModalProps {
  isOpen: boolean;
  title: string;
  trigger: () => void;
  reset: () => void;
  txHash: string | undefined;
  loadingMessage: string | undefined;
  error: string | undefined;
  amount: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const buttonClassName =
  "w-full bg-primary/10 text-primary hover:text-content disabled:opacity-50 rounded-xl text-2xl font-medium shadow-lg py-7";

export function LoadingTxModal({
  isOpen,
  title,
  trigger,
  reset,
  txHash,
  loadingMessage,
  error,
  amount,
  onClose,
  children,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex top-[400px] flex-col gap-4 flex-1 max-w-[600px] bg-content border-none rounded-3xl p-8">
        <div className="flex flex-col gap-8">
          <div>
            <DialogHeader className="gap-4">
              <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
              <div className="flex flex-col justify-center items-center text-base font-medium gap-6 overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  {txHash && (
                    <>
                      <CheckCircle className="text-success mb-2" size={48} />
                      <span className="font-normal">Mint success!</span>
                    </>
                  )}
                  {loadingMessage && (
                    <>
                      <Spinner className="text-primary mb-2" />
                      <span className="font-normal">{loadingMessage}</span>
                    </>
                  )}
                  {error && (
                    <>
                      <Warning className="text-error mb-2" size={48} />
                      <p className="font-normal text-error w-fit">{error}</p>
                    </>
                  )}
                </div>

                <div className="flex justify-between w-full border-[1px] border-card-border rounded-2xl p-6">
                  <div className="flex justify-center items-center w-52 gap-2">
                    <Usdc size={24} />
                    <span className="font-bold text-foreground text-lg">
                      {amount}
                    </span>
                    <span className="font-normal text-subtext text-lg">
                      USDC
                    </span>
                  </div>
                  <ArrowRight size={24} />
                  <div className="flex justify-center items-center w-52 gap-2">
                    <ObUsd size={24} />
                    <span className="font-bold text-foreground text-lg">
                      {amount}
                    </span>
                    <span className="font-normal text-subtext text-lg">
                      obUSD
                    </span>
                  </div>
                </div>
                {txHash && (
                  <Link
                    target="_blank"
                    href={`https://etherscan.io/tx/${txHash}`}
                  >
                    <p className="w-full flex justify-center items-center gap-2 text-primary font-semibold text-lg md:text-xl hover:cursor-pointer hover:text-error">
                      View on expolorer!
                      <ArrowSquareOut weight="bold" size={24} />
                    </p>
                  </Link>
                )}
              </div>
            </DialogHeader>
          </div>
          {children && <div className="flex-1">{children}</div>}
          <DialogFooter className="sm:justify-center max-h-20">
            {txHash && (
              <Button className={buttonClassName} onClick={() => onClose()}>
                CLOSE
              </Button>
            )}
            {loadingMessage && (
              <Button disabled className={buttonClassName}>
                LOADING...
              </Button>
            )}
            {error && (
              <Button
                className={buttonClassName}
                onClick={() => {
                  reset();
                  trigger();
                }}
              >
                TRY AGAIN
              </Button>
            )}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
