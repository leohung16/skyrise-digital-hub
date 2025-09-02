import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  outputFileTracingRoot: path.join(process.cwd()),
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
