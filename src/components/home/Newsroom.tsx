import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsroom } from "@/data/site";

const badgeTone: Record<string, string> = {
  "Product Launches": "bg-brand-green/20 text-brand-emerald",
  Events: "bg-amber-100 text-amber-800",
};

export function Newsroom() {
  const [feature, ...rest] = newsroom;

  return (
    <section className="bg-[#fbfbfd] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">Newsroom</h2>
          <Link href="/contact" className="group flex items-center gap-1 text-xs font-semibold text-neutral-700 hover:text-black sm:text-sm">
            <span>View Our Newsroom</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:col-span-7">
            <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-neutral-100 p-6 sm:h-[340px]">
              <svg className="h-full w-full object-contain" fill="none" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                <text fill="#0f172a" fontSize="22" fontWeight="900" textAnchor="middle" x="250" y="50">Celibery MagFlow</text>
                <g transform="translate(100, 110)">
                  <rect fill="#ffffff" height="90" rx="10" stroke="#cbd5e1" strokeWidth="2" width="60" y="40" />
                  <circle cx="30" cy="70" fill="#e2e8f0" r="18" />
                </g>
                <g transform="translate(195, 80)">
                  <rect fill="#0f172a" height="150" rx="16" width="110" />
                  <text fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle" x="55" y="60">9:41</text>
                  <circle cx="55" cy="100" fill="none" r="24" stroke="#00cc66" strokeWidth="3" />
                  <text fill="#00cc66" fontSize="11" fontWeight="bold" textAnchor="middle" x="55" y="105">25W Fast</text>
                  <rect fill="#e2e8f0" height="15" rx="4" width="60" x="25" y="150" />
                </g>
                <g transform="translate(340, 110)">
                  <rect fill="#ffffff" height="90" rx="10" stroke="#cbd5e1" strokeWidth="2" width="60" y="40" />
                  <circle cx="30" cy="70" fill="#e2e8f0" r="18" />
                </g>
                <text fill="#64748b" fontSize="11" fontWeight="600" textAnchor="middle" x="250" y="275">Firm Snap, Full Speed</text>
              </svg>
            </div>
            <div className="p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-brand-green/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-emerald">
                  {feature.category}
                </span>
                <span className="text-xs text-gray-400">{feature.date}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{feature.excerpt}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {rest.map((item) => (
              <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-900 p-2 text-center">
                  <span className="text-[10px] font-extrabold uppercase leading-tight text-white">{item.category}</span>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${badgeTone[item.category] ?? "bg-neutral-100 text-neutral-800"}`}>
                      {item.category}
                    </span>
                    <span className="text-[11px] text-gray-400">{item.date}</span>
                  </div>
                  <h4 className="text-xs font-bold leading-snug text-gray-900 transition-colors hover:text-brand-emerald sm:text-sm">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
