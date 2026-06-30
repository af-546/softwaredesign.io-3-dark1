import { usePageTitle } from "@/hooks/usePageTitle";
import { pricingTiers } from "@/data/pricing";
import { Reveal } from "@/components/ui/Reveal";
import { ROICalculator } from "@/components/ui/ROICalculator";
import { useApp } from "@/context/AppContext";
import { faqs } from "@/data/site";
import { Accordion } from "@/components/ui/Accordion";

export function PricingPage() {
  usePageTitle("Pricing", "Transparent pricing for design and engineering engagements");
  const { setBookingOpen } = useApp();

  return (
    <div className="section-padding pt-32 pb-20 max-w-7xl mx-auto">
      <Reveal className="text-center mb-16 max-w-2xl mx-auto">
        <p className="eyebrow mb-4">Pricing</p>
        <h1 className="heading-xl mb-6">Honest numbers. Real scope.</h1>
        <p className="text-ink-soft text-lg">
          50% on kickoff, 25% at midpoint, 25% on launch. No surprise invoices.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {pricingTiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.1}>
            <div
              className={`bento-card h-full flex flex-col ${
                tier.highlighted ? "border-neon-cyan/40 shadow-neon ring-1 ring-neon-cyan/20" : ""
              }`}
            >
              {tier.highlighted && (
                <span className="font-mono text-[10px] text-neon-cyan uppercase mb-3">Most popular</span>
              )}
              <h2 className="font-display text-2xl font-bold">{tier.name}</h2>
              <p className="text-3xl font-display font-bold text-gradient mt-2">{tier.price}</p>
              <p className="text-sm text-ink-soft mt-3 mb-6">{tier.description}</p>
              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ink-soft">
                    <span className="text-neon-lime">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setBookingOpen(true)}
                className={tier.highlighted ? "btn-primary w-full" : "btn-ghost w-full"}
                data-cursor="pointer"
              >
                {tier.cta}
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-20">
        <ROICalculator />
      </Reveal>

      <Reveal>
        <h2 className="heading-md text-center mb-8">Pricing FAQ</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs.slice(0, 3)} />
        </div>
      </Reveal>
    </div>
  );
}
