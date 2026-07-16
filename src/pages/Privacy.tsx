import { Cookie, Database, Scale, Shield } from "lucide-react";
import LegalDocument from "../components/layout/LegalDocument";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: Shield,
    content: (
      <p>
        SoftwareDesign.io ("we," "us," "our") respects your privacy. This policy explains what
        information we collect, how we use it, and the choices you have. We don't sell your data,
        and we collect only what we need to communicate with you and run our business.
      </p>
    ),
  },
  {
    id: "data",
    title: "What we collect & how we use it",
    icon: Database,
    content: (
      <>
        <p>
          When you fill out our contact form, we collect your name, email address, company name (if
          provided), project type, budget range, and the message you send. We collect this
          information so we can reply to you.
        </p>
        <p>
          We use the information you submit to respond to your inquiry, communicate about a potential
          or active engagement, and (with your permission) send occasional updates about our work. We
          don't sell or share your data with third parties for marketing.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    title: "Analytics & cookies",
    icon: Cookie,
    content: (
      <>
        <p>
          We use privacy-respecting analytics to understand how visitors use the site. This gives us
          aggregate data — page views, browser type, country — but does not identify individual
          users.
        </p>
        <p>
          We use minimal essential cookies for basic site functionality. We do not use tracking
          cookies, advertising cookies, or third-party tracking pixels.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights & contact",
    icon: Scale,
    content: (
      <>
        <p>
          You can request access to any personal information we have about you, request corrections,
          or request deletion at any time.
        </p>
        <p>
          Questions about this policy or a data request? Email{" "}
          <a href="mailto:contact@softwaredesign.io">contact@softwaredesign.io</a>.
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <LegalDocument
      title="Privacy Policy"
      seoTitle="Privacy Policy — SoftwareDesign.io"
      summary="We collect only what we need to reply to you and understand how the site is used. We don't sell your data."
      lastUpdated="January 2026"
      sections={sections}
    />
  );
}
