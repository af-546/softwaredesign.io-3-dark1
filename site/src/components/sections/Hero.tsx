import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/caseStudies";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextScramble } from "@/components/ui/TextScramble";
import { ParticleField } from "@/components/ui/ParticleField";
import { useApp } from "@/context/AppContext";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { setBookingOpen } = useApp();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((s) => (s + 1) % caseStudies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 pb-20 overflow-hidden">
      <ParticleField />
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-6"
          >
            Boston-based design studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-xl mb-6"
          >
            Software design{" "}
            <span className="text-gradient-animated italic">that ships.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-ink-soft max-w-lg mb-10 leading-relaxed"
          >
            Strategy, design, and engineering for ambitious SMBs and SaaS teams.
            Weekly demos. Real research. Production-ready from day one.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton className="btn-primary" onClick={() => setBookingOpen(true)}>
              Start a project →
            </MagneticButton>
            <Link to="/work" className="btn-ghost" data-cursor="pointer">
              See our work
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-6 text-xs font-mono text-ink-muted"
          >
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neon-cyan">⌘K</kbd> to explore</span>
            <span>·</span>
            <span><TextScramble text="50+ products shipped" /></span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="glass-panel rounded-3xl p-1 overflow-hidden">
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-abyss">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.slug}
                  initial={false}
                  animate={{
                    opacity: i === activeSlide ? 1 : 0,
                    scale: i === activeSlide ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 p-8 flex flex-col justify-end"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,240,255,${0.1 + i * 0.05}) 0%, rgba(255,0,110,${0.08 + i * 0.03}) 50%, rgba(255,184,0,0.05) 100%)`,
                  }}
                >
                  <span className="font-mono text-[10px] text-neon-cyan uppercase tracking-wider">
                    {study.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold mt-2">{study.client}</h3>
                  <p className="text-sm text-ink-soft mt-2">{study.outcome}</p>
                  <Link
                    to={`/work/${study.slug}`}
                    className="mt-4 text-sm text-neon-cyan hover:underline inline-flex items-center gap-1"
                    data-cursor="pointer"
                  >
                    View case study →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeSlide ? "bg-neon-cyan w-6" : "bg-white/20"
                }`}
                data-cursor="pointer"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
