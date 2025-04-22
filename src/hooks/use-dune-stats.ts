"use client";
import { addCommasToInt } from "@/lib/utils";
import { formatTokenBalance } from "@/utils/formatting";
import { useQuery } from "@tanstack/react-query";
import { useDynamicYield } from "./use-dynamic-yield";
import { useReadObusd } from "./use-read-obusd";

interface DuneStats {
  transfers_count: number;
  total_yield_generated: string;
  unique_recipients: number;
  unique_token_holders: number;
  yield_distribution_count: number;
}

export const useDuneStats = () => {
  const { obusdDecimals } = useReadObusd();
  const { dynamicYield } = useDynamicYield();

  return useQuery({
    queryKey: ["duneStats"],
    queryFn: async () => {
      if (!obusdDecimals || !dynamicYield)
        throw new Error("missing information");

      const stats = (await (
        await fetch("/api/dune-stats")
      ).json()) as DuneStats;

      const totalYieldGeneratedOvertime = formatTokenBalance(
        BigInt(stats.total_yield_generated) + dynamicYield,
        obusdDecimals,
        4,
      );

      return {
        totalYieldGeneratedOvertime,
        totalObusdTransactions: addCommasToInt(stats.transfers_count),
        totalTeamsFunded: addCommasToInt(stats.unique_recipients),
        totalUsers: addCommasToInt(stats.unique_token_holders),
        round: addCommasToInt(stats.yield_distribution_count + 1),
      };
    },
  });
};
