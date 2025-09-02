"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="SkyRise Digital" width={112} height={28} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/services" className="hover:underline underline-offset-4">Services</Link>
          <Link href="/portfolio" className="hover:underline underline-offset-4">Portfolio</Link>
          <Link href="/testimonials" className="hover:underline underline-offset-4">Testimonials</Link>
          <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
          <a
            href="https://instagram.com/skyricehub_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-80 hover:opacity-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://facebook.com/skyricehub_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="opacity-80 hover:opacity-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 21V12.75H16.25L16.75 9.5H13.5V7.75C13.5 6.85 13.75 6.25 15.1 6.25H16.85V3.35C16.55 3.3 15.55 3.2 14.4 3.2C12 3.2 10.35 4.7 10.35 7.45V9.5H7.75V12.75H10.35V21H13.5Z" fill="currentColor"/>
            </svg>
          </a>
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-black/10 dark:border-white/10"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="i-[hamburger]" />
          <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://instagram.com/skyricehub_official" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://facebook.com/skyricehub_official" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-80 hover:opacity-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 21V12.75H16.25L16.75 9.5H13.5V7.75C13.5 6.85 13.75 6.25 15.1 6.25H16.85V3.35C16.55 3.3 15.55 3.2 14.4 3.2C12 3.2 10.35 4.7 10.35 7.45V9.5H7.75V12.75H10.35V21H13.5Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <a
              href="https://wa.me/917265010921?text=Hello%20Skyrise%20Digital%20Hub%2C%20I%27d%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium w-max"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


