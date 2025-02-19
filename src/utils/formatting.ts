import { formatUnits } from "viem";

export function formatTokenBalance(amount: bigint, decimals: number): string {
  if (amount.toString() === "0") return "0.0";
  if (amount < BigInt(10) ** BigInt(decimals) / BigInt(100)) return "< 0.01";

  let formattedBalance: string;
  formattedBalance = formatUnits(amount, decimals);
  formattedBalance = Number(formattedBalance).toFixed(2);
  return formattedBalance;
}

export function tokenAmountStringToBigint(value: string, decimals: number) {
  // Clean the input from any leading/trailing whitespace
  const cleanInput = value.trim();

  // Handle edge cases
  if (cleanInput === "" || cleanInput === "0") return BigInt(0);
  if (decimals === 0) return BigInt(cleanInput);

  // Find decimal point position
  const decimalPosition = cleanInput.indexOf(".");

  if (decimalPosition === -1) {
    // No decimal point, just pad with zeros
    return BigInt(cleanInput + "0".repeat(decimals));
  }

  const leftPart = cleanInput.slice(0, decimalPosition);
  const rightPart = cleanInput.slice(decimalPosition + 1);

  // Handle cases like ".123"
  const finalLeftPart = leftPart === "" ? "0" : leftPart;

  if (rightPart.length > decimals) {
    // Truncate if we have more decimal places than needed
    return BigInt(finalLeftPart + rightPart.slice(0, decimals));
  }

  // Pad with zeros if we have fewer decimal places than needed
  return BigInt(
    finalLeftPart + rightPart + "0".repeat(decimals - rightPart.length),
  );
}
