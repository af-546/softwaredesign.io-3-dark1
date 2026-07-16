import { caseStudies } from "@/data/caseStudies";
import { Reveal, RevealItem, RevealStagger, MagneticCard } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { CaseStudyVisual } from "@/components/illustrations/CaseStudyVisual";
import { useApp } from "@/context/AppContext";

export function WorkShowcase() {
  const { setLightboxImage } = useApp();

  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="heading-lg">Results, not renderings</h2>
        </div>
        <MagneticLink to="/work" className="btn-ghost text-sm">
          View all projects →
        </MagneticLink>
      </Reveal>
      <RevealStagger className="section-container space-y-10 md:space-y-12">
        {caseStudies.map((study) => (
          <RevealItem key={study.slug}>
            <MagneticCard>
              <div className="group glass-panel rounded-2xl overflow-hidden grid lg:grid-cols-[1.15fr_1fr] hover:border-brand-light/25 transition-colors">
                <button
                  onClick={() => setLightboxImage(study.client)}
                  className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] bg-[#0a1020] border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden"
                  data-cursor="pointer"
                >
                  <div className="absolute inset-0 p-5 md:p-8 lg:p-10">
                    <CaseStudyVisual
                      screenshot={study.screenshot}
                      website={study.website}
                      client={study.client}
                    />
                  </div>
                  <div className="absolute top-5 left-5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand-light bg-brand/15 border border-brand/25 rounded-full px-3 py-1">
                      {study.category}
                    </span>
                  </div>
                </button>
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold">
                    {study.client}
                  </h3>
                  <p className="text-ink-soft leading-relaxed mt-4 text-base md:text-lg">
                    {study.summary}
                  </p>
                  <p className="mt-5 text-brand-light font-display font-semibold">{study.outcome}</p>
                  <MagneticLink
                    to={`/work/${study.slug}`}
                    className="mt-8 text-brand-light text-sm hover:underline inline-flex items-center gap-1 w-fit"
                  >
                    Read case study →
                  </MagneticLink>
                </div>
              </div>
            </MagneticCard>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
