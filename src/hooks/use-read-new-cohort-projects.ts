"use client";
import { buildersManagerAbi } from "@/lib/abis/builders-manager-abi";
import { BUILDERS_MANAGER_ADDRESS } from "@/utils/constants";
import { formatDate, formatTimeLeft } from "@/utils/formatting";
import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";
import { usePublicClient } from "wagmi";

const AVG_BLOCK_TIME = 2; // Optimism avg block time
const SECONDS_IN_30_DAYS = 60 * 60 * 24 * 30;
const SECONDS_IN_10_MONTHS = 60 * 60 * 24 * 30 * 10;
const BLOCKS_IN_11_MONTHS =
  (SECONDS_IN_10_MONTHS + SECONDS_IN_30_DAYS) / AVG_BLOCK_TIME;

function getBlockTimestamp(currentBlock: bigint, block: bigint): number {
  const now = Math.floor(Date.now() / 1000);
  const blockDelta = currentBlock - block;
  const secondsDelta = Number(blockDelta) * AVG_BLOCK_TIME;
  return now - secondsDelta;
}

export function useReadNewCohortProjects() {
  const publicClient = usePublicClient();

  const query = useQuery({
    queryKey: ["usdcTransferCountLastMonth"],
    queryFn: async () => {
      if (!publicClient) throw new Error("Missing public client");

      const toBlock = await publicClient.getBlockNumber();
      const fromBlock = toBlock - BigInt(BLOCKS_IN_11_MONTHS);

      const rawEvents = await publicClient.getLogs({
        address: BUILDERS_MANAGER_ADDRESS,
        event: buildersManagerAbi.find(
          (item) =>
            item.type === "event" && item.name === "ProjectReachedMinVouches",
        ),
        fromBlock,
        toBlock,
      });

      const events = rawEvents.map((event) => {
        const eventTime = getBlockTimestamp(toBlock, event.blockNumber);
        const startDate = new Date(eventTime * 1000);
        const expirationDate = new Date(
          (eventTime + SECONDS_IN_10_MONTHS) * 1000,
        );

        const wasCreatedLastMonth =
          Date.now() / 1000 - eventTime < SECONDS_IN_30_DAYS;
        const hasExpiredLastMonth =
          Date.now() / 1000 - eventTime > SECONDS_IN_10_MONTHS &&
          Date.now() / 1000 - eventTime <
            SECONDS_IN_10_MONTHS + SECONDS_IN_30_DAYS;

        return {
          recipient: `0x${event.topics[1]?.slice(-40)}` as Address,
          membershipStartDate: formatDate(startDate),
          membershipExpirationDate: formatDate(expirationDate),
          membershipExpirationTimeLeft: formatTimeLeft(expirationDate),
          wasCreatedLastMonth,
          hasExpiredLastMonth,
        };
      });

      const newMembersCount = events.filter(
        (event) => event.wasCreatedLastMonth,
      ).length;

      const monthlyExitCount = events.filter(
        (event) => event.hasExpiredLastMonth,
      ).length;

      return { newMembersCount, monthlyExitCount, newMemberEvents: events };
    },
  });

  return query.data;
}
