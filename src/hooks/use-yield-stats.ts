import { formatTokenBalance } from "@/utils/formatting";
import { getRoundInfo } from "@/utils/get-round-info";
import { useReadBuildersManager } from "./use-read-builders-manager";
import { useReadObusd } from "./use-read-obusd";

export function useYieldStats() {
  const { obusdYieldFormatted, obusdYield, obusdDecimals } = useReadObusd();
  const { data } = useReadBuildersManager();
  const { settings, currentProjectRecipients } = data ?? {};

  const { round, timeToNextDistribution, pctgToNextDistribution } = settings
    ? getRoundInfo(
        Number(settings.currentSeasonExpiry),
        Number(settings.seasonDuration),
        Number(settings.cycleLength),
      )
    : {};

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
    obusdYieldFormatted,
    yieldPerProject,
    cohortSize,
    apy: undefined,
  };
}
