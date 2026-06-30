import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { motion } from "framer-motion";

export function NotFoundPage() {
  usePageTitle("404 — Page not found");
  const [score, setScore] = useState(0);

  return (
    <div className="section-padding pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.p
        className="font-display text-[120px] sm:text-[180px] font-bold text-gradient leading-none"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        404
      </motion.p>
      <h1 className="heading-md mt-4 mb-4">Page not found</h1>
      <p className="text-ink-soft mb-8 max-w-md">
        This page doesn't exist — but you can play our mini game while you're here.
      </p>
      <motion.button
        onClick={() => setScore((s) => s + 1)}
        className="btn-primary mb-4"
        whileTap={{ scale: 0.95 }}
        data-cursor="pointer"
      >
        Click me! Score: {score}
      </motion.button>
      <Link to="/" className="text-neon-cyan hover:underline text-sm" data-cursor="pointer">
        ← Back to home
      </Link>
    </div>
  );
}
