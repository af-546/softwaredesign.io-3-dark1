import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function registerLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function scrollToTop(options?: { immediate?: boolean }) {
  const immediate = options?.immediate ?? true;

  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate });
    return;
  }

  window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
