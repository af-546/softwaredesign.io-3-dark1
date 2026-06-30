import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding py-24 bg-gradient-to-b from-transparent via-neon-magenta/5 to-transparent">
      <Reveal className="text-center mb-12">
        <p className="eyebrow mb-4">Client voices</p>
        <h2 className="heading-lg">Trusted by teams who ship</h2>
      </Reveal>
      <div className="max-w-3xl mx-auto relative min-h-[240px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <span key={i} className="text-neon-gold">★</span>
              ))}
            </div>
            <p className="text-xl sm:text-2xl text-ink leading-relaxed font-display italic">
              "{testimonials[current].quote}"
            </p>
            <footer className="mt-8">
              <p className="font-display font-semibold">{testimonials[current].author}</p>
              <p className="text-sm text-ink-muted">{testimonials[current].company}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-neon-magenta w-6" : "bg-white/20"
              }`}
              data-cursor="pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
