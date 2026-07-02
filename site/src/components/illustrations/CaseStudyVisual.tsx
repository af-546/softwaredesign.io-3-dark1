export function CaseStudyVisual({
  category,
  client,
}: {
  category: string;
  client: string;
}) {
  const panel = "#111827";
  const panelSoft = "rgba(255,255,255,0.05)";
  const line = "rgba(255,255,255,0.12)";
  const text = "#f8fafc";
  const muted = "#94a3b8";

  if (category === "Web Design") {
    return (
      <svg viewBox="0 0 600 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="520" height="370" rx="16" fill={panel} stroke={line} />
        <rect x="40" y="40" width="520" height="36" rx="16" fill="#0c1222" />
        <rect x="40" y="76" width="520" height="1" fill={line} />
        <circle cx="58" cy="58" r="4" fill="#FF5F57" />
        <circle cx="72" cy="58" r="4" fill="#FEBC2E" />
        <circle cx="86" cy="58" r="4" fill="#28C840" />
        <rect x="110" y="50" width="300" height="16" rx="8" fill={panelSoft} />
        <text x="80" y="150" fontSize="30" fontFamily="Plus Jakarta Sans, sans-serif" fill={text}>
          {client}
        </text>
        <text x="80" y="182" fontSize="13" fontFamily="Inter, sans-serif" fill={muted}>
          Crafted for conversion.
        </text>
        <rect x="80" y="200" width="128" height="38" rx="10" fill="#2563eb" />
        <text
          x="144"
          y="224"
          fontSize="11"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          fill="#FFFFFF"
          textAnchor="middle"
        >
          Get started
        </text>
        <rect x="80" y="260" width="200" height="90" rx="10" fill={panelSoft} />
        <rect x="100" y="282" width="110" height="6" rx="3" fill={line} />
        <rect x="100" y="298" width="150" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="300" y="260" width="200" height="90" rx="10" fill={panelSoft} />
        <circle cx="330" cy="305" r="22" fill="#2563eb" opacity="0.25" />
        <rect x="362" y="288" width="110" height="6" rx="3" fill={line} />
      </svg>
    );
  }

  if (category === "SaaS Design") {
    return (
      <svg viewBox="0 0 600 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="520" height="370" rx="16" fill={panel} stroke={line} />
        <rect x="40" y="40" width="110" height="370" rx="16" fill="#0c1222" />
        <rect x="68" y="78" width="64" height="22" rx="5" fill="rgba(37,99,235,0.2)" />
        <text x="78" y="93" fontSize="9" fontWeight="500" fontFamily="Inter, sans-serif" fill="#60a5fa">
          Dashboard
        </text>
        <text x="170" y="92" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif" fill={text}>
          {client}
        </text>
        <rect x="170" y="118" width="110" height="64" rx="8" fill={panelSoft} />
        <rect x="290" y="118" width="110" height="64" rx="8" fill="rgba(37,99,235,0.15)" />
        <rect x="170" y="200" width="340" height="170" rx="8" fill={panelSoft} />
        <polyline
          points="190,330 230,310 270,300 310,285 350,300 390,265 430,245 470,255 490,230"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2.5"
        />
        <polyline
          points="190,330 230,310 270,300 310,285 350,300 390,265 430,245 470,255 490,230 490,360 190,360"
          fill="#2563eb"
          fillOpacity="0.12"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 600 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="520" height="370" rx="16" fill={panel} stroke={line} />
      <text
        x="300"
        y="230"
        fontSize="32"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fill={text}
        textAnchor="middle"
      >
        {client}
      </text>
      <text
        x="300"
        y="262"
        fontSize="11"
        fontFamily="IBM Plex Mono, monospace"
        fill="#60a5fa"
        textAnchor="middle"
        letterSpacing="2"
      >
        {category.toUpperCase()}
      </text>
    </svg>
  );
}
