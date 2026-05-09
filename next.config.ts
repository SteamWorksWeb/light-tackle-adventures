import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are served locally from /public/images/ — no external domains needed
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
