import { stats } from "@/data/site";

export function DrivenByInnovation() {
  return (
    <section className="bg-white pb-0 pt-16">
      <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">Driven by Innovation</h2>
      </div>

      <div className="mx-auto mb-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-100 bg-[#f9fafb] p-6 text-center shadow-sm sm:p-8">
              <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-xs font-medium text-gray-500 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
        <svg className="h-full w-full object-cover" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 380" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#99b2be" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#8ba594" />
            </linearGradient>
          </defs>
          <rect fill="url(#skyGrad)" height="380" width="1440" />
          <path d="M0 240 Q300 130 600 210 T1200 170 Q1350 200 1440 230 L1440 380 L0 380 Z" fill="#587262" opacity="0.6" />
          <path d="M0 260 Q400 180 800 270 T1440 220 L1440 380 L0 380 Z" fill="#3a5445" opacity="0.8" />
          <path
            d="M0 310 C150 280, 250 330, 450 290 C650 260, 850 320, 1050 280 C1250 250, 1350 300, 1440 290 L1440 380 L0 380 Z"
            fill="#1b3628"
          />
          <ellipse cx="720" cy="280" fill="#ffffff" opacity="0.35" rx="800" ry="40" />
        </svg>
      </div>
    </section>
  );
}
