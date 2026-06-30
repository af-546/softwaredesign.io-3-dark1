import { usePageTitle } from "@/hooks/usePageTitle";
import { team } from "@/data/team";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function TeamPage() {
  usePageTitle("Team", "Meet the SoftwareDesign.io studio team");

  return (
    <div className="section-padding pt-32 pb-20 max-w-7xl mx-auto">
      <Reveal className="mb-16 text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-4">Team</p>
        <h1 className="heading-xl mb-6">Nine people. Zero silos.</h1>
        <p className="text-ink-soft text-lg">
          Designers who code. Engineers who care about typography. Researchers who ship.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.06}>
            <div className="bento-card group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-magenta/30 flex items-center justify-center font-display text-xl font-bold mb-4 group-hover:scale-105 transition-transform">
                {member.image}
              </div>
              <h2 className="font-display text-xl font-bold">{member.name}</h2>
              <p className="text-neon-cyan text-sm font-mono mt-1">{member.role}</p>
              <p className="text-ink-soft text-sm mt-3 leading-relaxed">{member.bio}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {member.skills.map((skill) => (
                  <span key={skill} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-ink-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <ContactCTA />
      </div>
    </div>
  );
}
