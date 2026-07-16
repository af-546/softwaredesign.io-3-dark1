import { capabilities } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";

export function CapabilitiesMarquee() {
  return (
    <section className="py-6 border-b border-white/5 overflow-hidden">
      <Marquee speed={30}>
        <div className="flex gap-8 px-4">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="font-display text-lg sm:text-xl font-semibold text-ink-muted/40 whitespace-nowrap flex items-center gap-8"
            >
              {cap}
              <span className="text-brand-light">✦</span>
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
