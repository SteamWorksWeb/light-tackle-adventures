"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Phone, Mail, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/actions/contact";

// Extend the Window type to include the reCAPTCHA global
declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const inputBase =
  "w-full bg-white border border-slate-200 rounded-[7px] px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FA4616]/30 focus:border-[#FA4616] transition-colors duration-200";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Get reCAPTCHA V3 token (skipped if site key not yet configured)
      let token = "";
      if (SITE_KEY) {
        token = await new Promise<string>((resolve, reject) => {
          window.grecaptcha.ready(async () => {
            try {
              const t = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });
              resolve(t);
            } catch (err) {
              reject(err);
            }
          });
        });
      }

      // 2. Pass FormData + token to the server action
      const formData = new FormData(formRef.current!);
      const result = await submitContactForm(formData, token);

      if (result.success) {
        setSubmitted(true);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Load reCAPTCHA V3 SDK — deferred, no badge unless triggered */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
        strategy="lazyOnload"
      />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/images/boat.jpg"
          alt="Contact Capt. Jim"
          fill
          quality={80}
          className="object-cover object-center -z-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/80 to-[#0a1520]/95 -z-10" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase">
            Get In Touch
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            Have a question or ready to book your Nature Coast adventure? Drop
            us a line.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── LEFT: Form (8 cols) ── */}
          <div className="lg:col-span-8">

            {submitted ? (
              /* ── Success State ── */
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="flex items-center gap-3 text-[#FA4616]">
                  <CheckCircle size={32} />
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900">
                    Message Sent!
                  </h2>
                </div>
                <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                  Thanks for reaching out. Capt. Jim will get back to you as
                  soon as possible — usually the same evening.
                </p>
                <Link
                  href="/reservations"
                  className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-6 py-3 rounded-[7px] text-sm shadow-md transition-all duration-300 group mt-2"
                >
                  Check Available Dates
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900 mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Fields marked with <span className="text-[#FA4616]">*</span> are required.
                  </p>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="first-name" className="text-sm font-semibold text-slate-700">
                      First Name <span className="text-[#FA4616]">*</span>
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      maxLength={50}
                      placeholder="John"
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="last-name" className="text-sm font-semibold text-slate-700">
                      Last Name <span className="text-[#FA4616]">*</span>
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      maxLength={50}
                      placeholder="Smith"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                      Phone Number <span className="text-[#FA4616]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      placeholder="(555) 000-0000"
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                      Email Address <span className="text-[#FA4616]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={100}
                      placeholder="john@example.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                    What can we help you with? <span className="text-[#FA4616]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    maxLength={1000}
                    placeholder="Tell us about the trip you have in mind — species, group size, preferred dates, any special requests..."
                    className={`${inputBase} resize-none`}
                  />
                  <p className="text-xs text-slate-400 text-right">Max 1,000 characters</p>
                </div>

                {/* Error banner */}
                {error && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-[7px] px-4 py-3">
                    <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    <p className="text-red-700 text-sm leading-relaxed">{error}</p>
                  </div>
                )}

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-10 py-4 rounded-[7px] text-sm shadow-lg hover:shadow-[#FA4616]/30 transition-all duration-300 group"
                  >
                    {loading ? "Sending…" : "Send Message"}
                    {!loading && (
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>

                  {/* reCAPTCHA disclaimer */}
                  <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#FA4616] transition-colors"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#FA4616] transition-colors"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </form>
            )}

          </div>

          {/* ── RIGHT: Sticky Contact Card (4 cols) ── */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">

              {/* Direct Contact card */}
              <div className="bg-white p-6 md:p-8 rounded-[7px] border border-slate-200 shadow-sm">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-900 mb-5">
                  Direct Contact
                </h3>

                <div className="space-y-4">
                  <a href="tel:+18139174989" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-[#FA4616]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FA4616]/20 transition-colors">
                      <Phone size={16} className="text-[#FA4616]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-slate-900 font-semibold text-sm group-hover:text-[#FA4616] transition-colors">
                        (813) 917-4989
                      </p>
                    </div>
                  </a>

                  <a href="mailto:jlemke2@tampabay.rr.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-[#FA4616]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FA4616]/20 transition-colors">
                      <Mail size={16} className="text-[#FA4616]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-slate-900 font-semibold text-sm group-hover:text-[#FA4616] transition-colors break-all">
                        jlemke2@tampabay.rr.com
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Capt. Jim is often on the water during the day. If you
                    don&apos;t reach him immediately, please leave a voicemail
                    or submit the form — he will return your message that
                    evening.
                  </p>
                </div>
              </div>

              {/* Book CTA card */}
              <div className="bg-[#FA4616]/5 border border-[#FA4616]/20 rounded-[7px] p-6">
                <p className="text-xs font-bold text-[#FA4616] uppercase tracking-wider mb-2">
                  Ready to Book?
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Skip the back-and-forth — check live availability and reserve
                  your dates directly online.
                </p>
                <Link
                  href="/reservations"
                  className="flex items-center justify-center gap-2 w-full bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-5 py-3.5 rounded-[7px] text-sm shadow-md hover:shadow-[#FA4616]/30 transition-all duration-300 group"
                >
                  Check Available Dates
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
