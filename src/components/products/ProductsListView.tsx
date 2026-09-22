"use client";

import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import type { Category, Product } from "@/data/products";
import { useLanguage } from "@/lib/language-context";
import { categoryLabels } from "@/data/i18n";
import { cn } from "@/lib/utils";

export function ProductsListView({
  categories,
  activeCategory,
  activeSeries,
  filtered,
  seriesHeading,
}: {
  categories: Category[];
  activeCategory: Category | undefined;
  activeSeries: string | undefined;
  filtered: Product[];
  seriesHeading: string | null;
}) {
  const { lang, t } = useLanguage();
  const heading = seriesHeading ?? (activeCategory ? categoryLabels[lang][activeCategory.slug] ?? activeCategory.name : t("common.allProductsTitle"));

  return (
    <>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold tracking-[0.18em] text-brand-emerald uppercase">{t("common.shop")}</span>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">{heading}</h1>
        <p className="max-w-xl text-neutral-600">{t("common.allProductsSubtitle")}</p>
      </div>

      <div className="relative mt-8 sm:mt-10">
        <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            href="/products"
            className={cn(
              "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              !activeCategory && !activeSeries ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
            )}
          >
            {t("common.all")}
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products?category=${c.slug}`}
              className={cn(
                "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory?.slug === c.slug
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
              )}
            >
              {categoryLabels[lang][c.slug] ?? c.name}
            </Link>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:hidden"
        />
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 py-16 text-center">
          <p className="text-lg font-semibold text-neutral-900">{t("common.noProductsFound")}</p>
          <p className="text-sm text-neutral-500">{t("common.tryDifferentCategory")}</p>
        </div>
      )}
    </>
  );
}
