import opLogo from "@/../public/icons/op-icon.ico";
import Image from "next/image";

export const OpIcon = ({ size }: { size: number }) => {
  return (
    <Image
      src={opLogo}
      alt="Optimism"
      style={{
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
      }}
    />
  );
};
