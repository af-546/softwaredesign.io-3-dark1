import {
  AlertCircle,
  Briefcase,
  Copyright,
  FileCheck,
  Landmark,
} from "lucide-react";
import LegalDocument from "../components/layout/LegalDocument";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance & use of the site",
    icon: FileCheck,
    content: (
      <>
        <p>
          By accessing softwaredesign.io ("the Site"), you accept the terms below. If you don't
          agree, please don't use the Site.
        </p>
        <p>
          You may use the Site for lawful, personal, and business purposes. You may not attempt to
          disrupt, hack, or otherwise interfere with the Site's normal operation.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    icon: Copyright,
    content: (
      <p>
        All content on the Site — including text, design, code, illustrations, and branding — is
        owned by SoftwareDesign.io and protected by copyright and trademark law. Don't copy,
        reproduce, or redistribute without permission.
      </p>
    ),
  },
  {
    id: "services",
    title: "Services & engagements",
    icon: Briefcase,
    content: (
      <p>
        The Site provides information about our services. Actual client engagements are governed by
        a separate Master Services Agreement and Statement of Work signed by both parties. Nothing
        on the Site constitutes a contract or service guarantee.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers & liability",
    icon: AlertCircle,
    content: (
      <>
        <p>
          The Site is provided "as is" without warranties of any kind. We make no guarantees about
          the accuracy, completeness, or fitness for any purpose of the content shown.
        </p>
        <p>
          SoftwareDesign.io and its team will not be liable for any indirect, incidental, or
          consequential damages arising from your use of the Site.
        </p>
      </>
    ),
  },
  {
    id: "legal",
    title: "Governing law & contact",
    icon: Landmark,
    content: (
      <>
        <p>
          These terms are governed by the laws of the Commonwealth of Massachusetts, without regard
          to conflict-of-law principles.
        </p>
        <p>
          Questions about these terms? Email{" "}
          <a href="mailto:contact@softwaredesign.io">contact@softwaredesign.io</a>.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <LegalDocument
      title="Terms of Service"
      seoTitle="Terms of Service — SoftwareDesign.io"
      summary="The rules for using softwaredesign.io. Client work is governed by separate agreements."
      lastUpdated="January 2026"
      sections={sections}
    />
  );
}
