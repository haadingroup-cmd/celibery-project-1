export type NavGroup = "nas" | "charging" | "accessories";

export type Category = {
  slug: string;
  name: string;
  group: NavGroup;
  groupLabel: string;
};

export const categories: Category[] = [
  { slug: "nas-entry", name: "Entry-Level", group: "nas", groupLabel: "NAS" },
  { slug: "nas-performance", name: "Performance", group: "nas", groupLabel: "NAS" },
  { slug: "power-banks", name: "Power Banks", group: "charging", groupLabel: "Charging" },
  { slug: "chargers", name: "Chargers", group: "charging", groupLabel: "Charging" },
  { slug: "wireless-chargers", name: "Wireless Chargers", group: "charging", groupLabel: "Charging" },
  { slug: "car-chargers", name: "Car Chargers", group: "charging", groupLabel: "Charging" },
  { slug: "power-strips", name: "Power Strip", group: "charging", groupLabel: "Charging" },
  { slug: "cables", name: "Cables", group: "charging", groupLabel: "Charging" },
  { slug: "hubs-docks", name: "Hubs & Docks", group: "accessories", groupLabel: "Data & Accessories" },
  { slug: "trackers", name: "Trackers", group: "accessories", groupLabel: "Data & Accessories" },
  { slug: "audio", name: "Audio", group: "accessories", groupLabel: "Data & Accessories" },
  { slug: "mobile-accessories", name: "Mobile Accessories", group: "accessories", groupLabel: "Data & Accessories" },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function categoriesByGroup(group: NavGroup) {
  return categories.filter((c) => c.group === group);
}

export type VisualKind =
  | "nas2bay"
  | "nas4bay"
  | "nasFlash"
  | "nasPro"
  | "nasEnterprise"
  | "magflowBank"
  | "magflowPad"
  | "nexodeGan"
  | "nexodeStrip"
  | "unoRobot"
  | "unoCharger"
  | "revodokDock"
  | "revodokHub"
  | "cable"
  | "carCharger"
  | "tracker"
  | "audio"
  | "mobileAccessory"
  | "speaker"
  | "headphones"
  | "powerbank"
  | "ganCharger";

export type Product = {
  id: string;
  slug: string;
  name: string;
  series: "nasync" | "magflow" | "nexode" | "uno" | "revodok" | "finetrack" | "clipbuds" | "other";
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  tagline: string;
  description: string;
  badge?: "New" | "Hot" | "Flagship" | "Pro";
  visual: VisualKind;
  rating: number;
  reviewCount: number;
  features: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "real1",
    slug: "cel-96s-speaker",
    name: "Celibery CEL-96S Bluetooth Speaker",
    series: "other",
    categorySlug: "audio",
    price: 249,
    tagline: "16W powerful sound, up to 16 hours playtime, IP67 water & dust resistant.",
    description:
      "The CEL-96S packs room-filling 16W sound into a rugged, pocketable body. IP67-rated against water and dust, tuned for a full day of play on a single charge, and paired instantly over stable Bluetooth 5.4 — built for wherever the moment takes you.",
    badge: "Flagship",
    visual: "speaker",
    rating: 4.8,
    reviewCount: 214,
    features: [
      "16W powerful, room-filling sound",
      "Up to 16 hours of continuous playtime",
      "IP67 water & dust resistant",
      "Stable Bluetooth 5.4 pairing",
    ],
    specs: [
      { label: "Output", value: "16W" },
      { label: "Battery life", value: "Up to 16 hours" },
      { label: "Water/dust rating", value: "IP67" },
      { label: "Connectivity", value: "Bluetooth 5.4" },
      { label: "Charging", value: "USB-C" },
    ],
  },
  {
    id: "real2",
    slug: "over-ear-headphones",
    name: "Celibery Over-Ear Wireless Headphones",
    series: "other",
    categorySlug: "audio",
    price: 399,
    tagline: "Premium over-ear comfort built for all-day listening.",
    description:
      "Plush memory-foam earcushions and a foldable, travel-ready frame make these the headphones you forget you're wearing. Wireless freedom with crisp highs and deep, controlled bass — tuned for music, calls, and everything in between.",
    badge: "New",
    visual: "headphones",
    rating: 4.7,
    reviewCount: 132,
    features: [
      "Plush memory-foam earcushions",
      "All-day comfort, foldable design",
      "Wireless freedom, no tangled cables",
      "Crisp highs, deep controlled bass",
    ],
    specs: [
      { label: "Type", value: "Over-ear wireless" },
      { label: "Drivers", value: "40mm dynamic" },
      { label: "Battery life", value: "Up to 30 hours" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Design", value: "Foldable, travel-ready" },
    ],
  },
  {
    id: "real3",
    slug: "65w-gan-charger",
    name: "Celibery 65W GaN Wall Charger",
    series: "other",
    categorySlug: "chargers",
    price: 199,
    tagline: "65W GaN chargers built for speed.",
    description:
      "Third-generation GaN internals mean full 65W output from a charger small enough to disappear in your bag. Multi-port simultaneous charging, safety-certified and thermal-protected, for a laptop and phone at full speed together.",
    badge: "New",
    visual: "ganCharger",
    rating: 4.8,
    reviewCount: 176,
    features: [
      "65W GaN III fast charging",
      "Multi-port simultaneous output",
      "Ultra-compact, travel-ready",
      "Safety certified, thermal protected",
    ],
    specs: [
      { label: "Max output", value: "65W" },
      { label: "Ports", value: "2× USB-C, 1× USB-A" },
      { label: "Chipset", value: "GaN III" },
      { label: "Input", value: "100–240V" },
    ],
  },
  {
    id: "real4",
    slug: "power-bank-live-display",
    name: "Celibery Power Bank with Built-In Cables & Display",
    series: "other",
    categorySlug: "power-banks",
    price: 259,
    tagline: "Built-in cables and a live display — never caught without a charge.",
    description:
      "Two cables live inside the shell, always with you and never lost in the bottom of a bag. A live percentage display shows exactly how much charge is left, and 22.5W super-fast output means less time waiting and more time moving.",
    badge: "New",
    visual: "powerbank",
    rating: 4.7,
    reviewCount: 98,
    features: [
      "22.5W super-fast charging",
      "Built-in USB-C & Lightning cables",
      "Live percentage display",
      "Travel-ready compact body",
    ],
    specs: [
      { label: "Capacity", value: "10,000mAh" },
      { label: "Output", value: "22.5W max" },
      { label: "Display", value: "Live LED percentage" },
      { label: "Cables", value: "Built-in USB-C + Lightning" },
    ],
  },
  {
    id: "p1",
    slug: "nasync-dh2300",
    name: "Celibery NASync DH2300",
    series: "nasync",
    categorySlug: "nas-entry",
    price: 899,
    compareAtPrice: 1099,
    tagline: "Smart Cloud Storage Made Simple for Every Home & Studio",
    description:
      "A dual-bay personal cloud built for families: AI photo categorization, automated iPhone backup, and private remote streaming without a single monthly fee. Quad-core Realtek RTD1619B with 2GB DDR4 handles transcoding for the whole household.",
    badge: "New",
    visual: "nas2bay",
    rating: 4.8,
    reviewCount: 612,
    features: [
      "Dual-Bay | Quad-Core ARM | Home Cloud",
      "Up to 44TB capacity",
      "Private cloud & mobile app, no subscription",
      "Local AI photo & face recognition",
    ],
    specs: [
      { label: "CPU", value: "Quad-Core Realtek RTD1619B" },
      { label: "Memory", value: "2GB DDR4" },
      { label: "Bays", value: "2 × 3.5\"/2.5\" SATA" },
      { label: "Max capacity", value: "Up to 44TB" },
      { label: "Network", value: "1× Gigabit Ethernet" },
    ],
  },
  {
    id: "p2",
    slug: "nasync-dh4300-plus",
    name: "Celibery NASync DH4300 Plus",
    series: "nasync",
    categorySlug: "nas-entry",
    price: 1499,
    tagline: "4-Bay Family Media Hub with Dual 2.5GbE",
    description:
      "The flagship home tower: Intel N100 quad-core, 8GB DDR5, and dual 2.5GbE LAN for editing straight off the array. Built for creators who outgrew a single external drive.",
    visual: "nas4bay",
    rating: 4.7,
    reviewCount: 341,
    features: [
      "4-Bay Quad Core Cloud Tower",
      "Up to 88TB capacity",
      "Dual 2.5GbE network ports",
      "Hardware transcoding for 4K media",
    ],
    specs: [
      { label: "CPU", value: "Intel N100, 4-core" },
      { label: "Memory", value: "8GB DDR5" },
      { label: "Bays", value: "4 × 3.5\"/2.5\" SATA" },
      { label: "Network", value: "2 × 2.5GbE LAN" },
    ],
  },
  {
    id: "p3",
    slug: "nasync-dxp2800",
    name: "Celibery NASync DXP2800",
    series: "nasync",
    categorySlug: "nas-performance",
    price: 1699,
    tagline: "Intel N100 | 2-Bay compact power",
    description: "Compact 2-bay performance NAS for small studios that need dual 2.5GbE without the desk footprint of a tower.",
    visual: "nasFlash",
    rating: 4.6,
    reviewCount: 154,
    features: ["Intel N100 quad-core", "Dual 2.5GbE LAN", "2 × M.2 NVMe cache slots"],
    specs: [
      { label: "CPU", value: "Intel N100" },
      { label: "Bays", value: "2-Bay + 2× M.2 NVMe" },
      { label: "Network", value: "2 × 2.5GbE" },
    ],
  },
  {
    id: "p4",
    slug: "nasync-dxp4800-plus",
    name: "Celibery NASync DXP4800 Plus",
    series: "nasync",
    categorySlug: "nas-performance",
    price: 2499,
    tagline: "Intel Pentium Gold | 4-Bay powerhouse",
    description: "10GbE plus 2.5GbE networking, twin NVMe cache slots, and a Pentium Gold 8505 processor for demanding creative workflows.",
    badge: "Hot",
    visual: "nasPro",
    rating: 4.9,
    reviewCount: 428,
    features: ["Intel Pentium Gold 8505", "10GbE + 2.5GbE networking", "2 × M.2 NVMe cache slots"],
    specs: [
      { label: "CPU", value: "Intel Pentium Gold 8505" },
      { label: "Bays", value: "4-Bay + 2× M.2 NVMe" },
      { label: "Network", value: "10GbE + 2.5GbE" },
    ],
  },
  {
    id: "p5",
    slug: "nasync-dxp6800-pro",
    name: "Celibery NASync DXP6800 Pro",
    series: "nasync",
    categorySlug: "nas-performance",
    price: 3899,
    tagline: "Core i5 | 6-Bay flagship with Thunderbolt 4",
    description: "Intel Core i5-1235U, dual Thunderbolt 4, and 6 bays of headroom — a workstation-grade NAS for studios editing 8K.",
    visual: "nasEnterprise",
    rating: 4.8,
    reviewCount: 96,
    features: ["Intel Core i5-1235U", "2 × Thunderbolt 4 ports", "6-Bay flagship capacity"],
    specs: [
      { label: "CPU", value: "Intel Core i5-1235U" },
      { label: "Bays", value: "6-Bay" },
      { label: "Ports", value: "2 × Thunderbolt 4" },
    ],
  },
  {
    id: "p6",
    slug: "nasync-dxp8800-plus",
    name: "Celibery NASync DXP8800 Plus",
    series: "nasync",
    categorySlug: "nas-performance",
    price: 4799,
    tagline: "Core i7 10-Core | Dual 10GbE Enterprise",
    description: "The top of the NASync line: 10-core Core i7, dual 10GbE LAN, and 8 bays for enterprise-scale storage and virtualization.",
    badge: "Flagship",
    visual: "nasEnterprise",
    rating: 4.9,
    reviewCount: 58,
    features: ["Intel Core i7, 10-core", "Dual 10GbE LAN", "8-Bay enterprise capacity"],
    specs: [
      { label: "CPU", value: "Intel Core i7, 10-core" },
      { label: "Bays", value: "8-Bay" },
      { label: "Network", value: "Dual 10GbE" },
    ],
  },
  {
    id: "p7",
    slug: "magflow-power-bank-10000-25w",
    name: "Celibery MagFlow Magnetic Power Bank 10000mAh 25W",
    series: "magflow",
    categorySlug: "power-banks",
    price: 199,
    compareAtPrice: 249,
    tagline: "Firm Snap | Fast | Compact",
    description:
      "MagFlow aligns itself the instant it gets close, snaps on with a magnetic ring strong enough to survive a run, and delivers Qi2 25W — 50% faster than Qi 1.3 — without ever heating up.",
    badge: "Hot",
    visual: "magflowBank",
    rating: 4.8,
    reviewCount: 1243,
    features: ["10,000mAh | Firm Snap | Compact", "Qi2 25W magnetic wireless output", "Braided lanyard strap included"],
    specs: [
      { label: "Capacity", value: "10,000mAh" },
      { label: "Wireless output", value: "Qi2 25W" },
      { label: "Wired input", value: "USB-C 20W" },
    ],
  },
  {
    id: "p8",
    slug: "nexode-pro-power-bank-20000-130w",
    name: "Celibery Nexode Pro Power Bank 20000mAh 130W",
    series: "nexode",
    categorySlug: "power-banks",
    price: 429,
    tagline: "TFT Smart Display | Laptop Fast Charge",
    description: "A 20,000mAh cell with a full-color TFT display showing exact charge, wattage, and time remaining — 130W is enough to fast-charge a laptop and phone together.",
    visual: "magflowBank",
    rating: 4.7,
    reviewCount: 587,
    features: ["20,000mAh capacity", "130W USB-C output", "Live TFT display"],
    specs: [
      { label: "Capacity", value: "20,000mAh" },
      { label: "Output", value: "130W max" },
      { label: "Display", value: "Color TFT screen" },
    ],
  },
  {
    id: "p9",
    slug: "nexode-power-bank-20000-165w",
    name: "Celibery Nexode Power Bank 20000mAh 165W",
    series: "nexode",
    categorySlug: "power-banks",
    price: 459,
    tagline: "Built-in Retractable Cable | Dual USB-C",
    description: "The cable lives inside the power bank — retractable, always with you, never lost in the bottom of a bag.",
    badge: "New",
    visual: "magflowBank",
    rating: 4.6,
    reviewCount: 203,
    features: ["Built-in retractable USB-C cable", "165W total output", "Dual USB-C ports"],
    specs: [
      { label: "Capacity", value: "20,000mAh" },
      { label: "Output", value: "165W max" },
    ],
  },
  {
    id: "p10",
    slug: "uno-power-bank-10000-30w",
    name: "Celibery Uno Power Bank 10000mAh 30W",
    series: "uno",
    categorySlug: "power-banks",
    price: 159,
    tagline: "Smart Emoji Screen | Compact Design",
    description: "A playful pixel-emoji face that reacts to charge level, wrapped around a genuinely useful 10,000mAh 30W cell.",
    visual: "unoRobot",
    rating: 4.5,
    reviewCount: 298,
    features: ["10,000mAh capacity", "30W fast charging", "Interactive emoji display"],
    specs: [
      { label: "Capacity", value: "10,000mAh" },
      { label: "Output", value: "30W max" },
    ],
  },
  {
    id: "p11",
    slug: "uno-charger-65w",
    name: "Celibery Uno Charger 65W",
    series: "uno",
    categorySlug: "chargers",
    price: 149,
    tagline: "3-Port GaN | Dynamic Robot Expressions",
    description: "A GaN charger with a tiny TFT face that reacts to charging state — genuinely 65W across 3 ports, genuinely fun on a desk.",
    badge: "New",
    visual: "unoCharger",
    rating: 4.6,
    reviewCount: 412,
    features: ["3-port simultaneous 65W", "GaN III chipset", "Expressive TFT face display"],
    specs: [
      { label: "Max output", value: "65W (3-port shared)" },
      { label: "Input", value: "100–240V" },
    ],
  },
  {
    id: "p12",
    slug: "nexode-pro-charger-65w",
    name: "Celibery Nexode Pro Charger 65W Ultra-Slim",
    series: "nexode",
    categorySlug: "chargers",
    price: 179,
    tagline: "Ultra-Slim Design | Thermal Guard 2.0",
    description: "The everyday charger for a bag that's already full: ultra-slim GaN housing with second-generation thermal management that keeps output steady under load.",
    visual: "nexodeGan",
    rating: 4.8,
    reviewCount: 754,
    features: ["Ultra-slim GaN housing", "Thermal Guard 2.0", "65W single-port output"],
    specs: [
      { label: "Max output", value: "65W" },
      { label: "Dimensions", value: "Ultra-slim profile" },
    ],
  },
  {
    id: "p13",
    slug: "nexode-desktop-300w",
    name: "Celibery Nexode Desktop 5-Port 300W",
    series: "nexode",
    categorySlug: "chargers",
    price: 649,
    tagline: "Power 3 laptops + 2 mobile devices simultaneously",
    description: "The desk-station charger for a whole setup: 5 ports, 300W shared intelligently across every connected device, no more hunting for outlets.",
    badge: "Flagship",
    visual: "nexodeGan",
    rating: 4.9,
    reviewCount: 189,
    features: ["5-port simultaneous charging", "300W total shared output", "Smart per-device power allocation"],
    specs: [
      { label: "Max output", value: "300W total" },
      { label: "Ports", value: "4× USB-C, 1× USB-A" },
    ],
  },
  {
    id: "p14",
    slug: "magflow-3in1-wireless-25w",
    name: "Celibery MagFlow 3-in-1 Qi2 Magnetic Charger 25W",
    series: "magflow",
    categorySlug: "wireless-chargers",
    price: 279,
    tagline: "25W Fast Charging | iPhone, Watch & AirPods",
    description: "Three magnetic charging spots that fold flat for travel and stand up for a nightstand-ready setup at home — phone, watch, and earbuds, all charging at once.",
    visual: "magflowPad",
    rating: 4.7,
    reviewCount: 331,
    features: ["Qi2 25W phone charging", "Foldable travel-friendly design", "Charges phone, watch & earbuds together"],
    specs: [
      { label: "Phone output", value: "Qi2 25W" },
      { label: "Watch/buds output", value: "5W each" },
    ],
  },
  {
    id: "p15",
    slug: "magflow-car-charger-25w",
    name: "Celibery MagFlow Magnetic Car Charger 25W",
    series: "magflow",
    categorySlug: "car-chargers",
    price: 189,
    tagline: "Qi2 25W | MagSafe-Compatible Vent Mount",
    description: "Snaps onto your air vent and your phone in one motion — a firm magnetic grip that survives potholes, with genuine Qi2 25W speed.",
    visual: "carCharger",
    rating: 4.6,
    reviewCount: 267,
    features: ["Qi2 25W magnetic wireless", "Air vent mount", "MagSafe-compatible"],
    specs: [{ label: "Output", value: "Qi2 25W" }],
  },
  {
    id: "p16",
    slug: "nexode-car-charger-90w",
    name: "Celibery Nexode Car Charger 90W",
    series: "nexode",
    categorySlug: "car-chargers",
    price: 149,
    tagline: "Retractable dual cable | 12V–24V compatibility",
    description: "A built-in retractable cable means you never dig through the glovebox for a charging cord again — 90W across dual ports for phone and laptop.",
    visual: "carCharger",
    rating: 4.5,
    reviewCount: 178,
    features: ["Built-in retractable cable", "90W dual-port output", "12V–24V vehicle compatible"],
    specs: [{ label: "Output", value: "90W (dual port)" }],
  },
  {
    id: "p17",
    slug: "nexode-power-strip-100w",
    name: "Celibery Nexode Power Strip 100W 7-in-1",
    series: "nexode",
    categorySlug: "power-strips",
    price: 249,
    tagline: "7-in-1 GaN charging station with surge protector",
    description: "AC outlets and USB-C/A ports side by side with 100W GaN charging and full surge protection — one strip replaces the whole desk's worth of adapters.",
    visual: "nexodeStrip",
    rating: 4.7,
    reviewCount: 221,
    features: ["7-in-1 AC + USB ports", "100W GaN charging", "Built-in surge protector"],
    specs: [{ label: "Max output", value: "100W (USB combined)" }],
  },
  {
    id: "p18",
    slug: "uno-cable-usb-c-100w",
    name: "Celibery Uno Cable USB-C 100W",
    series: "uno",
    categorySlug: "cables",
    price: 39,
    tagline: "Braided silicone with cute emoji cable tie",
    description: "Silicone-braided, rated for 100W, with a small emoji cable tie that makes it easy to spot in a drawer full of look-alikes.",
    visual: "cable",
    rating: 4.8,
    reviewCount: 892,
    features: ["100W power delivery", "Braided silicone jacket", "Emoji cable tie included"],
    specs: [{ label: "Power delivery", value: "Up to 100W" }],
  },
  {
    id: "p19",
    slug: "cable-usb-c-240w",
    name: "Celibery Cable USB-C 240W Gen3 40Gbps",
    series: "other",
    categorySlug: "cables",
    price: 89,
    tagline: "Thunderbolt 4 support | 8K@60Hz display",
    description: "The cable for everything: 240W charging, 40Gbps data, and 8K@60Hz video out — one cable to replace three.",
    badge: "Flagship",
    visual: "cable",
    rating: 4.9,
    reviewCount: 445,
    features: ["240W power delivery", "40Gbps data transfer", "8K@60Hz video output"],
    specs: [
      { label: "Power delivery", value: "Up to 240W" },
      { label: "Data speed", value: "40Gbps (Thunderbolt 4)" },
    ],
  },
  {
    id: "p20",
    slug: "revodok-max-213",
    name: "Celibery Revodok Max 213 Thunderbolt Dock",
    series: "revodok",
    categorySlug: "hubs-docks",
    price: 1199,
    tagline: "13-in-1 Thunderbolt 4 Docking Station",
    description: "40Gbps transfer speeds, dual 4K@60Hz or single 8K display support, 90W host charging, and 2.5GbE LAN — the whole desk in one cable.",
    badge: "Pro",
    visual: "revodokDock",
    rating: 4.9,
    reviewCount: 312,
    features: ["13-in-1 Thunderbolt 4", "Dual 4K@60Hz / single 8K display", "90W host charging + 2.5GbE LAN"],
    specs: [
      { label: "Transfer speed", value: "40Gbps" },
      { label: "Display", value: "Dual 4K@60Hz or 8K@30Hz" },
      { label: "Host charging", value: "90W" },
    ],
  },
  {
    id: "p21",
    slug: "revodok-pro-210",
    name: "Celibery Revodok Pro 210 USB-C Hub 10-in-1",
    series: "revodok",
    categorySlug: "hubs-docks",
    price: 449,
    tagline: "1 × 4K@60Hz, 1 × 8K@30Hz dual display",
    description: "Ten ports in one compact aluminum body — dual display output, card readers, and 100W pass-through for a laptop that never runs low while docked.",
    visual: "revodokHub",
    rating: 4.8,
    reviewCount: 267,
    features: ["10-in-1 port hub", "Dual display output", "100W pass-through charging"],
    specs: [{ label: "Ports", value: "HDMI ×2, USB-C, USB-A ×3, SD/microSD, ethernet" }],
  },
  {
    id: "p22",
    slug: "revodok-hub-7in1",
    name: "Celibery Revodok USB-C Hub 7-in-1",
    series: "revodok",
    categorySlug: "hubs-docks",
    price: 219,
    tagline: "High-Speed SD/TF Card Reader",
    description: "The everyday hub for a laptop with too few ports — HDMI, USB-A, and a high-speed card reader in a pocket-sized aluminum shell.",
    visual: "revodokHub",
    rating: 4.7,
    reviewCount: 501,
    features: ["7-in-1 port hub", "High-speed SD/microSD reader", "4K@30Hz HDMI output"],
    specs: [{ label: "Ports", value: "HDMI, 3× USB-A, USB-C PD, SD, microSD" }],
  },
  {
    id: "p23",
    slug: "finetrack-smart-finder",
    name: "Celibery FineTrack Smart Finder",
    series: "finetrack",
    categorySlug: "trackers",
    price: 99,
    tagline: "Apple Find My compatible",
    description: "A coin-sized tracker that plugs straight into Apple's Find My network — keys, bags, and luggage, always locatable.",
    visual: "tracker",
    rating: 4.6,
    reviewCount: 388,
    features: ["Apple Find My network compatible", "Replaceable coin-cell battery", "Precision Find (UWB models)"],
    specs: [{ label: "Battery life", value: "Up to 12 months" }],
  },
  {
    id: "p24",
    slug: "clipbuds-pro",
    name: "Celibery ClipBuds Pro Open-Ear Headphones",
    series: "clipbuds",
    categorySlug: "audio",
    price: 349,
    tagline: "Hi-Res open-ear wireless headphones",
    description: "Clip-on, open-ear design that never blocks your ears — Hi-Res audio certified for all-day wear during calls, workouts, or commutes.",
    badge: "New",
    visual: "audio",
    rating: 4.7,
    reviewCount: 156,
    features: ["Open-ear clip design", "Hi-Res Audio certified", "Up to 8 hours playback"],
    specs: [{ label: "Battery life", value: "8h (28h with case)" }],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .concat(products.filter((p) => p.id !== product.id && p.categorySlug !== product.categorySlug))
    .slice(0, count);
}

export function formatAed(value: number) {
  return `AED ${value.toLocaleString("en-US")}`;
}
