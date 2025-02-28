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
  loadingMessage?: string;
}

export function useExecuteTransaction({
  buildTxFn,
  onSuccess,
  onError,
}: {
  buildTxFn: () => BaseTx[] | Promise<BaseTx[]>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const [loadingMessage, setLoadingMessage] = useState<string>(
    "Executing transaction...",
  );
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

      const newTxHashes = [] as `0x${string}`[];
      for (const tx of txs) {
        setLoadingMessage(tx?.loadingMessage ?? "Executing transaction...");
        const txHash = await walletClient.sendTransaction(tx);
        await publicClient.waitForTransactionReceipt({ hash: txHash });
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
