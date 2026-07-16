import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Service } from "../../data/services";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import RevealOnScroll from "../../components/effects/RevealOnScroll";
import { LinkButton } from "../../components/ui/Button";
import Accordion from "../../components/ui/Accordion";
import Card from "../../components/ui/Card";
import Tag from "../../components/ui/Tag";
import { caseStudies } from "../../data/caseStudies";
import { useSEO } from "../../lib/seo";

interface ServicePageTemplateProps {
  service: Service;
  Mockup: React.ComponentType;
}

export default function ServicePageTemplate({ service, Mockup }: ServicePageTemplateProps) {
  useSEO({
    title: `${service.name} — SoftwareDesign.io`,
    description: service.shortDescription,
  });

  const relevantCases = caseStudies.filter((c) => c.services.includes(service.name)).slice(0, 2);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-bg-primary mesh-bg">
        <Container>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="eyebrow mb-6">{service.name}</div>
              <h1 className="font-serif font-semibold text-display-md md:text-display-lg lg:text-display-xl text-ink-primary leading-[1.05] tracking-tight">
                {service.heroHeadline}
              </h1>
              <p className="mt-7 text-body-lg md:text-h3 text-ink-secondary leading-relaxed max-w-2xl">
                {service.heroSub}
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <LinkButton to="/contact" variant="primary" arrow>
                  Start a project
                </LinkButton>
                <LinkButton to="/work" variant="secondary">
                  See related work
                </LinkButton>
              </div>
            </div>
            <div className="aspect-[7/5] bg-bg-tertiary rounded-2xl overflow-hidden border border-border-subtle p-5 flex items-center justify-center">
              <Mockup />
            </div>
          </div>
        </Container>
      </section>

      <Section variant="secondary">
        <Container>
          <RevealOnScroll>
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="eyebrow mb-4">What's included</div>
              <h2 className="font-serif font-semibold text-display-md text-ink-primary leading-tight tracking-tight">
                Every engagement includes:
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {service.deliverables.map((item, idx) => (
              <RevealOnScroll key={item.title} delay={(idx % 2) * 80}>
                <Card padding="default" className="h-full flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-accent" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-ink-primary leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-body text-ink-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <RevealOnScroll>
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="eyebrow mb-4">The process</div>
              <h2 className="font-serif font-semibold text-display-md text-ink-primary leading-tight tracking-tight">
                How a typical engagement unfolds.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.process.map((step, idx) => (
              <RevealOnScroll key={step.step} delay={idx * 60}>
                <Card padding="default" className="h-full">
                  <div className="font-mono text-mono-md text-accent mb-4">{step.step}</div>
                  <h3 className="text-h3 font-semibold text-ink-primary leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-body text-ink-secondary leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {relevantCases.length > 0 && (
        <Section variant="secondary">
          <Container>
            <RevealOnScroll>
              <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
                <div>
                  <div className="eyebrow mb-4">Recent work</div>
                  <h2 className="font-serif font-semibold text-display-md text-ink-primary leading-tight tracking-tight">
                    {service.name} in practice.
                  </h2>
                </div>
                <Link to="/work" className="btn-text text-body-lg">
                  All work →
                </Link>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {relevantCases.map((study, idx) => (
                <RevealOnScroll key={study.slug} delay={idx * 80}>
                  <Link to={`/work/${study.slug}`} className="group block h-full">
                    <Card hover padding="default" className="h-full">
                      <Tag variant="accent" className="mb-5">
                        {study.category}
                      </Tag>
                      <p className="text-h3 font-semibold text-ink-primary leading-tight">
                        {study.client}
                      </p>
                      <p className="mt-3 text-body-lg text-ink-secondary leading-relaxed">
                        {study.headline}
                      </p>
                      <p className="mt-5 text-body text-ink-secondary font-medium">
                        {study.outcome}
                      </p>
                    </Card>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section variant="secondary">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <RevealOnScroll>
              <div className="lg:sticky lg:top-32">
                <div className="eyebrow mb-4">Common questions</div>
                <h2 className="font-serif font-semibold text-display-md text-ink-primary leading-tight tracking-tight">
                  Questions about {service.name.toLowerCase()}.
                </h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <Accordion items={service.faqs} />
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
                Ready to start?
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
