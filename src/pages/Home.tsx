import { ArrowRight } from "lucide-react";
import Hero from "../components/sections/Hero";
import LogoStrip from "../components/sections/LogoStrip";
import ServiceGrid from "../components/sections/ServiceGrid";
import CaseStudyFeature from "../components/sections/CaseStudyFeature";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import TestimonialGrid from "../components/sections/TestimonialGrid";
import FAQAccordion from "../components/sections/FAQAccordion";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import { LinkButton } from "../components/ui/Button";
import { homeFaqs } from "../data/faqs";
import { useSEO } from "../lib/seo";

export default function Home() {
  useSEO({
    title: "SoftwareDesign.io — Software design that ships.",
    description:
      "Strategy, design, and engineering for ambitious SMBs and SaaS teams. Boston-based design studio.",
  });

  return (
    <>
      <Hero />
      <LogoStrip />
      <ServiceGrid />
      {/* <CaseStudyFeature /> */}
      <ProcessTimeline />
      <TestimonialGrid />
      <FAQAccordion
        items={homeFaqs}
        eyebrow="Questions"
        headline="Frequently asked."
        description="If your question isn't here, send us a note. We reply to every message within one business day."
      />

      <Section variant="default" spacing="loose" className="bg-ink-primary text-bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30 mesh-bg" aria-hidden="true" />
        <Container>
          <div className="relative text-center max-w-3xl mx-auto">
            <RevealOnScroll>
              <div className="eyebrow text-bg-primary/80 mb-6">Ready to start?</div>
              <h2 className="font-serif font-semibold text-display-md md:text-display-lg leading-[1.05] tracking-tight">
                Software designed right.
              </h2>
              <p className="mt-6 text-body-lg text-bg-primary/70 max-w-xl mx-auto leading-relaxed">
                Tell us about the project and get concrete next steps - not a pitch.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <LinkButton to="/contact" variant="primary" className="w-full sm:w-auto">
                  Book a call
                  <ArrowRight size={16} strokeWidth={2} />
                </LinkButton>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>
    </>
  );
}
