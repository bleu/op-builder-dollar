import obUsd from "@/../public/icons/obusd.svg";
import Image from "next/image";

export default function ObUsd({ size }: { size: number }) {
  return (
    <Image
      src={obUsd}
      alt="obUSD"
      style={{
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    />
  );
}
