import { useState } from "react";
import { useApp } from "@/context/AppContext";

export function NewsletterForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const { addToast } = useApp();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    addToast("Subscribed! Welcome to the newsletter.", "success");
    setEmail("");
  };

  return (
    <form onSubmit={submit} className={`flex gap-3 ${className}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm outline-none focus:border-neon-cyan/40"
      />
      <button type="submit" className="btn-primary text-sm py-3 px-6" data-cursor="pointer">
        Subscribe
      </button>
    </form>
  );
}
