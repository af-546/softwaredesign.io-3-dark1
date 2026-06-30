import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

export function TermsPage() {
  usePageTitle("Terms of Service");

  return (
    <div className="section-padding pt-32 pb-20 max-w-3xl mx-auto">
      <h1 className="heading-lg mb-8">Terms of Service</h1>
      <p className="text-ink-soft text-sm mb-8">Last updated: January 2026</p>
      {[
        {
          title: "Services",
          body: "SoftwareDesign.io provides design and engineering services as described in individual project agreements.",
        },
        {
          title: "Payment",
          body: "Standard payment structure: 50% on kickoff, 25% at midpoint, 25% on launch unless otherwise agreed in writing.",
        },
        {
          title: "Intellectual property",
          body: "Upon final payment, clients receive ownership of deliverables as specified in the project agreement.",
        },
        {
          title: "Limitation of liability",
          body: "Our liability is limited to the fees paid for the specific engagement giving rise to the claim.",
        },
      ].map((section) => (
        <section key={section.title} className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-3">{section.title}</h2>
          <p className="text-ink-soft leading-relaxed">{section.body}</p>
        </section>
      ))}
      <Link to="/" className="text-neon-cyan hover:underline text-sm">
        ← Back to home
      </Link>
    </div>
  );
}
