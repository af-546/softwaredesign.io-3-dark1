import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "default" | "tight" | "loose" | "none";
  as?: "div" | "article" | "section";
}

export default function Card({
  children,
  className,
  hover = false,
  padding = "default",
  as = "div",
}: CardProps) {
  const paddingClass =
    padding === "tight"
      ? "p-5"
      : padding === "loose"
        ? "p-8 md:p-10"
        : padding === "none"
          ? ""
          : "p-6 md:p-8";

  const Component = as as any;

  return (
    <Component className={cn("card", hover && "card-hover", paddingClass, className)}>
      {children}
    </Component>
  );
}
