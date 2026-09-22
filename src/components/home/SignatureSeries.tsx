import Link from "next/link";
import { ProductArt } from "@/components/ui/ProductArt";

const bigCards = [
  {
    name: "Celibery MagFlow",
    tagline: "Fast | Firm Snap | Compact",
    href: "/products?series=magflow",
    dark: false,
  },
  {
    name: "Celibery Nexode",
    tagline: "Powerful | Reliable | Industry-Leading",
    href: "/products?series=nexode",
    dark: false,
  },
];

const smallCards = [
  { name: "Celibery NASync", tagline: "Huge Capacity | Easy to Use | Secure", href: "/products?category=nas", visual: "nas2bay" as const },
  { name: "Celibery Revodok", tagline: "High-Speed | Versatile | Multi-Display", href: "/products?category=hubs-docks", visual: "revodokDock" as const },
  { name: "Celibery Uno", tagline: "Fun | Fast | Creative", href: "/products?series=uno", visual: "unoRobot" as const },
];

function MagFlowScene() {
  return (
    <svg viewBox="0 0 500 400" fill="none" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105">
      <rect fill="#1e293b" height="300" rx="30" width="170" x="230" y="40" />
      <rect fill="#0f172a" height="288" rx="26" width="158" x="236" y="46" />
      <circle cx="315" cy="180" r="50" stroke="#00cc66" strokeDasharray="12 6" strokeWidth="4" className="animate-spin" style={{ animationDuration: "10s" }} />
      <circle cx="315" cy="180" fill="#00cc66" fillOpacity="0.15" r="40" />
      <text fill="#00cc66" fontFamily="sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" x="315" y="186">94%</text>
      <g transform="translate(100, 110)">
        <rect fill="#f8fafc" height="210" rx="24" stroke="#cbd5e1" strokeWidth="2" width="140" />
        <text fill="#94a3b8" fontFamily="sans-serif" fontSize="13" fontWeight="800" textAnchor="middle" x="70" y="115">CELIBERY</text>
        <circle cx="70" cy="175" fill="#00cc66" r="4" />
        <path d="M70 0 C70 -60, 20 -70, -10 -40 C-30 -15, -10 20, 20 0" fill="none" stroke="#94a3b8" strokeLinecap="round" strokeWidth="7" />
      </g>
    </svg>
  );
}

function NexodeScene() {
  return (
    <svg viewBox="0 0 500 400" fill="none" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105">
      <path d="M280 120 L470 120 L490 280 L260 280 Z" fill="#94a3b8" opacity="0.6" />
      <rect fill="#0f172a" height="130" rx="4" width="165" x="295" y="135" />
      <g transform="translate(90, 110)">
        <rect fill="#334155" height="170" rx="20" stroke="#475569" strokeWidth="2" width="180" />
        <rect fill="#1e293b" height="146" rx="10" width="40" x="130" y="12" />
        <rect fill="#000" height="6" rx="2" stroke="#00cc66" strokeWidth="1.5" width="16" x="142" y="28" />
        <rect fill="#000" height="6" rx="2" stroke="#00cc66" strokeWidth="1.5" width="16" x="142" y="52" />
        <rect fill="#000" height="6" rx="2" stroke="#64748b" width="16" x="142" y="76" />
        <rect fill="#000" height="6" rx="2" stroke="#64748b" width="16" x="142" y="100" />
        <rect fill="#000" height="12" rx="2" stroke="#8b5cf6" width="20" x="140" y="126" />
        <text fill="#94a3b8" fontFamily="sans-serif" fontSize="16" fontWeight="bold" x="50" y="90">CELIBERY</text>
        <text fill="#64748b" fontFamily="sans-serif" fontSize="11" fontWeight="600" x="50" y="112">Nexode 300W</text>
      </g>
      <path d="M245 142 C 280 142, 290 190, 340 190" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="4" />
    </svg>
  );
}

export function SignatureSeries() {
  return (
    <section className="bg-[#fbfbfd] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Discover Our Signature Series</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500">
            Pioneering engineering that redefines performance, mobility, and digital life.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {bigCards.map((card, i) => (
            <div
              key={card.name}
              className="group flex h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-neutral-100 shadow-sm transition-all duration-300 hover:shadow-xl sm:h-[520px]"
            >
              <div className="z-10 px-8 pt-10 text-center">
                <h3 className="text-3xl font-extrabold text-neutral-900">{card.name}</h3>
                <p className="mt-1 text-sm font-medium text-neutral-500">{card.tagline}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-block rounded-full border border-neutral-800 px-5 py-2 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                >
                  Learn More
                </Link>
              </div>
              <div className="relative h-[300px] overflow-hidden p-6 sm:h-[360px]">
                {i === 0 ? <MagFlowScene /> : <NexodeScene />}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {smallCards.map((card, i) => (
            <div
              key={card.name}
              className={
                "group flex h-[420px] flex-col justify-between overflow-hidden rounded-3xl border shadow-md transition-all duration-300 hover:shadow-2xl " +
                (i % 2 === 0 ? "border-neutral-800 bg-neutral-900" : "border-gray-200 bg-neutral-100")
              }
            >
              <div className="z-10 px-6 pt-8 text-center">
                <h3 className={"text-2xl font-bold " + (i % 2 === 0 ? "text-white" : "text-neutral-900")}>{card.name}</h3>
                <p className={"mt-1 text-xs font-medium " + (i % 2 === 0 ? "text-neutral-400" : "text-neutral-500")}>{card.tagline}</p>
                <Link
                  href={card.href}
                  className={
                    "mt-3 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors " +
                    (i % 2 === 0
                      ? "border-neutral-600 text-white hover:bg-white hover:text-neutral-900"
                      : "border-neutral-800 text-neutral-900 hover:bg-neutral-900 hover:text-white")
                  }
                >
                  Learn More
                </Link>
              </div>
              <div className="relative flex h-[260px] items-center justify-center p-4">
                <ProductArt kind={card.visual} className="h-48 w-48 transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
