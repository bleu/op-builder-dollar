import obUsd from "@/../public/icons/usdc.svg";
import Image from "next/image";

export default function Usdc({ size }: { size: number }) {
  return <Image src={obUsd} alt="obUSD" width={size} height={size} />;
}
