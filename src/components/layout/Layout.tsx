import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FullscreenMenu } from "./FullscreenMenu";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SearchOverlay } from "@/components/ui/SearchOverlay";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ToastContainer } from "@/components/ui/ToastContainer";
import { Lightbox } from "@/components/ui/Lightbox";
import { KeyboardShortcutsPanel } from "@/components/ui/KeyboardShortcutsPanel";
import { Preloader } from "@/components/ui/Preloader";
import { PageTransition } from "@/components/ui/PageTransition";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useApp } from "@/context/AppContext";

export function Layout() {
  const location = useLocation();
  const { preloaderDone, highContrast, fontSize } = useApp();
  useSmoothScroll();
  useKeyboardShortcuts();

  return (
    <div
      className={`relative min-h-screen ${highContrast ? "contrast-125" : ""} ${fontSize === "large" ? "text-lg" : ""}`}
    >
      <Preloader />
      {preloaderDone && (
        <>
          <AuroraBackground />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <FullscreenMenu />
          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>
                <Outlet />
              </PageTransition>
            </AnimatePresence>
          </main>
          <Footer />
          <CommandPalette />
          <SearchOverlay />
          <CookieConsent />
          <ToastContainer />
          <Lightbox />
          <KeyboardShortcutsPanel />
        </>
      )}
    </div>
  );
}
