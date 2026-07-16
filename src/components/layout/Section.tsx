import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "secondary" | "tertiary";
  spacing?: "default" | "tight" | "loose";
}

export default function Section({
  children,
  className,
  id,
  variant = "default",
  spacing = "default",
}: SectionProps) {
  const bgClass =
    variant === "secondary"
      ? "bg-bg-secondary"
      : variant === "tertiary"
        ? "bg-bg-tertiary"
        : "bg-bg-primary";

  const spacingClass =
    spacing === "tight"
      ? "py-16 md:py-24 lg:py-28"
      : spacing === "loose"
        ? "py-28 md:py-36 lg:py-44"
        : "py-24 md:py-32 lg:py-36";

  return (
    <section id={id} className={cn(bgClass, spacingClass, "relative", className)}>
      {children}
    </section>
  );
}
