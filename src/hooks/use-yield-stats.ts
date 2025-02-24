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
    obusdYield && obusdDecimals && cohortSize
      ? formatTokenBalance(obusdYield / BigInt(cohortSize), obusdDecimals)
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
