import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function Preloader() {
  const { setPreloaderDone } = useApp();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setPreloaderDone(true);
          }, 400);
          return 100;
        }
        return p + Math.random() * 18 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [setPreloaderDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 aurora-bg opacity-60" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center"
          >
            <div className="font-display text-4xl font-bold text-gradient-animated mb-8">
              SD
            </div>
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="mt-4 font-mono text-xs text-ink-muted tracking-widest">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
