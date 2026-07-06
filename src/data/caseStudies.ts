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
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "brewlab",
    title: "Custom Shopify storefront for a Boston-based specialty coffee roaster.",
    client: "BrewLab Coffee",
    category: "Web Design",
    industry: "Food & Beverage / E-commerce",
    services: ["Web Design"],
    year: "2025",
    duration: "Multi-week engagement",
    outcome: "Stronger checkout flow and a brand that finally matched the product.",
    summary:
      "Custom Shopify storefront for a Boston-based specialty coffee roaster.",
    challenge:
      "BrewLab's existing site looked like every other coffee shop template. Cart abandonment was high and the brand's craft positioning wasn't coming through online.",
    approach:
      "We started with customer interviews and a competitive audit of specialty roasters. The new design emphasizes origin stories, roast profiles, and a streamlined checkout, built on Shopify with a fully custom theme.",
    results: [
      "Checkout conversion improved after launch",
      "Product storytelling lifted average order value",
      "Mobile experience became a core strength of the site",
    ],
  },
  {
    slug: "linewise",
    title: "Full dashboard redesign for a series-A workflow automation platform.",
    client: "Linewise",
    category: "SaaS Design",
    industry: "B2B SaaS / Operations",
    services: ["SaaS Design", "UI/UX"],
    year: "2025",
    duration: "Multi-week engagement",
    outcome: "A clearer dashboard that helped users find workflows faster.",
    summary:
      "Full dashboard redesign for a series-A workflow automation platform.",
    challenge:
      "Linewise's dashboard had grown organically over two years. New features were bolted on without a coherent information architecture. Users struggled to find workflows and reporting was buried three clicks deep.",
    approach:
      "We ran a product audit, interviewed power users, and redesigned the navigation, dashboard, and workflow builder from the ground up. A new design system ensured engineering could ship consistently.",
    results: [
      "Active usage grew after the redesign shipped",
      "Time to first workflow dropped significantly",
      "Navigation-related support requests fell",
    ],
  },
  {
    slug: "northshore",
    title: "New site and content engine for a North Shore Massachusetts roofing contractor.",
    client: "NorthShore Roofing",
    category: "Web Design",
    industry: "Home Services / Local Business",
    services: ["Web Design", "SEO", "Brand"],
    year: "2024",
    duration: "Multi-week engagement",
    outcome: "More qualified leads and a site that reflects their craft.",
    summary:
      "New site and content engine for a North Shore Massachusetts roofing contractor.",
    challenge:
      "NorthShore had no web presence beyond a basic listing page. Competitors dominated local search for slate and copper roofing, their specialty.",
    approach:
      "We built a content-first site showcasing craftsmanship through project galleries, service pages optimized for local SEO, and a quote request flow designed for high-intent visitors.",
    results: [
      "Organic lead volume increased steadily",
      "First commercial contract closed from search",
      "Service pages began ranking for target keywords",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
