import { useState } from "react";
import { processSteps } from "@/data/site";
import { motion } from "framer-motion";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function ProcessInteractive() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding py-20 md:py-28">
      <Reveal className="section-container">
        <p className="eyebrow mb-4">How we work</p>
        <h2 className="heading-lg mb-12">Process that keeps you in the loop</h2>
      </Reveal>
      <div className="section-container grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <RevealStagger className="space-y-3">
          {processSteps.map((step, i) => (
            <RevealItem key={step.title}>
              <button
                onClick={() => setActive(i)}
                className={`w-full text-left glass-panel rounded-2xl p-5 transition-all duration-300 ${
                  active === i ? "border-brand-light/40 shadow-neonSm bg-brand/5" : "hover:border-white/10"
                }`}
                data-cursor="pointer"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors ${
                      active === i ? "bg-brand-light" : "bg-white/20"
                    }`}
                  />
                  <span className="font-display font-semibold text-lg">{step.title}</span>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal direction="right">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel rounded-2xl p-10 min-h-[320px] flex flex-col justify-center border-brand/10"
          >
            <span className="font-mono text-sm text-brand-light">{processSteps[active].title}</span>
            <h3 className="heading-md mt-4 mb-4">{processSteps[active].title}</h3>
            <p className="text-ink-soft leading-relaxed text-lg">{processSteps[active].description}</p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
