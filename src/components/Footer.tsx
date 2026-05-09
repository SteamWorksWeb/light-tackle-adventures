"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ExternalLink, MapPin, ArrowRight } from "lucide-react";

const footerSections = [
  {
    title: "Charter Types",
    links: [
      { label: "Inshore Fishing", href: "/inshore-fishing" },
      { label: "Tarpon Fishing", href: "/tarpon-fishing" },
      { label: "Fly Fishing", href: "/fly-fishing" },
      { label: "Homosassa Scalloping", href: "/scalloping" },
    ],
  },
  {
    title: "Charter Info",
    links: [
      { label: "Charter Locations", href: "/charter-locations" },
      { label: "FAQ", href: "/faq" },
      { label: "Rates", href: "/rates" },
      { label: "Reservations", href: "/reservations" },
    ],
  },
  {
    title: "Target Species",
    links: [
      { label: "Snook", href: "/species/snook" },
      { label: "Tarpon", href: "/species/tarpon" },
      { label: "Redfish", href: "/species/redfish" },
      { label: "Sea Trout", href: "/species/sea-trout" },
      { label: "Permit", href: "/species/permit" },
      { label: "Sharks", href: "/species/sharks" },
    ],
  },
];

const areasServed = [
  "Homosassa",
  "Crystal River",
  "Ozello",
  "Chassahowitzka",
  "Weeki Wachee",
  "Hernando Beach",
];

export default function Footer() {
  return (
    <footer className="bg-[#060f1a] border-t border-white/10">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-[#1e3a5f] via-[#1e6091] to-[#0ea5e9]/30 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0ea5e9] text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Ready for Your Next Adventure?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Homosassa Charter Now!
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to chase World-Class Homosassa Tarpon, sight-fish
            the Nature Coast flats, or cool off during scallop season — there&apos;s
            no better guide than Capt. Jim Lemke.
          </p>
          <a
            href="https://trytn.com/en/lighttackleadventures"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-book-cta"
            className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-8 py-4 rounded-[7px] text-base shadow-lg hover:shadow-[#FA4616]/40 transition-all duration-300 group"
          >
            Reserve Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex mb-5 group">
            <Image
              src="/images/logo.png"
              alt="Light Tackle Adventures Logo"
              width={200}
              height={66}
              className="object-contain transition-opacity duration-200 group-hover:opacity-85"
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
            Fly Fishing, Inshore &amp; Tarpon Charters on the Nature Coast of
            Florida. Capt. Jim Lemke — a seasoned Homosassa guide with over
            35 years navigating the Crystal River &amp; Homosassa backwaters.
          </p>
          <div className="space-y-3">
            <a
              href="tel:813-917-4989"
              className="flex items-center gap-3 text-slate-400 hover:text-[#0ea5e9] transition-colors duration-200 text-sm"
            >
              <Phone size={16} className="shrink-0 text-[#0ea5e9]" />
              813-917-4989
            </a>
            <a
              href="mailto:jlemke2@tampabay.rr.com"
              className="flex items-center gap-3 text-slate-400 hover:text-[#0ea5e9] transition-colors duration-200 text-sm"
            >
              <Mail size={16} className="shrink-0 text-[#0ea5e9]" />
              jlemke2@tampabay.rr.com
            </a>
            <a
              href="https://www.facebook.com/lighttackleadventurestampafishingcharters/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-[#0ea5e9] transition-colors duration-200 text-sm"
            >
              <ExternalLink size={16} className="shrink-0 text-[#0ea5e9]" />
              Follow on Facebook
            </a>
          </div>
        </div>

        {/* Link Sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Areas Served */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider mr-2">
            <MapPin size={12} />
            Areas Served:
          </div>
          {areasServed.map((area, i) => (
            <span key={area} className="text-slate-400 text-xs">
              {area}
              {i < areasServed.length - 1 && (
                <span className="ml-2 text-slate-600">·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Light Tackle Adventures — Capt. Jim Lemke. All rights reserved.</p>
          <p>Homosassa &amp; Crystal River, Florida — The Nature Coast</p>
        </div>
      </div>
    </footer>
  );
}
