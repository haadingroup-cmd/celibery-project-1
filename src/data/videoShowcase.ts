import type { VisualKind } from "@/data/products";

export type ShowcaseVideo = {
  id: string;
  title: string;
  caption: string;
  visual: VisualKind;
  /** Drop an mp4 at this path in /public/videos/ to go live automatically. */
  videoSrc: string;
};

export const videoShowcase: ShowcaseVideo[] = [
  {
    id: "speaker-adventure",
    title: "Made for Adventure",
    caption: "CEL-96S clipped in and ready for the trail.",
    visual: "speaker",
    videoSrc: "/videos/showcase-speaker-lifestyle.mp4",
  },
  {
    id: "headphones-everyday",
    title: "Your Sound, Anywhere",
    caption: "All-day comfort for music that moves with you.",
    visual: "headphones",
    videoSrc: "/videos/showcase-headphones-lifestyle.mp4",
  },
  {
    id: "powerbank-ready",
    title: "Never Caught Empty",
    caption: "Live display, built-in cables, super fast charging.",
    visual: "powerbank",
    videoSrc: "/videos/hero-powerbank.mp4",
  },
];
