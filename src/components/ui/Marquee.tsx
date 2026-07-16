import type { ReactNode } from "react";

export function Marquee({ children, speed = 40 }: { children: ReactNode; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-flex animate-marquee gpu-layer"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
