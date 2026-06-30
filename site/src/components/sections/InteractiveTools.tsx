import { LiveFeed } from "@/components/ui/LiveFeed";
import { ROICalculator } from "@/components/ui/ROICalculator";
import { Reveal } from "@/components/ui/Reveal";

export function InteractiveTools() {
  return (
    <section className="section-padding py-24">
      <Reveal>
        <p className="eyebrow mb-4">Interactive</p>
        <h2 className="heading-lg mb-12">Tools that work while you browse</h2>
      </Reveal>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
        <Reveal className="lg:col-span-2">
          <ROICalculator />
        </Reveal>
        <Reveal delay={0.1}>
          <LiveFeed />
        </Reveal>
      </div>
    </section>
  );
}
