import { trustedLogos } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="section-band section-padding py-14 md:py-16">
      <Reveal className="section-container">
        <p className="font-mono text-xs text-ink-muted uppercase tracking-wider text-center mb-12">
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {trustedLogos.map((logo) => (
            <div
              key={logo.name}
              className="h-16 sm:h-[72px] md:h-20 w-44 sm:w-48 flex items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-transform duration-300 hover:scale-105 hover:border-brand-light/20"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`max-h-full max-w-full ${
                  logo.crop
                    ? "h-full w-full object-cover object-center scale-110"
                    : "h-[85%] w-auto object-contain px-4"
                }`}
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
