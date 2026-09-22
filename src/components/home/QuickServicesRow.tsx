import Link from "next/link";
import { HelpCircle, Info, Mail, ShoppingBag } from "lucide-react";

const items = [
  { label: "Where to Buy", href: "/contact", icon: ShoppingBag },
  { label: "Support", href: "/contact", icon: HelpCircle },
  { label: "About Celibery", href: "/about", icon: Info },
  { label: "Contact Us", href: "/contact", icon: Mail },
];

export function QuickServicesRow() {
  return (
    <section className="border-b border-neutral-800 bg-black py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center text-white md:grid-cols-4">
          {items.map((item) => (
            <Link key={item.label} href={item.href} className="group flex flex-col items-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 transition-colors group-hover:bg-brand-emerald group-hover:text-black">
                <item.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <span className="text-sm font-semibold tracking-wide">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
