import { useEffect, useState } from "react";
import { liveActivities } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

export function LiveFeed() {
  const [items, setItems] = useState(liveActivities.slice(0, 3));
  const [index, setIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const next = liveActivities[index % liveActivities.length];
        setIndex((i) => i + 1);
        return [next, ...prev.slice(0, 2)];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
        <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">Live activity</span>
      </div>
      <div className="space-y-3 h-[120px] overflow-hidden">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={`${item.user}-${item.time}-${item.action}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-sm"
            >
              <span className="text-neon-cyan font-medium">{item.user}</span>{" "}
              <span className="text-ink-soft">{item.action}</span>
              <span className="text-ink-muted text-xs ml-2">{item.time}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
