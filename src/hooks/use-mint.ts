import { obusdAbi } from "@/lib/abis/obusd-abi";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { type Address, encodeFunctionData, erc20Abi } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { type BaseTx, useExecuteTransaction } from "./use-execute-transaction";

const obusdAddress = "0x70F9667013645EcC52f6ff98b0C60b37D7647e26";
const usdcAddress = "0xbe72E441BF55620febc26715db68d3494213D8Cb";

export function useMint({
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

    const currentAllowance = await publicClient.readContract({
      address: usdcAddress,
      abi: erc20Abi,
      functionName: "allowance",
      args: [signer, obusdAddress],
    });

    const approveTx = {
      to: usdcAddress as Address,
      data: encodeFunctionData({
        abi: erc20Abi,
        functionName: "approve",
        args: [obusdAddress, amount],
      }) as `0x${string}`,
      functionName: "approve",
    };

    const mintTx = {
      to: obusdAddress as Address,
      data: encodeFunctionData({
        abi: obusdAbi,
        functionName: "mint",
        args: [amount, signer],
      }) as `0x${string}`,
      functionName: "mint",
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
