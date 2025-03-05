import { universalResolverAbi } from "@/lib/abis/universal-resolver-abi";
import { UNIVERSAL_RESOLVER_ADDRESS } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";
import { usePublicClient } from "wagmi";

function toHex(text: string) {
  return Buffer.from(text).toString("hex");
}

function addressToReverseInput(address: string) {
  const addressHex = toHex(address.slice(-40).toLowerCase());
  const addrHex = toHex("addr");
  const reverseHex = toHex("reverse");

  return `0x28${addressHex}04${addrHex}07${reverseHex}00` as `0x${string}`;
}

type ResultType =
  | { status: "success"; result: string[] }
  | { status: "failure" };

export function useMultiReadEns(addresses: Address[]) {
  const publicClient = usePublicClient({ chainId: 1 });

  return useQuery({
    queryKey: ["multiReadEns", ...addresses],
    enabled: addresses.length > 0,
    queryFn: async () => {
      if (!publicClient) throw new Error("Missing public client");

      const results = (await publicClient.multicall({
        contracts: addresses.map((address) => ({
          address: UNIVERSAL_RESOLVER_ADDRESS,
          abi: universalResolverAbi,
          functionName: "reverse",
          args: [addressToReverseInput(address)],
        })),
      })) as ResultType[];

      const ensNamesMap = new Map<Address, string | null>();
      for (const [idx, result] of results.entries()) {
        if (result.status === "success") {
          ensNamesMap.set(addresses[idx], result.result[0]);
        } else {
          ensNamesMap.set(addresses[idx], null);
        }
      }

      return ensNamesMap;
    },
  });
}
