/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#020208",
        abyss: "#060612",
        slate: "#0c0c1a",
        glass: "rgba(255,255,255,0.04)",
        neon: {
          cyan: "#00f0ff",
          magenta: "#ff006e",
          gold: "#ffb800",
          lime: "#39ff14",
        },
        ink: {
          DEFAULT: "#f8fafc",
          soft: "#cbd5e1",
          muted: "#64748b",
        },
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        aurora: "aurora 12s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        spinSlow: "spin 20s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 240, 255, 0.3), 0 0 60px rgba(255, 0, 110, 0.15)",
        neonSm: "0 0 12px rgba(0, 240, 255, 0.25)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
