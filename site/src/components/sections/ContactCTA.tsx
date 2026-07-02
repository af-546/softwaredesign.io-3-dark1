import { MagneticButton, MagneticLink } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { useApp } from "@/context/AppContext";

export function ContactCTA() {
  const { setBookingOpen } = useApp();

  return (
    <section className="section-padding py-20 md:py-28">
      <Reveal>
        <div className="section-container glass-panel rounded-2xl p-10 sm:p-14 md:p-16 text-center relative overflow-hidden border-brand/10">
          <div className="absolute inset-0 aurora-bg opacity-40" />
          <div className="relative z-10">
            <p className="eyebrow mb-4">Ready to ship?</p>
            <h2 className="heading-lg mb-6">Let's build something remarkable</h2>
            <p className="text-ink-soft max-w-lg mx-auto mb-10">
              Tell us about your project. We reply within one business day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton className="btn-primary" onClick={() => setBookingOpen(true)}>
                Book a call
              </MagneticButton>
              <MagneticLink to="/contact" className="btn-ghost">
                Contact us
              </MagneticLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
