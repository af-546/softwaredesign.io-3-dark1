import { Link, useParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { NotFoundPage } from "./NotFoundPage";

export function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  usePageTitle(study?.client ?? "Case Study", study?.summary);

  if (!study) return <NotFoundPage />;

  return (
    <article className="section-padding pt-32 pb-20 max-w-4xl mx-auto">
      <Reveal>
        <Link to="/work" className="text-sm text-brand-light hover:underline mb-8 inline-block" data-cursor="pointer">
          ← Back to work
        </Link>
        <div className="flex flex-wrap gap-2 mb-6">
          {study.services.map((s) => (
            <span key={s} className="font-mono text-[10px] uppercase px-3 py-1 rounded-full bg-brand/10 text-brand-light">
              {s}
            </span>
          ))}
        </div>
        <h1 className="heading-xl mb-4">{study.client}</h1>
        <p className="text-xl text-brand-light font-display font-semibold mb-4">{study.outcome}</p>
        <a
          href={study.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-ink-soft hover:text-brand-light transition-colors mb-8 inline-block"
        >
          Visit site →
        </a>
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { label: "Industry", value: study.industry },
            { label: "Duration", value: study.duration },
            { label: "Year", value: study.year },
          ].map((item) => (
            <div key={item.label} className="glass-panel rounded-xl p-4">
              <p className="text-xs text-ink-muted font-mono uppercase">{item.label}</p>
              <p className="text-sm mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {[
        { title: "Challenge", content: study.challenge },
        { title: "Approach", content: study.approach },
      ].map((section) => (
        <Reveal key={section.title} className="mb-12">
          <h2 className="heading-md mb-4">{section.title}</h2>
          <p className="text-ink-soft leading-relaxed text-lg">{section.content}</p>
        </Reveal>
      ))}

      <Reveal className="mb-16">
        <h2 className="heading-md mb-6">Results</h2>
        <ul className="space-y-4">
          {study.results.map((result) => (
            <li key={result} className="flex gap-3 glass-panel rounded-xl p-4">
              <span className="text-neon-lime">✓</span>
              <span className="text-ink-soft">{result}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <ContactCTA />
    </article>
  );
}
