export interface FAQ {
  question: string;
  answer: string;
}

export const homeFaqs: FAQ[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Four to eight weeks for most engagements.\n\n Single landing page: 3-4 weeks. Multi-page SMB site or SaaS surface redesign: 6-8 weeks. Full product or mobile app design: 10-16 weeks.",
  },
  {
    question: "Do you work with clients outside Boston?",
    answer:
      "Most of our clients are remote. Boston is our home base but we work with teams across the US and internationally. Regular demos over Zoom, async updates in between.",
  },
  {
    question: "What's your payment structure?",
    answer:
      "50% on kickoff, 25% at the project midpoint, 25% on launch.",
  },
  {
    question: "Do you handle ongoing maintenance after launch?",
    answer:
      "Optional monthly retainer for content updates, performance monitoring, and small feature additions. Most clients take the 7-day post-launch support window and then decide if they want ongoing engagement.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Standard mutual NDA. No fee. Send yours or use ours.",
  },
];
