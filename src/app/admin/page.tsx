export const metadata = {
  title: "Admin | SkyRise Digital Hub",
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <p className="mt-3 text-black/70 dark:text-white/70">Protected area. Use this space for drafts, content notes, and quick links.</p>
      <ul className="mt-6 list-disc list-inside text-sm space-y-2">
        <li><a className="underline" href="/services">Review Services</a></li>
        <li><a className="underline" href="/portfolio">Review Portfolio</a></li>
        <li><a className="underline" href="/blog">Review Blog</a></li>
        <li><a className="underline" href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
      </ul>
    </div>
  );
}


