import type { VisualKind } from "@/data/products";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  headline: [string, string];
  subcopy: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  features: string[];
  visual: VisualKind;
  /** Drop an mp4 at this path in /public/videos/ to go live automatically. */
  videoSrc: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "speaker",
    eyebrow: "CELIBERY CEL-96S",
    headline: ["POWER YOUR", "MOMENT."],
    subcopy: "16W powerful sound, up to 16 hours playtime, IP67 water & dust resistant.",
    primaryCta: { label: "Shop CEL-96S", href: "/products/cel-96s-speaker" },
    secondaryCta: { label: "Explore Audio", href: "/products?category=audio" },
    features: ["16W POWERFUL SOUND", "16HR PLAYTIME", "IP67 RESISTANT", "BLUETOOTH 5.4"],
    visual: "speaker",
    videoSrc: "/videos/hero-speaker.mp4",
  },
  {
    id: "headphones",
    eyebrow: "CELIBERY AUDIO",
    headline: ["YOUR SOUND.", "YOUR WORLD."],
    subcopy: "Premium over-ear comfort built for all-day listening.",
    primaryCta: { label: "Shop Headphones", href: "/products/over-ear-headphones" },
    secondaryCta: { label: "Explore Audio", href: "/products?category=audio" },
    features: ["PLUSH EARCUSHIONS", "ALL-DAY COMFORT", "FOLDABLE DESIGN", "WIRELESS FREEDOM"],
    visual: "headphones",
    videoSrc: "/videos/hero-headphones.mp4",
  },
  {
    id: "charging",
    eyebrow: "CELIBERY CHARGING",
    headline: ["CHARGE FASTER.", "CARRY LESS."],
    subcopy: "65W GaN chargers and fast power banks built for speed.",
    primaryCta: { label: "Shop Charging", href: "/products/65w-gan-charger" },
    secondaryCta: { label: "Explore Charging", href: "/products?category=chargers" },
    features: ["65W GAN FAST CHARGE", "MULTI-PORT", "COMPACT DESIGN", "SAFETY CERTIFIED"],
    visual: "nexodeGan",
    videoSrc: "/videos/hero-charger.mp4",
  },
  {
    id: "powerbank",
    eyebrow: "CELIBERY POWER",
    headline: ["POWER THAT", "TRAVELS."],
    subcopy: "Built-in cables and a live display — never caught without a charge.",
    primaryCta: { label: "Shop Power Banks", href: "/products/power-bank-live-display" },
    secondaryCta: { label: "Explore Charging", href: "/products?category=power-banks" },
    features: ["22.5W SUPER FAST", "BUILT-IN CABLES", "LIVE DISPLAY", "TRAVEL-READY"],
    visual: "powerbank",
    videoSrc: "/videos/hero-powerbank.mp4",
  },
];
