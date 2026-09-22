"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductArt } from "@/components/ui/ProductArt";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { formatAed } from "@/data/products";

function generateOrderRef() {
  return `CB-${Math.floor(100000 + Math.random() * 900000)}`;
}

export function CheckoutView() {
  const { items, subtotal, clear } = useCart();
  const { t } = useLanguage();
  const [placed, setPlaced] = useState(false);
  const [orderRef] = useState(generateOrderRef);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPlaced(true);
    clear();
  }

  if (placed) {
    return (
      <div className="py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-emerald">
            <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-semibold text-neutral-900">{t("checkout.orderReceivedTitle")}</h1>
          <p className="max-w-md text-neutral-500">
            Your order <span className="font-semibold text-neutral-900">#{orderRef}</span> has been received. A
            member of our team will contact you shortly by phone or email to confirm delivery details and payment.
          </p>
          <Button href="/products" variant="primary" size="lg" className="mt-2">
            {t("common.continueShopping")}
          </Button>
        </Container>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
            <ShoppingBag className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-semibold text-neutral-900">{t("checkout.emptyTitle")}</h1>
          <p className="max-w-sm text-neutral-500">{t("checkout.emptyText")}</p>
          <Button href="/products" variant="primary" size="lg" className="mt-2">
            {t("common.continueShopping")}
          </Button>
        </Container>
      </div>
    );
  }

  const shippingFree = subtotal >= 150;
  const total = shippingFree ? subtotal : subtotal + 15;

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">{t("checkout.title")}</h1>
        <p className="mt-1 text-sm text-neutral-500">{t("checkout.subtitle")}</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-6 rounded-2xl border border-neutral-100 p-6">
            <h2 className="text-lg font-bold text-neutral-900">{t("checkout.deliveryDetails")}</h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-sm font-medium text-neutral-800">
                  {t("checkout.fullName")}
                </label>
                <input
                  id="fullName"
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-neutral-800">
                  {t("checkout.phone")}
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  placeholder="+971 5X XXX XXXX"
                  className="h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-neutral-800">
                {t("checkout.email")}
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="you@email.com"
                className="h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="address" className="text-sm font-medium text-neutral-800">
                {t("checkout.address")}
              </label>
              <input
                id="address"
                required
                type="text"
                placeholder="Street, building, apartment"
                className="h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="city" className="text-sm font-medium text-neutral-800">
                  {t("checkout.city")}
                </label>
                <input
                  id="city"
                  required
                  type="text"
                  placeholder="Dubai"
                  className="h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="notes" className="text-sm font-medium text-neutral-800">
                  {t("checkout.notes")}
                </label>
                <input
                  id="notes"
                  type="text"
                  placeholder="Landmark, preferred time..."
                  className="h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
                />
              </div>
            </div>
          </div>

          <div className="flex h-fit flex-col gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
            <h2 className="text-lg font-bold text-neutral-900">{t("cart.orderSummary")}</h2>
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                    <ProductArt kind={item.visual} className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-neutral-900">{item.name}</p>
                    <p className="text-xs text-neutral-500">{t("common.qty")} {item.qty}</p>
                  </div>
                  <span className="text-xs font-semibold text-neutral-900">{formatAed(item.price * item.qty)}</span>
                </li>
              ))}
            </ul>
            <div className="h-px bg-neutral-200" />
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>{t("cart.subtotal")}</span>
              <span className="font-medium text-neutral-900">{formatAed(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>{t("cart.shipping")}</span>
              <span className="font-medium text-neutral-900">{shippingFree ? t("cart.free") : formatAed(15)}</span>
            </div>
            <div className="h-px bg-neutral-200" />
            <div className="flex items-center justify-between text-base font-bold text-neutral-900">
              <span>{t("cart.total")}</span>
              <span>{formatAed(total)}</span>
            </div>
            <Button type="submit" variant="accent" size="lg" className="mt-2 w-full">
              {t("common.placeOrder")}
            </Button>
            <p className="text-center text-xs text-neutral-400">{t("checkout.codNote")}</p>
            <Link href="/cart" className="text-center text-sm text-neutral-500 hover:text-neutral-900">
              {t("checkout.backToBag")}
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
}
