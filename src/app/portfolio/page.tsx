export const metadata = {
  title: "Portfolio | SkyRise Digital Hub",
  description: "Results that speak — future case studies and showcases.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">Results that speak — selected case placeholders and future areas.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {title:'Coaching Institute (Rajkot)', result:'200+ new student leads in 30 days', detail:'Instagram ads, landing page, tracking'},
          {title:'Local Retailer', result:'3× inquiries in 6 weeks', detail:'Website revamp + WhatsApp CTA'},
          {title:'Real Estate Project', result:'120 qualified leads/month', detail:'Microsite + lead form + ads'},
          {title:'Visa Consultant', result:'Consistent inquiries', detail:'Service website + content + SEO'},
          {title:'Restaurant', result:'Increased table bookings', detail:'PWA menu + local ads'},
          {title:'D2C Brand', result:'Improved ROAS', detail:'Creative testing + remarketing'},
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
            <h3 className="font-medium">{c.title}</h3>
            <p className="mt-1 text-sm">{c.result}</p>
            <span className="mt-2 inline-block text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/10">{c.detail}</span>
            <a
              href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium"
            >
              Discuss on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


