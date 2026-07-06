import { trustedLogos } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="section-band section-padding py-16 md:py-20">
      <Reveal className="section-container">
        <p className="font-mono text-xs text-ink-muted uppercase tracking-wider text-center mb-3">
          Trusted by
        </p>
        <p className="text-sm text-ink-soft text-center mb-12 max-w-md mx-auto">
          Founders and teams who needed design that ships, not slides.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {trustedLogos.map((logo) => (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-4 md:p-5 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-brand-light/30 hover:shadow-neonSm"
              data-cursor="pointer"
            >
              <div
                className={`relative flex items-center justify-center h-28 md:h-32 rounded-xl overflow-hidden border border-white/[0.06] transition-all duration-500 group-hover:border-brand-light/20 ${logo.frameClass}`}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100 ${logo.imageClass} ${logo.hoverScale}`}
                  loading="lazy"
                />
              </div>

              <p className="mt-4 text-center font-display text-sm font-semibold text-ink-soft transition-colors duration-300 group-hover:text-brand-light">
                {logo.name}
              </p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
