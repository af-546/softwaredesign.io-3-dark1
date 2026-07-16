import Container from "../components/layout/Container";
import { LinkButton } from "../components/ui/Button";
import { useSEO } from "../lib/seo";

export default function NotFound() {
  useSEO({ title: "Page not found — SoftwareDesign.io" });

  return (
    <section className="min-h-[80vh] flex items-center bg-bg-primary mesh-bg pt-32 pb-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="font-mono text-mono-md text-ink-tertiary mb-6">404</div>
          <h1 className="font-serif font-semibold text-display-md md:text-display-lg lg:text-display-xl text-ink-primary leading-[1.05] tracking-tight">
            This page drifted off the <span className="text-accent serif-italic">map.</span>
          </h1>
          <p className="mt-8 text-body-lg text-ink-secondary leading-relaxed">
            The page doesn't exist. Let's get you back to
            something useful.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <LinkButton to="/" variant="primary">
              Back to home
            </LinkButton>
            <LinkButton to="/work" variant="secondary">
              See our work
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
