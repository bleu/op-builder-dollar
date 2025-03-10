"use client";
import { formatDate, formatTimeLeft } from "@/utils/formatting";
import { useQuery } from "@tanstack/react-query";
import { useAccount, usePublicClient } from "wagmi";
import { optimism } from "wagmi/chains";

const SECONDS_IN_30_DAYS = 60 * 60 * 24 * 30;
const SECONDS_IN_10_MONTHS = 60 * 60 * 24 * 30 * 10;

type RawNewMembers = {
  block_time: string;
  topic1: string;
}[];

export function useReadNewCohortProjects() {
  const { chainId } = useAccount();
  const publicClient = usePublicClient({ chainId: chainId ?? optimism.id });

  const { data: newMembers } = useQuery({
    queryKey: ["newMembersDuneQuery"],
    queryFn: async () => {
      const stats = (await (
        await fetch("/api/new-cohort-members")
      ).json()) as RawNewMembers;

      const statsProcessed = stats.map((row) => ({
        timestamp: Math.floor(new Date(row.block_time).getTime() / 1000),
        recipient: `0x${row.topic1.slice(-40)}`,
      }));

      return statsProcessed;
    },
  });

  const query = useQuery({
    queryKey: ["newMembers"],
    enabled: Boolean(newMembers),
    queryFn: async () => {
      if (!publicClient) throw new Error("Missing public client");
      if (!newMembers) throw new Error("Missing new members");

      const events = newMembers.map((row) => {
        const eventTime = row.timestamp;
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
          recipient: row.recipient,
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
