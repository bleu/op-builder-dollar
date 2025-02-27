import { obusdAbi } from "@/lib/abis/obusd-abi";
import { OBUSD_ADDRESS } from "@/utils/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { type Address, encodeFunctionData } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { useExecuteTransaction } from "./use-execute-transaction";

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
      to: OBUSD_ADDRESS as Address,
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
