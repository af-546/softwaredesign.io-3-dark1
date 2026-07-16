import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_TITLE = "SoftwareDesign.io — Software design that ships.";
const DEFAULT_DESCRIPTION =
  "Strategy, design, and engineering for ambitious SMBs and SaaS teams. Boston-based design studio.";

const JSON_LD_SCRIPT_ID = "page-json-ld";

export function useSEO({ title, description, jsonLd }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = DEFAULT_TITLE;
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    } else if (metaDesc) {
      metaDesc.setAttribute("content", DEFAULT_DESCRIPTION);
    }

    let jsonLdScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.type = "application/ld+json";
      jsonLdScript.id = JSON_LD_SCRIPT_ID;
      jsonLdScript.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (metaDesc) {
        metaDesc.setAttribute("content", DEFAULT_DESCRIPTION);
      }
      jsonLdScript?.remove();
    };
  }, [title, description, jsonLd]);
}
