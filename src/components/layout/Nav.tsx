import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "../../data/services";
import { siteConfig } from "../../data/site";
import { LinkButton } from "../ui/Button";
import { cn } from "../../lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-bg-primary/85 backdrop-blur-lg border-b border-border-subtle"
            : "bg-transparent"
        )}
        style={{ height: "var(--header-height, 72px)" }}
      >
        <div className="max-w-wide mx-auto h-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link to="/" className="flex items-center" aria-label="SoftwareDesign.io home">
            <span className="font-mono text-base md:text-lg font-medium text-ink-primary tracking-tight">
              softwaredesign<span className="text-accent">.io</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link flex items-center gap-1.5"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown size={14} strokeWidth={2} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                  <div className="bg-bg-tertiary border border-border-subtle rounded-2xl p-2 shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={s.href}
                        className="block px-4 py-3 rounded-xl hover:bg-bg-secondary transition-colors duration-150"
                      >
                        <div className="font-medium text-ink-primary text-body">{s.name}</div>
                        <div className="text-body-sm text-ink-tertiary mt-0.5 line-clamp-1">
                          {s.shortDescription}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/work" className={({ isActive }) => cn("nav-link", isActive && "active")}>
              Work
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => cn("nav-link", isActive && "active")}>
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => cn("nav-link", isActive && "active")}
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <LinkButton to="/contact" variant="primary" className="hidden lg:inline-flex !py-2.5 !px-5 text-body-sm">
              Start a project
            </LinkButton>
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-bg-primary pt-20 overflow-y-auto">
          <div className="px-6 py-8 flex flex-col gap-1">
            <div className="text-mono-sm uppercase tracking-wider text-ink-tertiary px-4 py-2 mt-2">
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={s.href}
                className="px-4 py-3 text-h2 font-medium text-ink-primary hover:text-accent transition-colors"
              >
                {s.name}
              </Link>
            ))}
            <div className="h-px bg-border-subtle my-4" />
            <Link
              to="/work"
              className="px-4 py-3 text-h2 font-medium text-ink-primary hover:text-accent transition-colors"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="px-4 py-3 text-h2 font-medium text-ink-primary hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-3 text-h2 font-medium text-ink-primary hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <div className="mt-8 px-2">
              <LinkButton to="/contact" variant="primary" className="w-full justify-center">
                Start a project
              </LinkButton>
            </div>
            <div className="mt-10 px-4">
              <div className="text-mono-sm text-ink-tertiary">Get in touch</div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-body text-ink-primary hover:text-accent transition-colors mt-1 block"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
