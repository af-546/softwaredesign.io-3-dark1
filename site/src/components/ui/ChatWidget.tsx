import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

const replies = [
  "Thanks for reaching out! A team member will respond within one business day.",
  "Great question! We typically respond within a few hours during business hours (ET).",
  "We'd love to hear about your project. Feel free to share more details!",
];

export function ChatWidget() {
  const { chatOpen, setChatOpen, addToast } = useApp();
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: "Hi! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [
      ...m,
      { from: "user", text: input },
      { from: "bot", text: replies[Math.floor(Math.random() * replies.length)] },
    ]);
    setInput("");
    addToast("Message sent!", "success");
  };

  return (
    <>
      <motion.button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 z-[80] w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-void font-bold shadow-neon text-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="pointer"
        aria-label="Open chat"
      >
        {chatOpen ? "×" : "💬"}
      </motion.button>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[80] w-[340px] max-w-[calc(100vw-3rem)] glass-panel rounded-2xl overflow-hidden shadow-neon flex flex-col max-h-[420px]"
          >
            <div className="px-5 py-4 border-b border-white/10 bg-neon-cyan/5">
              <p className="font-display font-semibold">SoftwareDesign Support</p>
              <p className="text-xs text-ink-muted">Usually replies in under 1 hour</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      m.from === "user"
                        ? "bg-neon-cyan/20 text-ink"
                        : "bg-white/5 text-ink-soft"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm outline-none border border-white/10 focus:border-neon-cyan/30"
              />
              <button
                onClick={send}
                className="w-9 h-9 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center hover:bg-neon-cyan/30"
                data-cursor="pointer"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
