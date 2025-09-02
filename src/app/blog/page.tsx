export const metadata = {
  title: "Blog | SkyRise Digital Hub",
  description: "Resources and insights for local business growth.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">Resources to help local businesses grow.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {["5 reasons Rajkot businesses need digital marketing","Why real‑estate agents should use PWA apps","WhatsApp‑first funnels: turning clicks into conversations"].map((title) => (
          <div key={title} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
            <h3 className="font-medium">{title}</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Article coming soon.</p>
            <a
              href="https://wa.me/917265010921?text=Send%20CHECKLIST%20-%20Local%20Business%20Digital%20Starter%20Kit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium"
            >
              Get free checklist on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


