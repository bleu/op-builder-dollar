"use client";

import { Button } from "@/components/ui/button";
import { ChainIcon, ConnectKitButton } from "connectkit";
import Image from "next/image";
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
import { formatEther } from "viem";
import { useAccount, useBalance, useEnsName } from "wagmi";
import logo from "../../public/icons/logo.svg";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const ConnectWalletButton = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  const { data: ensName } = useEnsName({ address, chainId: 1 });

  return (
    <ConnectKitButton.Custom>
      {({ show, isConnected, isConnecting, truncatedAddress, chain }) => (
        <>
          {isConnected ? (
            <Popover>
              <PopoverTrigger>
                <div className="flex items-center justify-center gap-2 border border-card-border rounded-2xl pl-3">
                  <ChainIcon id={chain?.id} size={24} />
                  <span className="text-lg">{chain?.name}</span>
                  <div className="flex items-center gap-1.5 bg-background text-foreground rounded-2xl py-2 px-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary" />
                    <span>{ensName ?? truncatedAddress ?? ""}</span>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                side="top"
                sideOffset={20}
                className="w-[400px] h-[318px]"
              >
                <WalletAccountDetails
                  chainId={chain?.id}
                  chainName={chain?.name}
                  accountIdentifier={ensName ?? truncatedAddress ?? ""}
                  balance={
                    balance?.value
                      ? Number(formatEther(balance.value)).toFixed(4)
                      : "..."
                  }
                />
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

const WalletAccountDetails = ({
  chainId,
  chainName,
  accountIdentifier,
  balance,
}: {
  chainId: number | undefined;
  chainName: string | undefined;
  accountIdentifier: string;
  balance: string;
}) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="font-bold text-2xl">Account</h1>
      <div className="flex flex-col justify-between h-[180px]">
        {/* address | ENS name */}
        <DetailsRow
          icon={<UserCircle className="text-primary" size={24} />}
          leftText={accountIdentifier}
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
                <ChainIcon id={chainId} size={24} />
              </div>
              <span>{chainName}</span>
            </div>
          }
        />
        {/* ETH Balance */}
        <DetailsRow
          icon={<Wallet className="text-primary" size={24} />}
          leftText="ETH Balance"
          rightContent={<span>{balance}</span>}
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
