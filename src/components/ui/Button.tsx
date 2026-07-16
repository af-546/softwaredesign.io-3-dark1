import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  arrow?: boolean;
}

interface LinkButtonProps extends Omit<LinkProps, "to"> {
  to: string;
  variant?: Variant;
  arrow?: boolean;
  children: React.ReactNode;
}

interface ExternalLinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  arrow?: boolean;
}

function getClasses(variant: Variant) {
  if (variant === "primary") return "btn btn-primary";
  if (variant === "secondary") return "btn btn-secondary";
  return "btn-text";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", arrow = false, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(getClasses(variant), className)} {...props}>
        {children}
        {arrow && <ArrowRight size={16} strokeWidth={2} />}
      </button>
    );
  }
);
Button.displayName = "Button";

export function LinkButton({
  to,
  children,
  variant = "primary",
  arrow = false,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link to={to} className={cn(getClasses(variant), className)} {...props}>
      {children}
      {arrow && <ArrowRight size={16} strokeWidth={2} />}
    </Link>
  );
}

export function ExternalLinkButton({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
  ...props
}: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(getClasses(variant), className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      {arrow && <ArrowRight size={16} strokeWidth={2} />}
    </a>
  );
}
