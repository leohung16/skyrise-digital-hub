export const metadata = {
  title: "Testimonials | SkyRise Digital Hub",
  description: "Client love and feedback — quotes and video links coming soon.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Testimonials</h1>
      <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">“Skyrise team built our website and ran our ads—leads started in first week.”</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <p className="text-sm">“Great designs and clear communication.”</p>
            <p className="mt-2 text-xs text-black/60 dark:text-white/60">Client Name · City</p>
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium"
      >
        Share your review on WhatsApp
      </a>
    </div>
  );
}


