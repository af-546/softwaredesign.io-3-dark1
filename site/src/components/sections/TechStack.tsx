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
      <RevealStagger className="section-container flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
        {techStack.map((tech, index) => (
          <RevealItem key={tech}>
            <span
              className="glass-panel rounded-full px-5 py-2.5 text-sm font-mono text-ink-soft hover:text-brand-light hover:border-brand-light/30 transition-colors inline-block animate-float"
              style={{ animationDelay: `${(index % 6) * -1.1}s` }}
            >
              {tech}
            </span>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
