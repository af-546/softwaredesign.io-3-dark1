import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import { LinkButton } from "../components/ui/Button";
import Card from "../components/ui/Card";
import { principles } from "../data/team";
import { siteConfig } from "../data/site";
import { useSEO } from "../lib/seo";

export default function About() {
  useSEO({
    title: "About — SoftwareDesign.io",
    description:
      "A small Boston design studio that ships work for ambitious SMBs and SaaS teams. Our story, process, and principles — strategy, design, and engineering under one roof.",
  });

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-bg-primary mesh-bg">
        <Container>
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">About the studio</div>
            <h1 className="font-serif font-semibold text-display-md md:text-display-lg lg:text-display-xl text-ink-primary leading-[1.05] tracking-tight">
              A small studio, obsessed with the craft of{" "}
              <span className="text-accent serif-italic">shipping software.</span>
            </h1>
            <p className="mt-8 text-body-lg md:text-h3 text-ink-secondary leading-relaxed max-w-3xl">
              We're a Boston-based design studio of nine designers, researchers, and engineers. We
              work with founders, product teams, and operators who care about the difference
              between work that's done and work that's right.
            </p>
          </div>
        </Container>
      </section>

      <Section variant="secondary" spacing="tight">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <RevealOnScroll>
              <div className="eyebrow mb-4">Our story</div>
              <h2 className="font-serif font-semibold text-display-md text-ink-primary leading-tight tracking-tight">
                Founded on the belief that great software is{" "}
                <span className="text-accent serif-italic">designed</span>, not assembled.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="space-y-5 text-body-lg text-ink-secondary leading-relaxed max-w-reading">
                <p>
                  SoftwareDesign.io started in 2023 as a three-person partnership between designers
                  and engineers who had spent a decade watching agencies hand designs to engineers
                  who didn't share the same priorities — and ship work that lost something
                  important in the handoff.
                </p>
                <p>
                  We built a studio where design and engineering sit together. The translation between Figma and
                  production is a non-event because the same people who designed it are sitting
                  with the people who built it.
                </p>
                <p>
                  Three years later we're a small studio working from {siteConfig.address.street} in{" "}
                  {siteConfig.address.city}. We take a deliberately small number of clients each
                  year — usually six to ten — so we can give each one the attention they paid for.
                </p>
                <Link to="/work" className="btn-text text-body-lg inline-block">
                  See our work →
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      <ProcessTimeline />

      <Section variant="secondary">
        <Container>
          <RevealOnScroll>
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="eyebrow mb-4">What we believe</div>
              <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
                Six principles that shape how we{" "}
                <span className="text-accent serif-italic">work.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {principles.map((principle, idx) => (
              <RevealOnScroll key={principle.number} delay={(idx % 3) * 80}>
                <Card padding="default" className="h-full">
                  <div className="font-mono text-mono-md  mb-3 text-accent">
                    {principle.number}
                  </div>
                  <h3
                    className={`text-h3 font-semibold leading-tight mb-3 text-ink-primary`}
                  >
                    {principle.title}
                  </h3>
                  <p className="text-body text-ink-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
                Want to work together?
              </h2>
              <p className="mt-6 text-body-lg text-ink-secondary leading-relaxed">
                Tell us about the project. We'll reply within one business day.
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
