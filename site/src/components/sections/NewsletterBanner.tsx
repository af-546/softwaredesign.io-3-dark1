import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { Reveal } from "@/components/ui/Reveal";

export function NewsletterBanner() {
  return (
    <section className="section-padding py-16">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Stay in the loop</p>
          <h2 className="heading-md mb-4">Design insights, weekly</h2>
          <p className="text-ink-soft text-sm mb-8">
            Process notes, case study breakdowns, and tools we actually use.
          </p>
          <NewsletterForm className="max-w-md mx-auto" />
        </div>
      </Reveal>
    </section>
  );
}
