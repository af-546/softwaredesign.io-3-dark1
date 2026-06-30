import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { site } from "@/data/site";

const menuLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/pricing", label: "Pricing" },
  { to: "/lab", label: "Lab" },
  { to: "/contact", label: "Contact" },
];

export function FullscreenMenu() {
  const { menuOpen, setMenuOpen } = useApp();

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-void/95 backdrop-blur-xl flex flex-col"
        >
          <div className="section-padding flex justify-end pt-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-2xl"
              data-cursor="pointer"
            >
              ×
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-2">
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl sm:text-5xl font-bold text-ink hover:text-gradient transition-colors block py-2"
                  data-cursor="pointer"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="section-padding pb-8 text-center text-ink-muted text-sm">
            {site.email} · {site.address.city}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
