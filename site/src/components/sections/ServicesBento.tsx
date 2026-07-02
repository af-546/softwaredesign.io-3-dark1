import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { TiltCard } from "@/components/ui/MagneticButton";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import {
  WebDesignMock,
  SaasDesignMock,
  UIUXMock,
  ProductDesignMock,
  ErpAdminMock,
  MobileMock,
} from "@/components/illustrations/ServiceMockups";

const mockMap: Record<string, ComponentType> = {
  "web-design": WebDesignMock,
  "saas-design": SaasDesignMock,
  "ui-ux": UIUXMock,
  "product-design": ProductDesignMock,
  "salesforce-netsuite": ErpAdminMock,
  "mobile-app-design": MobileMock,
};

export function ServicesBento() {
  return (
    <section className="section-padding py-20 md:py-28 section-band">
      <Reveal className="section-container">
        <p className="eyebrow mb-4">What we do</p>
        <h2 className="heading-lg mb-4">Six services. One standard.</h2>
        <p className="text-ink-soft max-w-xl mb-14">
          Every engagement gets the same level of craft, whether it is a landing page or a full
          product redesign.
        </p>
      </Reveal>
      <RevealStagger className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {services.map((service) => {
          const Mock = mockMap[service.slug];
          return (
            <RevealItem key={service.slug}>
              <TiltCard>
                <Link
                  to={`/services/${service.slug}`}
                  className="bento-card block h-full group"
                  data-cursor="pointer"
                >
                  <div className="mockup-shell aspect-[7/4.5] mb-5 p-3 flex items-center justify-center">
                    {Mock && <Mock />}
                  </div>
                  <h3 className="font-display text-xl font-bold group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed">{service.tagline}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-brand-light opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </Link>
              </TiltCard>
            </RevealItem>
          );
        })}
      </RevealStagger>
    </section>
  );
}
