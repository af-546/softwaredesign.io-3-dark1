import { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../lib/utils";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealOnScrollProps) {
  const ref = useReveal();
  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
