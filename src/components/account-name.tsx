import { useEnsName } from "wagmi";

export const AccountName = ({ address }: { address: `0x${string}` }) => {
  const { data } = useEnsName({ address });

  return <span>{data ?? `${address.slice(0, 5)}...${address.slice(-3)}`}</span>;
};
