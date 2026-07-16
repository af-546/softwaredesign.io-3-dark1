import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import { LinkButton } from "../components/ui/Button";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import { caseStudies } from "../data/caseStudies";
import { useSEO } from "../lib/seo";

export default function Work() {
  useSEO({
    title: "Work — SoftwareDesign.io",
    description:
      "Selected work for SMBs and SaaS teams. Real engagements, real outcomes.",
  });

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-bg-primary mesh-bg">
        <Container>
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Selected work</div>
            <h1 className="font-serif font-semibold text-display-md md:text-display-lg lg:text-display-xl text-ink-primary leading-[1.05] tracking-tight">
              Real work. Real outcomes.
            </h1>
            <p className="mt-8 text-body-lg md:text-h3 text-ink-secondary leading-relaxed max-w-3xl">
              A selection of recent client engagements. Each case study covers the challenge, the
              approach, and the measured outcome.
            </p>
          </div>
        </Container>
      </section>

      <Section variant="default" spacing="tight">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((study, idx) => (
              <RevealOnScroll key={study.slug} delay={(idx % 2) * 80}>
                <Link to={`/work/${study.slug}`} className="group block h-full">
                  <Card hover padding="none" className="overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-bg-secondary mesh-bg relative overflow-hidden">
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <Tag variant="accent" className="mb-4">
                          {study.category}
                        </Tag>
                        <p className="font-serif font-semibold text-h1 md:text-display-md text-ink-primary leading-tight">
                          {study.client}
                        </p>
                        <p className="mt-3 font-mono text-mono-sm text-ink-tertiary uppercase tracking-wider">
                          {study.industry}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-h3 font-semibold text-ink-primary leading-tight">
                          {study.headline}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2}
                          className="text-ink-tertiary group-hover:text-accent group-hover:rotate-45 transition-all duration-300 flex-shrink-0 mt-1"
                        />
                      </div>
                      <p className="mt-3 text-body text-ink-secondary font-medium">{study.outcome}</p>
                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-mono-sm text-ink-tertiary">
                        <span>{study.year}</span>
                        <span aria-hidden="true">·</span>
                        <span>{study.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span>{study.services.join(", ")}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="secondary">
        <Container>
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
                Have a project in mind?
              </h2>
              <p className="mt-6 text-body-lg text-ink-secondary leading-relaxed">
                Tell us about the challenge. We'll reply within one business day.
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
