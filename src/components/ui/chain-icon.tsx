import { OpIcon } from "@/components/ui/op-icon";
import { ChainIcon as ChainIconPrimitive } from "connectkit";

export const ChainIcon = ({
  id,
  size = 24,
}: { id: number | undefined; size: number }) => {
  if (id === 10) return <OpIcon size={size} />;
  return <ChainIconPrimitive id={id} size={size} />;
};
