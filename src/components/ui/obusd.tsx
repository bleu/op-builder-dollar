import obUsd from "@/../public/icons/logo.svg";
import Image from "next/image";

export default function ObUsd({ size }: { size: number }) {
  return <Image src={obUsd} alt="obUSD" width={size} height={size} />;
}
