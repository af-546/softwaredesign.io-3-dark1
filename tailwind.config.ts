import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#FAFAF7",
          secondary: "#F2F1EC",
          tertiary: "#FFFFFF",
        },
        ink: {
          primary: "#0A0A0A",
          secondary: "#3A3A3A",
          tertiary: "#6B6B6B",
          muted: "#9A9A9A",
        },
        accent: {
          DEFAULT: "#0F62FE",
          hover: "#0848C7",
          soft: "#E6EEFF",
        },
        semantic: {
          success: "#047A5F",
          warning: "#B45309",
          danger: "#B91C1C",
        },
        border: {
          subtle: "rgba(10, 10, 10, 0.08)",
          DEFAULT: "rgba(10, 10, 10, 0.14)",
          strong: "rgba(10, 10, 10, 0.24)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        mono: ["'Geist Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.5rem, 8vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2rem, 6vw, 4rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.75rem, 5vw, 3rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "h1": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h2": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h3": ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "mono-md": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
        "mono-sm": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      maxWidth: {
        content: "1280px",
        narrow: "960px",
        reading: "720px",
        wide: "1440px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.32, 0.72, 0, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      animation: {
        "shimmer": "shimmer 4s ease-in-out infinite",
        "fade-in-up": "fadeInUp 600ms cubic-bezier(0.32, 0.72, 0, 1) forwards",
        "drift": "drift 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { backgroundPosition: "200% 0", opacity: "0.2" },
          "50%": { backgroundPosition: "0% 0", opacity: "0.6" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
