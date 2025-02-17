"use client";

import { useMutation } from "@tanstack/react-query";
import type { Address } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";

export interface BaseTx {
  to: Address;
  value?: bigint;
  data: `0x${string}`;
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
        console.log("waiting for approval...");
        const txHash = await walletClient.sendTransaction(tx);
        console.log("waiting for receipt...");
        await publicClient.waitForTransactionReceipt({ hash: txHash });
        console.log("tx completed!");
        newTxHashes.push(txHash);
      }
      return newTxHashes;
    },
    onSuccess: () => {
      if (onSuccess) onSuccess();
      mutation.reset();
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
    trigger,
    isLoading: mutation.isPending,
  };
}
