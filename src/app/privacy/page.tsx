export const metadata = {
  title: "Privacy Policy | SkyRise Digital Hub",
  description: "Simple policy about data usage and communication.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-3 text-black/70 dark:text-white/70">We only use your data to respond to your inquiry and provide our services. We do not sell or share your data with third parties except tools needed to operate (e.g., analytics, email, ad platforms).</p>
      <ul className="mt-4 list-disc list-inside text-sm text-black/80 dark:text-white/80 space-y-1">
        <li>Data collected: details you provide via forms/WhatsApp/email.</li>
        <li>Usage: contacting you, sending estimates, providing services.</li>
        <li>Retention: kept as long as needed for service/legal reasons.</li>
        <li>Contact: <a className="underline" href="mailto:skyrisehub@gmail.com">skyrisehub@gmail.com</a></li>
      </ul>
    </div>
  );
}


