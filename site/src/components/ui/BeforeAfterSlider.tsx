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
          <p className="text-sm text-ink-muted mt-2">Slow load · No brand · Poor UX</p>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand/15 via-abyss to-brand-dark/15 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="text-center p-8">
          <p className="font-mono text-xs text-brand-light mb-2">{afterLabel}</p>
          <p className="font-display text-2xl text-gradient">Custom SoftwareDesign build</p>
          <p className="text-sm text-brand-light/80 mt-2">Fast · Accessible · On-brand</p>
        </div>
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-brand-light shadow-neonSm"
        style={{ left: `${position}%` }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-white font-bold shadow-neonSm"
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
        >
          ↔
        </div>
      </div>
    </div>
  );
}
