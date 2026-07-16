import { faqs } from "@/data/site";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container max-w-3xl">
        <p className="eyebrow mb-4 text-center">FAQ</p>
        <h2 className="heading-lg text-center mb-12">Common questions</h2>
        <Accordion items={faqs} />
      </Reveal>
    </section>
  );
}
