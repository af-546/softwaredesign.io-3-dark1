import { useState } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { AccessibilityPanel } from "@/components/ui/AccessibilityPanel";
import { useApp } from "@/context/AppContext";

export function ContactPage() {
  usePageTitle("Contact", "Get in touch with SoftwareDesign.io");
  const { addToast } = useApp();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    addToast("Message sent! We'll reply within one business day.", "success");
  };

  return (
    <div className="section-padding pt-32 pb-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
      <Reveal>
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="heading-xl mb-6">Start a conversation</h1>
        <p className="text-ink-soft text-lg mb-10 leading-relaxed">
          Tell us about your project. We reply within one business day, usually faster.
        </p>

        {sent ? (
          <div className="glass-panel rounded-2xl p-8 text-center">
            <span className="text-4xl mb-4 block">✓</span>
            <h2 className="heading-md mb-2">Message sent</h2>
            <p className="text-ink-soft">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            {(["name", "email", "company"] as const).map((field) => (
              <input
                key={field}
                required={field !== "company"}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40"
              />
            ))}
            <textarea
              required
              rows={5}
              placeholder="Project details"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-light/40 resize-none"
            />
            <button type="submit" className="btn-primary w-full" data-cursor="pointer">
              Send message
            </button>
          </form>
        )}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="space-y-6">
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-display font-semibold mb-4">Studio</h3>
            <p className="text-ink-soft text-sm">{site.address.street}</p>
            <p className="text-ink-soft text-sm">{site.address.city}</p>
            <p className="text-ink-muted text-sm mt-4">{site.hours.label}</p>
            <p className="text-ink-muted text-sm">{site.hours.time}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-brand-light hover:underline"
            >
              Get directions →
            </a>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-display font-semibold mb-2">Email</h3>
            <a href={`mailto:${site.email}`} className="text-brand-light hover:underline">
              {site.email}
            </a>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden glass-panel">
            <iframe
              title="Studio location"
              src="https://maps.google.com/maps?q=867+Boylston+St+Boston+MA+02116&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
          <AccessibilityPanel />
        </div>
      </Reveal>
    </div>
  );
}
