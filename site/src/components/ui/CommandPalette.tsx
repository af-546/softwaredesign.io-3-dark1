import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blog";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "Team", path: "/team" },
  { label: "Blog", path: "/blog" },
  { label: "Pricing", path: "/pricing" },
  { label: "Lab", path: "/lab" },
  { label: "Contact", path: "/contact" },
];

export function CommandPalette() {
  const { commandOpen, setCommandOpen, setBookingOpen } = useApp();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const items = useMemo(() => {
    const q = query.toLowerCase();
    const all = [
      ...pages.map((p) => ({ ...p, type: "page" as const })),
      ...services.map((s) => ({
        label: s.title,
        path: `/services/${s.slug}`,
        type: "service" as const,
      })),
      ...caseStudies.map((c) => ({
        label: c.client,
        path: `/work/${c.slug}`,
        type: "work" as const,
      })),
      ...blogPosts.map((b) => ({
        label: b.title,
        path: `/blog/${b.slug}`,
        type: "blog" as const,
      })),
      { label: "Book a call", path: "action:book", type: "action" as const },
    ];
    if (!q) return all;
    return all.filter((i) => i.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (commandOpen) {
      setQuery("");
      setSelected(0);
    }
  }, [commandOpen]);

  useEffect(() => {
    if (!commandOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, items.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === "Enter" && items[selected]) {
        e.preventDefault();
        const item = items[selected];
        if (item.path === "action:book") {
          setBookingOpen(true);
        } else {
          navigate(item.path);
        }
        setCommandOpen(false);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [commandOpen, items, selected, navigate, setCommandOpen, setBookingOpen]);

  return (
    <AnimatePresence>
      {commandOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setCommandOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-xl glass-panel rounded-2xl overflow-hidden shadow-neon"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
              <span className="text-neon-cyan font-mono text-sm">⌘K</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelected(0);
                }}
                placeholder="Search pages, services, work..."
                className="flex-1 bg-transparent outline-none text-ink placeholder:text-ink-muted"
              />
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {items.map((item, i) => (
                <li key={`${item.type}-${item.label}`}>
                  <button
                    className={`w-full text-left px-5 py-3 flex items-center justify-between transition-colors ${
                      i === selected ? "bg-neon-cyan/10 text-neon-cyan" : "text-ink-soft hover:bg-white/5"
                    }`}
                    onMouseEnter={() => setSelected(i)}
                    onClick={() => {
                      if (item.path === "action:book") {
                        setBookingOpen(true);
                      } else {
                        navigate(item.path);
                      }
                      setCommandOpen(false);
                    }}
                    data-cursor="pointer"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] uppercase text-ink-muted">{item.type}</span>
                  </button>
                </li>
              ))}
              {items.length === 0 && (
                <li className="px-5 py-8 text-center text-ink-muted">No results found</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
