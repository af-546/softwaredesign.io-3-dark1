import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useApp } from "@/context/AppContext";
import {
  WebDesignMock,
  SaasDesignMock,
  UIUXMock,
  ProductDesignMock,
  ErpAdminMock,
  MobileMock,
} from "@/components/illustrations/ServiceMockups";

const galleryItems = [
  { title: "Dashboard UI", Mock: SaasDesignMock },
  { title: "Mobile Flow", Mock: MobileMock },
  { title: "Design System", Mock: ProductDesignMock },
  { title: "E-commerce", Mock: WebDesignMock },
  { title: "Brand Identity", Mock: UIUXMock },
  { title: "Platform Admin", Mock: ErpAdminMock },
];

const loopItems = [...galleryItems, ...galleryItems];

export function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isPausedRef = useRef(false);
  const { reducedMotion } = useApp();

  const setPaused = (paused: boolean) => {
    isPausedRef.current = paused;
  };

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || reducedMotion) return;

    let rafId = 0;
    let inView = false;
    let userInteracting = false;
    const speed = 0.45;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );

    observer.observe(el);

    const pauseForUser = () => {
      userInteracting = true;
      window.setTimeout(() => {
        userInteracting = false;
      }, 2400);
    };

    el.addEventListener("wheel", pauseForUser, { passive: true });
    el.addEventListener("touchstart", pauseForUser, { passive: true });
    el.addEventListener("mousedown", pauseForUser);

    const tick = () => {
      if (inView && !isPausedRef.current && !userInteracting) {
        el.scrollLeft += speed;
        const loopWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= loopWidth) {
          el.scrollLeft -= loopWidth;
        }
        updateScrollState();
      }
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
      el.removeEventListener("wheel", pauseForUser);
      el.removeEventListener("touchstart", pauseForUser);
      el.removeEventListener("mousedown", pauseForUser);
    };
  }, [reducedMotion]);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <Reveal className="section-padding mb-8">
        <div className="section-container flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <h2 className="heading-lg">What we build</h2>
          </div>
          <p className="text-sm text-ink-muted font-mono uppercase tracking-wider">
            <span className="sm:hidden">Swipe to explore →</span>
            <span className="hidden sm:inline">Scroll to explore →</span>
          </p>
        </div>
      </Reveal>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar px-5 sm:px-8 lg:px-16 xl:px-24 pb-4 scroll-smooth"
        >
          {loopItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-brand-light/20 transition-colors"
            >
              <div className="mockup-shell aspect-[4/3] p-4 border-0 rounded-none bg-[#0a1020]">
                <item.Mock />
              </div>
              <div className="p-6 border-t border-white/5">
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-abyss via-abyss/80 to-transparent"
          aria-hidden="true"
        />

        {canScrollRight && (
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-5 sm:right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full nav-dropdown flex items-center justify-center text-brand-light hover:border-brand-light/40 transition-colors"
            aria-label="Scroll gallery right"
            data-cursor="pointer"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
