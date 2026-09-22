"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, ShoppingBag, User, X } from "lucide-react";
import { site } from "@/data/site";
import { products, getProductBySlug } from "@/data/products";
import { ProductArt } from "@/components/ui/ProductArt";
import { formatAed } from "@/data/products";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

type MenuKey = "nas" | "charging" | "accessories" | null;

const nasEntry = products.filter((p) => p.categorySlug === "nas-entry");
const nasPerformance = products.filter((p) => p.categorySlug === "nas-performance");
const nasSpotlight = getProductBySlug("nasync-dh2300")!;

const chargingColumns = [
  { titleKey: "powerBanks", items: products.filter((p) => p.categorySlug === "power-banks").slice(0, 4) },
  { titleKey: "chargers", items: products.filter((p) => p.categorySlug === "chargers").slice(0, 4) },
  { titleKey: "wirelessQi2", items: products.filter((p) => p.categorySlug === "wireless-chargers").slice(0, 4) },
  { titleKey: "cablesAdapters", items: products.filter((p) => p.categorySlug === "cables").slice(0, 4) },
  { titleKey: "carChargers", items: products.filter((p) => p.categorySlug === "car-chargers").slice(0, 4) },
  { titleKey: "powerStripsDesks", items: products.filter((p) => p.categorySlug === "power-strips").slice(0, 4) },
] as const;
const chargingSpotlight = getProductBySlug("magflow-3in1-wireless-25w")!;

const accessoriesColumns = [
  { titleKey: "hubsDocks", items: products.filter((p) => p.categorySlug === "hubs-docks").slice(0, 4) },
  { titleKey: "smartTrackers", items: products.filter((p) => p.categorySlug === "trackers").slice(0, 4) },
  { titleKey: "audioTws", items: products.filter((p) => p.categorySlug === "audio").slice(0, 4) },
] as const;
const accessoriesSpotlight = getProductBySlug("revodok-max-213")!;

export function Header() {
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [nasTab, setNasTab] = useState<"entry" | "performance">("entry");
  const { totalCount } = useCart();
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenu(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      {/* Announcement bar */}
      <div className="bg-black px-4 py-2 text-xs text-gray-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand-green" />
            <span className="hidden sm:inline">{t("topbar.delivery")}</span>
            <span className="sm:hidden">{t("topbar.deliveryShort")}</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-neutral-400 sm:gap-5">
            <span className="hidden font-medium sm:inline">{t("topbar.region")}</span>
            <Link href="/contact" className="hidden transition-colors hover:text-white sm:inline">
              {t("topbar.support")}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Backdrop for mega menus */}
      {menu && (
        <button
          aria-label="Close menu"
          onClick={() => setMenu(null)}
          className="fixed inset-0 top-[104px] z-40 bg-black/40 backdrop-blur-[2px]"
        />
      )}

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center" onClick={() => setMenu(null)}>
            <Image src="/logo.png" alt={site.name} width={2000} height={674} priority className="h-8 w-auto sm:h-9" />
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] font-medium text-neutral-800 lg:flex">
            <button
              onClick={() => setMenu(menu === "nas" ? null : "nas")}
              className="flex items-center gap-1.5 py-7 transition-colors hover:text-brand-emerald"
            >
              <span>{t("nav.nas")}</span>
              <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                New
              </span>
              <ChevronDown className={cn("h-3.5 w-3.5 text-neutral-400 transition-transform", menu === "nas" && "rotate-180")} />
            </button>
            <button
              onClick={() => setMenu(menu === "charging" ? null : "charging")}
              className="flex items-center gap-1.5 py-7 transition-colors hover:text-brand-emerald"
            >
              <span>{t("nav.charging")}</span>
              <ChevronDown className={cn("h-3.5 w-3.5 text-neutral-400 transition-transform", menu === "charging" && "rotate-180")} />
            </button>
            <button
              onClick={() => setMenu(menu === "accessories" ? null : "accessories")}
              className="flex items-center gap-1.5 py-7 transition-colors hover:text-brand-emerald"
            >
              <span>{t("nav.data")}</span>
              <ChevronDown
                className={cn("h-3.5 w-3.5 text-neutral-400 transition-transform", menu === "accessories" && "rotate-180")}
              />
            </button>
            <Link href="/about" className="py-2 transition-colors hover:text-brand-emerald">
              {t("nav.about")}
            </Link>
            <Link href="/contact" className="py-2 transition-colors hover:text-brand-emerald">
              {t("nav.support")}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 text-neutral-800 sm:gap-4">
          <SearchOverlay />
          <button
            aria-label={t("nav.account")}
            className="hidden h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100 hover:text-brand-emerald sm:flex"
          >
            <User className="h-5 w-5" />
          </button>
          <Link
            href="/cart"
            aria-label={`${t("nav.cart")}${totalCount > 0 ? `, ${totalCount}` : ""}`}
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100 hover:text-brand-emerald"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
                {totalCount > 99 ? "99+" : totalCount}
              </span>
            )}
          </Link>
          <button
            aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:text-black lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* NAS mega menu */}
      <MegaMenuPanel open={menu === "nas"}>
        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">{t("nav.storageCategory")}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setNasTab("entry")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all",
                  nasTab === "entry" ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
                )}
              >
                {t("nav.entryLevel")}
              </button>
              <button
                onClick={() => setNasTab("performance")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all",
                  nasTab === "performance" ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
                )}
              >
                {t("nav.performanceBusiness")}
              </button>
            </div>
          </div>
          <Link href="/products?category=nas" onClick={() => setMenu(null)} className="text-xs font-semibold text-brand-emerald hover:underline">
            {t("nav.viewAllStorage")}
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className={cn("grid gap-4", nasTab === "entry" ? "grid-cols-2" : "grid-cols-3")}>
              {(nasTab === "entry" ? nasEntry : nasPerformance).map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  onClick={() => setMenu(null)}
                  className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-[#fbfbfd] p-4 transition-all hover:border-brand-emerald hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      {p.badge ?? "In Stock"}
                    </span>
                    <span className="text-xs font-bold text-neutral-900">{formatAed(p.price)}</span>
                  </div>
                  <ProductArt kind={p.visual} className="my-4 h-24" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 transition-colors group-hover:text-brand-emerald">
                      {p.name}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-[11px] text-neutral-500">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <SpotlightCard product={nasSpotlight} onNavigate={() => setMenu(null)} />
        </div>
      </MegaMenuPanel>

      {/* Charging mega menu */}
      <MegaMenuPanel open={menu === "charging"}>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 grid grid-cols-3 gap-6">
            {chargingColumns.map((col) => (
              <div key={col.titleKey}>
                <h4 className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  {t(`nav.${col.titleKey}`)}
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-600">
                  {col.items.map((item) => (
                    <li key={item.id}>
                      <Link href={`/products/${item.slug}`} onClick={() => setMenu(null)} className="block hover:text-brand-emerald">
                        {item.name.replace("Celibery ", "")}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={`/products?category=${col.items[0]?.categorySlug ?? "chargers"}`}
                      onClick={() => setMenu(null)}
                      className="block pt-1 font-semibold text-brand-emerald hover:underline"
                    >
                      {t("nav.viewAll")}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <SpotlightCard product={chargingSpotlight} onNavigate={() => setMenu(null)} light />
        </div>
      </MegaMenuPanel>

      {/* Data & Accessories mega menu */}
      <MegaMenuPanel open={menu === "accessories"}>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 grid grid-cols-3 gap-6">
            {accessoriesColumns.map((col) => (
              <div key={col.titleKey}>
                <h4 className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  {t(`nav.${col.titleKey}`)}
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-600">
                  {col.items.map((item) => (
                    <li key={item.id}>
                      <Link href={`/products/${item.slug}`} onClick={() => setMenu(null)} className="block hover:text-brand-emerald">
                        {item.name.replace("Celibery ", "")}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={`/products?category=${col.items[0]?.categorySlug ?? "hubs-docks"}`}
                      onClick={() => setMenu(null)}
                      className="block pt-1 font-semibold text-brand-emerald hover:underline"
                    >
                      {t("nav.viewAll")}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <SpotlightCard product={accessoriesSpotlight} onNavigate={() => setMenu(null)} light />
        </div>
      </MegaMenuPanel>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden bg-white transition-all duration-300 ease-out lg:hidden",
          mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-4 pb-6 pt-2 sm:px-6">
            <Link href="/products?category=nas" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3.5 text-base font-medium text-neutral-800 hover:bg-gray-50">
              {t("nav.nas")}
            </Link>
            <Link href="/products?category=power-banks" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3.5 text-base font-medium text-neutral-800 hover:bg-gray-50">
              {t("nav.charging")}
            </Link>
            <Link href="/products?category=hubs-docks" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3.5 text-base font-medium text-neutral-800 hover:bg-gray-50">
              {t("nav.data")}
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3.5 text-base font-medium text-neutral-800 hover:bg-gray-50">
              {t("nav.about")}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl bg-neutral-900 px-4 py-3.5 text-center text-base font-medium text-white"
            >
              {t("nav.support")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MegaMenuPanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-full z-50 hidden origin-top border-b border-gray-200 bg-white shadow-2xl transition-all duration-200 lg:block",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}

function SpotlightCard({
  product,
  onNavigate,
  light,
}: {
  product: (typeof products)[number];
  onNavigate: () => void;
  light?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div
      className={cn(
        "col-span-4 flex flex-col justify-between rounded-2xl border p-6 shadow-md",
        light
          ? "border-gray-200 bg-gradient-to-br from-neutral-50 to-neutral-100"
          : "border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white",
      )}
    >
      <div>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest",
            light ? "bg-brand-green/20 text-brand-emerald" : "border border-brand-green/30 bg-brand-green/10 text-brand-green",
          )}
        >
          {t("nav.featuredHighlight")}
        </span>
        <h3 className={cn("mt-3 text-xl font-extrabold", light ? "text-neutral-900" : "text-white")}>{product.name}</h3>
        <p className={cn("mt-2 text-xs leading-relaxed", light ? "text-neutral-600" : "text-neutral-300")}>{product.tagline}</p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className={cn("text-2xl font-bold", light ? "text-neutral-900" : "text-white")}>{formatAed(product.price)}</span>
          {product.compareAtPrice && (
            <span className={cn("text-xs line-through", light ? "text-neutral-400" : "text-neutral-400")}>
              {formatAed(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
      <ProductArt kind={product.visual} className="my-4 h-28" />
      <div className="flex items-center gap-3">
        <Link
          href={`/products/${product.slug}`}
          onClick={onNavigate}
          className={cn(
            "flex-1 rounded-xl py-2.5 text-center text-xs font-bold transition-colors",
            light ? "bg-neutral-900 text-white hover:bg-black" : "bg-brand-green text-black hover:bg-brand-emerald",
          )}
        >
          {light ? t("nav.shopNow") : t("nav.buyNow")}
        </Link>
      </div>
    </div>
  );
}
