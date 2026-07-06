import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { question: string; answer: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="glass-panel rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            data-cursor="pointer"
          >
            <span className="font-display font-semibold pr-4">{item.question}</span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              className="text-neon-cyan text-xl flex-shrink-0"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="px-6 pb-5 text-ink-soft leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function Tabs({
  tabs,
}: {
  tabs: { label: string; content: ReactNode }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full font-display text-sm transition-all ${
              active === i
                ? "bg-gradient-to-r from-neon-cyan to-neon-magenta text-void font-semibold"
                : "glass-panel text-ink-soft hover:text-ink"
            }`}
            data-cursor="pointer"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {tabs[active].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
