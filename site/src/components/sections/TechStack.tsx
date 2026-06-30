import { techStack } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function TechStack() {
  return (
    <section className="section-padding py-16">
      <Reveal className="text-center mb-10">
        <p className="eyebrow mb-4">Tools we ship with</p>
      </Reveal>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {techStack.map((tech, i) => (
          <Reveal key={tech} delay={i * 0.03}>
            <span className="glass-panel rounded-full px-5 py-2.5 text-sm font-mono text-ink-soft hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors cursor-default">
              {tech}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
