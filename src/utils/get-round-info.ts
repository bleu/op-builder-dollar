/*

                                    ┌ now (anywhere)
               cycleLength          |
                |-------|           ||--| o-> timeToNextDistribution 
                                    V
seasonStart <-o [_______._______._______._______._______] o-> seasonExpiry

                |---------------------------------------|
                             seasonDuration            

*/

export function getRoundInfo(
  seasonStart: number,
  seasonDuration: number,
  cycleLength: number,
  lastClaimedTimestamp: number,
): {
  timeToNextDistribution: number | undefined;
  pctgToNextDistribution: number | undefined;
  isSeasonFinished: boolean;
} {
  const seasonExpiry = seasonStart + seasonDuration;
  const now = Date.now() / 1000;

  if (now < seasonStart)
    return {
      timeToNextDistribution: seasonStart - now + cycleLength,
      pctgToNextDistribution: 0,
      isSeasonFinished: false,
    };

  if (now > seasonExpiry)
    return {
      timeToNextDistribution: undefined,
      pctgToNextDistribution: undefined,
      isSeasonFinished: true,
    };

  const nextRoundTime = lastClaimedTimestamp + cycleLength - now;
  const timeToNextDistribution = nextRoundTime > 0 ? nextRoundTime : 0;
  const pctgToNextDistribution =
    100 - (100 * timeToNextDistribution) / cycleLength;

  return {
    timeToNextDistribution,
    pctgToNextDistribution,
    isSeasonFinished: false,
  };
}
