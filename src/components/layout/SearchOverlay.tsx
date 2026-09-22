"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { formatAed, products } from "@/data/products";
import { ProductArt } from "@/components/ui/ProductArt";

export function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => {
        document.documentElement.style.overflow = "";
        clearTimeout(t);
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results =
    query.trim().length === 0
      ? []
      : products
          .filter((p) => {
            const haystack = `${p.name} ${p.tagline} ${p.categorySlug}`.toLowerCase();
            return haystack.includes(query.trim().toLowerCase());
          })
          .slice(0, 6);

  function close() {
    setOpen(false);
    setQuery("");
  }

  return (
    <>
      <button
        aria-label="Search"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
      >
        <Search className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center bg-neutral-900/50 px-4 pt-20 backdrop-blur-sm sm:pt-28">
          <button
            aria-label="Close search"
            onClick={close}
            className="absolute inset-0 h-full w-full cursor-default"
            tabIndex={-1}
          />
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-neutral-100 px-5 py-4">
              <Search className="h-5 w-5 flex-shrink-0 text-neutral-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search chargers, cables, power banks..."
                className="w-full text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
              />
              <button
                aria-label="Close search"
                onClick={close}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query.trim().length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-neutral-400">
                  Start typing to search the catalog.
                </p>
              )}
              {query.trim().length > 0 && results.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-neutral-400">
                  No products match &ldquo;{query}&rdquo;.
                </p>
              )}
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={close}
                  className="flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-neutral-50"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                    <ProductArt kind={product.visual} className="h-8 w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-neutral-900">{product.name}</p>
                    <p className="truncate text-xs text-neutral-500">{product.tagline}</p>
                  </div>
                  <span className="flex-shrink-0 text-sm font-semibold text-neutral-900">
                    {formatAed(product.price)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
