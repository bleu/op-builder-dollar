import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowSquareOut, CheckCircle, Warning } from "phosphor-react";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
import Spinner from "../ui/spinner";

interface ModalProps {
  isOpen: boolean;
  title: string;
  successMessage: string;
  txComponent?: ReactNode;
  trigger: () => void;
  reset: () => void;
  txHash: string | undefined;
  loadingMessage: string | undefined;
  error: string | undefined;
  onClose: () => void;
  children?: React.ReactNode;
}

const buttonClassName =
  "w-full bg-primary/10 text-primary hover:text-content disabled:opacity-50 rounded-xl text-2xl font-medium shadow-lg py-7";

export function LoadingTxModal({
  isOpen,
  title,
  successMessage,
  txComponent,
  trigger,
  reset,
  txHash,
  loadingMessage,
  error,
  onClose,
  children,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex max-w-[calc(100%-2rem)] top-[350px] md:top-[400px] flex-col gap-4 flex-1 sm:max-w-[600px] bg-content border-none rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-8">
          <div>
            <DialogHeader className="gap-4">
              <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
              <div className="flex flex-col justify-center items-center text-base font-medium gap-6 overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  {txHash && (
                    <>
                      <CheckCircle className="text-success mb-2" size={48} />
                      <span className="font-normal text-sub-text">
                        {successMessage}
                      </span>
                    </>
                  )}
                  {loadingMessage && (
                    <>
                      <Spinner className="text-primary mb-2" />
                      <span className="font-normal text-sub-text">
                        {loadingMessage}
                      </span>
                    </>
                  )}
                  {error && (
                    <>
                      <Warning className="text-error mb-2" size={48} />
                      <p className="font-normal text-error w-fit">{error}</p>
                    </>
                  )}
                </div>

                {txComponent}
                {txHash && (
                  <Link
                    target="_blank"
                    href={`https://etherscan.io/tx/${txHash}`}
                  >
                    <p className="w-full flex justify-center items-center gap-2 text-primary font-semibold text-lg md:text-xl hover:cursor-pointer hover:text-error">
                      View on explorer!
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
