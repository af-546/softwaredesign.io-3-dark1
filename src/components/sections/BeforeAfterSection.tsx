import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";

export function BeforeAfterSection() {
  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container max-w-4xl mx-auto">
        <p className="eyebrow mb-4 text-center">Transformation</p>
        <h2 className="heading-lg text-center mb-4">See the difference</h2>
        <p className="text-ink-soft text-center mb-10 max-w-lg mx-auto">
          Drag the slider to compare a generic template site with a custom SoftwareDesign build.
        </p>
        <BeforeAfterSlider />
      </Reveal>
    </section>
  );
}
