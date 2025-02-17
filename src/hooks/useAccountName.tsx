import { useEnsName } from "wagmi";

export const useAccountName = (address: `0x${string}`) => {
  const { data } = useEnsName({ address });

  if (data) return data;
  return `${address.slice(0, 5)}...${address.slice(-3)}`;
};
