"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Charter Types",
    href: "#charters",
    dropdown: [
      { label: "Inshore Fishing", href: "/charters/inshore" },
      { label: "Tarpon Fishing", href: "/charters/tarpon" },
      { label: "Fly Fishing", href: "/fly-fishing" },
    ],
  },
  {
    label: "Charter Info",
    href: "#info",
    dropdown: [
      { label: "Charter Locations", href: "/charter-locations" },
      { label: "FAQ", href: "/faq" },
      { label: "Rates", href: "/rates" },
    ],
  },
  {
    label: "Media",
    href: "#media",
    dropdown: [{ label: "Nature Coast Fishing Videos", href: "/videos" }],
  },
  { label: "Reports", href: "/reports" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d1b2a]/95 backdrop-blur-md shadow-lg shadow-black/40"
            : "bg-[#0d1b2a]"
        } border-b border-white/10`}
      >
        {/* ── Utility Bar ── */}
        <div className="w-full px-6 py-2 flex justify-between items-center border-b border-white/10">

          {/* Left — contact links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="tel:+18139174989"
              id="utility-bar-phone"
              className="text-xs font-medium text-slate-400 hover:text-[#FA4616] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (813) 917-4989
            </a>
            <a
              href="mailto:jlemke2@tampabay.rr.com"
              id="utility-bar-email"
              className="text-xs font-medium text-slate-400 hover:text-[#FA4616] flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              jlemke2@tampabay.rr.com
            </a>
          </div>

          {/* Right — social icons (desktop only) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Instagram */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-[#FA4616] transition-colors duration-200">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-[#FA4616] transition-colors duration-200">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-slate-400 hover:text-[#FA4616] transition-colors duration-200">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Light Tackle Adventures Logo"
              width={180}
              height={60}
              className="object-contain transition-opacity duration-200 group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 rounded-[7px] hover:bg-white/5"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 min-w-[200px] bg-[#0d1b2a] border border-white/10 rounded-[7px] shadow-xl shadow-black/50 overflow-hidden"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-[#1e3a5f] transition-colors duration-150 border-b border-white/5 last:border-0"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 rounded-[7px] hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/reservations"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white text-sm font-semibold px-5 py-2 rounded-[7px] shadow-md hover:shadow-[#FA4616]/40 transition-all duration-300"
            >
              Reserve Now
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-[7px] hover:bg-white/10 transition-colors text-slate-300"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-[#0a1520]"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Contact row */}
                <div className="flex flex-col gap-2 pb-3 border-b border-white/10 mb-3">
                  <a
                    href="tel:813-917-4989"
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <Phone size={14} /> 813-917-4989
                  </a>
                  <a
                    href="mailto:jlemke2@tampabay.rr.com"
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <Mail size={14} /> jlemke2@tampabay.rr.com
                  </a>
                </div>

                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-[7px] transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-1 space-y-1"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-[7px] transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-[7px] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}

                <div className="pt-3 border-t border-white/10">
                  <a
                    href="/reservations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#FA4616] hover:bg-[#d93a0f] text-white font-semibold py-2.5 rounded-[7px] text-sm transition-colors duration-200"
                  >
                    Book Your Adventure
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
