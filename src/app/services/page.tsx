function Tier({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-3xl font-semibold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-black/80 dark:text-white/80">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span>•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium"
      >
        Get Quote
      </a>
    </div>
  );
}

export const metadata = {
  title: "Services & Pricing | SkyRise Digital Hub",
  description: "Starter, Growth, Premium tiers with transparent ranges and WhatsApp quotes.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Services & Pricing</h1>
      <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">Info-only website: all CTAs go to WhatsApp. Government/third‑party fees are extra.</p>

      <section className="mt-8 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">A) Website Development – Premium Pricing</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Tier name="Starter Website" price="₹15,000–₹25,000" features={["3–4 pages (Home, About, Services, Contact)", "Mobile responsive, fast loading", "WhatsApp button integration", "Basic on‑page SEO (titles, meta, OG)"]} />
            <Tier name="Professional Website" price="₹35,000–₹70,000" features={["6–10 pages + Blog/Portfolio", "SEO‑ready structure, Map, Forms, Analytics", "Speed & security best practices"]} />
            <Tier name="E‑Commerce (Info‑first)" price="₹80,000–₹2,00,000" features={["Catalogue, categories, filters", "No online payments — WhatsApp for orders", "Admin panel, PWA setup"]} />
          </div>
          <p className="mt-3 text-sm text-black/70 dark:text-white/70">Add‑ons: Copywriting, Stock images, Custom graphics, Multi‑language, Migration, Priority support.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">B) Mobile Apps</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Tier name="PWA Lite App" price="₹25,000–₹50,000" features={["App‑like via browser", "Add‑to‑Home‑Screen + Push", "Fast, zero Play Store cost"]} />
            <Tier name="Flutter/Native App" price="₹1,50,000–₹3,00,000+" features={["Custom features: booking, payments, chat, admin", "Play Store/iOS launch support"]} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">C) Digital Marketing (Social Media Ads)</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Tier name="Starter" price="₹7k–12k / mo" features={["1–2 campaigns", "6–8 creatives", "Monthly report"]} />
            <Tier name="Growth" price="₹15k–25k / mo" features={["3–5 campaigns", "12–16 creatives", "Fortnightly report"]} />
            <Tier name="Premium" price="₹30k–45k / mo" features={["Multi‑channel + remarketing", "18–20 creatives", "Weekly review"]} />
          </div>
          <p className="mt-3 text-sm text-black/70 dark:text-white/70">Ad spend is paid directly to the platform (Meta/Google) by the client.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">D) Real Estate Marketing</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Tier name="Property Listing Website" price="₹50,000–₹1,20,000" features={["Search & filter", "Property detail pages", "Agent contact + WhatsApp leads"]} />
            <Tier name="Marketing Kit" price="₹20,000–₹50,000" features={["Photoshoot + video", "Instagram/Facebook ads (2–4 weeks)", "Digital brochure & PDF catalog"]} />
            <Tier name="Premium Builder Package" price="₹1,00,000–₹3,00,000" features={["Brand identity + microsite", "Drone video, ad strategy", "Lead management setup"]} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">E) Visa & Passport Consultant Services</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Tier name="Passport Service (New/Renewal)" price="Service charge ₹2,000–₹3,500" features={["Govt fee extra (PSK actuals)", "Tatkal higher as per PSK", "Facilitation & documentation support"]} />
            <Tier name="Visa Filing Service" price="₹6,500–₹35,000" features={["Tourist/Student/Business", "Service charges only; embassy/VFS extra", "File prep and guidance"]} />
          </div>
          <p className="mt-3 text-sm text-black/70 dark:text-white/70">Add‑ons: Flight tickets, Insurance, Forex card/currency (fees/commissions as applicable).</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">F) Travel Ticket Booking</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Tier name="Flight Tickets" price="Service charge ₹300–₹700 / pax" features={["Domestic & International", "Best‑fare search & hold", "E‑ticket on WhatsApp"]} />
            <Tier name="Train Tickets" price="Service charge ₹100–₹250 / pax" features={["IRCTC booking support", "Seat/berth preference if available", "PNR updates on WhatsApp"]} />
            <Tier name="Bus Tickets" price="Service charge ₹50–₹150 / pax" features={["AC/Non‑AC options", "Operator comparison", "Instant e‑ticket"]} />
          </div>
          <p className="mt-3 text-sm text-black/70 dark:text-white/70">Note: Carrier fares and gateway/IRCTC fees are extra at actuals. We facilitate search, booking and support.</p>
        </div>

        <div>
          <a
            href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
          >
            Get Free Consultation — WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}


