import { processSteps } from "@/data/site";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessInteractive() {
  return (
    <section className="section-padding section-spacing">
      <Reveal className="section-container">
        <p className="eyebrow mb-4">How we work</p>
        <h2 className="heading-lg mb-4">Process that keeps you in the loop</h2>
        <p className="text-ink-soft max-w-2xl mb-14 leading-relaxed">
          Five phases from discovery to deploy, with real users in the loop before engineering commits.
        </p>
      </Reveal>

      <div className="section-container relative">
        <div
          className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-light/40 to-transparent"
          aria-hidden="true"
        />

        <div className="space-y-6 md:space-y-8">
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <div key={step.title} className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={isLeft ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}
                >
                  <div className="glass-panel rounded-2xl p-6 md:p-8 hover:border-brand-light/20 transition-colors relative">
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-light border-4 border-[#0c1222] shadow-neonSm z-10"
                      style={isLeft ? { right: "-1.35rem" } : { left: "-1.35rem" }}
                    />
                    <span className="font-mono text-xs text-brand-light">{stepNumber}</span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold mt-2">{step.title}</h3>
                    <p className="text-ink-soft leading-relaxed mt-3">{step.description}</p>
                  </div>
                </motion.div>
                <div className={isLeft ? "hidden lg:block lg:order-2" : "hidden lg:block lg:order-1"} aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
