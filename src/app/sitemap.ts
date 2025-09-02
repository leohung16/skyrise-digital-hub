import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.skyrisedigitalhub.in";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/services`, lastModified: now },
    { url: `${base}/portfolio`, lastModified: now },
    { url: `${base}/testimonials`, lastModified: now },
    { url: `${base}/blog`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/privacy`, lastModified: now },
    { url: `${base}/terms`, lastModified: now },
  ];
}


