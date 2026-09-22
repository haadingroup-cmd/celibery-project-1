"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CinematicPoster } from "@/components/ui/CinematicPoster";
import { useVideoAvailability } from "@/hooks/useVideoAvailability";
import { webmSrc } from "@/lib/video";

const videoSrc = "/videos/review-headphones.mp4";

export function MadeToMatchWorld() {
  const videoFailed = useVideoAvailability([[webmSrc(videoSrc), videoSrc]]);

  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">Made to Match Your World</h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="relative h-[380px] w-full overflow-hidden bg-neutral-800 sm:h-[480px] md:h-[540px]">
            {videoFailed[0] ? (
              <CinematicPoster kind="headphones" />
            ) : (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={webmSrc(videoSrc)} type="video/webm" />
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>

          <div className="bg-white p-8 text-center sm:p-10">
            <span className="mb-3 inline-block rounded-full bg-gray-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-gray-800">
              Home
            </span>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              From your desk to your nightstand, Celibery keeps every corner of your day powered, connected, and in
              sync — so you can focus on what matters most.
            </p>
            <div className="mt-6">
              <Link href="/products" className="group inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors hover:text-brand-emerald">
                <span>Discover Everyday Essentials</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
