import Link from "next/link";
import { BatteryCharging, Cable, ChevronLeft, ChevronRight, CircleDot, Headphones, LayoutGrid, MapPin, Plug, Server } from "lucide-react";

const items = [
  { label: "Power Banks", href: "/products?category=power-banks", icon: BatteryCharging },
  { label: "GaN Chargers", href: "/products?category=chargers", icon: Plug },
  { label: "Qi2 Wireless", href: "/products?category=wireless-chargers", icon: CircleDot },
  { label: "Hubs & Docks", href: "/products?category=hubs-docks", icon: LayoutGrid },
  { label: "Cables", href: "/products?category=cables", icon: Cable },
  { label: "NAS Storage", href: "/products?category=nas", icon: Server },
  { label: "Audio & TWS", href: "/products?category=audio", icon: Headphones },
  { label: "Smart Finders", href: "/products?category=trackers", icon: MapPin },
];

export function ProductLineupPills() {
  return (
    <section className="border-y border-gray-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Explore the Celibery Lineup</h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              aria-label="Previous category"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button
              aria-label="Next category"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-100"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="no-scrollbar flex items-center gap-6 overflow-x-auto pb-4">
          {items.map((item) => (
            <Link key={item.label} href={item.href} className="group flex w-28 flex-shrink-0 flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 transition-all group-hover:scale-105 group-hover:bg-neutral-100">
                <item.icon className="h-10 w-10 text-neutral-700" strokeWidth={1.6} />
              </div>
              <span className="mt-3 text-center text-xs font-semibold text-neutral-800">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
