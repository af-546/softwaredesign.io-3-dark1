import { faqs } from "@/data/site";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section className="section-padding py-24">
      <Reveal className="max-w-3xl mx-auto">
        <p className="eyebrow mb-4 text-center">FAQ</p>
        <h2 className="heading-lg text-center mb-12">Common questions</h2>
        <Accordion items={faqs} />
      </Reveal>
    </section>
  );
}
