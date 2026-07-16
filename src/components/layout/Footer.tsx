import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { siteConfig } from "../../data/site";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-tertiary border-t border-border-subtle pt-16 pb-10">
      <Container size="narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-mono text-lg font-medium text-ink-primary tracking-tight">
                softwaredesign<span className="text-accent">.io</span>
              </span>
            </Link>
            <div className="space-y-5">
              <div>
                <h3 className="font-mono text-mono-sm uppercase tracking-wider text-accent mb-2">
                  Address
                </h3>
                <address className="not-italic text-body-sm text-ink-primary leading-relaxed">
                  <div>{siteConfig.address.street}</div>
                  <div>
                    {siteConfig.address.city}, {siteConfig.address.zip}
                  </div>
                </address>
              </div>
              <div>
                <h3 className="font-mono text-mono-sm uppercase tracking-wider text-accent mb-2">
                  Contact
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-body-sm text-ink-primary hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-mono text-mono-sm uppercase tracking-wider text-accent mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.href}
                    className="text-body-sm text-ink-primary hover:text-accent transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio column */}
          <div>
            <h3 className="font-mono text-mono-sm uppercase tracking-wider text-accent mb-5">
              Studio
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-body-sm text-ink-primary hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-body-sm text-ink-primary hover:text-accent transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-body-sm text-ink-primary hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="font-mono text-mono-sm uppercase tracking-wider text-accent mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-body-sm text-ink-primary hover:text-accent transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-body-sm text-ink-primary hover:text-accent transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="text-mono-sm text-ink-primary">© {year} SoftwareDesign.io</div>
          <div className="text-mono-sm text-ink-primary">Boston, MA</div>
        </div>
      </Container>
    </footer>
  );
}
