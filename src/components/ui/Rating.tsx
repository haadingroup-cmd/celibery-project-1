import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  value,
  count,
  size = "sm",
  className,
}: {
  value: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4.5 w-4.5";

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.round(value);
          return (
            <Star
              key={i}
              className={cn(starSize, filled ? "fill-brand-green text-brand-green" : "fill-neutral-200 text-neutral-200")}
            />
          );
        })}
      </div>
      {count !== undefined && (
        <span className="text-xs text-neutral-500">
          {value.toFixed(1)} · {count.toLocaleString()} reviews
        </span>
      )}
    </div>
  );
}
