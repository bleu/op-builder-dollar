import { buildersManagerAbi } from "@/lib/abis/builders-manager-abi";
import { BUILDERS_MANAGER_ADDRESS } from "@/utils/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { type Address, encodeFunctionData } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { useExecuteTransaction } from "./use-execute-transaction";

export function useEndorse({
  projectUid,
}: {
  projectUid: `0x${string}`;
}) {
  const { address: signer } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const queryClient = useQueryClient();

  const buildTxFn = useCallback(async () => {
    if (!signer || !walletClient || !publicClient || !projectUid) {
      throw new Error("Missing params");
    }

    const burnTx = {
      to: BUILDERS_MANAGER_ADDRESS as Address,
      data: encodeFunctionData({
        abi: buildersManagerAbi,
        functionName: "vouch",
        args: [projectUid],
      }) as `0x${string}`,
      loadingMessage: "Endorsing project...",
    };

    return [burnTx];
  }, [signer, publicClient, walletClient, projectUid]);

  return useExecuteTransaction({
    buildTxFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["buildersManager"] });
    },
  });
}
