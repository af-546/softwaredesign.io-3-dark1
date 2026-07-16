import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import Container from "../layout/Container";
import Section from "../layout/Section";
import RevealOnScroll from "../effects/RevealOnScroll";
import Card from "../ui/Card";

function StarRating({ rating }: { rating: 4 | 5 }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.5}
          className={
            i < rating
              ? "fill-accent text-accent"
              : "fill-transparent text-border-subtle"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialGrid() {
  return (
    <Section variant="default">
      <Container>
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="eyebrow mb-4">Client feedback</div>
            <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
              What clients say.
            </h2>
            <p className="mt-5 text-body-lg text-ink-secondary leading-relaxed">
              Real projects, real outcomes.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, idx) => (
            <RevealOnScroll key={testimonial.author} delay={idx * 80}>
              <Card as="article" padding="default" className="h-full flex flex-col">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-5 flex-1">
                  <p className="text-body text-ink-primary leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-6 pt-6 border-t border-border-subtle">
                  <cite className="not-italic">
                    <div className="font-semibold text-ink-primary">
                      {testimonial.author}
                    </div>
                    <div className="mt-0.5 text-body-sm text-ink-tertiary">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </cite>
                </footer>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
