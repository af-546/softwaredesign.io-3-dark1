import { usePageTitle } from "@/hooks/usePageTitle";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { CapabilitiesMarquee } from "@/components/sections/CapabilitiesMarquee";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { ProcessInteractive } from "@/components/sections/ProcessInteractive";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { InteractiveTools } from "@/components/sections/InteractiveTools";
import { TechStack } from "@/components/sections/TechStack";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { NewsletterBanner } from "@/components/sections/NewsletterBanner";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function HomePage() {
  usePageTitle("SoftwareDesign.io — Software design that ships.");

  return (
    <>
      <Hero />
      <StatsStrip />
      <CapabilitiesMarquee />
      <TrustedBy />
      <ServicesBento />
      <ProcessInteractive />
      <WorkShowcase />
      <BeforeAfterSection />
      <HorizontalGallery />
      <TestimonialsCarousel />
      <InteractiveTools />
      <TechStack />
      <BlogPreview />
      <FAQ />
      <NewsletterBanner />
      <ContactCTA />
    </>
  );
}
