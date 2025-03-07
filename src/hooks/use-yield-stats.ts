import { formatTokenBalance } from "@/utils/formatting";
import { getRoundInfo } from "@/utils/get-round-info";
import { useMemo } from "react";
import { useApy } from "./use-apy";
import { useDynamicYield } from "./use-dynamic-yield";
import { useReadBuildersManager } from "./use-read-builders-manager";
import { useReadObusd } from "./use-read-obusd";

export function useYieldStats() {
  const { obusdYield, obusdDecimals } = useReadObusd();
  const { dynamicYieldFormatted } = useDynamicYield();
  const { data } = useReadBuildersManager();
  const { settings, currentProjectRecipients } = data ?? {};
  const { apy } = useApy() ?? {};

  const { round, timeToNextDistribution, pctgToNextDistribution } = useMemo(
    () =>
      settings
        ? getRoundInfo(
            Number(settings.currentSeasonExpiry),
            Number(settings.seasonDuration),
            Number(settings.cycleLength),
          )
        : {
            round: undefined,
            timeToNextDistribution: undefined,
            pctgToNextDistribution: undefined,
          },
    [settings],
  );

  const daysToNextDistribution =
    timeToNextDistribution &&
    Math.floor(timeToNextDistribution / (60 * 60 * 24));

  const cohortSize = currentProjectRecipients
    ? currentProjectRecipients.length
    : undefined;

  const yieldPerProject =
    obusdYield !== undefined &&
    obusdDecimals !== undefined &&
    cohortSize !== undefined
      ? cohortSize > 0
        ? formatTokenBalance(obusdYield / BigInt(cohortSize), obusdDecimals)
        : "0.0"
      : undefined;

  return {
    round,
    daysToNextDistribution,
    pctgToNextDistribution,
    obusdYieldFormatted: dynamicYieldFormatted,
    yieldPerProject,
    cohortSize,
    apy,
  };
}
