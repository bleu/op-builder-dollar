import { obusdAbi } from "@/lib/abis/obusd-abi";
import { OBUSD_ADDRESS } from "@/utils/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { type Address, encodeFunctionData } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { optimism } from "wagmi/chains";
import { useExecuteTransaction } from "./use-execute-transaction";

export function useBurn({
  amount,
  onSuccess,
}: {
  amount: bigint | undefined;
  onSuccess?: () => void;
}) {
  const { address: signer, chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient({ chainId: chainId ?? optimism.id });
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
      loadingMessage: "Burning obUSD...",
    };

    return [burnTx];
  }, [signer, publicClient, walletClient, amount]);

  return useExecuteTransaction({
    buildTxFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userBalances", signer] });
      if (onSuccess) onSuccess();
    },
  });
}
