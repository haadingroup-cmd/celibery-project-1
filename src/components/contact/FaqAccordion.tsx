"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What does the 18-month warranty cover?",
    a: "Every Celibery product is covered against manufacturing defects for 18 months from delivery. If something stops working under normal use, we replace it — no receipt hunting required, just your order number.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders ship within 1 business day and arrive in 2–4 business days domestically, or 5–10 days internationally. You'll get a tracking link by email the moment it leaves our warehouse.",
  },
  {
    q: "Can I return an item if I change my mind?",
    a: "Yes — unused items in original packaging can be returned within 30 days for a full refund. Opened items that don't work as expected are covered under warranty instead of the return window.",
  },
  {
    q: "Are Celibery chargers safe for laptops and tablets?",
    a: "Yes. All chargers and power banks use smart power allocation and are independently lab-tested for over-current, over-voltage, and thermal protection before they ship.",
  },
  {
    q: "Do you offer wholesale or bulk pricing?",
    a: "We do. Select 'Wholesale / press' in the contact form with your order size and we'll follow up with tiered pricing within one business day.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-neutral-100 rounded-2xl border border-neutral-100">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className="font-medium text-neutral-900">{faq.q}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 flex-shrink-0 text-neutral-400 transition-transform duration-300",
                  isOpen && "rotate-180 text-brand-emerald",
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-600 sm:px-6">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
