export const ProgressBar = ({ progress }: { progress: number }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="rounded-full border border-card-border p-[2px] h-5 bg-primary/10">
      <div
        className="rounded-full h-full bg-primary"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};
