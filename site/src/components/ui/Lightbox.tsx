import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export function Lightbox() {
  const { lightboxImage, setLightboxImage } = useApp();

  return (
    <AnimatePresence>
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] bg-black/90 flex items-center justify-center p-8"
          onClick={() => setLightboxImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-w-4xl w-full aspect-video rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display text-3xl text-gradient">{lightboxImage}</p>
          </motion.div>
          <button
            className="absolute top-6 right-6 text-ink-muted hover:text-ink text-2xl"
            onClick={() => setLightboxImage(null)}
            data-cursor="pointer"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
