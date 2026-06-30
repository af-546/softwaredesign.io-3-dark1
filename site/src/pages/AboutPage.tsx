import { usePageTitle } from "@/hooks/usePageTitle";
import { principles, processSteps, site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function AboutPage() {
  usePageTitle("About", site.description);

  return (
    <div className="section-padding pt-32 pb-20 max-w-5xl mx-auto">
      <Reveal>
        <p className="eyebrow mb-4">About us</p>
        <h1 className="heading-xl mb-8">
          A Boston studio that <span className="text-gradient">ships</span>
        </h1>
        <p className="text-xl text-ink-soft leading-relaxed max-w-3xl mb-16">
          Founded in 2023 by designers and engineers who were tired of agencies that
          delivered decks instead of products. We're a nine-person studio at{" "}
          {site.address.street}, {site.address.city}.
        </p>
      </Reveal>

      <Reveal className="mb-20">
        <h2 className="heading-md mb-8">Our principles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div key={p.number} className="bento-card">
              <span className="font-mono text-neon-cyan text-sm">{p.number}</span>
              <h3 className="font-display font-semibold mt-2">{p.title}</h3>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mb-20">
        <h2 className="heading-md mb-8">How we work</h2>
        <div className="space-y-4">
          {processSteps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start glass-panel rounded-2xl p-6">
              <span className="font-mono text-neon-cyan">{step.number}</span>
              <div>
                <h3 className="font-display font-semibold">{step.title}</h3>
                <p className="text-sm text-ink-soft mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <ContactCTA />
    </div>
  );
}
