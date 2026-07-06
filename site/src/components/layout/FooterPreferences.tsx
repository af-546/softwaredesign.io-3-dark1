import { useEffect, useRef, useState } from "react";
import { AccessibilityPanel } from "@/components/ui/AccessibilityPanel";

export function FooterPreferences() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1.5 hover:text-brand-light transition-colors"
        aria-expanded={open}
        aria-haspopup="dialog"
        data-cursor="pointer"
      >
        Accessibility & preferences
        <span className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="absolute bottom-full right-0 mb-3 w-[min(100vw-2rem,22rem)] nav-dropdown rounded-2xl p-1 z-50">
          <AccessibilityPanel embedded />
        </div>
      )}
    </div>
  );
}
