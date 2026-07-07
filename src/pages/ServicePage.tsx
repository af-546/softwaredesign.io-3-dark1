import { Link, useParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getServiceBySlug } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { NotFoundPage } from "./NotFoundPage";

export function ServicePage() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  usePageTitle(service?.title ?? "Service", service?.description);

  if (!service) return <NotFoundPage />;

  const related = caseStudies.filter((c) =>
    c.services.some((s) => s.toLowerCase().includes(service.shortTitle.toLowerCase().split(" ")[0])),
  );

  return (
    <div className="section-padding pt-32 pb-20 max-w-4xl mx-auto">
      <Reveal>
        <Link to="/services" className="text-sm text-neon-cyan hover:underline mb-8 inline-block" data-cursor="pointer">
          ← All services
        </Link>
        <h1 className="heading-xl mb-4">{service.title}</h1>
        <p className="text-xl text-ink-soft mb-8">{service.tagline}</p>
        <p className="text-ink-soft leading-relaxed mb-10">{service.description}</p>
        <div className="flex gap-4 mb-16">
          <Link to="/contact" className="btn-primary" data-cursor="pointer">
            Contact us
          </Link>
          <Link to="/work" className="btn-ghost" data-cursor="pointer">
            See related work
          </Link>
        </div>
      </Reveal>

      <Reveal className="mb-16">
        <h2 className="heading-md mb-6">Deliverables</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.deliverables.map((d) => (
            <div key={d.title} className="bento-card">
              <h3 className="font-display font-semibold">{d.title}</h3>
              <p className="text-sm text-ink-soft mt-2">{d.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mb-16">
        <h2 className="heading-md mb-6">Process</h2>
        <div className="space-y-3">
          {service.process.map((step) => (
            <div key={step.number} className="flex gap-4 glass-panel rounded-xl p-5">
              <span className="font-mono text-neon-cyan">{step.number}</span>
              <div>
                <h3 className="font-display font-semibold">{step.title}</h3>
                <p className="text-sm text-ink-soft mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {related.length > 0 && (
        <Reveal className="mb-16">
          <h2 className="heading-md mb-6">Related work</h2>
          <div className="space-y-4">
            {related.map((study) => (
              <Link
                key={study.slug}
                to={`/work/${study.slug}`}
                className="block glass-panel rounded-xl p-5 hover:border-neon-cyan/30 transition-colors"
                data-cursor="pointer"
              >
                <h3 className="font-display font-semibold">{study.client}</h3>
                <p className="text-sm text-neon-gold mt-1">{study.outcome}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal className="mb-16">
        <h2 className="heading-md mb-6">FAQ</h2>
        <Accordion items={service.faqs} />
      </Reveal>

      <ContactCTA />
    </div>
  );
}
