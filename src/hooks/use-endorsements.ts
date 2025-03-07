import { buildersManagerAbi } from "@/lib/abis/builders-manager-abi";
import type { EndorserType } from "@/lib/types";
import { BUILDERS_MANAGER_ADDRESS } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { Address } from "viem";
import { useAccount, usePublicClient } from "wagmi";
import { optimism } from "wagmi/chains";
import { useMultiReadEns } from "./use-multi-read-ens";

export function useEndorsements(
  ids: `0x${string}`[],
): Map<string, EndorserType[]> {
  const { address, chainId } = useAccount();
  const publicClient = usePublicClient({ chainId: chainId ?? optimism.id });

  const { data: endorsementsResult } = useQuery({
    queryKey: ["endorsements"],
    queryFn: async () => {
      if (!address) throw new Error("missing address");
      if (!publicClient) throw new Error("missing publicClient");

      const result = (await publicClient.multicall({
        contracts: ids.map((id) => ({
          address: BUILDERS_MANAGER_ADDRESS,
          abi: buildersManagerAbi,
          functionName: "projectToVouchers",
          args: [id],
        })),
      })) as (
        | {
            status: "failure";
          }
        | {
            status: "success";
            result: Address[];
          }
      )[];

      return result;
    },
  });

  const endorsersAddresses: Address[] = endorsementsResult
    ? endorsementsResult
        .filter(
          (item): item is { status: "success"; result: Address[] } =>
            item.status === "success",
        )
        .flatMap((item) => item.result)
    : [];

  const { data: ensNames } = useMultiReadEns(endorsersAddresses);

  const endorsements = useMemo(() => {
    if (endorsementsResult && endorsementsResult.length === ids.length) {
      const endorsementsMap = new Map<string, EndorserType[]>();

      for (const [idx, id] of ids.entries()) {
        if (endorsementsResult[idx].status === "success")
          endorsementsMap.set(
            id,
            endorsementsResult[idx].result.map((address) => ({
              address,
              ensName: ensNames?.get(address),
            })),
          );
      }

      return endorsementsMap;
    }

    return new Map<string, EndorserType[]>();
  }, [endorsementsResult, ensNames, ids]);

  return endorsements;
}
