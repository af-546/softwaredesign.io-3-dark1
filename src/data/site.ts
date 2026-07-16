export interface ClientLogo {
  name: string;
  src: string;
}

export const clientLogos: ClientLogo[] = [
  { name: "Rowan Lim", src: "/logos/Rowan Lim.png" },
  { name: "Umbulizer", src: "/logos/Umbulizer.jpg" },
  { name: "Sarah", src: "/logos/Sarah Cleaners.avif" }
];

export const siteConfig = {
  name: "SoftwareDesign.io",
  tagline: "Software design that ships.",
  description:
    "Strategy, design, and engineering for ambitious SMBs and SaaS teams. Boston-based design studio.",
  email: "contact@softwaredesign.io",
  address: {
    street: "867 Boylston St",
    city: "Boston",
    zip: "02116",
    coords: { lat: 42.3515, lng: -71.0837 },
  },
  hours: {
    label: "Monday – Friday",
    time: "9:00 AM – 6:00 PM ET",
  },
  mapsUrl: "https://maps.google.com/?q=867+Boylston+St+Boston+MA+02116",
  social: {
    linkedin: "#",
    twitter: "#",
    dribbble: "#",
    behance: "#",
    instagram: "#",
  },
  formspreeEndpoint: "https://formspree.io/f/REPLACE_ME", // Swap before launch
};
