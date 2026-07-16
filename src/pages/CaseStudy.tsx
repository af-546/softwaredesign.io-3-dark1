import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import { LinkButton } from "../components/ui/Button";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import { getCaseStudyBySlug, caseStudies } from "../data/caseStudies";
import { useSEO } from "../lib/seo";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  useSEO({
    title: study ? `${study.client} — Case Study | SoftwareDesign.io` : "Case Study",
    description: study?.outcome,
  });

  if (!study) return <Navigate to="/work" replace />;

  // Next/prev navigation
  const currentIdx = caseStudies.findIndex((c) => c.slug === slug);
  const prev = currentIdx > 0 ? caseStudies[currentIdx - 1] : null;
  const next = currentIdx < caseStudies.length - 1 ? caseStudies[currentIdx + 1] : null;

  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-bg-primary">
        <Container>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-body-sm text-ink-tertiary hover:text-ink-primary transition-colors mb-12"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            All work
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Tag variant="accent">{study.category}</Tag>
              <span className="font-mono text-mono-sm text-ink-tertiary">{study.year}</span>
              <span className="text-ink-muted">·</span>
              <span className="font-mono text-mono-sm text-ink-tertiary">{study.duration}</span>
              <span className="text-ink-muted">·</span>
              <span className="font-mono text-mono-sm text-ink-tertiary">{study.industry}</span>
            </div>

            <h1 className="font-serif font-semibold text-display-md md:text-display-lg lg:text-display-xl text-ink-primary leading-[1.05] tracking-tight">
              {study.client}
            </h1>

            <p className="mt-7 text-body-lg md:text-h3 text-ink-secondary leading-relaxed max-w-3xl">
              {study.headline}
            </p>

            <p className="mt-5 text-h3 text-ink-secondary font-medium">{study.outcome}</p>
          </div>

          {/* Hero visual */}
          <div className="mt-16 rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle aspect-[16/9] mesh-bg flex items-center justify-center p-10">
            <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary text-center">
              {study.client}
            </h2>
          </div>
        </Container>
      </section>

      {/* Metrics */}
      <Section variant="secondary" spacing="tight">
        <Container>
          <RevealOnScroll>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-mono text-mono-sm uppercase tracking-wider text-ink-tertiary mb-2">
                    {m.label}
                  </div>
                  <div className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-none">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* Challenge / Approach / Result */}
      <Section variant="default" spacing="tight">
        <Container>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-16 md:mb-20 lg:mb-24">
            <RevealOnScroll>
              <div className="lg:sticky lg:top-32">
                <div className="eyebrow mb-3">The challenge</div>
                <h2 className="font-serif font-semibold text-h1 md:text-display-md text-ink-primary leading-tight">
                  What we walked into.
                </h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="text-body-lg text-ink-secondary leading-relaxed max-w-reading">
                {study.challenge}
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-16 md:mb-20 lg:mb-24">
            <RevealOnScroll>
              <div className="lg:sticky lg:top-32">
                <div className="eyebrow mb-3">Our approach</div>
                <h2 className="font-serif font-semibold text-h1 md:text-display-md text-ink-primary leading-tight">
                  How we worked.
                </h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="text-body-lg text-ink-secondary leading-relaxed max-w-reading">
                {study.approach}
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <RevealOnScroll>
              <div className="lg:sticky lg:top-32">
                <div className="eyebrow mb-3">The result</div>
                <h2 className="font-serif font-semibold text-h1 md:text-display-md text-ink-primary leading-tight">
                  What shipped.
                </h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="text-body-lg text-ink-secondary leading-relaxed max-w-reading">
                {study.result}
              </p>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      {/* Services used */}
      <Section variant="secondary" spacing="tight">
        <Container>
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="eyebrow mb-3">Services delivered</div>
              <h2 className="font-serif font-semibold text-display-md text-ink-primary leading-tight mb-6">
                What we worked on.
              </h2>
              <div className="flex flex-wrap gap-2">
                {study.services.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* Next/Prev */}
      {(prev || next) && (
        <Section variant="default" spacing="tight">
          <Container>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {prev ? (
                <Link to={`/work/${prev.slug}`} className="group block">
                  <Card hover padding="default" className="h-full">
                    <div className="text-mono-sm text-ink-tertiary font-mono uppercase tracking-wider mb-3 flex items-center gap-2">
                      <ArrowLeft size={14} />
                      Previous
                    </div>
                    <h3 className="text-h3 font-semibold text-ink-primary group-hover:text-accent transition-colors leading-tight">
                      {prev.client}
                    </h3>
                    <p className="mt-2 text-body text-ink-tertiary">{prev.category}</p>
                  </Card>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link to={`/work/${next.slug}`} className="group block md:text-right">
                  <Card hover padding="default" className="h-full">
                    <div className="text-mono-sm text-ink-tertiary font-mono uppercase tracking-wider mb-3 flex items-center gap-2 md:justify-end">
                      Next
                      <ArrowRight size={14} />
                    </div>
                    <h3 className="text-h3 font-semibold text-ink-primary group-hover:text-accent transition-colors leading-tight">
                      {next.client}
                    </h3>
                    <p className="mt-2 text-body text-ink-tertiary">{next.category}</p>
                  </Card>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section variant="default">
        <Container>
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
                Want results like this?
              </h2>
              <p className="mt-6 text-body-lg text-ink-secondary leading-relaxed">
                Tell us about the project. We reply within one business day.
              </p>
              <div className="mt-10">
                <LinkButton to="/contact" variant="primary" arrow>
                  Start a project
                </LinkButton>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </>
  );
}
