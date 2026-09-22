import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-emerald disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-neutral-900 text-white hover:bg-black active:scale-[0.98]",
  accent: "bg-brand-green text-black hover:bg-brand-emerald hover:text-white active:scale-[0.98]",
  outline: "border border-neutral-900/15 text-neutral-900 hover:border-neutral-900/40 active:scale-[0.98]",
  ghost: "text-neutral-900 hover:bg-neutral-100 active:scale-[0.98]",
  white: "bg-white text-neutral-900 hover:bg-emerald-50 active:scale-[0.98]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
