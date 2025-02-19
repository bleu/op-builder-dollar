"use client";

import { getReadableError } from "@/utils/get-readable-error";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import type { Address } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";

export interface BaseTx {
  to: Address;
  value?: bigint;
  data: `0x${string}`;
  functionName: string;
}

type TxLoadingMessage =
  | "Approving USDC..."
  | "Approving obUSD..."
  | "Minting obUSD..."
  | "Burning obUSD..."
  | "Successful mint!"
  | "Successful burn!";

export function useExecuteTransaction({
  buildTxFn,
  onSuccess,
  onError,
}: {
  buildTxFn: () => BaseTx[] | Promise<BaseTx[]>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const [loadingMessage, setLoadingMessage] =
    useState<TxLoadingMessage>("Approving USDC...");
  const { address: signer } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!signer) throw new Error("Missing signer");
      if (!walletClient) throw new Error("Missing wallet client");
      if (!publicClient) throw new Error("Missing public client");

      const txs = await buildTxFn();

      if (txs.length < 1) throw new Error("No transaction to call");

      const isMint = txs[txs.length - 1].functionName === "mint";

      const newTxHashes = [] as `0x${string}`[];
      for (const tx of txs) {
        setLoadingMessage(
          tx.functionName === "approve"
            ? isMint
              ? "Approving USDC..."
              : "Approving obUSD..."
            : isMint
              ? "Minting obUSD..."
              : "Burning obUSD...",
        );
        const txHash = await walletClient.sendTransaction(tx);
        await publicClient.waitForTransactionReceipt({ hash: txHash });
        if (Object.values(["mint", "burn"]).includes(tx.functionName))
          setLoadingMessage(isMint ? "Successful mint!" : "Successful burn!");
        newTxHashes.push(txHash);
      }
      return newTxHashes;
    },
    onSuccess: () => {
      if (onSuccess) onSuccess();
    },
    onError: (error: Error) => {
      if (onError) onError(error);
    },
  });

  const trigger = () => {
    if (signer && walletClient) {
      mutation.mutate();
    }
  };

  return {
    txHashes: mutation?.data,
    trigger,
    isLoading: mutation.isPending,
    loadingMessage: mutation?.isPending ? loadingMessage : "",
    error: mutation?.error ? getReadableError(mutation?.error) : undefined,
    reset: mutation?.reset,
  };
}
