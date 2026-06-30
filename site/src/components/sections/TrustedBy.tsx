import { trustedLogos } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="section-padding py-16">
      <Reveal className="text-center mb-10">
        <p className="font-mono text-xs text-ink-muted uppercase tracking-wider">Trusted by</p>
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
        {trustedLogos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-500"
          />
        ))}
      </div>
    </section>
  );
}
