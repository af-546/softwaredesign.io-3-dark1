import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function AccessibilityPanel({ embedded = false }: { embedded?: boolean }) {
  const {
    reducedMotion,
    toggleReducedMotion,
    highContrast,
    toggleHighContrast,
    fontSize,
    toggleFontSize,
    language,
    setLanguage,
    soundEnabled,
    toggleSound,
  } = useApp();

  return (
    <div className={embedded ? "p-5 space-y-4" : "glass-panel rounded-2xl p-6 space-y-4"}>
      <h3 className="font-display font-semibold text-sm">Accessibility & preferences</h3>
      {[
        { label: "Reduce motion", active: reducedMotion, toggle: toggleReducedMotion },
        { label: "High contrast", active: highContrast, toggle: toggleHighContrast },
        { label: "Large text", active: fontSize === "large", toggle: toggleFontSize },
        { label: "Sound effects", active: soundEnabled, toggle: toggleSound },
      ].map((item) => (
        <button
          key={item.label}
          onClick={item.toggle}
          className="w-full flex items-center justify-between py-2"
          data-cursor="pointer"
        >
          <span className="text-sm text-ink-soft">{item.label}</span>
          <div
            className={`w-11 h-6 rounded-full transition-colors relative ${
              item.active ? "bg-brand-light" : "bg-white/10"
            }`}
          >
            <motion.div
              animate={{ x: item.active ? 20 : 2 }}
              className="absolute top-1 w-4 h-4 rounded-full bg-void"
            />
          </div>
        </button>
      ))}
      <div>
        <label className="text-sm text-ink-soft block mb-2">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "es" | "fr")}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  );
}
