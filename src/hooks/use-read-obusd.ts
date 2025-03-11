import { obusdAbi } from "@/lib/abis/obusd-abi";
import { OBUSD_ADDRESS, USDC_ADDRESS } from "@/utils/constants";
import { formatTokenBalance } from "@/utils/formatting";
import { useQuery } from "@tanstack/react-query";
import { erc20Abi, zeroAddress } from "viem";
import { useAccount, usePublicClient } from "wagmi";
import { optimism } from "wagmi/chains";

interface RawBalances {
  usdcBalance: bigint;
  usdcDecimals: number;
  obusdBalance: bigint;
  obusdDecimals: number;
  obusdTotalSupply: bigint;
  obusdYield: bigint | undefined;
}

export function useReadObusd() {
  const { address: signer, chainId } = useAccount();
  const publicClient = usePublicClient({ chainId: chainId ?? optimism.id });

  const address = signer ?? zeroAddress;

  const query = useQuery<RawBalances>({
    queryKey: ["userBalances", address],
    queryFn: async () => {
      if (!publicClient) throw new Error("missing publicClient");

      const result = await publicClient.multicall({
        contracts: [
          {
            address: OBUSD_ADDRESS,
            abi: erc20Abi,
            functionName: "balanceOf",
            args: [address],
          },
          {
            address: USDC_ADDRESS,
            abi: erc20Abi,
            functionName: "balanceOf",
            args: [address],
          },
          {
            address: OBUSD_ADDRESS,
            abi: erc20Abi,
            functionName: "totalSupply",
          },
          {
            address: OBUSD_ADDRESS,
            abi: erc20Abi,
            functionName: "decimals",
          },
          {
            address: USDC_ADDRESS,
            abi: erc20Abi,
            functionName: "decimals",
          },
          {
            address: OBUSD_ADDRESS,
            abi: obusdAbi,
            functionName: "yieldAccrued",
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
      if (result[5].status === "failure")
        console.error("Error getting obUSD yieldAccrued");

      const obusdBalance = result[0].result;
      const usdcBalance = result[1].result;
      const obusdTotalSupply = result[2].result;
      const obusdDecimals = result[3].result;
      const usdcDecimals = result[4].result;
      const obusdYield =
        result[5].status === "success" ? result[5].result : undefined;

      return {
        obusdBalance,
        usdcBalance,
        obusdTotalSupply,
        obusdDecimals,
        usdcDecimals,
        obusdYield,
      };
    },
  });

  const {
    obusdBalance,
    usdcBalance,
    obusdTotalSupply,
    obusdDecimals,
    usdcDecimals,
    obusdYield,
  }: Partial<RawBalances> = query.data ?? {};

  const obusdFormattedBalance =
    obusdBalance !== undefined && obusdDecimals !== undefined
      ? formatTokenBalance(obusdBalance, obusdDecimals)
      : "";
  const usdcFormattedBalance =
    usdcBalance !== undefined && usdcDecimals !== undefined
      ? formatTokenBalance(usdcBalance, usdcDecimals)
      : "";
  const obusdTotalSupplyFormatted =
    obusdTotalSupply !== undefined && obusdDecimals !== undefined
      ? formatTokenBalance(obusdTotalSupply, obusdDecimals)
      : "";
  const obusdYieldFormatted =
    obusdYield !== undefined && obusdDecimals !== undefined
      ? formatTokenBalance(obusdYield, obusdDecimals, 4)
      : "";

  return {
    usdcBalance,
    usdcFormattedBalance,
    obusdBalance,
    obusdFormattedBalance,
    obusdTotalSupply,
    obusdTotalSupplyFormatted,
    obusdDecimals,
    usdcDecimals,
    obusdYield,
    obusdYieldFormatted,
  };
}
