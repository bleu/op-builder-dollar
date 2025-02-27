"use client";

import { useEffect, useState } from "react";

export const ProgressBar = ({ progress }: { progress: number }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  useEffect(() => {
    setCurrentProgress(0);

    // Set a small timeout to ensure the component has rendered before animation starts
    const timeout = setTimeout(() => {
      setCurrentProgress(clampedProgress);
    }, 50);

    return () => clearTimeout(timeout);
  }, [clampedProgress]);

  return (
    <div className="rounded-full border border-card-border p-[2px] h-5 bg-primary/10">
      <div
        className="rounded-full h-full bg-primary transition-all duration-1000 ease-out"
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
};
