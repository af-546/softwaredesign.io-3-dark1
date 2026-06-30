import { Link } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactCTA() {
  const { setBookingOpen } = useApp();

  return (
    <section className="section-padding py-24">
      <Reveal>
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 aurora-bg opacity-50" />
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
              <Link to="/contact" className="btn-ghost" data-cursor="pointer">
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
