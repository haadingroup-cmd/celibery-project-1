import { ChevronLeft, ChevronRight, Radio } from "lucide-react";
import { mediaVoices } from "@/data/site";

export function MediaVoices() {
  return (
    <section className="bg-[#fbfbfd] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">Media Voices</h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button aria-label="Previous" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button aria-label="Next" className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100">
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {mediaVoices.map((item) => (
            <div key={item.outlet} className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
              <div>
                <div className="mb-5 flex h-10 items-center gap-2">
                  {item.badge ? (
                    <span className="rounded bg-red-600 px-2 py-0.5 text-xs font-black text-white">{item.badge}</span>
                  ) : (
                    <Radio className="h-6 w-6 text-cyan-600" strokeWidth={2} />
                  )}
                  <span className="text-sm font-extrabold tracking-wide text-neutral-900">{item.outlet}</span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">&ldquo;{item.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
