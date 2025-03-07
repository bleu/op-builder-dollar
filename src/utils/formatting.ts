import { addCommasToInt } from "@/lib/utils";
import { formatUnits } from "viem";

export function formatTokenBalance(
  amount: bigint,
  decimals: number,
  d = 2,
): string {
  if (amount.toString() === "0") return "0.0";
  if (amount < BigInt(10) ** BigInt(decimals) / BigInt(10) ** BigInt(d))
    return `< 0.${"0".repeat(d - 1)}1`;

  let formattedBalance: string;
  formattedBalance = formatUnits(amount, decimals);
  formattedBalance = Number(formattedBalance).toFixed(d);
  formattedBalance = `${addCommasToInt(formattedBalance.slice(0, -d - 1))}.${formattedBalance.slice(-d)}`;
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

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatTimeLeft = (expirationDate: Date): string => {
  const now = new Date();

  if (now > expirationDate) {
    return "Expired";
  }

  const diffMs = expirationDate.getTime() - now.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const months = Math.floor(diffDays / 30);
  const days = diffDays % 30;

  if (months > 0) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  }
  return `${days} day${days !== 1 ? "s" : ""}`;
};
