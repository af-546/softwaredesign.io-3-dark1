import { clientLogos } from "../../data/site";
import Container from "../layout/Container";

export default function LogoStrip() {
  return (
    <section className="py-16 md:py-20 bg-bg-secondary border-y border-border-subtle">
      <Container>
        <p className="text-center text-mono-sm uppercase tracking-wider text-ink-tertiary mb-7">
          Trusted by founders, operators, and product teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 lg:gap-x-16">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-22 md:h-22 w-auto max-w-[65rem] md:max-w-[48rem] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
