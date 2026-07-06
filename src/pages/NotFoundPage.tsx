import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

export function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <div className="section-padding pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <p className="font-display text-[120px] sm:text-[160px] font-bold text-gradient leading-none">
        404
      </p>
      <h1 className="heading-md mt-4 mb-4">Page not found</h1>
      <p className="text-ink-soft mb-8 max-w-md">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link to="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  );
}
