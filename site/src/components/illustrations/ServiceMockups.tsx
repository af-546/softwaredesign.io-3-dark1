/*
 * SERVICE CARD MOCKUPS
 * Custom SVG illustrations for each service card on the homepage.
 */

export function WebDesignMock() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Browser */}
      <rect x="4" y="4" width="272" height="172" rx="16" fill="#FFFFFF" stroke="rgba(10,10,10,0.1)" />
      <rect x="4" y="4" width="272" height="22" rx="16" fill="#FAFAF7" />
      <rect x="4" y="24" width="272" height="1" fill="rgba(10,10,10,0.06)" />
      <circle cx="16" cy="15" r="3" fill="#FF5F57" />
      <circle cx="26" cy="15" r="3" fill="#FEBC2E" />
      <circle cx="36" cy="15" r="3" fill="#28C840" />
      <rect x="56" y="10" width="170" height="11" rx="5" fill="#F2F1EC" />

      {/* Restaurant hero */}
      <rect x="16" y="38" width="248" height="84" rx="8" fill="url(#wdMockGrad)" />
      <defs>
        <linearGradient id="wdMockGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
      </defs>
      <text x="32" y="68" fontSize="14" fontFamily="Fraunces, Georgia, serif" fill="rgba(255,255,255,0.95)">
        Wood-fired
      </text>
      <text x="32" y="84" fontSize="14" fontFamily="Fraunces, Georgia, serif" fill="rgba(255,255,255,0.95)">
        Neapolitan pies
      </text>
      <rect x="32" y="96" width="74" height="18" rx="9" fill="rgba(255,255,255,0.9)" />
      <text x="69" y="108" fontSize="8" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A" textAnchor="middle">
        Reserve a table
      </text>

      {/* Menu items */}
      <rect x="16" y="132" width="78" height="34" rx="6" fill="#FAFAF7" />
      <text x="22" y="146" fontSize="8" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Margherita
      </text>
      <text x="22" y="158" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        $18
      </text>
      <rect x="101" y="132" width="78" height="34" rx="6" fill="#FAFAF7" />
      <text x="107" y="146" fontSize="8" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Calabrese
      </text>
      <text x="107" y="158" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        $22
      </text>
      <rect x="186" y="132" width="78" height="34" rx="6" fill="#FAFAF7" />
      <text x="192" y="146" fontSize="8" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Funghi
      </text>
      <text x="192" y="158" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        $21
      </text>
    </svg>
  );
}

export function SaasDesignMock() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* App window */}
      <rect x="4" y="4" width="272" height="172" rx="16" fill="#FFFFFF" stroke="rgba(10,10,10,0.1)" />

      {/* Sidebar */}
      <rect x="4" y="4" width="58" height="172" rx="16" fill="#FAFAF7" />
      <rect x="58" y="4" width="4" height="172" fill="#FAFAF7" />
      <rect x="12" y="18" width="42" height="14" rx="3" fill="#2563eb" opacity="0.12" />
      <rect x="16" y="21" width="2" height="8" rx="1" fill="#2563eb" />
      <text x="22" y="28" fontSize="7" fontWeight="500" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        Dashboard
      </text>
      <text x="16" y="48" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Projects
      </text>
      <text x="16" y="62" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Workflows
      </text>
      <text x="16" y="76" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Team
      </text>
      <text x="16" y="90" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Settings
      </text>

      {/* Header */}
      <text x="74" y="22" fontSize="9" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Overview
      </text>
      <rect x="74" y="28" width="194" height="1" fill="rgba(10,10,10,0.06)" />

      {/* Metric cards */}
      <rect x="74" y="38" width="60" height="38" rx="5" fill="#FAFAF7" />
      <text x="80" y="50" fontSize="6" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        REVENUE
      </text>
      <text x="80" y="66" fontSize="11" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        $42.8k
      </text>

      <rect x="140" y="38" width="60" height="38" rx="5" fill="#FAFAF7" />
      <text x="146" y="50" fontSize="6" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        ACTIVE
      </text>
      <text x="146" y="66" fontSize="11" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        2,847
      </text>

      <rect x="206" y="38" width="62" height="38" rx="5" fill="#E6EEFF" />
      <text x="212" y="50" fontSize="6" fontFamily="ui-monospace, monospace" fill="#2563eb" letterSpacing="0.5">
        GROWTH
      </text>
      <text x="212" y="66" fontSize="11" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        +24%
      </text>

      {/* Chart */}
      <rect x="74" y="82" width="194" height="84" rx="5" fill="#FAFAF7" />
      <polyline
        points="86,150 106,142 126,135 146,128 166,138 186,118 206,108 226,114 246,98 260,92"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      <polyline
        points="86,150 106,142 126,135 146,128 166,138 186,118 206,108 226,114 246,98 260,92 260,158 86,158"
        fill="#2563eb"
        fillOpacity="0.08"
      />
      <text x="86" y="98" fontSize="7" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        DAILY ACTIVE · 30 DAYS
      </text>
    </svg>
  );
}

export function UIUXMock() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="4" y="4" width="272" height="172" rx="16" fill="#FFFFFF" stroke="rgba(10,10,10,0.1)" />

      {/* Figma-like frame with wireframe */}
      <rect x="20" y="24" width="120" height="138" rx="6" fill="#FAFAF7" stroke="rgba(10,10,10,0.08)" strokeDasharray="3,2" />
      <text x="22" y="20" fontSize="7" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        WIREFRAME · 320×640
      </text>

      {/* Wireframe content */}
      <rect x="30" y="34" width="100" height="22" rx="3" fill="rgba(10,10,10,0.06)" />
      <rect x="30" y="62" width="60" height="6" rx="2" fill="rgba(10,10,10,0.18)" />
      <rect x="30" y="72" width="80" height="4" rx="2" fill="rgba(10,10,10,0.1)" />
      <rect x="30" y="80" width="80" height="4" rx="2" fill="rgba(10,10,10,0.1)" />
      <rect x="30" y="88" width="50" height="4" rx="2" fill="rgba(10,10,10,0.1)" />

      <rect x="30" y="106" width="100" height="46" rx="3" fill="rgba(10,10,10,0.04)" />
      <circle cx="44" cy="120" r="4" fill="rgba(10,10,10,0.18)" />
      <rect x="54" y="118" width="40" height="3" rx="1.5" fill="rgba(10,10,10,0.18)" />
      <rect x="54" y="124" width="30" height="3" rx="1.5" fill="rgba(10,10,10,0.1)" />
      <rect x="36" y="138" width="74" height="8" rx="4" fill="#2563eb" opacity="0.3" />

      {/* Hi-fi frame */}
      <rect x="150" y="24" width="120" height="138" rx="6" fill="#FFFFFF" stroke="rgba(10,10,10,0.14)" />
      <text x="152" y="20" fontSize="7" fontFamily="ui-monospace, monospace" fill="#2563eb" letterSpacing="0.5">
        HI-FI · 320×640
      </text>

      {/* Hi-fi content */}
      <rect x="160" y="34" width="100" height="22" rx="3" fill="url(#uiuxGrad)" />
      <defs>
        <linearGradient id="uiuxGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <text x="166" y="48" fontSize="7" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#FFFFFF">
        Welcome back
      </text>

      <text x="160" y="68" fontSize="8" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Your dashboard
      </text>
      <text x="160" y="78" fontSize="6" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Updated 2 minutes ago
      </text>

      <rect x="160" y="86" width="100" height="40" rx="4" fill="#FAFAF7" />
      <text x="166" y="98" fontSize="6" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        ACTIVE
      </text>
      <text x="166" y="114" fontSize="12" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        2,847
      </text>

      <rect x="160" y="132" width="48" height="20" rx="10" fill="#0A0A0A" />
      <text x="184" y="144" fontSize="6" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle">
        View report
      </text>

      {/* Annotation line */}
      <path d="M 140 90 L 150 90" stroke="#2563eb" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  );
}

export function ProductDesignMock() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="4" y="4" width="272" height="172" rx="16" fill="#FFFFFF" stroke="rgba(10,10,10,0.1)" />

      {/* Roadmap-like view */}
      <text x="20" y="28" fontSize="9" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Product roadmap
      </text>
      <text x="20" y="40" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Q1 2026
      </text>

      {/* Phase columns */}
      <text x="20" y="60" fontSize="6" fontFamily="ui-monospace, monospace" fill="#2563eb" letterSpacing="0.8">
        DISCOVERY
      </text>
      <rect x="20" y="66" width="74" height="22" rx="4" fill="#E6EEFF" />
      <text x="26" y="80" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        User research
      </text>
      <rect x="20" y="92" width="74" height="22" rx="4" fill="#E6EEFF" />
      <text x="26" y="106" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#2563eb">
        Competitive audit
      </text>

      <text x="106" y="60" fontSize="6" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.8">
        DESIGN
      </text>
      <rect x="106" y="66" width="74" height="22" rx="4" fill="#FAFAF7" />
      <text x="112" y="80" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Wireframes
      </text>
      <rect x="106" y="92" width="74" height="22" rx="4" fill="#FAFAF7" />
      <text x="112" y="106" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Prototypes
      </text>
      <rect x="106" y="118" width="74" height="22" rx="4" fill="#FAFAF7" />
      <text x="112" y="132" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Usability tests
      </text>

      <text x="192" y="60" fontSize="6" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.8">
        BUILD
      </text>
      <rect x="192" y="66" width="74" height="22" rx="4" fill="#FAFAF7" stroke="rgba(10,10,10,0.06)" strokeDasharray="2,2" />
      <text x="198" y="80" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Engineering
      </text>
      <rect x="192" y="92" width="74" height="22" rx="4" fill="#FAFAF7" stroke="rgba(10,10,10,0.06)" strokeDasharray="2,2" />
      <text x="198" y="106" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        QA cycle
      </text>

      {/* Timeline at bottom */}
      <rect x="20" y="156" width="246" height="6" rx="3" fill="#F2F1EC" />
      <rect x="20" y="156" width="92" height="6" rx="3" fill="#2563eb" />
      <circle cx="112" cy="159" r="5" fill="#FFFFFF" stroke="#2563eb" strokeWidth="2" />
    </svg>
  );
}

export function ErpAdminMock() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="4" y="4" width="272" height="172" rx="16" fill="#FFFFFF" stroke="rgba(10,10,10,0.1)" />

      {/* Sidebar */}
      <rect x="4" y="4" width="56" height="172" rx="16" fill="#FAFAF7" />
      <rect x="56" y="4" width="1" height="172" fill="rgba(10,10,10,0.06)" />
      <rect x="14" y="18" width="36" height="8" rx="4" fill="#2563eb" fillOpacity="0.15" />
      <rect x="14" y="34" width="28" height="6" rx="3" fill="#E8E8E4" />
      <rect x="14" y="48" width="32" height="6" rx="3" fill="#E8E8E4" />
      <rect x="14" y="62" width="24" height="6" rx="3" fill="#E8E8E4" />
      <rect x="14" y="76" width="30" height="6" rx="3" fill="#E8E8E4" />

      {/* Header */}
      <text x="68" y="24" fontSize="9" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Accounts
      </text>
      <rect x="210" y="12" width="56" height="20" rx="10" fill="#2563eb" />
      <text x="238" y="25" fontSize="7" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle">
        New
      </text>

      {/* Table header */}
      <rect x="68" y="34" width="200" height="14" rx="4" fill="#F2F1EC" />
      <text x="76" y="44" fontSize="6.5" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Name
      </text>
      <text x="148" y="44" fontSize="6.5" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Stage
      </text>
      <text x="210" y="44" fontSize="6.5" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Amount
      </text>

      {/* Row 1 */}
      <rect x="68" y="54" width="200" height="22" rx="4" fill="#FAFAF7" />
      <text x="76" y="68" fontSize="7.5" fontWeight="500" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Acme Corp
      </text>
      <rect x="148" y="60" width="42" height="12" rx="6" fill="#E8F4FD" />
      <text x="169" y="69" fontSize="6.5" fontFamily="-apple-system, sans-serif" fill="#2563eb" textAnchor="middle">
        Proposal
      </text>
      <text x="210" y="68" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        $48K
      </text>

      {/* Row 2 */}
      <rect x="68" y="80" width="200" height="22" rx="4" fill="#FFFFFF" />
      <text x="76" y="94" fontSize="7.5" fontWeight="500" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Northwind LLC
      </text>
      <rect x="148" y="86" width="36" height="12" rx="6" fill="#E8F5E9" />
      <text x="166" y="95" fontSize="6.5" fontFamily="-apple-system, sans-serif" fill="#2E7D32" textAnchor="middle">
        Closed
      </text>
      <text x="210" y="94" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        $92K
      </text>

      {/* Row 3 */}
      <rect x="68" y="106" width="200" height="22" rx="4" fill="#FAFAF7" />
      <text x="76" y="120" fontSize="7.5" fontWeight="500" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Summit Partners
      </text>
      <rect x="148" y="112" width="38" height="12" rx="6" fill="#FFF3E0" />
      <text x="167" y="121" fontSize="6.5" fontFamily="-apple-system, sans-serif" fill="#E65100" textAnchor="middle">
        Review
      </text>
      <text x="210" y="120" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        $31K
      </text>

      {/* Dashboard widgets */}
      <rect x="68" y="138" width="96" height="30" rx="6" fill="#F2F1EC" />
      <text x="76" y="150" fontSize="6" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Pipeline
      </text>
      <text x="76" y="162" fontSize="10" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        $171K
      </text>

      <rect x="172" y="138" width="96" height="30" rx="6" fill="#F2F1EC" />
      <text x="180" y="150" fontSize="6" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Sync status
      </text>
      <circle cx="188" cy="160" r="3" fill="#28C840" />
      <text x="196" y="162" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        NetSuite OK
      </text>
    </svg>
  );
}

export function MobileMock() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="4" y="4" width="272" height="172" rx="16" fill="#FAFAF7" stroke="rgba(10,10,10,0.1)" />

      {/* App store preview header */}
      <text x="20" y="24" fontSize="9" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        App Store
      </text>
      <text x="20" y="36" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Featured
      </text>

      {/* App row */}
      <rect x="20" y="48" width="44" height="44" rx="10" fill="url(#mobileGrad)" />
      <defs>
        <linearGradient id="mobileGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <text x="42" y="76" fontSize="14" fontWeight="700" fontFamily="-apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle">
        L
      </text>

      <text x="74" y="62" fontSize="9" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#0A0A0A">
        Linewise
      </text>
      <text x="74" y="74" fontSize="7" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
        Workflow automation
      </text>
      <g transform="translate(74, 80)">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d="M 6 0 L 7.4 4.3 L 12 4.3 L 8.3 7 L 9.7 11.3 L 6 8.6 L 2.3 11.3 L 3.7 7 L 0 4.3 L 4.6 4.3 Z"
            transform={`translate(${i * 14}, 0)`}
            fill="#FFC107"
          />
        ))}
        <text x="76" y="9" fontSize="6.5" fontFamily="-apple-system, sans-serif" fill="#6B6B6B">
          4.9 · 2.4K
        </text>
      </g>

      <rect x="216" y="58" width="50" height="22" rx="11" fill="#2563eb" />
      <text x="241" y="72" fontSize="8" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle">
        GET
      </text>

      {/* Screenshots */}
      <text x="20" y="108" fontSize="7" fontFamily="ui-monospace, monospace" fill="#6B6B6B" letterSpacing="0.5">
        PREVIEW
      </text>
      <rect x="20" y="114" width="50" height="58" rx="4" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
      <rect x="24" y="118" width="42" height="14" rx="2" fill="#2563eb" opacity="0.1" />
      <rect x="24" y="135" width="30" height="4" rx="2" fill="rgba(10,10,10,0.18)" />
      <rect x="24" y="142" width="42" height="3" rx="1.5" fill="rgba(10,10,10,0.1)" />
      <rect x="24" y="148" width="36" height="3" rx="1.5" fill="rgba(10,10,10,0.1)" />
      <rect x="24" y="160" width="42" height="8" rx="4" fill="#0A0A0A" />

      <rect x="76" y="114" width="50" height="58" rx="4" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
      <circle cx="86" cy="130" r="5" fill="#2563eb" opacity="0.2" />
      <rect x="94" y="127" width="22" height="3" rx="1.5" fill="rgba(10,10,10,0.18)" />
      <rect x="94" y="133" width="14" height="2.5" rx="1" fill="rgba(10,10,10,0.1)" />
      <rect x="80" y="142" width="42" height="4" rx="2" fill="rgba(10,10,10,0.12)" />
      <rect x="80" y="149" width="32" height="4" rx="2" fill="rgba(10,10,10,0.08)" />
      <rect x="80" y="156" width="40" height="4" rx="2" fill="rgba(10,10,10,0.08)" />
      <rect x="80" y="163" width="28" height="4" rx="2" fill="rgba(10,10,10,0.08)" />

      <rect x="132" y="114" width="50" height="58" rx="4" fill="#0A0A0A" />
      <text x="157" y="138" fontSize="6" fontFamily="ui-monospace, monospace" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        STATS
      </text>
      <text x="157" y="152" fontSize="13" fontWeight="600" fontFamily="-apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle">
        $42K
      </text>
      <text x="157" y="164" fontSize="6" fontFamily="-apple-system, sans-serif" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        ↑ 24%
      </text>

      <rect x="188" y="114" width="50" height="58" rx="4" fill="#FFFFFF" stroke="rgba(10,10,10,0.08)" />
      <rect x="192" y="118" width="42" height="14" rx="2" fill="#E6EEFF" />
      <rect x="192" y="136" width="42" height="6" rx="2" fill="rgba(10,10,10,0.1)" />
      <rect x="192" y="145" width="32" height="6" rx="2" fill="rgba(10,10,10,0.06)" />
      <rect x="192" y="154" width="38" height="6" rx="2" fill="rgba(10,10,10,0.06)" />
      <rect x="192" y="163" width="24" height="6" rx="2" fill="rgba(10,10,10,0.06)" />
    </svg>
  );
}
