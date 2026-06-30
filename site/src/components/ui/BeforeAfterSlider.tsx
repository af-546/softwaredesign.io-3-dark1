import { useRef, useState } from "react";

export function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, x)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none glass-panel"
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center p-8">
          <p className="font-mono text-xs text-ink-muted mb-2">{beforeLabel}</p>
          <p className="font-display text-2xl text-ink-muted/60">Generic template site</p>
          <p className="text-sm text-ink-muted mt-2">2.1% conversion · Slow load · No brand</p>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-abyss to-neon-magenta/20 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="text-center p-8">
          <p className="font-mono text-xs text-neon-cyan mb-2">{afterLabel}</p>
          <p className="font-display text-2xl text-gradient">Custom SoftwareDesign build</p>
          <p className="text-sm text-neon-cyan/80 mt-2">5.8% conversion · 98 Lighthouse · On-brand</p>
        </div>
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-neon-cyan shadow-neonSm"
        style={{ left: `${position}%` }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neon-cyan flex items-center justify-center text-void font-bold shadow-neon"
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
          data-cursor="pointer"
        >
          ↔
        </div>
      </div>
    </div>
  );
}
