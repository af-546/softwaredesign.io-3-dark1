import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import { LinkButton } from "../ui/Button";
import { PhoneMockup, LaptopMockup, TabletMockup } from "./DeviceMockups";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-20 lg:pb-24 overflow-hidden mesh-bg">
      <Container>
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="eyebrow inline-flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              Boston-based design studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
              className="font-serif font-semibold text-display-md md:text-display-lg lg:text-display-xl text-ink-primary leading-[1.05] tracking-tight"
            >
              Software design{" "}
              <span className="serif-italic text-accent">that ships.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
              className="mt-6 text-body-lg text-ink-secondary leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              We design and ship software for small businesses and SaaS teams. From landing pages
              to full product redesigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.25 }}
              className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
            >
              <LinkButton to="/contact" variant="primary" className="w-full sm:w-auto">
                Start a project
                <ArrowRight size={16} strokeWidth={2} />
              </LinkButton>
              <LinkButton to="/work" variant="secondary" className="w-full sm:w-auto">
                See our work
              </LinkButton>
            </motion.div>
          </div>

          {/* Right: device cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="relative aspect-[5/4] hidden md:block"
          >
            {/* Laptop background */}
            <div className="absolute left-0 right-0 top-[8%] w-full max-w-[560px] mx-auto">
              <LaptopMockup />
            </div>
            {/* Phone foreground */}
            <div
              className="absolute -left-2 lg:-left-4 bottom-0 w-[34%] max-w-[180px] animate-drift"
              style={{ animationDelay: "0s" }}
            >
              <PhoneMockup />
            </div>
            {/* Tablet floating right */}
            <div
              className="absolute right-0 top-0 w-[42%] max-w-[260px] animate-drift"
              style={{ animationDelay: "1.5s" }}
            >
              <TabletMockup />
            </div>
          </motion.div>

          {/* Mobile: just laptop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="md:hidden mt-4"
          >
            <LaptopMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
