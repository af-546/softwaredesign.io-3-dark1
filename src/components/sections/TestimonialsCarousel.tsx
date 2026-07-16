import { testimonials } from "@/data/site";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

export function TestimonialsCarousel() {
  return (
    <section className="section-padding section-spacing section-band">
      <Reveal className="section-container mb-12">
        <p className="eyebrow mb-4">Client feedback</p>
        <h2 className="heading-lg">What clients say</h2>
        <p className="text-ink-soft mt-3 max-w-xl">Real projects, real outcomes.</p>
      </Reveal>
      <RevealStagger className="section-container grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <RevealItem key={item.company}>
            <blockquote className="glass-panel rounded-2xl p-6 md:p-7 h-full flex flex-col hover:border-brand-light/25 transition-colors">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-brand-light text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-ink-soft leading-relaxed flex-1">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 pt-5 border-t border-white/10">
                <p className="font-display font-semibold text-ink">{item.author}</p>
                <p className="text-sm text-ink-muted mt-1">{item.company}</p>
              </footer>
            </blockquote>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
