import { useCallback, type MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "@/lib/scrollToTop";

export function useScrollToTopOnClick() {
  const { pathname } = useLocation();

  return useCallback(
    (to: string, onNavigate?: () => void) =>
      (event: MouseEvent<HTMLAnchorElement>) => {
        onNavigate?.();

        if (pathname === to) {
          event.preventDefault();
          scrollToTop();
        }
      },
    [pathname],
  );
}
