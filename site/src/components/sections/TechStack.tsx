import { techStack } from "@/data/site";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function TechStack() {
  return (
    <section className="section-padding py-20 md:py-24">
      <Reveal className="section-container text-center mb-10">
        <p className="eyebrow mb-4">Tools we ship with</p>
        <p className="text-ink-soft text-sm max-w-lg mx-auto">
          Modern stack, production-ready delivery.
        </p>
      </Reveal>
      <RevealStagger className="section-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
        {techStack.map((tech) => (
          <RevealItem key={tech}>
            <span className="glass-panel rounded-lg px-4 py-3.5 text-sm font-mono text-ink-soft hover:text-brand-light hover:border-brand-light/30 transition-colors text-center block h-full">
              {tech}
            </span>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
