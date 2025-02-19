import { formatUnits } from "viem";

export function formatTokenBalance(amount: bigint, decimals: number): string {
  if (amount.toString() === "0") return "0.0";
  if (amount < BigInt(10) ** BigInt(decimals) / BigInt(100)) return "< 0.01";

  let formattedBalance: string;
  formattedBalance = formatUnits(amount, decimals);
  formattedBalance = Number(formattedBalance).toFixed(2);
  return formattedBalance;
}
