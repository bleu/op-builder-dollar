"use client";

import { buildersManagerAbi } from "@/lib/abis/builders-manager-abi";
import { BUILDERS_MANAGER_ADDRESS } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { usePublicClient } from "wagmi";

const AVG_BLOCK_TIME = 2; // Optimism avg block time
const SECONDS_IN_30_DAYS = 60 * 60 * 24 * 30;
const BLOCKS_IN_30_DAYS = SECONDS_IN_30_DAYS / AVG_BLOCK_TIME;

export function useReadNewCohortProjects() {
  const publicClient = usePublicClient();

  const query = useQuery({
    queryKey: ["usdcTransferCountLastMonth"],
    queryFn: async () => {
      if (!publicClient) throw new Error("Missing public client");

      const toBlock = await publicClient.getBlockNumber();
      const fromBlock = toBlock - BigInt(BLOCKS_IN_30_DAYS);

      const filter = await publicClient.createContractEventFilter({
        address: BUILDERS_MANAGER_ADDRESS,
        abi: buildersManagerAbi,
        eventName: "ProjectReachedMinVouches",
        fromBlock,
        toBlock,
      });

      const newProjectsCount = (await publicClient.getFilterLogs({ filter }))
        .length;

      return newProjectsCount;
    },
  });

  return { newCohortProjects: query.data };
}
