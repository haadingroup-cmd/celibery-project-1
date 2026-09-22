"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { proReviews } from "@/data/site";
import { useVideoAvailability } from "@/hooks/useVideoAvailability";
import { webmSrc } from "@/lib/video";

const toneColors: Record<string, { skin: string; body: string; bg: string }> = {
  pink: { skin: "#fbcfe8", body: "#0284c7", bg: "#1e293b" },
  orange: { skin: "#fed7aa", body: "#18181b", bg: "#334155" },
  slate: { skin: "#e2e8f0", body: "#111827", bg: "#1f2937" },
  indigo: { skin: "#ffedd5", body: "#1e1b4b", bg: "#0f172a" },
};

export function WhatProsAreSaying() {
  const videoFailed = useVideoAvailability(proReviews.map((r) => [webmSrc(r.videoSrc), r.videoSrc]));

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">What the Pros Are Saying</h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button aria-label="Previous" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button aria-label="Next" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100">
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proReviews.map((review, i) => {
            const colors = toneColors[review.tone] ?? toneColors.slate;
            const hasVideo = !videoFailed[i];
            return (
              <div key={review.handle} className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 shadow-md">
                <svg className="absolute inset-0 h-full w-full object-cover" viewBox="0 0 300 533" xmlns="http://www.w3.org/2000/svg">
                  <rect fill={colors.bg} height="533" width="300" />
                  <circle cx="150" cy="190" fill={colors.skin} opacity="0.85" r="52" />
                  <path d="M75 350 C75 270, 225 270, 225 350 Z" fill={colors.body} />
                </svg>
                {hasVideo && (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={webmSrc(review.videoSrc)} type="video/webm" />
                    <source src={review.videoSrc} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-black/10" />
                <div className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur">
                  <Play className="h-4 w-4 translate-x-0.5 fill-white text-white" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-white">
                  <p className="mb-2 line-clamp-3 text-xs leading-snug text-neutral-300">&ldquo;{review.quote}&rdquo;</p>
                  <span className="text-xs font-bold text-brand-green">{review.handle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
