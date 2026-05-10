import type { MetadataRoute } from "next";
import { reports } from "@/data/reports";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lighttackleadventures.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    // ── Homepage ──
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },

    // ── Charter pages ──
    { url: `${baseUrl}/charters/tarpon`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/charters/inshore`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/charters/scalloping`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/charters/fly-fishing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // ── Species pages ──
    { url: `${baseUrl}/species/tarpon`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/species/snook`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/species/redfish`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/species/sea-trout`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/species/permit`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/species/sharks`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/species/scallops`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // ── Reports index ──
    { url: `${baseUrl}/reports`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },

    // ── Supporting pages ──
    { url: `${baseUrl}/about`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${baseUrl}/faq`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${baseUrl}/photos`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/reservations`, lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
  ];

  const reportRoutes: MetadataRoute.Sitemap = reports.map((report) => ({
    url: `${baseUrl}/reports/${report.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...reportRoutes];
}
