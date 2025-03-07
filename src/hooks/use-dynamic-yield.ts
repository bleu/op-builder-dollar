import { formatTokenBalance } from "@/utils/formatting";
import { useEffect, useState } from "react";
import { SECONDS_PER_YEAR, rayMul, useApy } from "./use-apy";
import { useReadObusd } from "./use-read-obusd";

export function useDynamicYield() {
  const [dynamicYield, setDynamicYield] = useState<bigint | undefined>(
    undefined,
  );

  const { liquidityRateRay } = useApy() ?? {};
  const { obusdTotalSupply, obusdDecimals, obusdYield } = useReadObusd();

  const increaseYieldPerSecond =
    obusdTotalSupply && liquidityRateRay && obusdDecimals
      ? rayMul(obusdTotalSupply, liquidityRateRay) / SECONDS_PER_YEAR
      : undefined;

  // 1s loop update
  useEffect(() => {
    const interval = setInterval(() => {
      if (!dynamicYield) {
        if (obusdTotalSupply) setDynamicYield(obusdYield);
        return;
      }
      if (increaseYieldPerSecond) {
        const newYield = dynamicYield + increaseYieldPerSecond;
        setDynamicYield(newYield);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [dynamicYield, obusdTotalSupply, increaseYieldPerSecond, obusdYield]);

  const dynamicYieldFormatted =
    dynamicYield !== undefined && obusdDecimals !== undefined
      ? formatTokenBalance(dynamicYield, obusdDecimals, 4)
      : "";

  return { dynamicYieldFormatted };
}
