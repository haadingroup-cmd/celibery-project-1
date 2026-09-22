import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.18em] text-brand-emerald uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-[1.1] font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
