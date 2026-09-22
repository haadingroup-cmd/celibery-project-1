"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { videoShowcase } from "@/data/videoShowcase";
import { CinematicPoster } from "@/components/ui/CinematicPoster";
import { useVideoAvailability } from "@/hooks/useVideoAvailability";
import { webmSrc } from "@/lib/video";
import { cn } from "@/lib/utils";

function ShowcaseTile({ video, failed }: { video: (typeof videoShowcase)[number]; failed: boolean }) {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-3xl bg-black shadow-xl">
      {failed ? (
        <CinematicPoster kind={video.visual} />
      ) : (
        <>
          <CinematicPoster kind={video.visual} className="opacity-0" />
          <video
            key={playing ? "playing" : "paused"}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay={playing}
            muted
            loop
            playsInline
          >
            <source src={webmSrc(video.videoSrc)} type="video/webm" />
            <source src={video.videoSrc} type="video/mp4" />
          </video>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <button
        aria-label={playing ? "Pause video" : "Play video"}
        onClick={() => setPlaying((p) => !p)}
        className={cn(
          "absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur transition-all",
          "opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
        )}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-0.5" />}
      </button>

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h3 className="text-lg font-bold text-white sm:text-xl">{video.title}</h3>
        <p className="mt-1 text-sm text-neutral-300">{video.caption}</p>
      </div>
    </div>
  );
}

export function VideoShowcase() {
  const videoFailed = useVideoAvailability(videoShowcase.map((v) => [webmSrc(v.videoSrc), v.videoSrc]));

  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-2">
          <span className="h-px w-6 bg-teal-glow-light" />
          <span className="text-xs font-semibold tracking-[0.25em] text-teal-glow-light">SEE IT IN ACTION</span>
        </div>
        <h2 className="mb-10 max-w-xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Real setups, real speed — no scripts, no filters.
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {videoShowcase.map((video, i) => (
            <ShowcaseTile key={video.id} video={video} failed={!!videoFailed[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
