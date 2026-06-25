import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (smallest), fall back to WebP, then original
    formats: ["image/avif", "image/webp"],
    // All images are served locally from /public/images/ — no external domains needed
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ─── 301 Redirects ────────────────────────────────────────────────────────
  // Maps old WordPress site URLs to new Next.js routes so Google rankings
  // (backlinks, indexed pages) carry over to the new site structure.
  async redirects() {
    return [
      // ── Charter pages ──────────────────────────────────────────────────────
      // Old inshore charter pages
      {
        source: "/tampa-bay-inshore-fishing-charters",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-inshore-fishing-charters/",
        destination: "/charters/inshore",
        permanent: true,
      },
      // Old videos section under inshore → photos gallery
      {
        source: "/tampa-bay-inshore-fishing-charters/videos",
        destination: "/photos",
        permanent: true,
      },
      {
        source: "/tampa-bay-inshore-fishing-charters/videos/",
        destination: "/photos",
        permanent: true,
      },
      // Old fly fishing charter pages
      {
        source: "/tampa-fly-fishing-charters",
        destination: "/charters/fly-fishing",
        permanent: true,
      },
      {
        source: "/tampa-fly-fishing-charters/",
        destination: "/charters/fly-fishing",
        permanent: true,
      },
      {
        source: "/saltwater-fly-fishing-tampa",
        destination: "/charters/fly-fishing",
        permanent: true,
      },
      {
        source: "/saltwater-fly-fishing-tampa/",
        destination: "/charters/fly-fishing",
        permanent: true,
      },
      // Old tarpon charter pages
      {
        source: "/tampa-bays-premier-tarpon-fishing-charters",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tampa-bays-premier-tarpon-fishing-charters/",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tampa-tarpon-fishing-charters",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tampa-tarpon-fishing-charters/",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tampa-tarpon-fishing-charters/tampa-bay-tarpon-fishing-charters",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tampa-tarpon-fishing-charters/tampa-bay-tarpon-fishing-charters/",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tarpon-fishing-details",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tarpon-fishing-details/",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tampa-tarpon-fishing",
        destination: "/charters/tarpon",
        permanent: true,
      },
      {
        source: "/tampa-tarpon-fishing/",
        destination: "/charters/tarpon",
        permanent: true,
      },
      // Old scalloping pages
      {
        source: "/homosassa-scalloping-charters",
        destination: "/charters/scalloping",
        permanent: true,
      },
      {
        source: "/homosassa-scalloping-charters/",
        destination: "/charters/scalloping",
        permanent: true,
      },
      {
        source: "/homosassa-scalloping-charters/feed",
        destination: "/charters/scalloping",
        permanent: true,
      },
      {
        source: "/homosassa-scalloping-charters/feed/",
        destination: "/charters/scalloping",
        permanent: true,
      },
      // Old redfish / trout / snook charter pages → inshore
      {
        source: "/tampa-bay-redfish-fishing-charters",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-redfish-fishing-charters/",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-sea-trout-fishing-charters",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-sea-trout-fishing-charters/",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-snook-charters",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-snook-charters/",
        destination: "/charters/inshore",
        permanent: true,
      },
      // Old Tampa Bay charter hub page → inshore
      {
        source: "/tampa-bay-fishing-charters",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/",
        destination: "/charters/inshore",
        permanent: true,
      },
      // Old nested Tampa Bay fishing reports under charter hub
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/",
        destination: "/reports",
        permanent: true,
      },
      // Old nested species-specific charter pages under the hub → species pages
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-snook-fishing-charters",
        destination: "/species/snook",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-snook-fishing-charters/",
        destination: "/species/snook",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-permit-fishing-charters",
        destination: "/species/permit",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-permit-fishing-charters/",
        destination: "/species/permit",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-shark-fishing-charters",
        destination: "/species/sharks",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-shark-fishing-charters/",
        destination: "/species/sharks",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-grouper-fishing-charters",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-grouper-fishing-charters/",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-snapper-fishing-charters",
        destination: "/charters/inshore",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-charters/tampa-bay-fishing-reports/tampa-bay-fishing/tampa-bay-snapper-fishing-charters/",
        destination: "/charters/inshore",
        permanent: true,
      },

      // ── Species pages ──────────────────────────────────────────────────────
      {
        source: "/about-tarpon",
        destination: "/species/tarpon",
        permanent: true,
      },
      {
        source: "/about-tarpon/",
        destination: "/species/tarpon",
        permanent: true,
      },
      {
        source: "/tampa-bay-redfish-report",
        destination: "/species/redfish",
        permanent: true,
      },
      {
        source: "/tampa-bay-redfish-report/",
        destination: "/species/redfish",
        permanent: true,
      },

      // ── About / Guide pages ────────────────────────────────────────────────
      {
        source: "/capt-jim",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/capt-jim/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/capt-jim/tampa-fishing-guide",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/capt-jim/tampa-fishing-guide/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-guide",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-guide/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/home/charter-locations",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/home/charter-locations/",
        destination: "/about",
        permanent: true,
      },

      // ── Booking / Reservations ─────────────────────────────────────────────
      {
        source: "/rates",
        destination: "/reservations",
        permanent: true,
      },
      {
        source: "/rates/",
        destination: "/reservations",
        permanent: true,
      },
      {
        source: "/gift-certificates",
        destination: "/reservations",
        permanent: true,
      },
      {
        source: "/gift-certificates/",
        destination: "/reservations",
        permanent: true,
      },
      {
        source: "/home/reservations",
        destination: "/reservations",
        permanent: true,
      },
      {
        source: "/home/reservations/",
        destination: "/reservations",
        permanent: true,
      },

      // ── FAQ ─────────────────────────────────────────────────────────────────
      {
        source: "/rates/frequently-asked-questions",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/rates/frequently-asked-questions/",
        destination: "/faq",
        permanent: true,
      },

      // ── Reports / Blog posts ───────────────────────────────────────────────
      // The old WordPress posts now live at /reports/:slug
      {
        source: "/reports/page/2",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/reports/page/2/",
        destination: "/reports",
        permanent: true,
      },
      // Individual report posts that existed as top-level WordPress slugs
      {
        source: "/tampa-bay-flats-fishing-with-light-tackle-adventures",
        destination: "/reports/tampa-bay-flats-fishing-with-light-tackle-adventures",
        permanent: true,
      },
      {
        source: "/tampa-bay-flats-fishing-with-light-tackle-adventures/",
        destination: "/reports/tampa-bay-flats-fishing-with-light-tackle-adventures",
        permanent: true,
      },
      {
        source: "/overview-tampa-fishing",
        destination: "/reports/overview-tampa-fishing",
        permanent: true,
      },
      {
        source: "/overview-tampa-fishing/",
        destination: "/reports/overview-tampa-fishing",
        permanent: true,
      },
      {
        source: "/tampa-tarpon-fishing",
        destination: "/reports/tampa-tarpon-fishing",
        permanent: true,
      },
      {
        source: "/saltwater-fly-fishing-tampa",
        destination: "/reports/saltwater-fly-fishing-tampa",
        permanent: true,
      },
      {
        source: "/fall-fishing-tampa-bay",
        destination: "/reports/fall-fishing-tampa-bay",
        permanent: true,
      },
      {
        source: "/fall-fishing-tampa-bay/",
        destination: "/reports/fall-fishing-tampa-bay",
        permanent: true,
      },
      {
        source: "/spring-snook-kingfish-st-petersburg",
        destination: "/reports/spring-snook-kingfish-st-petersburg",
        permanent: true,
      },
      {
        source: "/spring-snook-kingfish-st-petersburg/",
        destination: "/reports/spring-snook-kingfish-st-petersburg",
        permanent: true,
      },
      {
        source: "/spring-like-fishing-clearwater-beach",
        destination: "/reports/spring-like-fishing-clearwater-beach",
        permanent: true,
      },
      {
        source: "/spring-like-fishing-clearwater-beach/",
        destination: "/reports/spring-like-fishing-clearwater-beach",
        permanent: true,
      },
      {
        source: "/winter-tampa-bay-inshore-tactics",
        destination: "/reports/winter-tampa-bay-inshore-tactics",
        permanent: true,
      },
      {
        source: "/winter-tampa-bay-inshore-tactics/",
        destination: "/reports/winter-tampa-bay-inshore-tactics",
        permanent: true,
      },
      {
        source: "/fall-tampa-bay-fishing",
        destination: "/reports/fall-tampa-bay-fishing",
        permanent: true,
      },
      {
        source: "/fall-tampa-bay-fishing/",
        destination: "/reports/fall-tampa-bay-fishing",
        permanent: true,
      },
      {
        source: "/tampa-spring-snook-fishing",
        destination: "/reports/tampa-spring-snook-fishing",
        permanent: true,
      },
      {
        source: "/tampa-spring-snook-fishing/",
        destination: "/reports/tampa-spring-snook-fishing",
        permanent: true,
      },
      // Misc old report-style posts that don't have a direct new equivalent
      {
        source: "/tampa-bay-fishing-spring-is-here",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tampa-bay-fishing-spring-is-here/",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tampa-winter-fishing-going-strong",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tampa-winter-fishing-going-strong/",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tampa-charterfishing-redfish-fly",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tampa-charterfishing-redfish-fly/",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/trout-and-more-trout",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/trout-and-more-trout/",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tarpon-season-is-here-book-your-2012-season-now",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/tarpon-season-is-here-book-your-2012-season-now/",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/salty-fly-2012-itinerary-feb-24-25",
        destination: "/reports",
        permanent: true,
      },
      {
        source: "/salty-fly-2012-itinerary-feb-24-25/",
        destination: "/reports",
        permanent: true,
      },

      // ── Other area guide pages → About ─────────────────────────────────────
      {
        source: "/tampa-bay-flats-fishing-with-light-tackle-adventures",
        destination: "/reports/tampa-bay-flats-fishing-with-light-tackle-adventures",
        permanent: true,
      },
      {
        source: "/clearwater-fishing-guide",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/clearwater-fishing-guide/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/st-petersburg-fishing-guide",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/st-petersburg-fishing-guide/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/tarpon-springs-fishing-guide",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/tarpon-springs-fishing-guide/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/anna-maria-island-fishing-guide",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/anna-maria-island-fishing-guide/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/orlando-fishing-charter",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/orlando-fishing-charter/",
        destination: "/about",
        permanent: true,
      },

      // ── WordPress category / tag / author / feed URLs → homepage ───────────
      // These are WordPress-specific URLs with no equivalent on the new site.
      // Sending to homepage is better than a 404 for Google.
      {
        source: "/category/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/comments/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/feed/",
        destination: "/",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Apply to every route
        source: "/(.*)",
        headers: [
          // Enable DNS prefetching for performance
          { key: "X-DNS-Prefetch-Control", value: "on" },
          // Force HTTPS for 2 years, include subdomains, enable preload list
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Prevent clickjacking via iframe embedding on external origins
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Stop browsers from MIME-sniffing responses away from declared content-type
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Only send full referrer on same-origin; send origin-only cross-origin
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          // Lock down access to device hardware APIs
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
