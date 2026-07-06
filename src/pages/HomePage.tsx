import { usePageTitle } from "@/hooks/usePageTitle";
import { Hero } from "@/components/sections/Hero";
import { CapabilitiesMarquee } from "@/components/sections/CapabilitiesMarquee";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { StudioHighlights } from "@/components/sections/StudioHighlights";
import { ProcessInteractive } from "@/components/sections/ProcessInteractive";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
// import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { TechStack } from "@/components/sections/TechStack";
// import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function HomePage() {
  usePageTitle("Software design that ships.");

  return (
    <>
      <Hero />
      <CapabilitiesMarquee />
      <TrustedBy />
      <ServicesBento />
      <StudioHighlights />
      <ProcessInteractive />
      <WorkShowcase />
      {/* <BeforeAfterSection /> */}
      <HorizontalGallery />
      <TestimonialsCarousel />
      <TechStack />
      {/* <BlogPreview /> */}
      <FAQ />
      <ContactCTA />
    </>
  );
}
