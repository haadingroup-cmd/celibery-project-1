export function GlobalPartners() {
  return (
    <section className="border-b border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">Available Where You Shop</h2>
        </div>
        <div className="grid grid-cols-2 items-center justify-items-center gap-6 opacity-90 sm:grid-cols-3 md:grid-cols-6">
          <div className="flex h-16 items-center justify-center p-2 transition-opacity hover:opacity-100">
            <div className="flex flex-col items-center">
              <span className="mb-0.5 text-xs font-semibold text-neutral-400">available at</span>
              <span className="text-2xl font-black tracking-tight text-neutral-900">marketplace</span>
              <span className="-mt-0.5 h-1 w-10 rounded-full bg-amber-500" />
            </div>
          </div>
          <div className="flex h-16 items-center justify-center p-2 transition-opacity hover:opacity-100">
            <div className="flex items-center justify-center rounded-lg bg-[#feee00] px-4 py-1.5">
              <span className="text-xl font-bold tracking-tight text-neutral-900">quickshop</span>
            </div>
          </div>
          <div className="flex h-16 items-center justify-center p-2 transition-opacity hover:opacity-100">
            <div className="flex items-center gap-1">
              <span className="font-serif text-2xl font-black italic text-red-600">Plaza</span>
              <span className="text-[9px] font-bold uppercase tracking-tighter text-red-700">megastore</span>
            </div>
          </div>
          <div className="flex h-16 items-center justify-center p-2 transition-opacity hover:opacity-100">
            <div className="flex items-center gap-1 text-xl font-black tracking-tighter text-blue-900">
              <span>MEGAHUB</span>
            </div>
          </div>
          <div className="flex h-16 items-center justify-center p-2 transition-opacity hover:opacity-100">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-red-600">City</span>
              <span className="text-2xl font-extrabold tracking-tight text-emerald-600">Mart</span>
            </div>
          </div>
          <div className="flex h-16 items-center justify-center p-2 transition-opacity hover:opacity-100">
            <div className="rounded bg-[#ffcb05] px-3 py-1 text-center">
              <span className="block text-base font-extrabold uppercase tracking-tight text-neutral-900">TechHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
