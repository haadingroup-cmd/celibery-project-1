"use client";

import Link from "next/link";
import { ChevronRight, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { ProductArt } from "@/components/ui/ProductArt";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { ProductCard } from "@/components/products/ProductCard";
import { AddToCart } from "@/components/products/AddToCart";
import { formatAed, type Category, type Product } from "@/data/products";
import { categoryLabels } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";

export function ProductDetailView({
  product,
  category,
  related,
}: {
  product: Product;
  category: Category | undefined;
  related: Product[];
}) {
  const { lang, t } = useLanguage();
  const categoryName = category ? categoryLabels[lang][category.slug] ?? category.name : undefined;

  return (
    <>
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/products" className="hover:text-neutral-900">
          {t("common.shop")}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link href={`/products?category=${category.slug}`} className="hover:text-neutral-900">
              {categoryName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-neutral-800">{product.name}</span>
      </nav>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center rounded-3xl border border-gray-200 bg-[#fbfbfd] p-10 lg:sticky lg:top-28 lg:max-w-none lg:self-start">
          <ProductArt kind={product.visual} className="h-64 w-64" />
          {product.badge && (
            <Badge tone={product.badge === "New" ? "dark" : "brand"} className="absolute left-4 top-4">
              {product.badge}
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-medium tracking-wide text-brand-emerald uppercase">{categoryName}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">{product.name}</h1>
          </div>

          <Rating value={product.rating} count={product.reviewCount} size="md" />

          <p className="text-lg leading-relaxed text-neutral-600">{product.tagline}</p>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-neutral-900">{formatAed(product.price)}</span>
            {product.compareAtPrice && (
              <>
                <span className="text-lg text-neutral-400 line-through">{formatAed(product.compareAtPrice)}</span>
                <Badge tone="brand">Save {Math.round((1 - product.price / product.compareAtPrice) * 100)}%</Badge>
              </>
            )}
          </div>

          <div className="h-px w-full bg-neutral-100" />

          <AddToCart product={product} />

          <div className="grid grid-cols-1 gap-3 rounded-2xl bg-neutral-50 p-4 sm:grid-cols-3 sm:p-5">
            <div className="flex items-center gap-2.5 text-sm text-neutral-700">
              <Truck className="h-4 w-4 flex-shrink-0 text-brand-emerald" />
              {t("common.freeShippingOver")}
            </div>
            <div className="flex items-center gap-2.5 text-sm text-neutral-700">
              <RotateCcw className="h-4 w-4 flex-shrink-0 text-brand-emerald" />
              {t("common.returns30")}
            </div>
            <div className="flex items-center gap-2.5 text-sm text-neutral-700">
              <ShieldCheck className="h-4 w-4 flex-shrink-0 text-brand-emerald" />
              {t("common.warranty18")}
            </div>
          </div>

          <div className="h-px w-full bg-neutral-100" />

          <div>
            <h2 className="text-lg font-semibold text-neutral-900">{t("common.overview")}</h2>
            <p className="mt-2 leading-relaxed text-neutral-600">{product.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900">{t("common.highlights")}</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-green" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900">{t("common.specifications")}</h2>
            <dl className="mt-3 divide-y divide-neutral-100 rounded-2xl border border-neutral-100">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <dt className="text-sm text-neutral-500">{spec.label}</dt>
                  <dd className="text-sm font-medium text-neutral-900 sm:text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20 sm:mt-28">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">{t("common.youMightAlsoLike")}</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
