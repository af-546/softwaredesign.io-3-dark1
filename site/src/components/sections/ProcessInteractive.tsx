import { useState } from "react";
import { processSteps } from "@/data/site";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const colorMap: Record<string, string> = {
  cyan: "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10",
  magenta: "text-neon-magenta border-neon-magenta/30 bg-neon-magenta/10",
  gold: "text-neon-gold border-neon-gold/30 bg-neon-gold/10",
  lime: "text-neon-lime border-neon-lime/30 bg-neon-lime/10",
};

export function ProcessInteractive() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding py-24">
      <Reveal>
        <p className="eyebrow mb-4">How we work</p>
        <h2 className="heading-lg mb-12">Process that keeps you in the loop</h2>
      </Reveal>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-3">
          {processSteps.map((step, i) => (
            <button
              key={step.number}
              onClick={() => setActive(i)}
              className={`w-full text-left glass-panel rounded-2xl p-5 transition-all duration-300 ${
                active === i ? "border-neon-cyan/40 shadow-neonSm" : "hover:border-white/10"
              }`}
              data-cursor="pointer"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm border ${colorMap[step.color]}`}
                >
                  {step.number}
                </span>
                <span className="font-display font-semibold text-lg">{step.title}</span>
              </div>
            </button>
          ))}
        </div>
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel rounded-3xl p-10 min-h-[300px] flex flex-col justify-center"
        >
          <span className={`font-mono text-sm ${colorMap[processSteps[active].color].split(" ")[0]}`}>
            Step {processSteps[active].number}
          </span>
          <h3 className="heading-md mt-4 mb-4">{processSteps[active].title}</h3>
          <p className="text-ink-soft leading-relaxed text-lg">{processSteps[active].description}</p>
        </motion.div>
      </div>
    </section>
  );
}
