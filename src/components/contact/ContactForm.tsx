"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-emerald-50 bg-emerald-50 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-emerald" />
        <h3 className="font-display text-lg font-semibold text-neutral-900">Message sent</h3>
        <p className="max-w-sm text-sm text-neutral-600">
          Thanks for reaching out — our support team replies within 2 business hours on average.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-neutral-800">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Jane Doe"
            className="h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-neutral-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="you@email.com"
            className="h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-neutral-800">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="h-12 rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
          defaultValue="Order support"
        >
          <option>Order support</option>
          <option>Warranty claim</option>
          <option>Product question</option>
          <option>Wholesale / press</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-neutral-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="self-start">
        Send message <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
