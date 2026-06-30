import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blog";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useApp();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return [];
    const items: { label: string; path: string; type: string }[] = [];
    services.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q))
        items.push({ label: s.title, path: `/services/${s.slug}`, type: "Service" });
    });
    caseStudies.forEach((c) => {
      if (c.client.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q))
        items.push({ label: c.client, path: `/work/${c.slug}`, type: "Case Study" });
    });
    blogPosts.forEach((b) => {
      if (b.title.toLowerCase().includes(q))
        items.push({ label: b.title, path: `/blog/${b.slug}`, type: "Article" });
    });
    return items.slice(0, 8);
  }, [query]);

  useEffect(() => {
    if (searchOpen) setQuery("");
  }, [searchOpen]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search everything..."
              className="w-full bg-transparent border-b-2 border-neon-cyan/30 pb-4 text-3xl font-display outline-none text-ink placeholder:text-ink-muted"
            />
            <div className="mt-6 space-y-2">
              {results.map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  onClick={() => setSearchOpen(false)}
                  className="block glass-panel rounded-xl px-5 py-4 hover:border-neon-cyan/30 transition-colors"
                  data-cursor="pointer"
                >
                  <span className="font-mono text-[10px] text-neon-cyan uppercase">{r.type}</span>
                  <p className="font-display text-lg mt-1">{r.label}</p>
                </Link>
              ))}
              {query && results.length === 0 && (
                <p className="text-ink-muted text-center py-8">No matches for "{query}"</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
