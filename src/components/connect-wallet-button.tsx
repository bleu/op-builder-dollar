"use client";

import { Button } from "@/components/ui/button";
import { ConnectKitButton } from "connectkit";
import {
  ArrowSquareOut,
  ChartLineUp,
  Copy,
  Graph,
  SignOut,
  UserCircle,
  Wallet,
} from "phosphor-react";
import type { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const ConnectWalletButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ show, isConnected, isConnecting }) => (
        <>
          {isConnected ? (
            <Popover>
              <PopoverTrigger>
                <div className="flex items-center justify-center gap-2 border border-card-border rounded-2xl pl-3">
                  <div className="w-6 h-6 rounded-full bg-primary " />
                  <span className="text-lg">OP Mainnet</span>
                  <div className="flex items-center gap-1.5 bg-background text-foreground rounded-2xl py-2 px-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary" />
                    <span>Muraro.eth</span>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                side="top"
                sideOffset={20}
                className="w-[400px] h-[318px]"
              >
                <WalletAccountDetails />
              </PopoverContent>
            </Popover>
          ) : (
            <Button
              onClick={isConnecting ? () => {} : show}
              className="h-6 rounded-2xl"
            >
              {isConnecting ? "Loading..." : "Sign in"}
            </Button>
          )}
        </>
      )}
    </ConnectKitButton.Custom>
  );
};

const WalletAccountDetails = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="font-bold text-2xl">Account</h1>
      <div className="flex flex-col justify-between h-[180px]">
        {/* address | ENS name */}
        <DetailsRow
          icon={<UserCircle className="text-primary" size={24} />}
          leftText="obUSD.eth"
          rightContent={
            <div className="flex gap-2">
              <div className="w-7 h-7 flex justify-center items-center rounded-md hover:bg-card-border hover:cursor-pointer">
                <Copy className="text-sub-text-2" size={24} />
              </div>
              <div className="w-7 h-7 flex justify-center items-center rounded-md hover:bg-card-border hover:cursor-pointer">
                <ArrowSquareOut className="text-sub-text-2" size={24} />
              </div>
            </div>
          }
        />
        {/* Network */}
        <DetailsRow
          icon={<Graph className="text-primary" size={24} />}
          leftText="Network"
          rightContent={
            <div className="flex">
              <div className="w-6 h-6 mr-2">
                {<div className="w-5 h-5 rounded-full bg-red-400" />}
              </div>
              <span>OP Mainnet</span>
            </div>
          }
        />
        {/* ETH Balance */}
        <DetailsRow
          icon={<Wallet className="text-primary" size={24} />}
          leftText="ETH Balance"
          rightContent={<span>3.65</span>}
        />
        {/* obUSD */}
        <DetailsRow
          icon={<ChartLineUp className="text-primary" size={24} />}
          leftText="Generating obUSD"
          rightContent={
            <span className="text-sub-text-2">
              1,604.0<span>/Yearly</span>
            </span>
          }
        />
      </div>
      <Button className="flex justify-center items-center rounded-2xl font-bold text-xl w-full">
        <SignOut weight="bold" className="min-w-6 min-h-6" />
        Disconnect
      </Button>
    </div>
  );
};

const DetailsRow = ({
  icon,
  leftText,
  rightContent,
}: { icon: ReactNode; leftText: string; rightContent: ReactNode }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center">
        <div className="flex items-center justify-center w-6 h-6 mr-2">
          {icon}
        </div>
        <span className="text-xl text-sub-text">{leftText}</span>
      </div>
      {rightContent}
    </div>
  );
};
