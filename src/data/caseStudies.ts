import { publicAsset } from "@/lib/publicAsset";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  services: string[];
  year: string;
  duration: string;
  outcome: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string[];
  website: string;
  screenshot: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rowans-creative",
    title: "Custom portfolio site for a Boston-based cinematographer.",
    client: "Rowan Lim",
    category: "Web Design",
    industry: "Photography / Videography",
    services: ["Web Design"],
    year: "2025",
    duration: "6 weeks",
    outcome: "A portfolio that finally matches the quality of the work behind it.",
    summary:
      "Custom portfolio site for a Boston-based cinematographer and creative director.",
    challenge:
      "Rowan's Portfolio website had outgrown a personal biography theme. The template couldn't showcase stills and motion work the way they deserved, mobile felt like an afterthought, and the site read like a generic resume instead of a hire-ready portfolio.",
    approach:
      "We started with discovery: site analytics, competitor audits, and mapping where visitors dropped off. The redesign centers full-bleed imagery, project storytelling, and a clean path to inquiry. Built on a custom frontend so layout and motion weren't limited by an off-the-shelf theme.",
    results: [
      "Portfolio pages built around project narratives, not photo grids",
      "Mobile layout tuned for browsing work on set and on the go",
      "Clear hire flow that turned casual visitors into project inquiries",
    ],
    website: "https://rowanscreative.com",
    screenshot: publicAsset("case-studies/rowans-creative.jpg"),
  },
  {
    slug: "umbulizer",
    title: "Custom product site for a medical hardware startup.",
    client: "Umbulizer",
    category: "Web Design",
    industry: "Health / Hardware",
    services: ["Web Design", "Product Strategy"],
    year: "2025",
    duration: "Multi-week engagement",
    outcome: "A production site that explains UMV-001 clearly, converting visitors into demo requests.",
    summary:
      "Custom marketing site for Umbulizer, designed and built for production launch.",
    challenge:
      "Umbulizer had outgrown their old site. They needed a credible product story for UMV-001, FDA authorization messaging, and clear paths to demo requests, without burying visitors in technical detail or building pages for features that were not ready to ship.",
    approach:
      "We mapped the buyer journey for clinical and procurement audiences, then designed and built a custom React site. Positioning, page structure, and UI shipped together. When scope drifted toward unvalidated features, we pushed back and kept the launch focused on what mattered for conversion.",
    results: [
      "Custom site live at umbulizer-website.vercel.app",
      "Product story, clinical proof, and demo CTAs on one cohesive experience",
      "Production-ready build the team can extend as the product roadmap evolves",
    ],
    website: "https://umbulizer-website.vercel.app",
    screenshot: publicAsset("case-studies/umbulizer.jpg"),
  },
  {
    slug: "clean-house-nj",
    title: "Modern site for a top-rated Jersey City and Hoboken cleaning company.",
    client: "CleanHouse NJ",
    category: "Web Design",
    industry: "Home Services / Local Business",
    services: ["Web Design", "SEO", "Brand"],
    year: "2024",
    duration: "8 weeks",
    outcome: "A polished site that matches their five-star reputation in Hudson County.",
    summary:
      "New website for CleanHouse NJ, a professional home cleaning company serving Jersey City and Hoboken.",
    challenge:
      "CleanHouse NJ was earning strong reviews locally, but their online presence did not reflect that. The old site looked like a generic cleaning template. It did not explain their services clearly, did not build trust for first-time visitors, and was not set up to capture quote requests from homeowners, renters, or Airbnb hosts searching in Hudson County.",
    approach:
      "We rebuilt cleanhousenj.com around what converts local cleaning leads: a clear hero with service area messaging, dedicated pages for standard, deep, move-in/out, recurring, and rental turnover cleaning, trust badges, client reviews, and a quote form built for mobile. We added a before-and-after section to show real results, structured content for Jersey City and Hoboken SEO, and a brand direction that feels premium without looking like every other maid service template.",
    results: [
      "Launch-ready site at cleanhousenj.com with quote flow and service pages",
      "Before-and-after proof and review sections that build trust fast",
      "Local SEO structure for Hudson County neighborhoods and service types",
    ],
    website: "https://cleanhousenj.com",
    screenshot: publicAsset("case-studies/clean-house-nj.jpg"),
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const normalized =
    slug === "sarahs-cleaners" || slug === "sarah-cleaners" ? "clean-house-nj" : slug;
  return caseStudies.find((c) => c.slug === normalized);
}
