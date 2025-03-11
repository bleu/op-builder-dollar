import { cn } from "@/lib/utils";

const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center space-x-1 w-fit",
        className,
      )}
    >
      <span className="animate-bounce" style={{ animationDelay: "0ms" }}>
        .
      </span>
      <span className="animate-bounce" style={{ animationDelay: "200ms" }}>
        .
      </span>
      <span className="animate-bounce" style={{ animationDelay: "400ms" }}>
        .
      </span>
    </div>
  );
};

export default LoadingDots;
