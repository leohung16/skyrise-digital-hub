import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="pb-16">
      <Hero />

      <section className="mx-auto max-w-6xl px-4 mt-8">
        <h2 className="text-2xl font-semibold">Services</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">Quick highlights of what we do</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            title="Web Development"
            description="Modern websites, landing pages, ecommerce, CMS, performance and SEO."
          />
          <ServiceCard
            title="Digital Marketing"
            description="SEO, social media, ads management, content and brand strategy."
          />
          <ServiceCard
            title="Real Estate Marketing"
            description="Lead-gen funnels, creatives, campaigns and microsites for properties."
          />
          <ServiceCard
            title="Visa & Consulting"
            description="Guidance, documentation support and streamlined processing assistance."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 mt-12 grid gap-10">
        <div>
          <h2 className="text-2xl font-semibold">Why Skyrise?</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Mobile‑first design, clear CTAs, fast hosting, SEO basics, analytics setup.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">How We Work</h2>
          <ol className="mt-3 list-decimal list-inside text-black/80 dark:text-white/80 space-y-1">
            <li>Discover</li>
            <li>Plan</li>
            <li>Build/Run</li>
            <li>Optimize</li>
            <li>Support</li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Social proof</h3>
          <p className="mt-2 text-black/70 dark:text-white/70">★★★★★ Client Love • 100% WhatsApp Response • Rajkot → Pan‑India</p>
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
