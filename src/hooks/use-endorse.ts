import { buildersManagerAbi } from "@/lib/abis/builders-manager-abi";
import { BUILDERS_MANAGER_ADDRESS } from "@/utils/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { type Address, encodeFunctionData } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { optimism } from "wagmi/chains";
import { useCitizen } from "./use-citizen";
import { useExecuteTransaction } from "./use-execute-transaction";

export function useEndorse({
  projectUid,
}: {
  projectUid: `0x${string}`;
}) {
  const { address: signer, chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient({ chainId: chainId ?? optimism.id });
  const queryClient = useQueryClient();

  const { isCitizen, citizenAttestationUid } = useCitizen();

  const buildTxFn = useCallback(async () => {
    if (!signer || !walletClient || !publicClient || !projectUid) {
      throw new Error("Missing params");
    }

    if (!isCitizen) throw new Error("User is not citizen");

    const burnTx = {
      to: BUILDERS_MANAGER_ADDRESS as Address,
      data: encodeFunctionData({
        abi: buildersManagerAbi,
        functionName: "vouch",
        args: citizenAttestationUid
          ? [projectUid, citizenAttestationUid]
          : [projectUid],
      }) as `0x${string}`,
      loadingMessage: "Endorsing project...",
    };

    return [burnTx];
  }, [
    signer,
    publicClient,
    walletClient,
    projectUid,
    citizenAttestationUid,
    isCitizen,
  ]);

  return useExecuteTransaction({
    buildTxFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["buildersManager"] });
      queryClient.invalidateQueries({ queryKey: ["endorsements"] });
    },
  });
}
