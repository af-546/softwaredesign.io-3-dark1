export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden gpu-layer">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-brand-dark/10 blur-[120px] animate-float [animation-delay:-3s]" />
    </div>
  );
}
