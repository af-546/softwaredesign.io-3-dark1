import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function ServicesPage() {
  usePageTitle("Services", "Web design, SaaS design, UI/UX, product design, and more.");

  return (
    <div className="section-padding pt-32 pb-20 max-w-7xl mx-auto">
      <Reveal className="mb-16">
        <p className="eyebrow mb-4">Services</p>
        <h1 className="heading-xl mb-6">Everything you need to ship</h1>
        <p className="text-xl text-ink-soft max-w-2xl">
          Six service lines. One standard of craft. Pick what you need or engage us end to end.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.08}>
            <Link
              to={`/services/${service.slug}`}
              className="bento-card block group h-full"
              data-cursor="pointer"
            >
              <span className="font-mono text-brand-light text-sm uppercase tracking-wider">
                {service.shortTitle}
              </span>
              <h2 className="font-display text-2xl font-bold mt-3 group-hover:text-gradient transition-all">
                {service.title}
              </h2>
              <p className="text-ink-soft mt-3 leading-relaxed">{service.description}</p>
              <span className="inline-block mt-6 text-brand-light text-sm">Learn more →</span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <ContactCTA />
      </div>
    </div>
  );
}
