export const metadata = {
  title: "About | SkyRise Digital Hub",
  description: "Rajkot thi start, vision global. Our mission and values.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-black/10 dark:border-white/10 p-8 bg-white/50 dark:bg-white/5">
        <h1 className="text-3xl sm:text-4xl font-semibold">About SkyRise Digital Hub</h1>
        <p className="mt-3 text-black/70 dark:text-white/70 max-w-3xl">Empowering Rajkot businesses with global digital solutions. Rajkot thi start, vision global — we help ambitious local brands get leads with websites, apps, and ROI‑focused ads.</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {['Fast Delivery','Mobile‑First','SEO‑Ready','Transparent Pricing','WhatsApp Support'].map(b => (
            <span key={b} className="px-3 py-1 rounded-full border border-black/10 dark:border-white/10">{b}</span>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Why SkyRise Digital Hub?</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <h3 className="font-medium">Transparent vs. Typical</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Clear deliverables and pricing. No hidden charges. Honest timelines.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <h3 className="font-medium">WhatsApp‑first</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Fast replies, prefilled message flows, and simple approvals.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <h3 className="font-medium">Rajkot rooted, global standard</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Local context with world‑class UX, speed, and SEO practices.</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <h3 className="font-medium">Data‑driven creatives</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">We test, measure, and improve to grow leads efficiently.</p>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Mission & Values</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ['Customer Obsession','We prioritize outcomes and measurable impact.'],
            ['Craft & Clarity','Clean design, clear messaging, solid delivery.'],
            ['Speed with Quality','Move fast, stay reliable, iterate with data.'],
          ].map(([t,d]) => (
            <div key={t} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
              <h3 className="font-medium">{t}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Roadmap</h2>
        <ol className="mt-4 grid gap-3">
          {['Phase 1: Website + WhatsApp lead flow','Phase 2: Portfolio, Blog, Testimonials','Phase 3: Client Portal, Payments, Chatbot, Multilingual'].map((s) => (
            <li key={s} className="rounded-xl border border-black/10 dark:border-white/10 p-4">{s}</li>
          ))}
        </ol>
        <a
          href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
        >
          Get Free Consultation — WhatsApp
        </a>
      </section>
    </div>
  );
}


