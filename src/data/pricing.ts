export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    price: "$12k-$25k",
    description: "Single landing page or small SMB site. Fast, focused, production-ready.",
    features: [
      "Discovery & strategy (1 week)",
      "Custom design (no templates)",
      "Responsive build",
      "SEO foundation",
      "30-day post-launch support",
    ],
    cta: "Start a project",
  },
  {
    name: "Scale",
    price: "$30k-$75k",
    description: "Multi-page sites, SaaS surface redesigns, or product design engagements.",
    features: [
      "Everything in Launch",
      "User research & testing",
      "Design system components",
      "Milestone reviews & async updates",
      "Engineering handoff & QA",
      "60-day post-launch support",
    ],
    highlighted: true,
    cta: "Contact us",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full product design, mobile apps, or ongoing retainer partnerships.",
    features: [
      "Everything in Scale",
      "Dedicated team allocation",
      "Multi-platform design",
      "Salesforce/NetSuite admin",
      "Priority support",
      "Quarterly strategy reviews",
    ],
    cta: "Let's talk",
  },
];

export const roiDefaults = {
  currentConversion: 2.5,
  monthlyVisitors: 10000,
  avgOrderValue: 150,
  projectCost: 35000,
};
