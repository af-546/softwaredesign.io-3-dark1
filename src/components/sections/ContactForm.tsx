import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, AlertCircle } from "lucide-react";
import { siteConfig } from "../../data/site";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";

const MESSAGE_MAX = 2000;
const MESSAGE_COUNTER_THRESHOLD = 1800;

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().max(120, "Company name is too long").optional().or(z.literal("")),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z
    .string()
    .min(20, "Tell us a bit more — at least 20 characters")
    .max(MESSAGE_MAX, "Please keep it under 2000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

type ContactForm = z.infer<typeof contactSchema>;

const projectTypeOptions = [
  { value: "web-design", label: "Web Design" },
  { value: "saas-design", label: "SaaS Design" },
  { value: "ui-ux", label: "UI/UX" },
  { value: "product-design", label: "Product Design" },
  { value: "salesforce-netsuite-admin", label: "Salesforce & NetSuite Admin" },
  { value: "mobile-app-design", label: "Mobile App Design" },
  { value: "other", label: "Something else" },
];


const fieldClass = "!py-2.5 !text-body-sm";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const successRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const messageValue = watch("message") ?? "";
  const showCharCounter = messageValue.length >= MESSAGE_COUNTER_THRESHOLD;

  useEffect(() => {
    if (submitState === "success" && successRef.current) {
      successRef.current.focus({ preventScroll: true });
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitState]);

  const onSubmit = async (data: ContactForm) => {
    if (data.honeypot) return; // bot
    setSubmitState("submitting");

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          projectType: data.projectType,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="text-center py-4 outline-none"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-accent-soft mb-6">
          <Check size={26} className="text-accent" strokeWidth={2.5} />
        </div>
        <h3 className="font-serif font-semibold text-h1 text-ink-primary mb-3">Thanks — we got it.</h3>
        <p className="text-body-lg text-ink-secondary max-w-md mx-auto">
          We'll reply within one business day with next steps. If it's urgent, email us directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent hover:underline font-medium"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Honeypot — hidden from users, bots fill it */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Name"
          required
          autoComplete="name"
          placeholder="Alex Chen"
          className={fieldClass}
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          type="email"
          required
          autoComplete="email"
          placeholder="alex@company.com"
          className={fieldClass}
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <Input
        label="Company"
        autoComplete="organization"
        placeholder="Company name"
        className={fieldClass}
        {...register("company")}
        error={errors.company?.message}
      />


        <Select
          label="Project type"
          required
          placeholder="Web, SaaS, UI/UX, Product…"
          options={projectTypeOptions}
          defaultValue=""
          className={fieldClass}
          {...register("projectType")}
          error={errors.projectType?.message}
        />


      <div>
        <Textarea
          label="Tell us about the project"
          required
          rows={4}
          placeholder="What you're building, your timeline, and what's not working yet."
          className={`${fieldClass} !min-h-[100px]`}
          {...register("message")}
          error={errors.message?.message}
        />
        <div className="mt-1.5 flex justify-between gap-4">
          <p className="text-mono-sm text-ink-tertiary">Minimum 20 characters</p>
          {showCharCounter && (
            <p
              className={`text-mono-sm ${
                messageValue.length > MESSAGE_MAX ? "text-semantic-danger" : "text-ink-tertiary"
              }`}
              aria-live="polite"
            >
              {messageValue.length} / {MESSAGE_MAX}
            </p>
          )}
        </div>
      </div>

      <div className="pt-1">
        <Button
          type="submit"
          variant="primary"
          arrow
          disabled={submitState === "submitting"}
          className="w-full sm:w-auto !py-2.5 !px-5 !text-body-sm"
        >
          {submitState === "submitting" ? "Sending..." : "Send message"}
        </Button>
      </div>

      {submitState === "error" && (
        <div
          className="flex items-start gap-3 p-4 rounded-lg bg-accent-soft border border-accent/20 text-semantic-danger"
          role="alert"
        >
          <AlertCircle size={18} strokeWidth={2} className="flex-shrink-0 mt-0.5" />
          <div className="text-body-sm">
            Something went wrong. Please email us directly at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline font-medium"
            >
              {siteConfig.email}
            </a>
            .
          </div>
        </div>
      )}

      <p className="text-body-sm text-ink-tertiary pt-2">
        By submitting, you agree to our{" "}
        <Link to="/privacy" className="text-accent hover:underline font-medium">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
