export const metadata = {
  title: "Contact | SkyRise Digital Hub",
  description: "WhatsApp us or send a message. Find us in Rajkot, Gujarat.",
};

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl">
        Prefer WhatsApp? Reach us instantly.
      </p>
      <a
        href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium"
      >
        WhatsApp Us
      </a>

      <section className="mt-10">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 mb-6">
          <h2 className="text-2xl font-semibold">Address</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Ayurvedik Hospital, University Road, Saurashtra University Area, Rajkot, Gujarat - 360005</p>
          <p className="text-black/70 dark:text-white/70">Email: <a className="underline" href="mailto:skyrisehub@gmail.com">skyrisehub@gmail.com</a></p>
          <p className="text-black/70 dark:text-white/70">Phone/WhatsApp: <a className="underline" href="https://wa.me/917265010921" target="_blank" rel="noopener noreferrer">+91 72650 10921</a></p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ayurvedik%20Hospital%2C%20University%20Road%2C%20Saurashtra%20University%20Area%2C%20Rajkot%2C%20Gujarat%20360005"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block underline underline-offset-4"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="text-2xl font-semibold">Or send a message</h2>
        <ContactForm />
      </section>
    </div>
  );
}


