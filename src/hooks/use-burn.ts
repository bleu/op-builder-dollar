import { obusdAbi } from "@/lib/abis/obusd-abi";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { type Address, encodeFunctionData } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { useExecuteTransaction } from "./use-execute-transaction";

const obusdAddress = "0x70F9667013645EcC52f6ff98b0C60b37D7647e26";

export function useBurn({
  amount,
}: {
  amount: bigint | undefined;
}) {
  const { address: signer } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();

  const buildTxFn = useCallback(async () => {
    if (!signer || !walletClient || !publicClient || !amount) {
      throw new Error("Missing params");
    }

    const burnTx = {
      to: obusdAddress as Address,
      data: encodeFunctionData({
        abi: obusdAbi,
        functionName: "burn",
        args: [amount, signer],
      }) as `0x${string}`,
      functionName: "burn",
    };

    return [burnTx];
  }, [signer, publicClient, walletClient, amount]);

  return useExecuteTransaction({
    buildTxFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userBalances", signer] });
    },
  });
}
