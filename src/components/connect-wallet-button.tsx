"use client";

import { Button } from "@/components/ui/button";
import { ChainIcon, ConnectKitButton } from "connectkit";
import {
  ArrowSquareOut,
  ChartLineUp,
  Copy,
  Graph,
  SignOut,
  UserCircle,
  Wallet,
} from "phosphor-react";
import { type ReactNode, useState } from "react";
import { formatEther } from "viem";
import { useAccount, useBalance, useDisconnect, useEnsName } from "wagmi";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const isMobile = window.innerWidth <= 768;

export const ConnectWalletButton = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  const { data: ensName } = useEnsName({ address, chainId: 1 });
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    if (isMobile) return;
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setOpen(false);
  };

  return (
    <ConnectKitButton.Custom>
      {({ show, isConnected, isConnecting, truncatedAddress, chain }) => (
        <>
          {isConnected ? (
            <div className="relative">
              <Popover open={open} onOpenChange={setOpen}>
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <PopoverTrigger
                    onClick={(e) => {
                      !isMobile && e.preventDefault();
                    }}
                  >
                    <div className="flex items-center justify-center gap-2 border border-card-border rounded-2xl md:pl-3">
                      <div className="hidden md:flex items-center gap-1.5">
                        <ChainIcon id={chain?.id} size={24} />
                        <span className="text-lg">{chain?.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:bg-background text-foreground rounded-2xl py-2 px-1.5">
                        <div className="w-6 h-6 rounded-full bg-primary" />
                        <span>{ensName ?? truncatedAddress ?? ""}</span>
                      </div>
                    </div>
                  </PopoverTrigger>
                  {/* Invisible connector between trigger and content to keep the hover functionallity working */}
                  {open && (
                    <div className="absolute w-full h-6 bottom-0 translate-y-full" />
                  )}
                </div>
                <PopoverContent
                  side="top"
                  sideOffset={20}
                  className="w-[400px] md:w-[400px] md:h-[318px] mx-5"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
            </div>
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
  const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="font-bold text-2xl">Account</h1>
      <div className="flex flex-col justify-between h-[180px]">
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
        <DetailsRow
          icon={<Wallet className="text-primary" size={24} />}
          leftText="ETH Balance"
          rightContent={<span>{balance}</span>}
        />
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
      <Button
        className="flex justify-center items-center rounded-2xl font-normal md:font-bold text-xl w-full my-4"
        onClick={() => {
          disconnect();
        }}
      >
        <SignOut weight="bold" className="min-w-6 min-h-6" />
        Disconnect
      </Button>
      <Button className="md:hidden rounded-2xl font-normal text-xl w-full bg-primary/10 text-primary">
        Close Menu
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
