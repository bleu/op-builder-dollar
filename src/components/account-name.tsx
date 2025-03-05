import type { EndorserType } from "@/lib/types";

export const AccountName = ({ address, ensName }: EndorserType) => {
  return (
    <span>{ensName ?? `${address.slice(0, 5)}...${address.slice(-3)}`}</span>
  );
};
