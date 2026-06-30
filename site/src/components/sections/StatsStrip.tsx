import { stats } from "@/data/site";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

export function StatsStrip() {
  return (
    <section className="section-padding py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="text-center">
            <p className="font-display text-4xl sm:text-5xl font-bold text-gradient">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-ink-muted mt-2 font-mono uppercase tracking-wider">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
