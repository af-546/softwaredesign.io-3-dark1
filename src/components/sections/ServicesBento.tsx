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
    <section className="section-padding section-spacing section-band">
      <Reveal className="section-container">
        <p className="eyebrow mb-4">What we do</p>
        <h2 className="heading-lg mb-4">Six services. One standard.</h2>
        <p className="text-ink-soft max-w-xl mb-14">
          Every engagement gets the same level of craft, whether it is a landing page or a full
          product redesign.
        </p>
      </Reveal>
      <RevealStagger className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
        {services.map((service) => {
          const Mock = mockMap[service.slug];
          return (
            <RevealItem key={service.slug} className="h-full">
              <TiltCard className="h-full">
                <Link
                  to={`/services/${service.slug}`}
                  className="bento-card flex flex-col h-full min-h-[420px] group"
                  data-cursor="pointer"
                >
                  <div className="mockup-shell aspect-[7/4.5] mb-5 p-3 flex items-center justify-center shrink-0 overflow-hidden">
                    {Mock && <Mock />}
                  </div>
                  <h3 className="font-display text-xl font-bold group-hover:text-gradient transition-all line-clamp-2 min-h-[3.25rem]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed line-clamp-2 flex-1">
                    {service.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-5 pt-4 border-t border-white/5 text-sm text-brand-light">
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
