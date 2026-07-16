import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface TagProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export default function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md font-mono text-mono-sm uppercase tracking-wide",
        variant === "accent"
          ? "bg-accent-soft text-accent"
          : "bg-bg-secondary text-ink-secondary border border-border-subtle",
        className
      )}
    >
      {children}
    </span>
  );
}
