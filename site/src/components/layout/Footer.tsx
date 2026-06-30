import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="font-display text-2xl font-bold">
              <span className="text-gradient">Software</span>Design.io
            </Link>
            <p className="mt-4 text-ink-soft text-sm leading-relaxed">{site.description}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neon-cyan mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-ink-soft hover:text-neon-cyan transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neon-cyan mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About" },
                { to: "/work", label: "Work" },
                { to: "/team", label: "Team" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ink-soft hover:text-neon-cyan transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neon-cyan mb-4">Newsletter</h4>
            <p className="text-sm text-ink-soft mb-4">Design insights, shipped weekly.</p>
            <NewsletterForm className="flex-col sm:flex-row" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} SoftwareDesign.io. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-neon-cyan transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-neon-cyan transition-colors">
              Terms
            </Link>
            <a href={`mailto:${site.email}`} className="hover:text-neon-cyan transition-colors">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
