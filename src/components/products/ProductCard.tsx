"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { formatAed, getCategoryBySlug } from "@/data/products";
import { ProductArt } from "@/components/ui/ProductArt";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { categoryLabels } from "@/data/i18n";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.categorySlug);
  const { addItem } = useCart();
  const { lang } = useLanguage();
  const [added, setAdded] = useState(false);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-[#fbfbfd] p-4 transition-all hover:border-brand-emerald hover:shadow-md"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-white">
        <ProductArt kind={product.visual} className="h-28 w-28 transition-transform duration-500 group-hover:scale-105" />
        {product.badge && (
          <Badge tone={product.badge === "New" ? "dark" : "brand"} className="absolute left-2 top-2">
            {product.badge}
          </Badge>
        )}
        <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
        <button
          aria-label={`Add ${product.name} to bag`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, visual: product.visual }, 1);
            setAdded(true);
            setTimeout(() => setAdded(false), 1800);
          }}
          className={cn(
            "absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-all duration-300",
            added ? "bg-brand-green text-black" : "bg-neutral-900 text-white opacity-0 hover:bg-black group-hover:opacity-100",
          )}
        >
          {added ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
        </button>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-1.5">
        <p className="text-[11px] font-medium tracking-wide text-neutral-500 uppercase">
          {category ? (categoryLabels[lang][category.slug] ?? category.name) : ""}
        </p>
        <h3 className="text-sm font-bold text-neutral-900 transition-colors group-hover:text-brand-emerald">{product.name}</h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-neutral-500">{product.tagline}</p>
        <Rating value={product.rating} count={product.reviewCount} className="mt-1" />
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-sm font-bold text-neutral-900">{formatAed(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-neutral-400 line-through">{formatAed(product.compareAtPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
