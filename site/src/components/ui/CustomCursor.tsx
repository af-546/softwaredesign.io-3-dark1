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
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block mix-blend-difference"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
            hovering
              ? "border-neon-cyan scale-[2.5] bg-neon-cyan/20"
              : "border-white bg-transparent"
          }`}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997] hidden md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      >
        <div
          className={`w-10 h-10 rounded-full border transition-all duration-300 ${
            hovering ? "border-neon-magenta/50 scale-150" : "border-white/10"
          }`}
        />
      </motion.div>
    </>
  );
}
