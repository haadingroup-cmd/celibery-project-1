"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import type { Product } from "@/data/products";

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { t } = useLanguage();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex h-13 items-center rounded-full border border-neutral-200">
        <button
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-full w-11 items-center justify-center text-neutral-600 hover:text-neutral-900"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center text-sm font-medium text-neutral-900">{qty}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => setQty((q) => Math.min(9, q + 1))}
          className="flex h-full w-11 items-center justify-center text-neutral-600 hover:text-neutral-900"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <Button
        variant={added ? "outline" : "accent"}
        size="lg"
        className="flex-1"
        onClick={() => {
          addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, visual: product.visual }, qty);
          setAdded(true);
          setQty(1);
          setTimeout(() => setAdded(false), 2200);
        }}
      >
        {added ? (
          <>
            <Check className="h-4 w-4" /> {t("common.addedToBag")}
          </>
        ) : (
          <>
            <ShoppingBag className="h-4 w-4" /> {t("common.addToBag")}
          </>
        )}
      </Button>
    </div>
  );
}
