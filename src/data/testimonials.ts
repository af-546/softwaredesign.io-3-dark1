export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: 4 | 5;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We needed a site that didn't look like every other cleaning website. They made a modern stylish website and got our business booming.",
    author: "Sarah C.",
    title: "Owner",
    company: "Cleaners",
    rating: 5,
  },
  {
    quote:
      "Four weeks from kickoff to production. Our old agency would've still been in the discovery deck.",
    author: "Shaheer P.",
    title: "Founder",
    company: "Umbulizer Inc.",
    rating: 5,
  },
  {
    quote:
      "They pushed back on a feature we wanted — turned out they were right. Saved us six weeks of building the wrong thing..",
    author: "Rowan L.",
    title: "CEO",
    company: "Rowans Photography",
    rating: 4,
  },
];
