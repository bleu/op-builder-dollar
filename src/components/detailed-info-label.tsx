import type { ComponentProps } from "react";

interface DetailedInfoLabelProps extends ComponentProps<"div"> {
  detailedInfo: string;
  label: string;
}

export const DetailedInfoLabel = ({
  children,
  detailedInfo,
  label,
  className,
  ...props
}: DetailedInfoLabelProps) => {
  return (
    <div className="space-y-2">
      <span className="text-sub-text-2">{label}</span>
      <div className="flex gap-2 items-center">
        <span className={className} {...props}>
          {children}
        </span>
        <div className="bg-card-bg-2 h-3 w-[1px] rounded-full" />
        <span className="text-sub-text">{detailedInfo}</span>
      </div>
    </div>
  );
};
