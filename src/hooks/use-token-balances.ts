import { formatTokenBalance } from "@/utils/formatting";
import { useQuery } from "@tanstack/react-query";
import { erc20Abi } from "viem";
import { useAccount, usePublicClient } from "wagmi";

interface RawBalances {
  usdcBalance: bigint;
  usdcDecimals: number;
  obusdBalance: bigint;
  obusdDecimals: number;
  obusdTotalSupply: bigint;
}

// Polygon Bread token (maybe useful for early tests)
//const obusdAddress = "0x11d9efdf4ab4a3bfabf5c7089f56aa4f059aa14c";
//const usdcAddress = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";

// Sepolia modified Bread token
const obusdAddress = "0x70F9667013645EcC52f6ff98b0C60b37D7647e26";
const usdcAddress = "0xbe72E441BF55620febc26715db68d3494213D8Cb";

export function useTokenBalances() {
  const { address } = useAccount();
  const publicClient = usePublicClient();

  const query = useQuery<RawBalances>({
    queryKey: ["userBalances", address],
    queryFn: async () => {
      if (!address) throw new Error("missing address");
      if (!publicClient) throw new Error("missing publicClient");

      const result = await publicClient.multicall({
        contracts: [
          {
            address: obusdAddress,
            abi: erc20Abi,
            functionName: "balanceOf",
            args: [address],
          },
          {
            address: usdcAddress,
            abi: erc20Abi,
            functionName: "balanceOf",
            args: [address],
          },
          {
            address: obusdAddress,
            abi: erc20Abi,
            functionName: "totalSupply",
          },
          {
            address: obusdAddress,
            abi: erc20Abi,
            functionName: "decimals",
          },
          {
            address: usdcAddress,
            abi: erc20Abi,
            functionName: "decimals",
          },
        ],
      });

      if (result[0].status === "failure")
        throw new Error("Error reading obusd balance");
      if (result[1].status === "failure")
        throw new Error("Error reading usdc balance");
      if (result[2].status === "failure")
        throw new Error("Error reading obusd totalSupply");
      if (result[3].status === "failure")
        throw new Error("Error reading obusd decimals");
      if (result[4].status === "failure")
        throw new Error("Error reading usdc decimals");

      const obusdBalance = result[0].result;
      const usdcBalance = result[1].result;
      const obusdTotalSupply = result[2].result;
      const obusdDecimals = result[3].result;
      const usdcDecimals = result[4].result;

      return {
        obusdBalance,
        usdcBalance,
        obusdTotalSupply,
        obusdDecimals,
        usdcDecimals,
      };
    },
  });

  const {
    obusdBalance,
    usdcBalance,
    obusdTotalSupply,
    obusdDecimals,
    usdcDecimals,
  }: Partial<RawBalances> = query.data ?? {};

  const obusdFormattedBalance =
    obusdBalance && obusdDecimals
      ? formatTokenBalance(obusdBalance, obusdDecimals)
      : "";
  const usdcFormattedBalance =
    usdcBalance && usdcDecimals
      ? formatTokenBalance(usdcBalance, usdcDecimals)
      : "";
  const obusdTotalSupplyFormatted =
    obusdTotalSupply && obusdDecimals
      ? formatTokenBalance(obusdTotalSupply, obusdDecimals)
      : "";

  return {
    usdcBalance,
    usdcFormattedBalance,
    obusdBalance,
    obusdFormattedBalance,
    obusdTotalSupplyFormatted,
    obusdDecimals,
    usdcDecimals,
  };
}
