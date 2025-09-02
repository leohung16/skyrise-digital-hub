export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
          <p className="text-black/70 dark:text-white/70">© {new Date().getFullYear()} SkyRise Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:underline underline-offset-4">Home</a>
            <a href="/about" className="hover:underline underline-offset-4">About</a>
            <a href="/services" className="hover:underline underline-offset-4">Services</a>
            <a href="/portfolio" className="hover:underline underline-offset-4">Portfolio</a>
            <a href="/testimonials" className="hover:underline underline-offset-4">Testimonials</a>
            <a href="/blog" className="hover:underline underline-offset-4">Blog</a>
            <a href="/contact" className="hover:underline underline-offset-4">Contact</a>
            <a href="/privacy" className="hover:underline underline-offset-4">Privacy</a>
            <a href="/terms" className="hover:underline underline-offset-4">Terms</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/skyricehub_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:underline underline-offset-4"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
            Instagram
          </a>
          <a
            href="https://facebook.com/skyricehub_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:underline underline-offset-4"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 21V12.75H16.25L16.75 9.5H13.5V7.75C13.5 6.85 13.75 6.25 15.1 6.25H16.85V3.35C16.55 3.3 15.55 3.2 14.4 3.2C12 3.2 10.35 4.7 10.35 7.45V9.5H7.75V12.75H10.35V21H13.5Z" fill="currentColor"/>
            </svg>
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}


