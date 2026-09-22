import type { Metadata } from "next";
import { PolicyLayout, PolicySection } from "@/components/ui/PolicyLayout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Celibery shipping timelines, costs, and our 30-day return policy.",
};

export default function ShippingPage() {
  return (
    <PolicyLayout eyebrow="Support" title="Shipping & Returns" updated="September 2026">
      <PolicySection title="Processing time">
        <p>Orders placed before 2pm CT ship the same business day. Everything else ships the next business day.</p>
      </PolicySection>

      <PolicySection title="Shipping rates and timelines">
        <div className="overflow-hidden rounded-2xl border border-neutral-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-50 text-neutral-500">
              <tr>
                <th className="px-4 py-3 font-medium">Region</th>
                <th className="px-4 py-3 font-medium">Delivery time</th>
                <th className="px-4 py-3 font-medium">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="px-4 py-3">United States</td>
                <td className="px-4 py-3">2–4 business days</td>
                <td className="px-4 py-3">Free over $35, otherwise $4.99</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Canada</td>
                <td className="px-4 py-3">4–7 business days</td>
                <td className="px-4 py-3">$9.99</td>
              </tr>
              <tr>
                <td className="px-4 py-3">International</td>
                <td className="px-4 py-3">5–10 business days</td>
                <td className="px-4 py-3">Calculated at checkout</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PolicySection>

      <PolicySection title="Tracking your order">
        <p>
          You&apos;ll get a tracking link by email as soon as your order ships. If it hasn&apos;t moved in
          more than 3 business days, contact us and we&apos;ll follow up with the carrier.
        </p>
      </PolicySection>

      <PolicySection title="Returns">
        <p>
          Unused items in original packaging can be returned within 30 days of delivery for a full
          refund to your original payment method. To start a return, email {site.email} with your
          order number — we&apos;ll send a prepaid return label for domestic orders.
        </p>
      </PolicySection>

      <PolicySection title="Exchanges">
        <p>
          Need a different color or product? Let us know in your return request and we&apos;ll ship the
          replacement as soon as the original is on its way back — no need to wait for the refund
          to process first.
        </p>
      </PolicySection>

      <PolicySection title="Damaged or incorrect items">
        <p>
          If an order arrives damaged or wrong, contact us within 14 days with a photo and we&apos;ll
          send a replacement at no cost — no return required.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
