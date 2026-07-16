import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";
import RevealOnScroll from "../effects/RevealOnScroll";
import Card from "../ui/Card";

const steps = [
  {
    number: "01",
    title: "Discover",
    accent: false,
    description:
      "Stakeholder interviews, user research, competitive audit. Design starts after we understand the problem — not before.",
    duration: "1–2 weeks",
  },
  {
    number: "02",
    title: "Design",
    accent: true,
    description:
      "Wireframes, visual direction, high-fidelity prototypes. You see the work as it evolves, not at the end.",
    duration: "2–4 weeks",
  },
  {
    number: "03",
    title: "Validate",
    accent: false,
    description:
      "Real-user testing on prototypes before anyone writes code.",
    duration: "1 week",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Production code with weekly demos. Designers and engineers paired throughout. No mystery deltas at handoff.",
    duration: "2–6 weeks",
    accent: true,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Final QA, performance pass, accessibility audit. We ship — then stick around for 7 days of post-launch support.",
    duration: "1 week + 7 days",
  },
];

export default function ProcessTimeline() {
  return (
    <Section variant="default" spacing="tight">
      <Container>
        <RevealOnScroll>
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="eyebrow mb-4">How we work</div>
            <h2 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
              A process built for{" "}
              <span className="text-accent serif-italic">shipping.</span>
            </h2>
            <p className="mt-5 text-body-lg text-ink-secondary leading-relaxed">
              Five phases with weekly updates and real users in the loop before code gets written.
              Same rhythm whether the engagement runs six weeks or six months.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px"
            aria-hidden="true"
          >
            <div className="w-full h-full shimmer-line" style={{ borderRadius: "1px" }} />
          </div>

          <div>
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={step.number} className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className={`${isLeft ? "lg:order-1" : "lg:order-2"} relative`}
                  >
                    <Card padding="default" className="relative">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="font-mono text-mono-sm font-medium text-accent">
                          {step.number}
                        </span>
                        <span className="font-mono text-mono-sm text-ink-tertiary">
                          {step.duration}
                        </span>
                      </div>
                      <h3
                        className={`text-h3 font-semibold leading-tight ${
                          step.accent ? "text-accent" : "text-ink-primary"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-body text-ink-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                  <div className={isLeft ? "lg:order-2" : "lg:order-1"} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
