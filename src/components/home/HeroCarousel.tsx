"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import { heroContent } from "@/data/i18n";
import { CinematicPoster } from "@/components/ui/CinematicPoster";
import { useVideoAvailability } from "@/hooks/useVideoAvailability";
import { useLanguage } from "@/lib/language-context";
import { webmSrc } from "@/lib/video";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 6500;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const { lang } = useLanguage();
  const videoFailed = useVideoAvailability(heroSlides.map((s) => [webmSrc(s.videoSrc), s.videoSrc]));
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_DURATION_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, active]);

  function goTo(index: number) {
    setActive(index);
    setProgressKey((k) => k + 1);
  }

  return (
    <section className="relative h-[620px] w-full overflow-hidden bg-black md:h-[720px]">
      {/* Backgrounds */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== active}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            i === active ? "z-10 opacity-100" : "z-0 opacity-0",
          )}
        >
          {videoFailed[i] ? (
            <CinematicPoster kind={slide.visual} />
          ) : (
            <>
              <CinematicPoster kind={slide.visual} className="opacity-0" />
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay={i === active && playing}
                muted
                loop
                playsInline
              >
                <source src={webmSrc(slide.videoSrc)} type="video/webm" />
                <source src={slide.videoSrc} type="video/mp4" />
              </video>
            </>
          )}
        </div>
      ))}

      {/* Text content */}
      <div className="relative z-20 h-full">
        {heroSlides.map((slide, i) => {
          const copy = heroContent[lang][slide.id];
          return (
            <div
              key={slide.id}
              aria-hidden={i !== active}
              className={cn(
                "absolute inset-0 flex flex-col justify-center px-5 transition-all duration-500 sm:px-6 lg:px-8",
                i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
              )}
            >
              <div className="mx-auto flex w-full max-w-7xl flex-col items-start">
                <span className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-teal-glow-light">
                  <span className="h-px w-6 bg-teal-glow-light" />
                  {copy.eyebrow}
                </span>
                <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">{copy.headline[0]}</span>
                  <span className="block">{copy.headline[1]}</span>
                </h1>
                <p className="mt-4 max-w-md text-sm text-neutral-300 sm:text-base">{copy.subcopy}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={slide.primaryCta.href}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-teal-glow px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-teal-glow-light"
                  >
                    {copy.primaryCta}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/10"
                  >
                    {copy.secondaryCta}
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {copy.features.map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-glow" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar / controls */}
      <div className="absolute inset-x-0 bottom-6 z-20 mx-auto flex max-w-7xl items-center gap-3 px-5 sm:px-6 lg:px-8">
        <button
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setPlaying((p) => !p)}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-0.5" />}
        </button>
        <div className="flex flex-1 items-center gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              aria-label={`Go to ${slide.eyebrow} slide`}
              onClick={() => goTo(i)}
              className="h-1 flex-1 overflow-hidden rounded-full bg-white/20"
            >
              {i < active ? (
                <span className="block h-full w-full rounded-full bg-teal-glow" />
              ) : i > active ? (
                <span className="block h-full w-0 rounded-full bg-teal-glow" />
              ) : (
                <span
                  key={progressKey}
                  className={cn("block h-full rounded-full bg-teal-glow", playing ? "animate-hero-progress" : "w-full")}
                  style={playing ? ({ "--hero-progress-duration": `${SLIDE_DURATION_MS}ms` } as React.CSSProperties) : undefined}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
