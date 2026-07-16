import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import Container from "./Container";
import Section from "./Section";
import { cn } from "../../lib/utils";
import { useSEO } from "../../lib/seo";

export interface LegalSection {
  id: string;
  title: string;
  icon: LucideIcon;
  content: ReactNode;
}

interface LegalDocumentProps {
  title: string;
  seoTitle: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalDocument({
  title,
  seoTitle,
  summary,
  lastUpdated,
  sections,
}: LegalDocumentProps) {
  useSEO({ title: seoTitle });

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-bg-primary mesh-bg">
        <Container>
          <div className="max-w-3xl">
            <div className="eyebrow text-accent mb-6">Legal</div>
            <h1 className="font-serif font-semibold text-display-md md:text-display-lg text-ink-primary leading-tight tracking-tight">
              {title}
            </h1>
            <p className="mt-6 text-body-lg text-ink-secondary leading-relaxed">{summary}</p>
            <p className="mt-4 font-mono text-mono-sm text-ink-tertiary">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <Section variant="default" spacing="tight">
        <Container>
          <div className="grid lg:grid-cols-[11rem_1fr] xl:grid-cols-[12rem_1fr] gap-10 lg:gap-16 xl:gap-20">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <p className="font-mono text-mono-sm uppercase tracking-wider text-accent mb-4">
                On this page
              </p>
              <ul className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto pb-1 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
                {sections.map((section) => (
                  <li key={section.id} className="flex-shrink-0 lg:flex-shrink">
                    <a
                      href={`#${section.id}`}
                      className={cn(
                        "block rounded-md px-2.5 py-1.5 text-body-sm text-ink-tertiary",
                        "hover:text-accent hover:bg-accent-soft/40 transition-colors",
                      )}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="min-w-0 max-w-reading">
              {sections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    className={cn(
                      "scroll-mt-32",
                      index > 0 && "border-t border-border-subtle pt-10 mt-10",
                    )}
                  >
                    <h2 className="flex items-center gap-3 font-sans font-medium text-body-lg text-accent mb-4">
                      <span className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-accent" strokeWidth={1.75} />
                      </span>
                      {section.title}
                    </h2>
                    <div className="text-body text-ink-secondary leading-[1.65] space-y-4 [&_a]:text-accent [&_a]:decoration-border [&_a:hover]:text-ink-primary ">
                      {section.content}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
