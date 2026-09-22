import type { Metadata } from "next";
import { PolicyLayout, PolicySection } from "@/components/ui/PolicyLayout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Celibery's site and products.",
};

export default function TermsPage() {
  return (
    <PolicyLayout eyebrow="Legal" title="Terms of Service" updated="September 2026">
      <PolicySection title="Agreement to terms">
        <p>
          By accessing celibery.com or placing an order, you agree to these terms. If you don&apos;t
          agree, please don&apos;t use the site.
        </p>
      </PolicySection>

      <PolicySection title="Orders and pricing">
        <p>
          All prices are listed in USD and may change without notice. We reserve the right to
          refuse or cancel any order — including for suspected fraud, pricing errors, or stock
          issues — in which case we&apos;ll notify you and issue a full refund.
        </p>
      </PolicySection>

      <PolicySection title="Shipping and risk of loss">
        <p>
          Ownership and risk of loss for products pass to you once an order is handed to the
          carrier. See our{" "}
          <a href="/shipping" className="text-brand-emerald underline underline-offset-2">
            Shipping &amp; Returns
          </a>{" "}
          page for delivery timelines.
        </p>
      </PolicySection>

      <PolicySection title="Warranty">
        <p>
          Products are covered by our{" "}
          <a href="/warranty" className="text-brand-emerald underline underline-offset-2">
            18-month limited warranty
          </a>
          . Outside of that warranty, products are provided &ldquo;as is&rdquo; to the extent permitted
          by law.
        </p>
      </PolicySection>

      <PolicySection title="Acceptable use">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Don&apos;t use the site for any unlawful purpose</li>
          <li>Don&apos;t attempt to disrupt or gain unauthorized access to our systems</li>
          <li>Don&apos;t copy, resell, or scrape site content without permission</li>
        </ul>
      </PolicySection>

      <PolicySection title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, Celibery is not liable for indirect, incidental,
          or consequential damages arising from use of our products or site. Our total liability
          for any claim is limited to the amount you paid for the product in question.
        </p>
      </PolicySection>

      <PolicySection title="Changes to these terms">
        <p>
          We may update these terms from time to time. Continued use of the site after changes
          means you accept the updated terms.
        </p>
      </PolicySection>

      <PolicySection title="Contact us">
        <p>
          Questions about these terms can be sent to {site.email} or {site.address}.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
