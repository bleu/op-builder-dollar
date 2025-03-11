"use client";
import { addCommasToInt } from "@/lib/utils";
import { formatTokenBalance } from "@/utils/formatting";
import { useQuery } from "@tanstack/react-query";
import { useReadObusd } from "./use-read-obusd";

interface DuneStats {
  transfers_count: number;
  total_yield_generated: string;
  unique_recipients: number;
  unique_token_holders: number;
}

export const useDuneStats = () => {
  const { usdcDecimals } = useReadObusd();

  return useQuery({
    queryKey: ["duneStats"],
    queryFn: async () => {
      if (!usdcDecimals) throw new Error("missing decimals information");

      const stats = (await (
        await fetch("/api/dune-stats")
      ).json()) as DuneStats;

      const totalYieldGeneratedOvertime = formatTokenBalance(
        BigInt(stats.total_yield_generated),
        usdcDecimals,
      );

      return {
        totalYieldGeneratedOvertime,
        totalObusdTransactions: addCommasToInt(stats.transfers_count),
        totalTeamsFunded: addCommasToInt(stats.unique_recipients),
        totalUsers: addCommasToInt(stats.unique_token_holders),
      };
    },
  });
};
