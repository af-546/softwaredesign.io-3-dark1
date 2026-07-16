import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import Container from "../layout/Container";
import Section from "../layout/Section";
import RevealOnScroll from "../effects/RevealOnScroll";
import Card from "../ui/Card";
import {
  WebDesignMock,
  SaasDesignMock,
  UIUXMock,
  ProductDesignMock,
  ErpAdminMock,
  MobileMock,
} from "./ServiceMockups";

const mockMap: Record<string, React.ComponentType> = {
  "web-design": WebDesignMock,
  "saas-design": SaasDesignMock,
  "ui-ux": UIUXMock,
  "product-design": ProductDesignMock,
  "salesforce-netsuite-admin": ErpAdminMock,
  "mobile-app-design": MobileMock,
};

export default function ServiceGrid() {
  return (
    <Section variant="default">
      <Container>
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="eyebrow mb-4">What we do</div>
            <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
              Six disciplines. One studio.
            </h2>
            <p className="mt-5 text-body-lg text-ink-secondary leading-relaxed">
              Design, engineering, and platform admin on the same team.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, idx) => {
            const Mock = mockMap[service.slug];
            return (
              <RevealOnScroll key={service.slug} delay={(idx % 3) * 80}>
                <Link
                  to={service.href}
                  className="group block h-full"
                  aria-label={`${service.name} — ${service.shortDescription}`}
                >
                  <Card hover padding="default" className="h-full">
                    <div className="aspect-[7/4.5] bg-bg-secondary rounded-2xl overflow-hidden mb-5 p-3 flex items-center justify-center">
                      {Mock && <Mock />}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-h3 font-semibold text-ink-primary leading-tight">
                        {service.name}
                      </h3>
                      <div className="w-9 h-9 -mt-1 flex-shrink-0 rounded-full border border-border-subtle flex items-center justify-center text-ink-tertiary group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </div>
                    </div>
                    <p className="mt-2 text-body-sm text-ink-tertiary leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </Card>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
