"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ProductArt } from "@/components/ui/ProductArt";
import { useLanguage } from "@/lib/language-context";

export function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-24 z-50 sm:inset-x-auto sm:bottom-28 sm:right-6">
      <div className="animate-fly-in relative flex w-full max-w-sm items-center gap-4 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-4 shadow-2xl sm:p-5">
        <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-green/10 blur-2xl" />

        <button
          type="button"
          aria-label="Close"
          onClick={() => setVisible(false)}
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-neutral-100">
          <ProductArt kind="speaker" className="h-9 w-9" />
        </div>

        <div className="flex-1 pr-4">
          <p className="text-sm font-bold text-neutral-900">{t("popup.welcomeTitle")}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">{t("popup.welcomeText")}</p>
          <Link
            href="/products/cel-96s-speaker"
            onClick={() => setVisible(false)}
            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand-emerald hover:underline"
          >
            {t("popup.shopCta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
