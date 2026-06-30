import { useState } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { TextScramble } from "@/components/ui/TextScramble";
import { ParticleField } from "@/components/ui/ParticleField";
import { useApp } from "@/context/AppContext";

export function LabPage() {
  usePageTitle("Lab", "Interactive playground — test every feature on this site");
  const { addToast, setLightboxImage, setBookingOpen } = useApp();
  const [slider, setSlider] = useState(50);
  const [clicks, setClicks] = useState(0);

  return (
    <div className="section-padding pt-32 pb-20 max-w-7xl mx-auto">
      <Reveal className="mb-16">
        <p className="eyebrow mb-4">Lab</p>
        <h1 className="heading-xl mb-4">
          <TextScramble text="Interactive playground" />
        </h1>
        <p className="text-ink-soft text-lg max-w-2xl">
          Every advanced feature on this site, in one place. Click, drag, and explore.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <Reveal>
          <div className="relative glass-panel rounded-2xl p-8 min-h-[300px] overflow-hidden">
            <ParticleField />
            <div className="relative z-10">
              <h2 className="heading-md mb-4">Particle field</h2>
              <p className="text-ink-soft text-sm">Canvas-powered ambient particles with connection lines.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <BeforeAfterSlider />
        </Reveal>
      </div>

      <Reveal className="mb-16">
        <h2 className="heading-md mb-6">Feature triggers</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Toast notification", action: () => addToast("Lab toast activated!", "success") },
            { label: "Open lightbox", action: () => setLightboxImage("Lab Preview") },
            { label: "Book a call", action: () => setBookingOpen(true) },
            { label: "Click counter", action: () => { setClicks((c) => c + 1); addToast(`Click #${clicks + 1}`, "info"); } },
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={btn.action}
              className="btn-ghost text-sm"
              data-cursor="pointer"
            >
              {btn.label}
            </button>
          ))}
        </div>
        {clicks > 0 && (
          <p className="mt-4 font-mono text-neon-cyan text-sm">Total clicks: {clicks}</p>
        )}
      </Reveal>

      <Reveal>
        <h2 className="heading-md mb-6">Custom range slider</h2>
        <input
          type="range"
          min={0}
          max={100}
          value={slider}
          onChange={(e) => setSlider(Number(e.target.value))}
          className="w-full accent-neon-magenta"
        />
        <div
          className="mt-4 h-32 rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-gold transition-all duration-100"
          style={{ opacity: slider / 100 }}
        />
        <p className="font-mono text-sm text-ink-muted mt-2">Value: {slider}</p>
      </Reveal>
    </div>
  );
}
