"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import { site, footerColumns } from "@/data/site";
import { footerLabels } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import {
  InstagramIcon,
  FacebookIcon,
  XIcon,
  YoutubeIcon,
  TikTokIcon,
  LinkedinIcon,
  PinterestIcon,
  SnapchatIcon,
} from "@/components/icons/SocialIcons";

const socialIcons = {
  instagram: { icon: InstagramIcon, label: "Instagram" },
  facebook: { icon: FacebookIcon, label: "Facebook" },
  x: { icon: XIcon, label: "X" },
  youtube: { icon: YoutubeIcon, label: "YouTube" },
  tiktok: { icon: TikTokIcon, label: "TikTok" },
  linkedin: { icon: LinkedinIcon, label: "LinkedIn" },
  pinterest: { icon: PinterestIcon, label: "Pinterest" },
  snapchat: { icon: SnapchatIcon, label: "Snapchat" },
} as const;

export function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const { lang, t } = useLanguage();
  const fl = (label: string) => footerLabels[lang][label] ?? label;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="bg-black pb-12 pt-16 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-neutral-800 pb-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt={site.name} width={2000} height={674} className="mb-4 h-8 w-auto" />
            <h3 className="mb-2 text-xl font-bold tracking-tight text-white">{site.tagline}</h3>
            <p className="mb-5 text-xs text-neutral-400">{t("footer.newsletterText")}</p>
            {submitted ? (
              <p className="rounded-lg border border-brand-green/30 bg-brand-green/10 px-4 py-2.5 text-xs font-medium text-brand-green">
                {t("footer.subscribed")}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder={t("footer.emailPlaceholder")}
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-brand-green focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-black transition-colors hover:bg-neutral-200"
                  >
                    {t("footer.signUp")}
                  </button>
                </div>
                <label className="flex items-start gap-2 text-[11px] text-neutral-400">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>{t("footer.agree").replace("{name}", site.name)}</span>
                </label>
              </form>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {Object.entries(site.social).map(([key, href]) => {
                const entry = socialIcons[key as keyof typeof socialIcons];
                if (!entry) return null;
                const { icon: Icon, label } = entry;
                return (
                  <a
                    key={key}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerColumns).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-sm font-bold text-white">{fl(heading)}</h4>
              <ul className="space-y-2.5 text-xs">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {fl(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright &copy; {new Date().getFullYear()} {site.name} {t("footer.allRightsReserved")}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-white">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              {t("footer.termsAndConditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
