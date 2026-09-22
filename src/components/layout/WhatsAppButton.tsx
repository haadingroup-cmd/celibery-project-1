import { site } from "@/data/site";
import { WhatsappIcon } from "@/components/icons/SocialIcons";

export function WhatsAppButton() {
  const message = encodeURIComponent("Hi Celibery, I'd like to know more about your products.");

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span className="animate-pulse-glow absolute inset-0 rounded-full bg-[#25D366]" aria-hidden />
      <WhatsappIcon className="relative h-7 w-7" />
    </a>
  );
}
