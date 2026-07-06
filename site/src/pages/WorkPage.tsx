import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { caseStudies } from "@/data/caseStudies";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyVisual } from "@/components/illustrations/CaseStudyVisual";
import { ContactCTA } from "@/components/sections/ContactCTA";

const categories = ["All", ...new Set(caseStudies.map((c) => c.category))];

export function WorkPage() {
  usePageTitle("Work", "Case studies and portfolio projects from SoftwareDesign.io");
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <div className="section-padding pt-32 pb-20">
      <Reveal className="section-container mb-12">
        <p className="eyebrow mb-4">Portfolio</p>
        <h1 className="heading-xl mb-6">Work that moves metrics</h1>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-brand/15 text-brand-light border border-brand/30"
                  : "glass-panel text-ink-soft hover:text-ink"
              }`}
              data-cursor="pointer"
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.08}>
            <Link
              to={`/work/${study.slug}`}
              className="bento-card block h-full group"
              data-cursor="pointer"
            >
              <div className="aspect-[4/3] rounded-xl bg-[#0a1020] border border-white/5 mb-4 overflow-hidden p-3">
                <CaseStudyVisual
                  screenshot={study.screenshot}
                  website={study.website}
                  client={study.client}
                />
              </div>
              <h2 className="font-display text-xl font-bold group-hover:text-gradient transition-all">
                {study.client}
              </h2>
              <p className="text-sm text-ink-soft mt-2 line-clamp-2">{study.summary}</p>
              <p className="text-sm text-brand-light mt-3 font-medium">{study.outcome}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <ContactCTA />
      </div>
    </div>
  );
}
