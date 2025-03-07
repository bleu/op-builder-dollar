import { obusdAbi } from "@/lib/abis/obusd-abi";
import { OBUSD_ADDRESS, USDC_ADDRESS } from "@/utils/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { type Address, encodeFunctionData, erc20Abi } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { optimism } from "wagmi/chains";
import { type BaseTx, useExecuteTransaction } from "./use-execute-transaction";

export function useMint({
  amount,
}: {
  amount: bigint | undefined;
}) {
  const { address: signer, chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient({ chainId: chainId ?? optimism.id });
  const queryClient = useQueryClient();

  const buildTxFn = useCallback(async () => {
    if (!signer || !walletClient || !publicClient || !amount) {
      throw new Error("Missing params");
    }

    const currentAllowance = await publicClient.readContract({
      address: USDC_ADDRESS,
      abi: erc20Abi,
      functionName: "allowance",
      args: [signer, OBUSD_ADDRESS],
    });

    const approveTx = {
      to: USDC_ADDRESS as Address,
      data: encodeFunctionData({
        abi: erc20Abi,
        functionName: "approve",
        args: [OBUSD_ADDRESS, amount],
      }) as `0x${string}`,
      loadingMessage: "Approving USDC...",
    };

    const mintTx = {
      to: OBUSD_ADDRESS as Address,
      data: encodeFunctionData({
        abi: obusdAbi,
        functionName: "mint",
        args: [amount, signer],
      }) as `0x${string}`,
      loadingMessage: "Minting obUSD...",
    };

    const txs: BaseTx[] =
      currentAllowance >= amount ? [mintTx] : [approveTx, mintTx];

    return txs;
  }, [signer, publicClient, walletClient, amount]);

  return useExecuteTransaction({
    buildTxFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userBalances", signer] });
    },
  });
}
