"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductArt } from "@/components/ui/ProductArt";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { formatAed } from "@/data/products";

export function CartView() {
  const { items, setQty, removeItem, subtotal } = useCart();
  const { t } = useLanguage();

  if (items.length === 0) {
    return (
      <div className="py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
            <ShoppingBag className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-semibold text-neutral-900">{t("cart.emptyBagTitle")}</h1>
          <p className="max-w-sm text-neutral-500">{t("cart.emptyBagText")}</p>
          <Button href="/products" variant="primary" size="lg" className="mt-2">
            {t("common.continueShopping")}
          </Button>
        </Container>
      </div>
    );
  }

  const shippingFree = subtotal >= 150;

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">{t("cart.yourBag")}</h1>
        <p className="mt-1 text-sm text-neutral-500">
          {items.length} {items.length === 1 ? t("common.item") : t("common.items")}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <ul className="flex flex-col divide-y divide-neutral-100 rounded-2xl border border-neutral-100">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4 p-4 sm:gap-5 sm:p-5">
                <Link
                  href={`/products/${item.slug}`}
                  className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-[#fbfbfd] sm:h-24 sm:w-24"
                >
                  <ProductArt kind={item.visual} className="h-14 w-14 sm:h-16 sm:w-16" />
                </Link>

                <div className="flex flex-1 flex-col gap-1">
                  <Link href={`/products/${item.slug}`} className="text-sm font-bold text-neutral-900 hover:text-brand-emerald sm:text-base">
                    {item.name}
                  </Link>
                  <span className="text-sm text-neutral-500">{formatAed(item.price)}</span>

                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex h-9 items-center rounded-full border border-neutral-200">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="flex h-full w-8 items-center justify-center text-neutral-600 hover:text-neutral-900"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-medium text-neutral-900">{item.qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="flex h-full w-8 items-center justify-center text-neutral-600 hover:text-neutral-900"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeItem(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <span className="flex-shrink-0 text-sm font-bold text-neutral-900 sm:text-base">
                  {formatAed(item.price * item.qty)}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex h-fit flex-col gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
            <h2 className="text-lg font-bold text-neutral-900">{t("cart.orderSummary")}</h2>
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>{t("cart.subtotal")}</span>
              <span className="font-medium text-neutral-900">{formatAed(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>{t("cart.shipping")}</span>
              <span className="font-medium text-neutral-900">{shippingFree ? t("cart.free") : formatAed(15)}</span>
            </div>
            {!shippingFree && (
              <p className="text-xs text-neutral-500">Add {formatAed(150 - subtotal)} more for free shipping.</p>
            )}
            <div className="h-px bg-neutral-200" />
            <div className="flex items-center justify-between text-base font-bold text-neutral-900">
              <span>{t("cart.total")}</span>
              <span>{formatAed(shippingFree ? subtotal : subtotal + 15)}</span>
            </div>
            <Button href="/checkout" variant="accent" size="lg" className="mt-2 w-full">
              {t("common.proceedToCheckout")}
            </Button>
            <Link href="/products" className="text-center text-sm text-neutral-500 hover:text-neutral-900">
              {t("common.continueShopping")}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
