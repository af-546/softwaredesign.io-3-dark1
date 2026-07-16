export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-transparent-builds-change-everything",
    title: "Why transparent builds change everything",
    excerpt:
      "The biggest risk in software projects isn't bad code. It's surprise at handoff. Incremental delivery eliminates that.",
    category: "Process",
    date: "2025-11-12",
    readTime: "6 min",
    author: "SoftwareDesign Team",
    tags: ["process", "collaboration", "engineering"],
    content: [
      "Most agencies operate on a waterfall model disguised as agile. You get a kickoff deck, then silence for three weeks, then a big reveal.",
      "We ship working prototypes and production PRs throughout the engagement. Your team sees progress in staging, reviews real code, and can redirect early.",
      "The result: fewer change orders, faster timelines, and stakeholders who actually understand what they're getting before launch day.",
      "If your current partner can't show you something tangible every sprint, that's a red flag worth paying attention to.",
    ],
  },
  {
    slug: "design-systems-for-startups",
    title: "Design systems for startups: when and how",
    excerpt:
      "You don't need a design system on day one. But you need one before your third engineer joins.",
    category: "Design Systems",
    date: "2025-10-28",
    readTime: "8 min",
    author: "SoftwareDesign Team",
    tags: ["design systems", "startups", "scale"],
    content: [
      "Startups often ask us when to invest in a design system. The answer depends on your team size and shipping velocity.",
      "Before 3 engineers: focus on core flows and a simple component library in Figma. Don't over-engineer tokens.",
      "At 3-10 engineers: invest in documented components, spacing scales, and a shared Figma library. This is when inconsistency starts costing real time.",
      "Beyond 10: you need automated linting, Storybook, and design-dev sync rituals. We help teams at every stage.",
    ],
  },
  {
    slug: "saas-onboarding-that-converts",
    title: "SaaS onboarding that actually converts",
    excerpt:
      "Time-to-value is the metric that matters. Here's how we design onboarding flows that get users to their first win fast.",
    category: "SaaS",
    date: "2025-09-15",
    readTime: "7 min",
    author: "SoftwareDesign Team",
    tags: ["saas", "onboarding", "conversion"],
    content: [
      "Many SaaS products lose signups before first value. That is often an onboarding design problem, not a marketing one.",
      "We start every onboarding redesign by mapping the shortest path to a meaningful outcome. Not feature tours. Not empty dashboards. Real work completed.",
      "Progressive disclosure beats information dumps. Show users exactly what they need for step one, then reveal complexity as they earn it.",
      "Measure time-to-first-workflow, not time-on-page. The metrics that matter are behavioral, not vanity.",
    ],
  },
  {
    slug: "local-seo-for-service-businesses",
    title: "Local SEO for service businesses that actually works",
    excerpt:
      "NorthShore Roofing went from zero web presence to page-one rankings. Here's the content strategy behind it.",
    category: "Web Design",
    date: "2025-08-02",
    readTime: "5 min",
    author: "SoftwareDesign Team",
    tags: ["seo", "local business", "content"],
    content: [
      "Local service businesses don't need viral content. They need pages that answer the exact questions their customers search for.",
      "We built NorthShore's site around service-specific landing pages: slate roofing, copper work, commercial contracts. Each page targets real search intent.",
      "Project galleries with alt text, structured data, and location-specific copy compound over months. SEO is a design decision, not an afterthought.",
      "Eight months in, they closed their first commercial contract from a Google search. That's the ROI of content-first web design.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
