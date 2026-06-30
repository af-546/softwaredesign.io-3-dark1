import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const galleryItems = [
  { title: "Dashboard UI", color: "from-neon-cyan/20 to-transparent" },
  { title: "Mobile Flow", color: "from-neon-magenta/20 to-transparent" },
  { title: "Design System", color: "from-neon-gold/20 to-transparent" },
  { title: "E-commerce", color: "from-neon-lime/20 to-transparent" },
  { title: "Brand Identity", color: "from-neon-cyan/20 to-neon-magenta/10" },
  { title: "SaaS Onboarding", color: "from-neon-magenta/20 to-neon-gold/10" },
];

export function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 overflow-hidden">
      <Reveal className="section-padding mb-10">
        <p className="eyebrow mb-4">Gallery</p>
        <h2 className="heading-lg">Scroll the work</h2>
      </Reveal>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-5 sm:px-8 lg:px-16 snap-x snap-mandatory pb-4"
      >
        {galleryItems.map((item, i) => (
          <div
            key={item.title}
            className={`flex-shrink-0 w-[300px] sm:w-[400px] aspect-[3/4] rounded-2xl bg-gradient-to-br ${item.color} glass-panel snap-center flex items-end p-8`}
          >
            <div>
              <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
              <h3 className="font-display text-xl font-bold mt-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
