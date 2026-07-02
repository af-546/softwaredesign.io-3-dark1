import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { site } from "@/data/site";
import { services } from "@/data/services";

const menuLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "All services" },
  { to: "/about", label: "About" },
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
              className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center text-2xl"
              data-cursor="pointer"
            >
              ×
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 overflow-y-auto px-6">
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
                  className="font-display text-3xl sm:text-4xl font-bold text-ink hover:text-brand-light transition-colors block py-2 text-center"
                  data-cursor="pointer"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-6 pt-6 border-t border-white/10 w-full max-w-sm">
              <p className="text-xs font-mono text-ink-muted uppercase tracking-wider text-center mb-4">
                Services
              </p>
              <div className="grid grid-cols-1 gap-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-center py-2 text-ink-soft hover:text-brand-light text-sm"
                    data-cursor="pointer"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <div className="section-padding pb-8 text-center text-ink-muted text-sm">
            {site.email} · {site.address.city}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
