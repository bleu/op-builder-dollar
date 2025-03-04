import { buildersManagerAbi } from "@/lib/abis/builders-manager-abi";
import { BUILDERS_MANAGER_ADDRESS } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { Address } from "viem";
import { useAccount, usePublicClient } from "wagmi";

export function useEndorsements(ids: `0x${string}`[]): Map<string, Address[]> {
  const { address } = useAccount();
  const publicClient = usePublicClient();

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

  const endorsements = useMemo(() => {
    if (endorsementsResult) {
      const endorsementsMap = new Map<string, Address[]>();

      for (const [idx, id] of ids.entries()) {
        if (endorsementsResult[idx].status === "success")
          endorsementsMap.set(id, endorsementsResult[idx].result);
      }

      return endorsementsMap;
    }

    return new Map<string, Address[]>();
  }, [endorsementsResult, ids]);

  return endorsements;
}
