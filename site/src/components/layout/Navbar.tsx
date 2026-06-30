import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/pricing", label: "Pricing" },
  { to: "/lab", label: "Lab" },
];

export function Navbar() {
  const { setCommandOpen, setSearchOpen, setMenuOpen, setBookingOpen } = useApp();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel border-b border-white/5 py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight" data-cursor="pointer">
          <span className="text-gradient">Software</span>
          <span className="text-ink">Design</span>
          <span className="text-neon-cyan">.io</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname.startsWith(link.to)
                  ? "text-neon-cyan bg-neon-cyan/10"
                  : "text-ink-soft hover:text-ink hover:bg-white/5"
              }`}
              data-cursor="pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden sm:flex w-9 h-9 rounded-full glass-panel items-center justify-center text-ink-muted hover:text-neon-cyan text-sm"
            aria-label="Search"
            data-cursor="pointer"
          >
            ⌕
          </button>
          <button
            onClick={() => setCommandOpen(true)}
            className="hidden sm:flex w-9 h-9 rounded-full glass-panel items-center justify-center text-ink-muted hover:text-neon-cyan font-mono text-[10px]"
            aria-label="Command palette"
            data-cursor="pointer"
          >
            ⌘K
          </button>
          <button
            onClick={() => setBookingOpen(true)}
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            data-cursor="pointer"
          >
            Book a call
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-full glass-panel flex flex-col items-center justify-center gap-1"
            aria-label="Menu"
            data-cursor="pointer"
          >
            <span className="w-5 h-[2px] bg-ink rounded-full" />
            <span className="w-5 h-[2px] bg-ink rounded-full" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
