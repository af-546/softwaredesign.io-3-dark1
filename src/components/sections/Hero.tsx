import { MagneticButton, MagneticLink } from "@/components/ui/MagneticButton";
import { PhoneMockup, LaptopMockup, TabletMockup } from "@/components/illustrations/DeviceMockups";
import { Reveal } from "@/components/ui/Reveal";
import { useApp } from "@/context/AppContext";

export function Hero() {
  const { setBookingOpen } = useApp();

  return (
    <section className="relative min-h-[88vh] flex items-center section-padding pt-32 pb-16 overflow-hidden">
      <div className="section-container w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">Boston-based design studio</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="heading-xl mb-6">
              Software design <span className="text-gradient">that ships.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-ink-soft max-w-lg mb-10 leading-relaxed">
              Strategy, design, and engineering for ambitious SMBs and SaaS teams.
              Weekly demos, real research, and production-ready work from day one.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton className="btn-primary" onClick={() => setBookingOpen(true)}>
                Start a project →
              </MagneticButton>
              <MagneticLink to="/work" className="btn-ghost">
                See our work
              </MagneticLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative hidden md:block pointer-events-none select-none hero-mockups">
          <div className="relative mx-auto w-full max-w-[520px] aspect-[5/4]">
            <div className="absolute inset-x-0 top-[10%] mockup-shell p-1.5 shadow-neonSm">
              <LaptopMockup />
            </div>
            <div className="absolute left-0 bottom-0 w-[32%] max-w-[155px] mockup-shell p-1 shadow-neonSm">
              <PhoneMockup />
            </div>
            <div className="absolute right-0 top-[2%] w-[40%] max-w-[210px] mockup-shell p-1 shadow-neonSm">
              <TabletMockup />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:hidden max-w-sm mx-auto mockup-shell p-1.5">
          <LaptopMockup />
        </Reveal>
      </div>
    </section>
  );
}
