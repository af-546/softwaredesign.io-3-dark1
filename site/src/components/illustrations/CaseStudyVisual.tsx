function hostnameFromUrl(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function CaseStudyVisual({
  screenshot,
  website,
  client,
}: {
  screenshot?: string;
  website?: string;
  client: string;
  category?: string;
}) {
  if (screenshot) {
    return (
      <div className="w-full h-full flex flex-col rounded-lg overflow-hidden border border-white/10 bg-[#0c1222] shadow-inner">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-[#111827] shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <span className="w-2 h-2 rounded-full bg-[#28C840]" />
          <span className="flex-1 text-center text-[10px] font-mono text-ink-muted truncate px-2">
            {website ? hostnameFromUrl(website) : client}
          </span>
        </div>
        <div className="flex-1 min-h-0 overflow-hidden bg-white">
          <img
            src={screenshot}
            alt={`${client} website homepage`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  const panel = "#111827";
  const line = "rgba(255,255,255,0.12)";
  const text = "#f8fafc";

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
    </svg>
  );
}
