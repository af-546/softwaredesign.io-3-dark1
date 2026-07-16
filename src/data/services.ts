export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  heroSub: string;
  href: string;
  deliverables: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  priceRange: string;
}

export const services: Service[] = [
  {
    slug: "web-design",
    name: "Web Design",
    shortDescription:
      "Websites for restaurants, retailers, and local businesses.",
    heroHeadline: "Websites that work as hard as you do.",
    heroSub:
      "Custom websites for restaurants, retailers, and modern merchants. Built to convert. Built to last.",
    href: "/services/web-design",
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
        step: "01",
        title: "Discover",
        description:
          "One week of stakeholder interviews, customer research, and competitive analysis.",
      },
      {
        step: "02",
        title: "Design",
        description: "Two to three weeks of visual direction, wireframes, and high-fidelity comps.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Two to three weeks of production code. Weekly demo calls. You see progress as it happens.",
      },
      {
        step: "04",
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
    priceRange: "Depends on scope",
  },
  {
    slug: "saas-design",
    name: "SaaS Design",
    shortDescription:
      "Dashboards and product surfaces that feel as good as they perform.",
    heroHeadline: "Product surfaces that feel as good as they perform.",
    heroSub:
      "From early-stage MVPs to mature platform redesigns. We design SaaS products that users actually want to use.",
    href: "/services/saas-design",
    deliverables: [
      {
        title: "Product audit",
        description:
          "Walk-throughs with current users, heuristic evaluation, jobs-to-be-done analysis. We find the highest-leverage problems first.",
      },
      {
        title: "Information architecture",
        description: "Sitemap, navigation patterns, mental model. The bones before the skin.",
      },
      {
        title: "Design system",
        description:
          "Tokens, components, patterns. Documented in Figma and ready for engineering to consume.",
      },
      {
        title: "Core flows redesigned",
        description:
          "Onboarding, primary workflows, settings. Every screen, every state — loading, empty, error, success.",
      },
      {
        title: "Engineering handoff",
        description:
          "Specs, component documentation, dev-ready exports. We work with your engineers, not over them.",
      },
      {
        title: "Post-launch measurement",
        description:
          "Define success metrics up front. Measure them after launch. Iterate based on data.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "Existing product walkthrough, user interviews, analytics review.",
      },
      {
        step: "02",
        title: "Strategy",
        description: "Information architecture, design principles, success metrics.",
      },
      {
        step: "03",
        title: "Design",
        description: "Design system, core flows, prototype, validate with users.",
      },
      {
        step: "04",
        title: "Handoff",
        description: "Engineering specs, ongoing design support during build.",
      },
    ],
    faqs: [
      {
        question: "Do you work with our existing design system?",
        answer:
          "Yes. We extend existing systems where they work. We rebuild them where they don't. We're not precious about whose name is on the file.",
      },
      {
        question: "Can you handle platform configuration and integrations?",
        answer:
          "Yes. We handle Salesforce and NetSuite configuration, workflows, and integrations. See our Salesforce & NetSuite Admin service.",
      },
      {
        question: "How do you handle complex enterprise workflows?",
        answer:
          "Hours of stakeholder interviews. Workflow mapping before any UI work. Enterprise SaaS is design for people doing their job, not consumer apps with extra buttons.",
      },
      {
        question: "What's the typical SaaS design engagement size?",
        answer:
          "Depends on the size. A single flow redesign might be on our premium side. A full platform rebuild with design system from scratch can run $100K+.",
      },
    ],
    priceRange: "Gold Tier",
  },
  {
    slug: "ui-ux",
    name: "UI/UX",
    shortDescription: "Research, wireframes, prototypes, and design systems.",
    heroHeadline: "Research-driven design. Built in Figma.",
    heroSub:
      "User research, wireframes, prototypes, and full design systems. The foundation every great product needs.",
    href: "/services/ui-ux",
    deliverables: [
      {
        title: "User research",
        description:
          "Interviews, surveys, ethnographic studies. Real data on how people actually use your product.",
      },
      {
        title: "Wireframes",
        description: "Low-fidelity layouts that focus the conversation on logic, not aesthetics.",
      },
      {
        title: "Visual design",
        description:
          "High-fidelity comps. Pixel-perfect. Every state covered.",
      },
      {
        title: "Interactive prototypes",
        description: "Figma prototypes that move like the real product.",
      },
      {
        title: "Design system",
        description:
          "Tokens, components, documentation. Set up for scale and consistency across the team.",
      },
      {
        title: "Accessibility audit",
        description: "WCAG 2.1 AA compliance baked in from the start. No retrofitting.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research",
        description: "Discover the problem before designing the solution.",
      },
      {
        step: "02",
        title: "Sketch",
        description: "Low-fidelity wireframes. Explore many paths cheap and fast.",
      },
      {
        step: "03",
        title: "Refine",
        description: "High-fidelity design. Real content. Real interactions.",
      },
      {
        step: "04",
        title: "Validate",
        description: "Test with users. Refine based on what we learn.",
      },
    ],
    faqs: [
      {
        question: "What deliverables do we get?",
        answer:
          "Figma file with all design work, design system documentation, research findings doc, usability testing, and a written handoff for engineering.",
      },
      {
        question: "Do you do user research from scratch?",
        answer: "Yes. We recruit, screen, interview, and analyze.",
      },
      {
        question: "What if we already have a design system?",
        answer:
          "We extend it. We don't start from scratch unless what exists is genuinely broken.",
      },
      {
        question: "Can you work alongside our in-house designers?",
        answer:
          "Often the best engagements. We bring outside perspective and capacity. Your team brings institutional knowledge.",
      },
    ],
    priceRange: "Varies",
  },
  {
    slug: "product-design",
    name: "Product Design",
    shortDescription: "Strategy and design for new products and major redesigns.",
    heroHeadline: "End-to-end product thinking.",
    heroSub:
      "Discovery to delivery. Strategy to specs. We help product teams ship what matters.",
    href: "/services/product-design",
    deliverables: [
      {
        title: "Product strategy",
        description: "Market positioning, target user, value proposition, roadmap.",
      },
      {
        title: "User research",
        description: "Qualitative and quantitative research to ground every decision.",
      },
      {
        title: "Feature prioritization",
        description: "RICE, MoSCoW, or whatever framework fits. We help you say no to the right things.",
      },
      {
        title: "Design & prototyping",
        description: "From rough sketches to production-ready Figma files.",
      },
      {
        title: "Engineering collaboration",
        description: "Pairing with engineering throughout build, not just at handoff.",
      },
      {
        title: "Launch planning",
        description: "Go-to-market strategy, in-product onboarding, measurement plan.",
      },
      {
        title: "Post-launch iteration",
        description: "Measure what we shipped. Iterate on what isn't working.",
      },
      {
        title: "Long-term partnership",
        description: "Many engagements turn into ongoing retainers. We're in it for the long haul.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Frame",
        description: "What problem are we solving and for whom?",
      },
      {
        step: "02",
        title: "Explore",
        description: "Many directions. Many sketches. Many prototypes.",
      },
      {
        step: "03",
        title: "Refine",
        description: "Converge on the best path. Make it production-ready.",
      },
      {
        step: "04",
        title: "Ship",
        description: "Launch. Measure. Iterate.",
      },
    ],
    faqs: [
      {
        question: "How is product design different from UI/UX?",
        answer:
          "Product design is broader. It includes business strategy, user research, feature prioritization, and post-launch measurement. UI/UX is one part of product design.",
      },
      {
        question: "Do you take ownership of product decisions?",
        answer:
          "We provide opinionated recommendations grounded in research. Final decisions stay with you. We are advisors with strong opinions, not vendors waiting for instructions.",
      },
      {
        question: "What size companies do you work with?",
        answer:
          "Series A to mid-stage growth. Smaller than that, your needs are simpler than what we charge for. Larger than that, you need an in-house product org.",
      },
      {
        question: "Do you work on physical products?",
        answer:
          "Software only. We pair well with industrial design firms for hardware-plus-software products.",
      },
    ],
    priceRange: "Diamond Tier",
  },
  {
    slug: "salesforce-netsuite-admin",
    name: "Salesforce & NetSuite Admin",
    shortDescription:
      "Configuration, workflows, integrations, and ongoing admin.",
    heroHeadline: "Your CRM and ERP. Configured right.",
    heroSub:
      "Salesforce and NetSuite setup, customization, and day-to-day admin. We keep your systems aligned with how your team actually works.",
    href: "/services/salesforce-netsuite-admin",
    deliverables: [
      {
        title: "Org setup & configuration",
        description:
          "Greenfield setup or cleanup of an existing org. Objects, fields, page layouts, and record types structured for clarity.",
      },
      {
        title: "Workflows & approvals",
        description:
          "Flow Builder, Process Builder, SuiteFlow, and approval chains that match real business rules — not default templates.",
      },
      {
        title: "Reports & dashboards",
        description:
          "Saved searches, custom reports, and executive dashboards your team will actually use.",
      },
      {
        title: "Integrations",
        description:
          "API connections, middleware (Zapier, Workato, Celigo), and bi-directional sync between Salesforce, NetSuite, and adjacent tools.",
      },
      {
        title: "User roles & permissions",
        description:
          "Profiles, permission sets, and role hierarchies scoped to least privilege. No accidental admin access.",
      },
      {
        title: "Data migration & cleanup",
        description:
          "Import mapping, deduplication, field normalization, and validation rules before data goes live.",
      },
      {
        title: "Training & documentation",
        description:
          "Admin runbooks, user guides, and hands-on training so your team isn't dependent on us forever.",
      },
      {
        title: "Ongoing admin support",
        description:
          "Retainer-based maintenance — new fields, workflow tweaks, user onboarding, and release prep.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "Audit the current org, map workflows, and define what success looks like.",
      },
      {
        step: "02",
        title: "Configure",
        description: "Build objects, fields, flows, and permissions in a sandbox first.",
      },
      {
        step: "03",
        title: "Integrate",
        description: "Connect systems, migrate data, and validate end-to-end before go-live.",
      },
      {
        step: "04",
        title: "Hand off",
        description: "Deploy to production, train your team, and document everything.",
      },
    ],
    faqs: [
      {
        question: "Do you work with both Salesforce and NetSuite?",
        answer:
          "Yes. We configure and admin both platforms — separately or together when you need CRM and ERP in sync.",
      },
      {
        question: "Can you work in our existing org?",
        answer:
          "Most engagements start with an existing org that needs cleanup, new features, or better integrations. We audit first, then prioritize.",
      },
      {
        question: "What integrations do you handle?",
        answer:
          "Salesforce ↔ NetSuite sync, e-commerce platforms, billing systems, marketing tools, and custom API connections via middleware or direct integration.",
      },
      {
        question: "What's the engagement model?",
        answer:
          "Fixed-scope projects for setup or migration. Monthly retainers for ongoing admin and release support.",
      },
    ],
    priceRange: "Price depends on Project",
  },
  {
    slug: "mobile-app-design",
    name: "Mobile App Design",
    shortDescription: "iOS and Android, native or cross-platform.",
    heroHeadline: "iOS and Android. Designed for the platforms they live on.",
    heroSub:
      "Native iOS, native Android, or cross-platform when it fits. We design mobile apps that respect platform conventions and user expectations.",
    href: "/services/mobile-app-design",
    deliverables: [
      {
        title: "Platform research",
        description:
          "iOS HIG and Material Design fluency. We design for the platform, not around it.",
      },
      {
        title: "Information architecture",
        description: "Tab structure, navigation patterns, mental model.",
      },
      {
        title: "Visual design",
        description: "Pixel-perfect mockups for every screen, every state, every platform.",
      },
      {
        title: "Interactive prototypes",
        description: "Figma prototypes that feel native. Test on real devices before code is written.",
      },
      {
        title: "Motion & micro-interactions",
        description: "Polish that separates great apps from forgettable ones.",
      },
      {
        title: "App store assets",
        description: "Screenshots, icon, descriptions, preview video. Optimized for App Store and Play Store.",
      },
      {
        title: "Engineering handoff",
        description: "SwiftUI/UIKit or Jetpack Compose specs. Or React Native if cross-platform fits.",
      },
      {
        title: "Post-launch optimization",
        description: "App Store conversion optimization, A/B testing screenshots, ASO basics.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "Target users, platform decisions, feature set.",
      },
      {
        step: "02",
        title: "Design",
        description: "Wireframes, visual design, prototypes, motion.",
      },
      {
        step: "03",
        title: "Test",
        description: "Real-device prototype testing. Refine based on feedback.",
      },
      {
        step: "04",
        title: "Ship",
        description: "Engineering handoff, app store assets, launch support.",
      },
    ],
    faqs: [
      {
        question: "Native or React Native?",
        answer:
          "Depends. Performance-critical, deeply platform-integrated apps: native. Cross-platform apps with shared logic: React Native. We help you decide based on the specific use case.",
      },
      {
        question: "Do you build the apps too?",
        answer:
          "We design and handle React Native builds in-house. For native iOS/Android engineering, we partner with vetted specialists.",
      },
      {
        question: "Can you do app store optimization?",
        answer:
          "Yes. Icon design, screenshot strategy, preview video, keyword research. It's often the difference between an app that installs and one that doesn't.",
      },
      {
        question: "How long does a mobile design project take?",
        answer:
          "Six to twelve weeks for design. Build adds another eight to sixteen weeks depending on platform and complexity.",
      },
    ],
    priceRange: "Varies based on Project",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
