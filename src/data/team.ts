import { siteConfig } from "./site";

export const principles = [
  {
    number: "01",
    title: "Craft over volume",
    description:
      "We take fewer projects than we could and put more time into each. The math works out better for everyone.",
  },
  {
    number: "02",
    title: "Weekly demos",
    description:
      "Every Friday you see what we built that week using the work as it happens. No big reveals at the end of phases. No surprises at handoff.",
  },
  {
    number: "03",
    title: "Real research, every time",
    description:
      "No assumptions about users we haven't talked to. We conduct user research and testing throughout the project.",
  },
  {
    number: "04",
    title: "Design and engineering, together",
    description:
      "Our designers know HTML. Our engineers care about typography. The handoff between them is a non-event.",
  },
  {
    number: "05",
    title: "Honest scope and pricing",
    description:
      "Quotes are real. Scope creep gets surfaced immediately. Change orders happen in conversation, not in invoices.",
  },
  {
    number: "06",
    title: "Boston-based. Nationally trusted.",
    description: `We're at ${siteConfig.address.street}, ${siteConfig.address.city}. Most clients have never been to our office. Both things are true.`,
  },
];
