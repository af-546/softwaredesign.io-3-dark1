import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  ariaLabel?: string;
}

export default function Badge({ children, className, href, icon, ariaLabel }: BadgeProps) {
  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex items-center gap-1.5 font-mono text-mono-sm text-ink-secondary">
        {children}
      </span>
    </>
  );

  const baseClass = cn(
    "inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border-subtle bg-bg-tertiary",
    "transition-all duration-150 ease-out",
    href && "hover:border-border-default hover:shadow-sm",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <span className={baseClass} aria-label={ariaLabel} title={ariaLabel}>
      {content}
    </span>
  );
}
