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
  seasonExpiry: number,
  seasonDuration: number,
  cycleLength: number,
): {
  round: number;
  timeToNextDistribution: number | undefined;
  pctgToNextDistribution: number | undefined;
} {
  const seasonStart = seasonExpiry - seasonDuration;
  const now = Date.now() / 1000;

  if (now < seasonStart)
    return {
      round: 0,
      timeToNextDistribution: seasonStart - now + cycleLength,
      pctgToNextDistribution: 0,
    };

  if (now > seasonExpiry)
    return {
      round: Math.round(seasonDuration / cycleLength),
      timeToNextDistribution: undefined,
      pctgToNextDistribution: undefined,
    };

  const round = Math.floor((now - seasonStart) / cycleLength) + 1;
  const timeToNextRound = seasonStart + round * cycleLength;
  const timeToNextDistribution = timeToNextRound - now;
  const pctgToNextDistribution =
    100 - (100 * timeToNextDistribution) / cycleLength;

  return { round, timeToNextDistribution, pctgToNextDistribution };
}
