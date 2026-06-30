import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

export function PrivacyPage() {
  usePageTitle("Privacy Policy");

  return (
    <div className="section-padding pt-32 pb-20 max-w-3xl mx-auto prose prose-invert">
      <h1 className="heading-lg mb-8">Privacy Policy</h1>
      <p className="text-ink-soft text-sm mb-8">Last updated: January 2026</p>
      {[
        {
          title: "Information we collect",
          body: "We collect information you provide directly, such as name, email, and project details when you contact us or subscribe to our newsletter.",
        },
        {
          title: "How we use information",
          body: "We use your information to respond to inquiries, deliver services, and improve our website. We do not sell your data.",
        },
        {
          title: "Cookies",
          body: "We use cookies for analytics and to improve your browsing experience. You can accept or decline cookies via our consent banner.",
        },
        {
          title: "Contact",
          body: "Questions about this policy? Email contact@softwaredesign.io.",
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
