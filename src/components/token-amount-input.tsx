import { cn } from "@/lib/utils";
import { filterNumberInput } from "@/utils/filterNumberInput";

export const TokenAmountInput = ({
  className,
  value,
  onValueChange,
  ...props
}: {
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
}) => {
  return (
    <input
      className={cn(
        "w-52 text-3xl bg-inherit p-0 m-0 placeholder:text-sub-text h-min border-none rounded-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none truncate outline-none",
        className,
      )}
      name="amount"
      type="text"
      value={value}
      onChange={(e) => onValueChange(filterNumberInput(e.target.value))}
      placeholder="0.0"
      autoComplete="off"
      {...props}
    />
  );
};
