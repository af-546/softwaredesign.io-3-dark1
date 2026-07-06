import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-24 bg-abyss/50">
      <div className="section-padding py-16">
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold" data-cursor="pointer">
              <span className="text-gradient">Software</span>Design.io
            </Link>
            <p className="mt-4 text-ink-soft text-sm leading-relaxed">{site.description}</p>
            <p className="mt-4 text-sm text-ink-muted">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-brand-light transition-colors"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-xs text-ink-muted">
              {site.address.street}, {site.address.city}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-light mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-ink-soft hover:text-brand-light transition-colors"
                    data-cursor="pointer"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-light mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About" },
                { to: "/work", label: "Work" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-soft hover:text-brand-light transition-colors"
                    data-cursor="pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-light mb-4">
              Studio
            </h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>{site.hours.label}</li>
              <li>{site.hours.time}</li>
              <li className="pt-2">
                <Link to="/contact" className="text-brand-light hover:underline" data-cursor="pointer">
                  Start a project →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} SoftwareDesign.io. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-brand-light transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-brand-light transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
