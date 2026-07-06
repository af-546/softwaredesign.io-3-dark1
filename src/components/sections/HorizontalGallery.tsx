import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
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

export function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <Reveal className="section-padding mb-12">
        <div className="section-container">
          <p className="eyebrow mb-4">Explore</p>
          <h2 className="heading-lg">What we build</h2>
        </div>
      </Reveal>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-5 sm:px-8 lg:px-16 xl:px-24 snap-x snap-mandatory pb-4"
      >
        {galleryItems.map((item) => (
          <div
            key={item.title}
            className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] snap-center glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-brand-light/20 transition-colors"
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
    </section>
  );
}
