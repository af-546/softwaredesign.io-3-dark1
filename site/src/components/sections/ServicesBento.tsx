import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { TiltCard } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

const colors = ["cyan", "magenta", "gold", "lime", "cyan", "magenta"];

export function ServicesBento() {
  return (
    <section className="section-padding py-24">
      <Reveal>
        <p className="eyebrow mb-4">What we do</p>
        <h2 className="heading-lg mb-4">Six services. One standard.</h2>
        <p className="text-ink-soft max-w-xl mb-12">
          Every engagement gets the same level of craft — whether it's a landing page or a full product redesign.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.08}>
            <TiltCard>
              <Link
                to={`/services/${service.slug}`}
                className={`bento-card block h-full group ${
                  i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
                }`}
                data-cursor="pointer"
              >
                <span className={`font-mono text-xs text-neon-${colors[i % colors.length]} uppercase tracking-wider`}>
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-bold mt-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{service.tagline}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </span>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
