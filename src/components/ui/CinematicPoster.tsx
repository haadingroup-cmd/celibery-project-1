import type { VisualKind } from "@/data/products";
import { ProductArt } from "@/components/ui/ProductArt";
import { cn } from "@/lib/utils";

/**
 * Cinematic placeholder background used behind hero/video slides until real
 * footage is supplied. Once a slide has a real `video` src, this renders as
 * the <video poster> fallback / first-paint frame instead.
 */
export function CinematicPoster({ kind, className }: { kind: VisualKind; className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-black", className)}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 45%, rgba(2,185,198,0.22), transparent 60%), radial-gradient(80% 60% at 15% 85%, rgba(2,185,198,0.12), transparent 55%), linear-gradient(160deg, #050708 0%, #0a1012 55%, #030405 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-[4%] h-[38%] w-[75%] rounded-full bg-teal-glow/20 blur-[70px] animate-pulse-glow sm:right-[8%] sm:top-1/2 sm:h-[55%] sm:w-[55%] sm:-translate-y-1/2"
      />
      <div className="absolute bottom-0 right-[2%] flex h-[42%] w-[62%] items-end justify-center opacity-30 drop-shadow-[0_30px_60px_rgba(2,185,198,0.25)] sm:bottom-auto sm:right-[6%] sm:top-1/2 sm:h-[62%] sm:w-[46%] sm:-translate-y-1/2 sm:items-center sm:opacity-95">
        <ProductArt kind={kind} className="h-full w-full" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0) 65%)",
        }}
      />
    </div>
  );
}
