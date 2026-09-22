import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: "Get in touch with Celibery support, warranty, and shipping questions answered.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-emerald-50/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="We're here to help"
            title="Contact & Support"
            description="Order questions, warranty claims, or just want to know which charger fits your setup — reach out and a real person replies within 2 hours on average."
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 p-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-emerald">
                <Mail className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Email us</p>
                <a href={`mailto:${site.email}`} className="font-medium text-neutral-900 hover:text-brand-emerald">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 p-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-emerald">
                <Phone className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Call us</p>
                <a href={`tel:${site.phone}`} className="font-medium text-neutral-900 hover:text-brand-emerald">
                  {site.phone}
                </a>
                <p className="text-xs text-neutral-400">Mon–Fri, 9am–6pm CT</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 p-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-emerald">
                <MapPin className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Headquarters</p>
                <p className="font-medium text-neutral-900">{site.address}</p>
              </div>
            </div>
          </div>

          <div className="order-1 rounded-3xl border border-neutral-100 p-6 sm:p-8 lg:order-2">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-neutral-100 py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Frequently asked"
            title="Answers before you have to ask"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
            <FaqAccordion />
          </div>
        </Container>
      </section>
    </div>
  );
}
