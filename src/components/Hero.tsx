import Link from "next/link";
import { useLocale } from "@/components/LanguageToggle";

export default function Hero() {
  const [locale] = useLocale();
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-10 text-center sm:text-left">
      <p className="text-sm uppercase tracking-widest text-black/60 dark:text-white/60">
        {locale === "gu" ? "Rajkot business māṭe global digital solutions" : "Empowering Rajkot businesses with global digital solutions."}
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
        {locale === "gu" ? "Websites, Apps, Ads — je leads āpe" : "Websites, Apps, Ads — built to drive leads"}
      </h1>
      <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl">
        {locale === "gu" ? "Websites • Apps • Digital Marketing • Real Estate Tech" : "Websites • Apps • Digital Marketing • Real Estate Tech"}
      </p>
      <div className="mt-6 flex items-center gap-3 sm:gap-4 flex-col sm:flex-row">
        <a
          href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
        >
          {locale === "gu" ? "WhatsApp par vāt karo" : "Chat on WhatsApp"}
        </a>
        <Link href="/services" className="text-sm underline underline-offset-4">{locale === "gu" ? "Services juo" : "Explore Services"}</Link>
      </div>
    </section>
  );
}


