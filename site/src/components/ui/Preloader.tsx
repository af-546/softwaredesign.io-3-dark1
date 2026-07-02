import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function Preloader() {
  const { setPreloaderDone } = useApp();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      setPreloaderDone(true);
    }, 900);
    return () => clearTimeout(timer);
  }, [setPreloaderDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center"
          >
            <div className="font-display text-3xl font-bold text-gradient mb-6">
              SoftwareDesign.io
            </div>
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-brand-light"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
