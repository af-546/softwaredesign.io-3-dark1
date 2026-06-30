export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-magenta/10 blur-[120px] animate-float [animation-delay:-3s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-gold/5 blur-[150px] animate-pulseGlow" />
    </div>
  );
}
