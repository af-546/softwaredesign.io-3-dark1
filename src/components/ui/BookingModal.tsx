import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function BookingModal() {
  const { bookingOpen, setBookingOpen, addToast } = useApp();
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Discovery call booked! Check your email.", "success");
    setBookingOpen(false);
    setForm({ name: "", email: "", date: "", time: "" });
  };

  return (
    <AnimatePresence>
      {bookingOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setBookingOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-md glass-panel rounded-2xl p-8 shadow-neon"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="heading-md mb-2">Book a discovery call</h2>
            <p className="text-ink-soft text-sm mb-6">30 minutes. No pitch deck. Just your project.</p>
            <form onSubmit={submit} className="space-y-4">
              {(["name", "email", "date", "time"] as const).map((field) => (
                <input
                  key={field}
                  required
                  type={field === "email" ? "email" : field === "date" ? "date" : field === "time" ? "time" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-cyan/40 text-sm"
                />
              ))}
              <button type="submit" className="btn-primary w-full" data-cursor="pointer">
                Confirm booking
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
