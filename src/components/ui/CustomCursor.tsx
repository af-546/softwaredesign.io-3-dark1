import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [data-cursor='pointer'], input, textarea, select"),
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9996] hidden md:block"
        animate={{ x: pos.x - 80, y: pos.y - 80 }}
        transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.6 }}
      >
        <div
          className={`w-40 h-40 rounded-full blur-3xl transition-all duration-300 ${
            hovering ? "bg-brand/25 scale-125" : "bg-brand/10 scale-100"
          }`}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
            hovering
              ? "border-brand-light scale-[2] bg-brand-light/30"
              : "border-white/80 bg-transparent"
          }`}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997] hidden md:block"
        animate={{ x: pos.x - 18, y: pos.y - 18 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      >
        <div
          className={`w-9 h-9 rounded-full border transition-all duration-300 ${
            hovering ? "border-brand-light/60 scale-150" : "border-white/15"
          }`}
        />
      </motion.div>
    </>
  );
}
