import type { Metadata } from "next";
import { PolicyLayout, PolicySection } from "@/components/ui/PolicyLayout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Celibery collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout eyebrow="Legal" title="Privacy Policy" updated="September 2026">
      <PolicySection title="Overview">
        <p>
          This policy explains what information Celibery (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects when
          you browse our site or place an order, how we use it, and the choices you have. By using
          celibery.com, you agree to the practices described here.
        </p>
      </PolicySection>

      <PolicySection title="Information we collect">
        <p>
          <strong className="text-neutral-800">Information you give us:</strong> name, email, shipping
          and billing address, phone number, and payment details when you place an order, sign up
          for our newsletter, or contact support.
        </p>
        <p>
          <strong className="text-neutral-800">Information collected automatically:</strong> device
          type, browser, IP address, pages visited, and referral source, collected via cookies and
          similar technologies to keep the site working and to understand how it&apos;s used.
        </p>
      </PolicySection>

      <PolicySection title="How we use your information">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Process and fulfill orders, and communicate about shipping and returns</li>
          <li>Provide customer support and respond to warranty claims</li>
          <li>Send order updates and, if you&apos;ve opted in, marketing emails</li>
          <li>Improve our site, products, and checkout experience</li>
          <li>Detect and prevent fraud or abuse</li>
        </ul>
      </PolicySection>

      <PolicySection title="Sharing your information">
        <p>
          We share information with service providers who help us run the business — payment
          processors, shipping carriers, and email platforms — under agreements that limit their
          use of your data to providing that service. We never sell your personal information.
        </p>
      </PolicySection>

      <PolicySection title="Your choices">
        <p>
          You can unsubscribe from marketing emails at any time using the link in any email, or
          request access to, correction of, or deletion of your personal data by contacting us at{" "}
          <a href={`mailto:${site.email}`} className="text-brand-emerald underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection title="Contact us">
        <p>
          Questions about this policy can be sent to {site.email} or {site.address}.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
