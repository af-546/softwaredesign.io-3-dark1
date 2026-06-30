import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function CookieConsent() {
  const { cookiesAccepted, acceptCookies } = useApp();

  if (cookiesAccepted !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[90] glass-panel rounded-2xl p-6 shadow-glass"
      >
        <p className="text-sm text-ink-soft mb-4">
          We use cookies to improve your experience and analyze site traffic. By continuing, you
          agree to our{" "}
          <a href="/privacy" className="text-neon-cyan hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3">
          <button onClick={acceptCookies} className="btn-primary text-sm py-2.5 px-5" data-cursor="pointer">
            Accept
          </button>
          <button
            onClick={acceptCookies}
            className="btn-ghost text-sm py-2.5 px-5"
            data-cursor="pointer"
          >
            Decline
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
