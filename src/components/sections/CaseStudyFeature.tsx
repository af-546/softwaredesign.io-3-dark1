import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../../data/caseStudies";
import Container from "../layout/Container";
import Section from "../layout/Section";
import RevealOnScroll from "../effects/RevealOnScroll";
import Tag from "../ui/Tag";

export default function CaseStudyFeature() {
  return (
    <Section variant="secondary">
      <Container>
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 md:mb-20 flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="eyebrow mb-4">Selected work</div>
              <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
                Live in production.
              </h2>
            </div>
            <Link
              to="/work"
              className="btn-text text-body-lg"
              aria-label="See all our work"
            >
              All work →
            </Link>
          </div>
        </RevealOnScroll>

        <div className="space-y-20 md:space-y-28">
          {caseStudies.map((study, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <RevealOnScroll key={study.slug}>
                <Link
                  to={`/work/${study.slug}`}
                  className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  {/* Visual */}
                  <div
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle ${
                      isReverse ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="absolute inset-0 mesh-bg">
                      <CaseStudyVisual category={study.category} client={study.client} />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Tag variant="accent">{study.category}</Tag>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isReverse ? "lg:order-1" : ""}>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="font-mono text-mono-sm text-ink-tertiary">{study.year}</span>
                      <span className="text-ink-muted">·</span>
                      <span className="font-mono text-mono-sm text-ink-tertiary">
                        {study.duration}
                      </span>
                      <span className="text-ink-muted">·</span>
                      <span className="font-mono text-mono-sm text-ink-tertiary">
                        {study.industry}
                      </span>
                    </div>

                    <h3 className="font-serif font-semibold text-h1 md:text-display-md text-ink-primary leading-tight">
                      {study.headline}
                    </h3>

                    <p className="mt-5 text-body-lg text-ink-secondary leading-relaxed">
                      {study.outcome}
                    </p>

                    {/* Metrics */}
                    <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
                      {study.metrics.slice(0, 4).map((m) => (
                        <div key={m.label}>
                          <div className="font-mono text-mono-sm text-ink-tertiary uppercase tracking-wider">
                            {m.label}
                          </div>
                          <div className="mt-1 font-serif font-semibold text-h2 text-ink-primary">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all duration-300">
                      Read the case study
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function CaseStudyVisual({ category, client }: { category: string; client: string }) {
  if (category === "Web Design") {
    return (
      <svg viewBox="0 0 600 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="60" width="480" height="330" rx="12" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
        <rect x="60" y="60" width="480" height="32" rx="12" fill="#FAFAF7" />
        <rect x="60" y="92" width="480" height="1" fill="rgba(10,10,10,0.06)" />
        <circle cx="78" cy="76" r="4" fill="#FF5F57" />
        <circle cx="92" cy="76" r="4" fill="#FEBC2E" />
        <circle cx="106" cy="76" r="4" fill="#28C840" />
        <rect x="130" y="68" width="280" height="16" rx="8" fill="#F2F1EC" />
        <text x="100" y="170" fontSize="28" fontFamily="Fraunces, Georgia, serif" fill="#0A0A0A">
          {client}
        </text>
        <text x="100" y="200" fontSize="13" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
          Crafted for conversion.
        </text>
        <rect x="100" y="220" width="120" height="36" rx="18" fill="#0A0A0A" />
        <text x="160" y="242" fontSize="11" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle">
          Get started →
        </text>
        <rect x="100" y="280" width="190" height="80" rx="8" fill="#FAFAF7" />
        <rect x="120" y="300" width="100" height="6" rx="3" fill="rgba(10,10,10,0.2)" />
        <rect x="120" y="316" width="150" height="4" rx="2" fill="rgba(10,10,10,0.12)" />
        <rect x="120" y="328" width="80" height="4" rx="2" fill="rgba(10,10,10,0.12)" />
        <rect x="320" y="280" width="190" height="80" rx="8" fill="#FAFAF7" />
        <circle cx="350" cy="320" r="20" fill="#0F62FE" opacity="0.15" />
        <rect x="382" y="304" width="100" height="6" rx="3" fill="rgba(10,10,10,0.2)" />
        <rect x="382" y="318" width="120" height="4" rx="2" fill="rgba(10,10,10,0.12)" />
        <rect x="382" y="330" width="60" height="4" rx="2" fill="rgba(10,10,10,0.12)" />
      </svg>
    );
  }
  if (category === "SaaS Design") {
    return (
      <svg viewBox="0 0 600 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="60" width="480" height="330" rx="12" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
        <rect x="60" y="60" width="100" height="330" rx="12" fill="#FAFAF7" />
        <rect x="158" y="60" width="2" height="330" fill="#FAFAF7" />
        <rect x="80" y="90" width="60" height="20" rx="4" fill="#0F62FE" opacity="0.15" />
        <text x="90" y="104" fontSize="9" fontWeight="500" fontFamily="-apple-system, sans-serif" fill="#0F62FE">
          Dashboard
        </text>
        <text x="80" y="138" fontSize="9" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
          Projects
        </text>
        <text x="80" y="160" fontSize="9" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
          Workflows
        </text>
        <text x="80" y="182" fontSize="9" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
          Team
        </text>
        <text x="80" y="204" fontSize="9" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
          Settings
        </text>
        <text x="180" y="105" fontSize="14" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
          {client}
        </text>
        <rect x="180" y="120" width="340" height="1" fill="rgba(10,10,10,0.06)" />
        <rect x="180" y="135" width="100" height="60" rx="6" fill="#FAFAF7" />
        <text x="190" y="155" fontSize="7" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
          ACTIVE
        </text>
        <text x="190" y="180" fontSize="18" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
          2,847
        </text>
        <rect x="290" y="135" width="100" height="60" rx="6" fill="#FAFAF7" />
        <text x="300" y="155" fontSize="7" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
          VOLUME
        </text>
        <text x="300" y="180" fontSize="18" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
          $42K
        </text>
        <rect x="400" y="135" width="100" height="60" rx="6" fill="#E6EEFF" />
        <text x="410" y="155" fontSize="7" fontFamily="ui-monospace, monospace" fill="#0F62FE" letterSpacing="0.5">
          GROWTH
        </text>
        <text x="410" y="180" fontSize="18" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0F62FE">
          +24%
        </text>
        <rect x="180" y="210" width="320" height="160" rx="6" fill="#FAFAF7" />
        <polyline
          points="200,340 240,320 280,310 320,295 360,310 400,275 440,250 480,260 500,230"
          fill="none"
          stroke="#0F62FE"
          strokeWidth="2"
        />
        <polyline
          points="200,340 240,320 280,310 320,295 360,310 400,275 440,250 480,260 500,230 500,360 200,360"
          fill="#0F62FE"
          fillOpacity="0.1"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 600 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="60" width="480" height="330" rx="12" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
      <text x="300" y="240" fontSize="32" fontFamily="Fraunces, Georgia, serif" fill="#0A0A0A" textAnchor="middle">
        {client}
      </text>
      <text x="300" y="270" fontSize="11" fontFamily="ui-monospace, monospace" fill="#0F62FE" textAnchor="middle" letterSpacing="2">
        {category.toUpperCase()}
      </text>
    </svg>
  );
}
