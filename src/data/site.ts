import { publicAsset } from "@/lib/publicAsset";

export const site = {
  name: "SoftwareDesign.io",
  tagline: "Software design that ships.",
  description:
    "Design and engineering studio for ambitious SMBs and SaaS teams. We ship production web apps, design systems, and custom software from Boston.",
  email: "contact@softwaredesign.io",
  address: {
    street: "867 Boylston St, Floor 5",
    city: "Boston, MA 02116",
  },
  hours: {
    label: "Monday to Friday",
    time: "9:00 AM to 6:00 PM ET",
  },
  mapsUrl: "https://maps.google.com/?q=867+Boylston+St+Boston+MA+02116",
};

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most engagements run a few weeks to a couple of months depending on scope. We will give you a clear timeline after discovery.",
  },
  {
    question: "Do you work with clients outside Boston?",
    answer:
      "Most of our clients are remote. Boston is our home base but we work with teams across the US and internationally. Async Loom walkthroughs, shared Figma, and milestone reviews keep everyone aligned.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We use milestone-based billing tied to project phases. Everything is agreed upfront before work begins.",
  },
  {
    question: "Do you handle ongoing maintenance after launch?",
    answer:
      "Optional monthly retainer for content updates, performance monitoring, and small feature additions. We also include a post-launch support window with every project.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Standard mutual NDA. No fee. Send yours or use ours.",
  },
];

export const testimonials = [
  {
    quote:
      "We needed a site that did not look like every other cleaning website in Hudson County. They built something modern, made booking easy, and our quote requests picked up quickly.",
    author: "Mark Cohen",
    company: "CleanHouse NJ",
    rating: 5,
  },
  {
    quote:
      "From kickoff to production in weeks. Our old agency would still have been in the discovery deck.",
    author: "Rowan Lim",
    company: "Rowan Lims Photography",
    rating: 4,
  },
  {
    quote:
      "They pushed back on a feature we wanted and turned out they were right. Saved us from building the wrong thing.",
    author: "Shaheer Piracha",
    company: "Umbulizer",
    rating: 5,
  },
];

export const principles = [
  {
    title: "Craft over volume",
    description:
      "We take fewer projects than we could and put more time into each. The math works out better for everyone.",
  },
  {
    title: "Ship in increments",
    description:
      "Working prototypes and production PRs throughout the project. You review real output, not slide decks at phase gates.",
  },
  {
    title: "Real research, every time",
    description:
      "No assumptions about users we haven't talked to. We conduct user research and testing throughout the project.",
  },
  {
    title: "Design and engineering, together",
    description:
      "Our designers know HTML. Our engineers care about typography. The handoff between them is a non-event.",
  },
  {
    title: "Honest scope and pricing",
    description:
      "Quotes are real. Scope creep gets surfaced immediately. Change orders happen in conversation, not in invoices.",
  },
  {
    title: "Boston-based. Nationally trusted.",
    description:
      "We're at 867 Boylston St, Boston. Most clients have never been to our office. Both things are true.",
  },
];

export const trustedLogos = [
  {
    name: "Rowan Lim",
    src: publicAsset("logos/rowan-lim.png"),
    href: "https://rowanscreative.com",
    frameClass: "bg-black/50",
    imageClass:
      "h-[72%] w-auto max-w-[92%] object-contain brightness-110 contrast-110 drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]",
    hoverScale: "group-hover:scale-[1.14]",
  },
  {
    name: "Umbulizer",
    src: publicAsset("logos/umbulizer.jpg"),
    href: "https://umbulizer-website.vercel.app",
    frameClass: "bg-white",
    imageClass: "h-[78%] w-auto max-w-[92%] object-contain",
    hoverScale: "group-hover:scale-[1.08]",
  },
  {
    name: "CleanHouse NJ",
    src: publicAsset("logos/clean-house-nj.png"),
    href: "https://cleanhousenj.com",
    frameClass: "bg-white/[0.97]",
    imageClass:
      "h-[70%] w-auto max-w-[90%] object-contain contrast-[1.05] saturate-[1.08]",
    hoverScale: "group-hover:scale-[1.12]",
  },
];

export const processSteps = [
  {
    title: "Discover",
    description: "Stakeholder interviews, user research, competitive audit.",
  },
  {
    title: "Design",
    description: "Wireframes, visual direction, high-fidelity prototypes.",
  },
  {
    title: "Validate",
    description: "User testing on prototypes before engineering commits.",
  },
  {
    title: "Build",
    description: "Production code in your repo. Staging deploys, reviewable PRs, and paired sessions with your team.",
  },
  {
    title: "Launch",
    description: "QA, performance, accessibility audit. Then we ship.",
  },
];

export const capabilities = [
  "Web Design",
  "SaaS Design",
  "UI/UX Research",
  "Product Strategy",
  "Design Systems",
  "Mobile Apps",
  "Salesforce Admin",
  "NetSuite Config",
  "Prototyping",
  "Brand Identity",
  "SEO Foundation",
];

export const techStack = [
  "React",
  "TypeScript",
  "Figma",
  "Framer",
  "Shopify",
  "Webflow",
  "Salesforce",
  "NetSuite",
  "Tailwind",
  "Node.js",
  "Vite",
  "Astro",
];
