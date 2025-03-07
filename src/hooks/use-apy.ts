"use client";
import { aavePoolAbi } from "@/lib/abis/aave-pool-abi";
import { POOL_ADDRESS, USDC_ADDRESS } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { formatUnits } from "viem";
import { useAccount, usePublicClient } from "wagmi";
import { optimism } from "wagmi/chains";

const RAY = BigInt(10) ** BigInt(27);
const HALF_RAY = RAY / BigInt(2);
const SECONDS_PER_YEAR = BigInt("31536000");

export function rayMul(a: bigint, b: bigint): bigint {
  return (a * b + HALF_RAY) / RAY;
}

function rayPow(a: bigint, p: bigint) {
  // Convert inputs to BigInt if they aren't already
  let x = typeof a === "bigint" ? a : BigInt(a);
  let n = typeof p === "bigint" ? p : BigInt(p);

  // Set initial value of z based on whether n is odd or even
  let z = n % BigInt(2) === BigInt(0) ? RAY : x;

  // Perform exponentiation using square-and-multiply algorithm
  for (n = n / BigInt(2); n !== BigInt(0); n = n / BigInt(2)) {
    // Square x
    x = rayMul(x, x);

    // If n is odd, multiply z by x
    if (n % BigInt(2) !== BigInt(0)) {
      z = rayMul(z, x);
    }
  }

  return z;
}

export function useApy() {
  const { chainId } = useAccount();
  const publicClient = usePublicClient({ chainId: chainId ?? optimism.id });

  const query = useQuery({
    queryKey: ["poolApy"],
    queryFn: async () => {
      if (!publicClient) throw new Error("Missing public client");

      const reserveData = await publicClient.readContract({
        address: POOL_ADDRESS,
        abi: aavePoolAbi,
        functionName: "getReserveData",
        args: [USDC_ADDRESS],
      });

      const liquidityRateRay = reserveData.currentLiquidityRate; // currentLiquidityRate

      const supplyApyRay =
        rayPow(RAY + liquidityRateRay / SECONDS_PER_YEAR, SECONDS_PER_YEAR) -
        RAY;

      const apy = formatUnits(BigInt(100) * supplyApyRay, 27);

      return Number(apy).toFixed(2);
    },
  });

  return { apy: query.data };
}
