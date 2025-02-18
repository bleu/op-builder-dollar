import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Fire, Warning } from "phosphor-react";
import { Button } from "../ui/button";
import ObUsd from "../ui/obusd";
import Usdc from "../ui/usdc";

interface ModalProps {
  isOpen: boolean;
  trigger: () => void;
  amount: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export function ConfirmBurnModal({
  isOpen,
  trigger,
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
              <DialogTitle className="text-3xl font-bold">
                Burn review
              </DialogTitle>
              <div className="flex flex-col justify-center items-center text-base gap-6 overflow-hidden">
                <div className="flex flex-col justify-between w-full border-[1px] border-card-border rounded-2xl p-6 gap-6">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sub-text">You are about to burn</span>
                    <div className="flex gap-2 items-center">
                      <ObUsd size={24} />
                      <span className="font-bold text-foreground text-lg">
                        {amount}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sub-text">You will receive</span>
                    <div className="flex gap-2 items-center">
                      <Usdc size={24} />
                      <span className="font-bold text-foreground text-lg">
                        {amount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Warning className="text-caution mb-2" size={48} />
                  <p className="font-normal text-caution text-center w-full">
                    Burning $obUSD will reduce crucial funding for Optimism’s
                    grant council approved projects.
                  </p>
                </div>
              </div>
            </DialogHeader>
          </div>
          {children && <div className="flex-1">{children}</div>}
          <div className="flex flex-col w-full justify-center gap-[10px]">
            <Button
              className="w-full h-[56px] bg-primary hover:bg-error rounded-2xl flex justify-center items-center gap-2 disabled:bg-sub-text-2 text-2xl font-medium"
              onClick={() => {
                onClose();
                trigger();
              }}
            >
              <Fire className="min-w-6 min-h-6" />
              <span>PROCEED WITH BURN</span>
            </Button>
            <Button
              className="w-full bg-primary/10 text-primary hover:text-primary-foreground disabled:opacity-50 rounded-xl text-2xl font-medium shadow-lg py-7"
              onClick={() => onClose()}
            >
              CANCEL
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
