import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { services } from "@/data/services";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const { setMenuOpen, setBookingOpen } = useApp();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const servicesActive = location.pathname.startsWith("/services");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-bar ${
        scrolled ? "nav-bar-scrolled py-3" : "py-5"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight" data-cursor="pointer">
          <span className="text-gradient">Software</span>
          <span className="text-ink">Design</span>
          <span className="text-brand-light">.io</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen((open) => !open)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
                servicesActive
                  ? "text-brand-light bg-brand/10"
                  : "text-ink-soft hover:text-ink hover:bg-white/5"
              }`}
              data-cursor="pointer"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <span className={`text-xs transition-transform ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 nav-dropdown py-2"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className="block px-4 py-2.5 text-sm text-ink-soft hover:text-brand-light hover:bg-white/5 border-b border-white/5 mb-1"
                  data-cursor="pointer"
                >
                  All services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block px-4 py-2.5 text-sm text-ink-soft hover:text-brand-light hover:bg-white/5"
                    data-cursor="pointer"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname.startsWith(link.to)
                  ? "text-brand-light bg-brand/10"
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
            onClick={() => setBookingOpen(true)}
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            data-cursor="pointer"
          >
            Book a call
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-lg glass-panel flex flex-col items-center justify-center gap-1"
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
