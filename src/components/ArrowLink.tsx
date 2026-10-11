import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function ArrowLink({
  to,
  children,
  onDark = false,
}: {
  to: string;
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`label-caps group inline-flex items-center gap-4 transition-colors duration-200 ${
        onDark
          ? "text-primary-foreground hover:text-accent"
          : "text-foreground hover:text-accent"
      }`}
    >
      <span
        className={`border-b pb-1.5 transition-colors duration-200 ${
          onDark
            ? "border-primary-foreground/40 group-hover:border-accent"
            : "border-foreground/30 group-hover:border-accent"
        }`}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1.5"
      >
        →
      </span>
    </Link>
  );
}
