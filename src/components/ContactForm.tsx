"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "");
    const budget = String(formData.get("budget") || "");
    const message = String(formData.get("message") || "").trim();

    const text = `Hello Skyrise Digital Hub, I’d like a free consultation.\n\nName: ${name}\nService: ${service}\nBudget: ${budget}\nMessage: ${message}\nContact: ${email}${phone ? `, ${phone}` : ""}`;
    const url = `https://wa.me/917265010921?text=${encodeURIComponent(text)}`;
    setStatus("Opening WhatsApp…");
    window.open(url, "_blank");
    e.currentTarget.reset();
  }

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
      <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-1">
          <label className="block text-sm mb-1">Name</label>
          <input name="name" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" required />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm mb-1">Email</label>
          <input name="email" type="email" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" required />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm mb-1">Phone (optional)</label>
          <input name="phone" type="tel" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm mb-1">Service needed</label>
          <select name="service" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2">
            <option>Website</option>
            <option>Digital Marketing (Ads)</option>
            <option>PWA / Mobile App</option>
            <option>Real Estate Marketing</option>
            <option>Visa / Passport</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">Budget range</label>
          <select name="budget" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2">
            <option>₹15k–25k</option>
            <option>₹35k–70k</option>
            <option>₹80k–2L</option>
            <option>₹2L+</option>
            <option>Monthly (ads)</option>
            <option>Not sure</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" rows={5} className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" required />
        </div>
        <div className="sm:col-span-2 flex items-center gap-3">
          <button type="submit" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
            Send on WhatsApp
          </button>
          {status && <p className="text-sm text-black/70 dark:text-white/70">{status}</p>}
        </div>
      </form>
    </div>
  );
}


