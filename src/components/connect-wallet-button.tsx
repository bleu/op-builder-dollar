"use client";

import { Button } from "@/components/ui/button";
import { ConnectKitButton } from "connectkit";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const ConnectWalletButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ show, isConnected, address }) => {
        return isConnected ? (
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center justify-center gap-2 border border-card-border rounded-2xl pl-3">
                <div className="w-6 h-6 rounded-full bg-primary " />
                <span>OP mainet</span>
                <div className="flex items-center gap-1.5 bg-background text-foreground rounded-2xl py-2 px-1.5">
                  <div className="w-6 h-6 rounded-full bg-primary" />
                  <span>Muraro.eth</span>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div>popovercontent</div>
            </PopoverContent>
          </Popover>
        ) : (
          <Button onClick={show} className="h-6 rounded-2xl">
            Sign in
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
