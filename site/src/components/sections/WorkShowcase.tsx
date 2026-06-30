import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import { Reveal } from "@/components/ui/Reveal";
import { useApp } from "@/context/AppContext";

export function WorkShowcase() {
  const { setLightboxImage } = useApp();

  return (
    <section className="section-padding py-24">
      <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="heading-lg">Results, not renderings</h2>
        </div>
        <Link to="/work" className="btn-ghost text-sm" data-cursor="pointer">
          View all projects →
        </Link>
      </Reveal>
      <div className="max-w-7xl mx-auto space-y-6">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.1}>
            <div className="group glass-panel rounded-2xl overflow-hidden grid lg:grid-cols-2 hover:border-neon-cyan/20 transition-colors">
              <button
                onClick={() => setLightboxImage(study.client)}
                className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-neon-cyan/10 via-abyss to-neon-magenta/10 flex items-center justify-center p-8 text-left"
                data-cursor="pointer"
              >
                <div>
                  <span className="font-mono text-xs text-neon-cyan">{study.category} · {study.year}</span>
                  <h3 className="font-display text-3xl font-bold mt-2">{study.client}</h3>
                </div>
              </button>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-ink-soft leading-relaxed">{study.summary}</p>
                <p className="mt-4 text-neon-gold font-display font-semibold">{study.outcome}</p>
                <Link
                  to={`/work/${study.slug}`}
                  className="mt-6 text-neon-cyan text-sm hover:underline inline-flex items-center gap-1"
                  data-cursor="pointer"
                >
                  Read case study →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
