import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function ContactFAB() {
  const location = useLocation();

  if (location.pathname === "/contact") return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[80]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 font-display font-semibold text-white shadow-neonSm hover:bg-brand-light transition-colors"
        data-cursor="pointer"
      >
        Contact us
      </Link>
    </motion.div>
  );
}
