export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  services: string[];
  year: string;
  duration: string;
  industry: string;
  headline: string;
  outcome: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
}

// PLACEHOLDER CASE STUDIES — replace with real client work before production launch
export const caseStudies: CaseStudy[] = [
  {
    slug: "brewlab-coffee",
    client: "BrewLab Coffee",
    category: "Web Design",
    services: ["Web Design"],
    year: "2025",
    duration: "6 weeks",
    industry: "Food & Beverage / E-commerce",
    headline: "Custom Shopify storefront for a Boston-based specialty coffee roaster.",
    outcome: "34% lift in checkout conversion in 60 days.",
    challenge:
      "BrewLab had outgrown their off-the-shelf Shopify theme. Mobile conversion was lagging desktop by 18 points, the brand had matured beyond what the template could express, and the team wanted custom product pages that told the origin story behind each bean. Their existing site felt like every other coffee shop online.",
    approach:
      "We started with a one-week discovery — analyzed three months of checkout funnel data, interviewed eight repeat customers, and audited the existing site against competitors. The data pointed to three high-leverage problems: mobile cart friction, weak product storytelling, and a discovery experience that didn't reflect the team's curatorial point of view. We redesigned the entire shopping experience around a custom product page template with origin storytelling, brewing notes, and a streamlined three-step mobile checkout. Engineering moved to a headless Shopify setup with a custom React frontend for full design control.",
    result:
      "Within 60 days of launch, mobile checkout conversion rose 41%. Desktop rose 28%. Overall checkout conversion lifted 34% blended. Average order value increased 12% from cross-sell improvements on the product page. The site now feels like a coffee shop online, not a coffee shop template.",
    metrics: [
      { label: "Checkout conversion", value: "+34%" },
      { label: "Mobile conversion", value: "+41%" },
      { label: "Average order value", value: "+12%" },
      { label: "Time to launch", value: "6 weeks" },
    ],
  },
  {
    slug: "linewise",
    client: "Linewise",
    category: "SaaS Design",
    services: ["SaaS Design", "UI/UX"],
    year: "2025",
    duration: "10 weeks",
    industry: "B2B SaaS / Operations",
    headline: "Full dashboard redesign for a series-A workflow automation platform.",
    outcome: "Active user count grew 2.4× in three months post-launch.",
    challenge:
      "Linewise had product-market fit but the interface had grown organically over three years of feature additions. New users churned during onboarding at twice the industry rate. Power users had built elaborate workarounds for missing functionality. The team needed a redesign that improved time-to-value for new users without breaking workflows for power users.",
    approach:
      "Three weeks of research — twelve user interviews split between new users and power users, full analytics audit, and shadowing sessions with three customers at their actual desks. We mapped two completely different jobs-to-be-done that the existing UI was trying to serve with one set of patterns. The redesign introduced a progressive disclosure pattern — a simple primary surface for new users, with power-user features one click deeper. Built a complete design system from scratch (the existing one had become a graveyard of one-off components). Engineering paired with us throughout to ensure no design promised something the system couldn't deliver.",
    result:
      "Onboarding completion rate doubled. Time-to-first-action dropped from 14 minutes to 4. Active user count grew 2.4× in the three months after launch. Net Promoter Score went from 32 to 61. The customer success team reported a 60% drop in onboarding-related support tickets.",
    metrics: [
      { label: "Active users", value: "2.4×" },
      { label: "Onboarding completion", value: "+102%" },
      { label: "Time to first action", value: "-71%" },
      { label: "NPS", value: "32 → 61" },
    ],
  },
  {
    slug: "northshore-roofing",
    client: "NorthShore Roofing",
    category: "Web Design",
    services: ["Web Design", "SEO", "Brand"],
    year: "2024",
    duration: "8 weeks",
    industry: "Home Services / Local Business",
    headline:
      "New site and content engine for a North Shore Massachusetts roofing contractor.",
    outcome: "8× more organic leads in nine months. Closed first commercial contract from a Google search.",
    challenge:
      "NorthShore Roofing was a strong local business hidden behind a weak digital presence. Their old site was a Wix template from 2018 with five pages of generic content. They were losing bids to bigger competitors with better online credibility. Most of their business came from referrals, but referrals weren't enough to support the growth they wanted.",
    approach:
      "We started with positioning — what made NorthShore actually different from the five other local roofers their prospects considered. Turns out: they were the only crew within an hour that specialized in slate and copper, both high-margin specialties. We rebuilt the entire site around that positioning. New brand direction. New photography (we hired a photographer for a half-day on a job site). A custom-built content engine with thirty pillar pages targeting specific roofing types, neighborhoods, and decision criteria. Local schema markup baked in everywhere.",
    result:
      "Eight times more inbound leads from organic search in the nine months after launch. Average project size grew 40% as the site attracted more slate and copper work specifically. NorthShore closed their first commercial-grade contract — a $180K hospital re-roof — from a Google search lead.",
    metrics: [
      { label: "Organic leads", value: "8×" },
      { label: "Average project size", value: "+40%" },
      { label: "Largest contract", value: "$180K" },
      { label: "Time to launch", value: "8 weeks" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
