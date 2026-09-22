import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WelcomePopup } from "@/components/layout/WelcomePopup";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CartProvider } from "@/lib/cart-context";
import { LanguageProvider } from "@/lib/language-context";
import { site } from "@/data/site";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://celibery.vercel.app"),
  title: {
    default: "Celibery — Smart Tech for Smarter Living",
    template: "%s — Celibery",
  },
  description:
    "Celibery designs NAS storage, GaN chargers, power banks, and docks engineered for everyday power and connectivity.",
  openGraph: {
    title: "Celibery — Smart Tech for Smarter Living",
    description: "NAS storage, GaN chargers, power banks, and docks engineered for everyday power and connectivity.",
    siteName: "Celibery",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: "https://celibery.vercel.app",
  logo: "https://celibery.vercel.app/icon",
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
  },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <WelcomePopup />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
