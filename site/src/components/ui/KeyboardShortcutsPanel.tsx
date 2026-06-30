import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

const shortcuts = [
  { keys: ["⌘", "K"], action: "Open command palette" },
  { keys: ["⌘", "/"], action: "Open search" },
  { keys: ["⌘", "."], action: "Toggle shortcuts panel" },
  { keys: ["Esc"], action: "Close overlays" },
];

export function KeyboardShortcutsPanel() {
  const { shortcutsOpen, setShortcutsOpen } = useApp();

  return (
    <AnimatePresence>
      {shortcutsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShortcutsOpen(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="glass-panel rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="heading-md mb-6">Keyboard shortcuts</h2>
            <div className="space-y-4">
              {shortcuts.map((s) => (
                <div key={s.action} className="flex items-center justify-between">
                  <span className="text-ink-soft text-sm">{s.action}</span>
                  <div className="flex gap-1">
                    {s.keys.map((k) => (
                      <kbd
                        key={k}
                        className="px-2 py-1 rounded bg-white/10 font-mono text-xs text-neon-cyan"
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
