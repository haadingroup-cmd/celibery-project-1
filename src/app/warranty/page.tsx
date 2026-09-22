import type { Metadata } from "next";
import { ShieldCheck, Wrench, XCircle } from "lucide-react";
import { PolicyLayout, PolicySection } from "@/components/ui/PolicyLayout";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Warranty",
  description: "Celibery's 18-month limited warranty coverage and claim process.",
};

export default function WarrantyPage() {
  return (
    <PolicyLayout eyebrow="Support" title="18-Month Limited Warranty" updated="September 2026">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { icon: ShieldCheck, label: "18 months", sub: "from date of delivery" },
          { icon: Wrench, label: "Free replacement", sub: "for covered defects" },
          { icon: XCircle, label: "No receipt hunting", sub: "just your order number" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 rounded-2xl bg-emerald-50 p-5 text-center">
            <item.icon className="h-6 w-6 text-brand-emerald" strokeWidth={1.6} />
            <p className="font-display font-semibold text-neutral-900">{item.label}</p>
            <p className="text-xs text-neutral-500">{item.sub}</p>
          </div>
        ))}
      </div>

      <PolicySection title="What's covered">
        <p>
          Every Celibery product — chargers, cables, power banks, docks, and wireless charging
          accessories — is covered against manufacturing defects and premature failure under
          normal use for 18 months from the delivery date.
        </p>
      </PolicySection>

      <PolicySection title="What's not covered">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Physical damage from drops, liquid exposure, or misuse</li>
          <li>Normal wear on cable connectors after extended heavy use</li>
          <li>Damage caused by third-party accessories or incompatible devices</li>
          <li>Products purchased from unauthorized resellers</li>
        </ul>
      </PolicySection>

      <PolicySection title="How to file a claim">
        <p>
          Email {site.email} with your order number and a short description (or photo/video, for
          physical issues) of what&apos;s happening. Most claims are resolved within 2 business days —
          approved claims ship a free replacement, no need to return the original unit unless we
          ask.
        </p>
      </PolicySection>

      <div className="pt-2">
        <Button href="/contact" variant="primary" size="lg">
          Start a warranty claim
        </Button>
      </div>
    </PolicyLayout>
  );
}
