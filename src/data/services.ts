export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  deliverables: { title: string; description: string }[];
  process: { number: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web Design",
    shortTitle: "Web Design",
    tagline: "Websites that work as hard as you do.",
    description:
      "Custom websites for restaurants, retailers, and modern merchants. Built to convert. Built to last.",
    deliverables: [
      {
        title: "Discovery & strategy",
        description:
          "Goals, target customer, competitive landscape. We define what success looks like before a single pixel is drawn.",
      },
      {
        title: "Brand & visual direction",
        description:
          "Mood boards, typography, color, photography direction. Your site should look like nobody else's.",
      },
      {
        title: "Custom design",
        description: "Every layout custom-designed. No templates. No theme retreads.",
      },
      {
        title: "Responsive build",
        description:
          "Production-grade React, Astro, or Webflow. Mobile-first. Built to load fast on every device.",
      },
      {
        title: "SEO foundation",
        description:
          "Schema markup, meta tags, sitemap, performance optimization. Built to rank from day one.",
      },
      {
        title: "Launch & handoff",
        description:
          "DNS, hosting, monitoring. Plus a written handoff doc and a 30-day post-launch support window.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Discover",
        description:
          "One week of stakeholder interviews, customer research, and competitive analysis.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Two to three weeks of visual direction, wireframes, and high-fidelity comps.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Two to three weeks of production code. Staging deploys and reviewable PRs so you track progress in real time.",
      },
      {
        number: "04",
        title: "Launch",
        description: "Final QA, performance pass, accessibility audit. Then we ship.",
      },
    ],
    faqs: [
      {
        question: "Do you use Wordpress or Webflow?",
        answer:
          "Depends on the project. For SMBs that need to update content frequently, Webflow or React is usually the right call. For high-traffic e-commerce, Shopify with a custom theme. We pick the tool that fits the use case, not the other way around.",
      },
      {
        question: "Can you migrate my existing site?",
        answer:
          "Yes. We handle redirects, SEO preservation, and content migration as part of the engagement.",
      },
      {
        question: "Do you handle ongoing updates after launch?",
        answer:
          "Optional. We offer a monthly retainer for content updates, performance monitoring, and small feature additions.",
      },
      {
        question: "How long does a typical web design project take?",
        answer:
          "Four to eight weeks depending on scope. Single landing page: 3-4 weeks. Multi-page SMB site: 6-8 weeks. E-commerce build: 8-12 weeks.",
      },
    ],
  },
  {
    slug: "saas-design",
    title: "SaaS Design",
    shortTitle: "SaaS Design",
    tagline: "Dashboards and product surfaces that feel as good as they perform.",
    description:
      "We design SaaS products that users actually want to open. Dashboards, workflows, and settings that reduce friction and increase retention.",
    deliverables: [
      {
        title: "Product audit",
        description:
          "Heuristic review, analytics review, and user interview synthesis to identify the highest-leverage improvements.",
      },
      {
        title: "Information architecture",
        description: "Navigation, data hierarchy, and workflow mapping before visual design begins.",
      },
      {
        title: "Design system",
        description: "Component library, tokens, and documentation your engineering team can ship against.",
      },
      {
        title: "High-fidelity screens",
        description: "Every key flow designed at production fidelity with interaction specs.",
      },
      {
        title: "Engineering handoff",
        description: "Annotated Figma files, edge cases documented, and paired sessions with your dev team.",
      },
      {
        title: "Post-launch iteration",
        description: "30 days of design support after launch to address real-user feedback.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Audit",
        description: "Review current product, analytics, and user feedback. Identify priority surfaces.",
      },
      {
        number: "02",
        title: "Design",
        description: "Wireframes to high-fidelity. Shared Figma and async walkthroughs with your product and engineering leads.",
      },
      {
        number: "03",
        title: "Validate",
        description: "Prototype testing with real users before engineering commits to build.",
      },
      {
        number: "04",
        title: "Ship",
        description: "Paired with engineering through implementation. No design drift at handoff.",
      },
    ],
    faqs: [
      {
        question: "Do you work with existing design systems?",
        answer:
          "Yes. We can extend your existing system or build a new one from scratch depending on the engagement scope.",
      },
      {
        question: "Can you redesign just one part of our product?",
        answer:
          "Absolutely. Many engagements start with a single high-impact surface like onboarding, dashboard, or settings.",
      },
      {
        question: "How do you handle complex data visualizations?",
        answer:
          "We design charts and tables with real data samples, not lorem ipsum. Accessibility and readability come first.",
      },
    ],
  },
  {
    slug: "ui-ux",
    title: "UI/UX",
    shortTitle: "UI/UX",
    tagline: "Research, wireframes, prototypes, and design systems.",
    description:
      "User-centered design from discovery through delivery. We validate assumptions with real users before code gets written.",
    deliverables: [
      {
        title: "User research",
        description: "Interviews, surveys, and usability testing to ground design decisions in evidence.",
      },
      {
        title: "Wireframes",
        description: "Low-fidelity layouts focused on structure, flow, and content hierarchy.",
      },
      {
        title: "Interactive prototypes",
        description: "Clickable prototypes for stakeholder review and user testing.",
      },
      {
        title: "Visual design",
        description: "High-fidelity UI with typography, color, and component specifications.",
      },
      {
        title: "Design system",
        description: "Reusable components and documentation for consistent implementation.",
      },
      {
        title: "Usability report",
        description: "Findings, recommendations, and prioritized next steps from testing sessions.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Research",
        description: "Understand users, context, and constraints before opening Figma.",
      },
      {
        number: "02",
        title: "Structure",
        description: "Wireframes and user flows validated with stakeholders and users.",
      },
      {
        number: "03",
        title: "Design",
        description: "Visual design and prototyping at production fidelity.",
      },
      {
        number: "04",
        title: "Test",
        description: "Usability testing on prototypes. Iterate before engineering starts.",
      },
    ],
    faqs: [
      {
        question: "How many user interviews do you typically run?",
        answer:
          "Five to eight for most projects. Enough to identify patterns without over-indexing on outliers.",
      },
      {
        question: "Do you facilitate workshops?",
        answer:
          "Yes. Journey mapping, design sprints, and stakeholder alignment sessions are part of most engagements.",
      },
    ],
  },
  {
    slug: "product-design",
    title: "Product Design",
    shortTitle: "Product Design",
    tagline: "Strategy and design for new products and major redesigns.",
    description:
      "End-to-end product design from concept to launch. We help you define what to build and design it right the first time.",
    deliverables: [
      {
        title: "Product strategy",
        description: "Market positioning, feature prioritization, and roadmap alignment with business goals.",
      },
      {
        title: "User journeys",
        description: "End-to-end flows mapped from first touch to retention.",
      },
      {
        title: "Concept exploration",
        description: "Multiple directions explored before committing to a single visual language.",
      },
      {
        title: "Production design",
        description: "Every screen and state designed for engineering handoff.",
      },
      {
        title: "Launch support",
        description: "Design QA during build and post-launch iteration based on user feedback.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Discover",
        description: "Stakeholder interviews, competitive audit, and user research.",
      },
      {
        number: "02",
        title: "Define",
        description: "Product requirements, user stories, and success metrics agreed before design.",
      },
      {
        number: "03",
        title: "Design",
        description: "Concepts to high-fidelity. Shared prototypes and async reviews throughout.",
      },
      {
        number: "04",
        title: "Build & launch",
        description: "Paired with engineering through implementation and launch.",
      },
    ],
    faqs: [
      {
        question: "Can you help us decide what to build?",
        answer:
          "Yes. Discovery and strategy are core to how we work. We won't design features we don't believe in.",
      },
      {
        question: "Do you work with early-stage startups?",
        answer:
          "We work with teams from pre-seed through Series B. Scope and timeline adjust to your stage.",
      },
    ],
  },
  {
    slug: "salesforce-netsuite",
    title: "Salesforce & NetSuite Admin",
    shortTitle: "CRM Admin",
    tagline: "Configuration, workflows, integrations, and ongoing admin.",
    description:
      "We configure and optimize Salesforce and NetSuite so your team spends less time fighting the system and more time selling.",
    deliverables: [
      {
        title: "System audit",
        description: "Review current configuration, workflows, and data quality.",
      },
      {
        title: "Workflow design",
        description: "Automations and approval flows that match how your team actually works.",
      },
      {
        title: "Integration setup",
        description: "Connect CRM, ERP, and marketing tools with clean data sync.",
      },
      {
        title: "Custom fields & objects",
        description: "Data model designed for reporting and day-to-day usability.",
      },
      {
        title: "Training & documentation",
        description: "Written guides and live training so your team can self-serve.",
      },
      {
        title: "Ongoing admin",
        description: "Optional retainer for updates, troubleshooting, and new feature rollout.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Audit",
        description: "Map current state, pain points, and integration gaps.",
      },
      {
        number: "02",
        title: "Plan",
        description: "Prioritized roadmap of configuration and workflow improvements.",
      },
      {
        number: "03",
        title: "Configure",
        description: "Implement changes in sandbox, test, and deploy to production.",
      },
      {
        number: "04",
        title: "Train",
        description: "Documentation and training sessions for your team.",
      },
    ],
    faqs: [
      {
        question: "Which Salesforce editions do you support?",
        answer: "Sales Cloud, Service Cloud, and custom objects on Enterprise and above.",
      },
      {
        question: "Can you migrate data between systems?",
        answer:
          "Yes. We handle data mapping, migration scripts, and validation as part of integration work.",
      },
    ],
  },
  {
    slug: "mobile-app-design",
    title: "Mobile App Design",
    shortTitle: "Mobile",
    tagline: "iOS and Android, native or cross-platform.",
    description:
      "Mobile experiences designed for thumbs, not mouse cursors. From onboarding to App Store assets.",
    deliverables: [
      {
        title: "Platform strategy",
        description: "Native vs cross-platform recommendation based on your timeline and budget.",
      },
      {
        title: "Mobile UX patterns",
        description: "Navigation, gestures, and flows optimized for small screens.",
      },
      {
        title: "Visual design",
        description: "Pixel-perfect screens for iOS and Android with platform-appropriate patterns.",
      },
      {
        title: "Prototyping",
        description: "Interactive prototypes for user testing and stakeholder review.",
      },
      {
        title: "App Store assets",
        description: "Screenshots, preview videos, and listing copy for launch.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Discover",
        description: "User research and competitive analysis for your category.",
      },
      {
        number: "02",
        title: "Design",
        description: "Wireframes to high-fidelity with platform-specific considerations.",
      },
      {
        number: "03",
        title: "Validate",
        description: "Prototype testing on real devices before development.",
      },
      {
        number: "04",
        title: "Handoff",
        description: "Annotated specs and paired sessions with your mobile dev team.",
      },
    ],
    faqs: [
      {
        question: "Do you design for both iOS and Android?",
        answer:
          "Yes. We follow platform guidelines while maintaining a consistent brand experience.",
      },
      {
        question: "Can you help with App Store submission?",
        answer:
          "We provide assets and guidance. Submission is typically handled by your engineering team or ours if engaged for build.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
