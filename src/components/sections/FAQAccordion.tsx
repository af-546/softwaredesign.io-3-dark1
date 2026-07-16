import { FAQ } from "../../data/faqs";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Accordion from "../ui/Accordion";
import RevealOnScroll from "../effects/RevealOnScroll";

interface FAQAccordionProps {
  items: FAQ[];
  eyebrow?: string;
  headline?: React.ReactNode;
  description?: string;
}

export default function FAQAccordion({
  items,
  eyebrow = "",
  headline,
  description,
}: FAQAccordionProps) {
  return (
    <Section variant="secondary">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-32">
              <div className="eyebrow mb-4">{eyebrow}</div>
              <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
                {headline || "Frequently asked."}
              </h2>
              {description && (
                <p className="mt-5 text-body-lg text-ink-secondary leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Accordion items={items} />
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}
