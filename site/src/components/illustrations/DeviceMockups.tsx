/*
 * HERO DEVICE MOCKUPS
 * Custom SVG-based illustrations representing the studio's service breadth:
 * - iPhone showing a food/SMB app (Web Design / Mobile)
 * - MacBook showing a website (Web Design)
 * - iPad floating with a dashboard (SaaS Design)
 */

export function PhoneMockup() {
  return (
    <svg
      viewBox="0 0 220 440"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_25px_40px_rgba(10,10,10,0.12)]"
    >
      <defs>
        <linearGradient id="phone-screen-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#FAFAF7" />
        </linearGradient>
        <linearGradient id="phone-hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* Phone body */}
      <rect x="0" y="0" width="220" height="440" rx="38" fill="#0A0A0A" />
      <rect x="6" y="6" width="208" height="428" rx="32" fill="url(#phone-screen-bg)" />

      {/* Notch */}
      <rect x="80" y="14" width="60" height="18" rx="9" fill="#0A0A0A" />

      {/* Status bar */}
      <text x="20" y="48" fontSize="11" fontFamily="-apple-system, sans-serif" fontWeight="600" fill="#0A0A0A">
        9:41
      </text>
      <g transform="translate(170, 38)">
        <rect width="22" height="11" rx="2" fill="none" stroke="#0A0A0A" strokeWidth="1" />
        <rect x="2" y="2" width="14" height="7" rx="1" fill="#0A0A0A" />
      </g>

      {/* Hero image */}
      <rect x="14" y="62" width="192" height="140" rx="14" fill="url(#phone-hero-bg)" />
      {/* Coffee illustration */}
      <circle cx="110" cy="125" r="32" fill="rgba(255, 255, 255, 0.12)" />
      <circle cx="110" cy="125" r="22" fill="rgba(255, 255, 255, 0.18)" />
      <path d="M 96 120 Q 110 110 124 120 L 124 138 Q 110 142 96 138 Z" fill="rgba(255, 255, 255, 0.9)" />
      <path d="M 124 122 L 134 122 L 134 130 Q 134 134 130 134 L 124 134" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />

      {/* Brand label */}
      <text x="20" y="184" fontSize="9" fontFamily="ui-monospace, monospace" fill="rgba(255,255,255,0.7)" letterSpacing="1">
        BREWLAB
      </text>
      <text x="20" y="196" fontSize="11" fontFamily="Fraunces, Georgia, serif" fill="rgba(255,255,255,0.95)">
        Origin: Ethiopia
      </text>

      {/* Product card */}
      <rect x="14" y="218" width="192" height="80" rx="12" fill="#FFFFFF" stroke="rgba(10,10,10,0.06)" />
      <circle cx="38" cy="258" r="18" fill="#F2F1EC" />
      <path d="M 28 254 Q 38 248 48 254 L 48 268 Q 38 270 28 268 Z" fill="#0A0A0A" opacity="0.7" />
      <text x="66" y="252" fontSize="10" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Single Origin
      </text>
      <text x="66" y="266" fontSize="8" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Ethiopia · Light roast
      </text>
      <text x="66" y="282" fontSize="11" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        $24.00
      </text>

      {/* Second product */}
      <rect x="14" y="306" width="192" height="80" rx="12" fill="#FFFFFF" stroke="rgba(10,10,10,0.06)" />
      <circle cx="38" cy="346" r="18" fill="#F2F1EC" />
      <path d="M 28 342 Q 38 336 48 342 L 48 356 Q 38 358 28 356 Z" fill="#3A3A3A" opacity="0.7" />
      <text x="66" y="340" fontSize="10" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Espresso Blend
      </text>
      <text x="66" y="354" fontSize="8" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Brazil + Colombia · Dark
      </text>
      <text x="66" y="370" fontSize="11" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        $22.00
      </text>

      {/* Bottom nav bar */}
      <rect x="14" y="398" width="192" height="32" rx="16" fill="#0A0A0A" />
      <text x="110" y="418" fontSize="11" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle">
        Add to cart
      </text>
    </svg>
  );
}

export function LaptopMockup() {
  return (
    <svg
      viewBox="0 0 600 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_30px_50px_rgba(10,10,10,0.14)]"
    >
      <defs>
        <linearGradient id="laptop-hero" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAFAF7" />
          <stop offset="100%" stopColor="#F2F1EC" />
        </linearGradient>
      </defs>

      {/* Screen bezel */}
      <rect x="20" y="0" width="560" height="340" rx="14" fill="#0A0A0A" />
      <rect x="32" y="12" width="536" height="316" rx="6" fill="url(#laptop-hero)" />

      {/* Browser chrome */}
      <rect x="32" y="12" width="536" height="32" rx="6" fill="#FFFFFF" />
      <rect x="32" y="40" width="536" height="1" fill="rgba(10,10,10,0.08)" />
      <circle cx="50" cy="28" r="5" fill="#FF5F57" />
      <circle cx="66" cy="28" r="5" fill="#FEBC2E" />
      <circle cx="82" cy="28" r="5" fill="#28C840" />
      <rect x="110" y="20" width="300" height="16" rx="8" fill="#F2F1EC" />
      <text x="124" y="31" fontSize="9" fontFamily="ui-monospace, monospace" fill="#6B6B6B">
        northshoreroofing.com
      </text>

      {/* Hero section */}
      <text x="56" y="100" fontSize="32" fontFamily="Fraunces, Georgia, serif" fill="#0A0A0A">
        Slate. Copper.
      </text>
      <text x="56" y="138" fontSize="32" fontFamily="Fraunces, Georgia, serif" fill="#0A0A0A">
        Craftsmanship.
      </text>
      <text x="56" y="170" fontSize="11" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Boston's North Shore specialty roofing contractor.
      </text>
      <rect x="56" y="186" width="140" height="36" rx="18" fill="#0A0A0A" />
      <text x="126" y="208" fontSize="10" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle">
        Request a quote →
      </text>

      {/* Right image area */}
      <rect x="340" y="64" width="216" height="184" rx="10" fill="#3A3A3A" />
      <rect x="340" y="64" width="216" height="184" rx="10" fill="url(#laptop-hero)" opacity="0.15" />
      {/* Abstract house roof illustration */}
      <path d="M 360 220 L 448 130 L 536 220 Z" fill="rgba(10,10,10,0.7)" />
      <path d="M 360 220 L 448 130 L 448 220 Z" fill="rgba(10,10,10,0.5)" />
      <rect x="430" y="190" width="22" height="30" fill="rgba(15,98,254,0.4)" />

      {/* Service tags */}
      <rect x="56" y="260" width="88" height="24" rx="12" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
      <text x="100" y="276" fontSize="9" fontFamily="ui-monospace, monospace" fill="#0A0A0A" textAnchor="middle">
        SLATE ROOFING
      </text>
      <rect x="152" y="260" width="92" height="24" rx="12" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
      <text x="198" y="276" fontSize="9" fontFamily="ui-monospace, monospace" fill="#0A0A0A" textAnchor="middle">
        COPPER WORK
      </text>
      <rect x="252" y="260" width="80" height="24" rx="12" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
      <text x="292" y="276" fontSize="9" fontFamily="ui-monospace, monospace" fill="#0A0A0A" textAnchor="middle">
        RESTORATION
      </text>

      {/* Laptop base */}
      <rect x="0" y="340" width="600" height="12" rx="2" fill="#1F1F1F" />
      <rect x="0" y="340" width="600" height="4" fill="#0A0A0A" />
      <rect x="270" y="340" width="60" height="6" rx="3" fill="#0A0A0A" />
    </svg>
  );
}

export function TabletMockup() {
  return (
    <svg
      viewBox="0 0 320 240"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_20px_40px_rgba(10,10,10,0.14)]"
    >
      {/* Tablet body */}
      <rect x="0" y="0" width="320" height="240" rx="18" fill="#0A0A0A" />
      <rect x="8" y="8" width="304" height="224" rx="12" fill="#FFFFFF" />

      {/* Dashboard header */}
      <rect x="8" y="8" width="304" height="34" rx="12" fill="#FAFAF7" />
      <rect x="8" y="40" width="304" height="1" fill="rgba(10,10,10,0.06)" />
      <text x="22" y="29" fontSize="11" fontFamily="-apple-system, sans-serif" fontWeight="600" fill="#0A0A0A">
        Linewise
      </text>
      <circle cx="290" cy="25" r="8" fill="#E6EEFF" />
      <text x="290" y="29" fontSize="8" fontFamily="-apple-system, sans-serif" fontWeight="600" fill="#2563eb" textAnchor="middle">
        AC
      </text>

      {/* Sidebar */}
      <rect x="8" y="42" width="68" height="190" fill="#FAFAF7" />
      <rect x="8" y="42" width="68" height="190" rx="0" fill="#FAFAF7" />
      <rect x="16" y="56" width="52" height="18" rx="4" fill="#2563eb" opacity="0.12" />
      <rect x="22" y="62" width="3" height="6" rx="1" fill="#2563eb" />
      <text x="32" y="68" fontSize="8" fontWeight="500" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        Dashboard
      </text>
      <text x="22" y="92" fontSize="8" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Projects
      </text>
      <text x="22" y="112" fontSize="8" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Workflows
      </text>
      <text x="22" y="132" fontSize="8" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Team
      </text>
      <text x="22" y="152" fontSize="8" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Reports
      </text>

      {/* Main content */}
      <text x="92" y="64" fontSize="11" fontFamily="-apple-system, sans-serif" fontWeight="600" fill="#0A0A0A">
        Active workflows
      </text>

      {/* Metric cards */}
      <rect x="92" y="76" width="68" height="44" rx="6" fill="#FAFAF7" />
      <text x="100" y="90" fontSize="7" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        ACTIVE
      </text>
      <text x="100" y="108" fontSize="14" fontFamily="-apple-system, sans-serif" fontWeight="600" fill="#0A0A0A">
        247
      </text>

      <rect x="166" y="76" width="68" height="44" rx="6" fill="#FAFAF7" />
      <text x="174" y="90" fontSize="7" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        QUEUED
      </text>
      <text x="174" y="108" fontSize="14" fontFamily="-apple-system, sans-serif" fontWeight="600" fill="#0A0A0A">
        42
      </text>

      <rect x="240" y="76" width="68" height="44" rx="6" fill="#E6EEFF" />
      <text x="248" y="90" fontSize="7" fontFamily="ui-monospace, monospace" fill="#2563eb" letterSpacing="0.5">
        SUCCESS
      </text>
      <text x="248" y="108" fontSize="14" fontFamily="-apple-system, sans-serif" fontWeight="600" fill="#2563eb">
        98%
      </text>

      {/* Chart area */}
      <rect x="92" y="128" width="216" height="92" rx="6" fill="#FAFAF7" />
      <polyline
        points="100,200 120,190 140,180 160,170 180,180 200,150 220,130 240,140 260,120 280,110 300,100"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      <polyline
        points="100,200 120,190 140,180 160,170 180,180 200,150 220,130 240,140 260,120 280,110 300,100 300,210 100,210"
        fill="#2563eb"
        fillOpacity="0.08"
      />
      <text x="100" y="138" fontSize="7" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        VOLUME · 7 DAYS
      </text>
    </svg>
  );
}
