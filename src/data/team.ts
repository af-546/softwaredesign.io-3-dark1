export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  social?: { platform: string; url: string };
};

export const team: TeamMember[] = [
  {
    name: "Maya Chen",
    role: "Design Director",
    bio: "Former IDEO. Obsessed with research-backed design and typography that earns its place.",
    skills: ["Product Strategy", "Design Systems", "User Research"],
    image: "MC",
  },
  {
    name: "James Okonkwo",
    role: "Lead Engineer",
    bio: "Full-stack builder who cares about pixel-perfect implementation and performance budgets.",
    skills: ["React", "TypeScript", "Performance"],
    image: "JO",
  },
  {
    name: "Elena Vasquez",
    role: "Senior Product Designer",
    bio: "SaaS specialist. Has redesigned dashboards for three Series A companies.",
    skills: ["SaaS Design", "Prototyping", "Data Viz"],
    image: "EV",
  },
  {
    name: "David Park",
    role: "UX Researcher",
    bio: "Turns user interviews into design decisions. No assumptions, ever.",
    skills: ["Interviews", "Usability Testing", "Journey Mapping"],
    image: "DP",
  },
  {
    name: "Aisha Rahman",
    role: "Brand & Visual Designer",
    bio: "Makes brands feel inevitable. Web, print, and everything in between.",
    skills: ["Brand Identity", "Web Design", "Motion"],
    image: "AR",
  },
  {
    name: "Chris Mueller",
    role: "Salesforce & NetSuite Admin",
    bio: "Makes CRM and ERP systems work for humans, not the other way around.",
    skills: ["Salesforce", "NetSuite", "Integrations"],
    image: "CM",
  },
  {
    name: "Sophie Laurent",
    role: "Mobile Designer",
    bio: "Designs for thumbs. iOS and Android with platform-native patterns.",
    skills: ["iOS", "Android", "App Store Assets"],
    image: "SL",
  },
  {
    name: "Marcus Webb",
    role: "Frontend Developer",
    bio: "Ships animations that don't tank Lighthouse scores.",
    skills: ["React", "Framer Motion", "CSS"],
    image: "MW",
  },
  {
    name: "Nina Patel",
    role: "Operations & Client Success",
    bio: "Keeps projects on track and clients in the loop. The glue.",
    skills: ["Project Management", "Client Relations", "Scoping"],
    image: "NP",
  },
];
