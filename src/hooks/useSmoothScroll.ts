import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { useApp } from "@/context/AppContext";
import { registerLenis, scrollToTop } from "@/lib/scrollToTop";

export function useSmoothScroll() {
  const { reducedMotion } = useApp();
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 768px)").matches;

    if (reducedMotion || prefersTouch) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    registerLenis(lenis);
    document.documentElement.classList.add("lenis");

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenisRef.current = null;
      registerLenis(null);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, [reducedMotion]);

  useEffect(() => {
    scrollToTop();
  }, [pathname, reducedMotion]);
}
