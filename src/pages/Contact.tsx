import { lazy, Suspense, type ReactNode } from "react";
import { MapPin, Mail, Clock, type LucideIcon } from "lucide-react";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import ContactForm from "../components/sections/ContactForm";
import RevealOnScroll from "../components/effects/RevealOnScroll";
import Card from "../components/ui/Card";
import { siteConfig } from "../data/site";
import { useSEO } from "../lib/seo";

const MapEmbed = lazy(() => import("../components/sections/MapEmbed"));

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  email: siteConfig.email,
  url: "https://softwaredesign.io/contact",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.address.coords.lat,
    longitude: siteConfig.address.coords.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

function MapSkeleton() {
  return (
    <div
      className="w-full h-full rounded-xl bg-bg-secondary border border-border-subtle animate-pulse"
      aria-hidden="true"
    />
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 px-4 py-3.5">
      <Icon size={14} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={1.75} />
      <div className="min-w-0">
        <p className="font-mono text-mono-sm uppercase tracking-wider text-ink-tertiary mb-1">
          {label}
        </p>
        <div className="font-mono text-mono-sm text-ink-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function ContactMethods() {
  return (
    <div className="rounded-xl border border-border-subtle bg-bg-tertiary divide-y divide-border-subtle">
      <ContactRow icon={Mail} label="Email">
        <a
          href={`mailto:${siteConfig.email}`}
          className="hover:text-accent transition-colors break-all"
        >
          {siteConfig.email}
        </a>
      </ContactRow>

      <ContactRow icon={Clock} label="Studio hours">
        {siteConfig.hours.label}
        <br />
        {siteConfig.hours.time}
      </ContactRow>

      <ContactRow icon={MapPin} label="Studio">
        <address className="not-italic">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.zip}
          </a>
        </address>
      </ContactRow>
    </div>
  );
}

export default function Contact() {
  useSEO({
    title: "Contact — SoftwareDesign.io",
    description:
      "Start a project with us. Boston-based design studio. We reply to every message within one business day.",
    jsonLd: contactJsonLd,
  });

  return (
    <>
      <section className="pt-32 md:pt-40 pb-0 bg-bg-primary mesh-bg">
        <Container>
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Get in touch</div>
            <h1 className="font-serif font-semibold text-display-md md:text-display-lg lg:text-display-xl text-ink-primary leading-[1.05] tracking-tight">
              Discuss your project{" "}
              <span className="text-accent serif-italic">with us.</span>
            </h1>
            <p className="mt-8 text-body-lg md:text-h3 text-ink-secondary leading-relaxed max-w-3xl">
              We respond to every inquiry within one business day.
            </p>
          </div>
        </Container>
      </section>

      <Section variant="default" className="pt-8 md:pt-10 pb-16 md:pb-24">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,38rem)_1fr] gap-8 lg:gap-12 items-start">
            <RevealOnScroll>
              <Card padding="default">
                <ContactForm />
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="space-y-5">

                <ContactMethods />

                <div className="h-[200px] sm:h-[220px] lg:h-[240px]">
                  <Suspense fallback={<MapSkeleton />}>
                    <MapEmbed height="100%" />
                  </Suspense>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>
    </>
  );
}
