import { useEffect } from "react";
import { useApp } from "@/context/AppContext";

export function useKeyboardShortcuts() {
  const {
    setCommandOpen,
    setSearchOpen,
    shortcutsOpen,
    setShortcutsOpen,
    setChatOpen,
  } = useApp();

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;

      if (mod && e.key === "k") {
        e.preventDefault();
        setCommandOpen(true);
      }
      if (mod && e.key === "/") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (mod && e.key === ".") {
        e.preventDefault();
        setShortcutsOpen(!shortcutsOpen);
      }
      if (e.key === "Escape") {
        setCommandOpen(false);
        setSearchOpen(false);
        setShortcutsOpen(false);
        setChatOpen(false);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [
    setCommandOpen,
    setSearchOpen,
    shortcutsOpen,
    setShortcutsOpen,
    setChatOpen,
  ]);
}
