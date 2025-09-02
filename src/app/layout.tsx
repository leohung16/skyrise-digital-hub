import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyRise Digital Hub",
  description: "Empowering businesses digitally — Web, Marketing, Real Estate, Visa.",
  metadataBase: new URL("https://www.skyrisedigitalhub.in"),
  openGraph: {
    title: "SkyRise Digital Hub",
    description: "Empowering businesses digitally — Web, Marketing, Real Estate, Visa.",
    url: "https://www.skyrisedigitalhub.in",
    siteName: "SkyRise Digital Hub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyRise Digital Hub",
    description: "Empowering businesses digitally — Web, Marketing, Real Estate, Visa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').catch(()=>{})})}` }} />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SkyRise Digital Hub",
              url: "https://www.skyrisedigitalhub.in",
              sameAs: [
                "https://instagram.com/skyricehub_official",
                "https://facebook.com/skyricehub_official",
                "https://wa.me/917265010921"
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ayurvedik Hospital, University Road, Saurashtra University Area",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                postalCode: "360005",
                addressCountry: "IN"
              },
              email: "mailto:skyrisehub@gmail.com",
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+91-7265010921"
              }]
            }),
          }}
        />
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
