import { useEffect } from "react";
import Lenis from "lenis";
import { useApp } from "@/context/AppContext";

export function useSmoothScroll() {
  const { reducedMotion } = useApp();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    document.documentElement.classList.add("lenis");

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, [reducedMotion]);
}
