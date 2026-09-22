import type { Metadata } from "next";
import { Cpu, Recycle, Scale, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductArt } from "@/components/ui/ProductArt";
import { stats } from "@/data/site";
import { getProductBySlug } from "@/data/products";

export const metadata: Metadata = {
  title: "About Celibery",
  description: "Why Celibery exists, how we build, and what we stand for.",
};

const values = [
  {
    icon: Cpu,
    title: "Engineering first",
    description:
      "We start every product with the chip, not the color. GaN III internals are the reason our chargers can be small without cutting power.",
  },
  {
    icon: Wrench,
    title: "Built to outlast the box",
    description:
      "Every cable is bend-tested to 100,000 cycles before it ships. If it can't survive a backpack for two years, it doesn't launch.",
  },
  {
    icon: Scale,
    title: "Honest pricing",
    description:
      "No inflated 'compare at' pricing games. We sell direct, keep margins reasonable, and pass the savings on.",
  },
  {
    icon: Recycle,
    title: "Low-waste by default",
    description: "Plastic-free packaging, recycled fiber boxes, and cables designed to be repaired, not replaced.",
  },
];

export default function AboutPage() {
  const visual = getProductBySlug("nasync-dh2300")!;

  return (
    <div>
      <section className="bg-emerald-50/60 py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-brand-emerald uppercase">Our story</span>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Smart tech, built for smarter living.
            </h1>
            <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
              Celibery started with a simple frustration: chargers that ran hot, cables that frayed within
              months, and storage boxes nobody wanted on their desk. A small team of power electronics and
              industrial design engineers set out to fix that — one product at a time, tested harder than it
              needed to be, until it became a full lineup spanning NAS storage, charging, and everyday
              accessories.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-md items-center justify-center rounded-3xl border border-gray-200 bg-white p-10 lg:max-w-none">
            <ProductArt kind={visual.visual} className="h-56 w-56" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Four principles behind every product"
            description="Nothing ships because it looks good in a render. It ships because it survived our own testing bench first."
          />
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-emerald">
                  <v.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{v.title}</h3>
                  <p className="mt-1 leading-relaxed text-neutral-600">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-900 py-16 text-white sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="text-3xl font-bold sm:text-4xl">{stat.value}</span>
                <span className="mt-1 text-sm text-neutral-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Ready to upgrade your setup?
          </h2>
          <p className="max-w-lg text-neutral-600">
            Start with the NASync DH2300 or browse the full lineup — every product ships with our 18-month
            warranty.
          </p>
          <Button href="/products" variant="primary" size="lg" className="mt-2">
            Shop all products
          </Button>
        </Container>
      </section>
    </div>
  );
}
