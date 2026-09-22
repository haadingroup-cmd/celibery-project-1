"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-900 p-0.5 text-[11px] font-bold">
      <Languages className="mx-1 h-3 w-3 text-neutral-400" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "rounded-full px-2 py-0.5 transition-colors",
          lang === "en" ? "bg-brand-green text-black" : "text-neutral-400 hover:text-white",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={cn(
          "rounded-full px-2 py-0.5 transition-colors",
          lang === "ar" ? "bg-brand-green text-black" : "text-neutral-400 hover:text-white",
        )}
      >
        AR
      </button>
    </div>
  );
}
