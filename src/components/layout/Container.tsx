import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "reading" | "wide";
}

export default function Container({ children, className, size = "default" }: ContainerProps) {
  const sizeClass =
    size === "narrow"
      ? "max-w-narrow"
      : size === "reading"
        ? "max-w-reading"
        : size === "wide"
          ? "max-w-wide"
          : "max-w-content";

  return (
    <div className={cn("mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20", sizeClass, className)}>
      {children}
    </div>
  );
}
