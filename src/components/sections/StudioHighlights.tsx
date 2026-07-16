import { principles } from "@/data/site";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function StudioHighlights() {
  const highlights = principles.slice(0, 3);

  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container mb-12">
        <p className="eyebrow mb-4">How we operate</p>
        <h2 className="heading-lg">A studio built to ship</h2>
      </Reveal>
      <RevealStagger className="section-container grid md:grid-cols-3 gap-5">
        {highlights.map((item) => (
          <RevealItem key={item.title}>
            <div className="glass-panel rounded-2xl p-6 md:p-7 h-full hover:border-brand-light/25 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand/15 border border-brand/25 flex items-center justify-center mb-5">
                <span className="text-brand-light font-mono text-sm">◆</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
