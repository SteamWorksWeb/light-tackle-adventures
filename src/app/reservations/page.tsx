import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, CheckCircle2, Clock, CalendarCheck, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Charter | Light Tackle Adventures",
  description:
    "Reserve your Nature Coast fishing charter online with Capt. Jim Lemke. Tarpon, Inshore, Fly Fishing, and Scalloping trips departing from Homosassa and Crystal River.",
};

const steps = [
  {
    icon: CalendarCheck,
    step: "1",
    title: "Select Your Date & Trip Type",
    body: "Browse available dates in the live calendar. Choose from Tarpon, Inshore, Fly Fishing, or Scalloping charters.",
  },
  {
    icon: MessageCircle,
    step: "2",
    title: "Enter Your Details",
    body: "Provide your contact info and party size. No payment is processed until Capt. Jim personally confirms your booking.",
  },
  {
    icon: CheckCircle2,
    step: "3",
    title: "Capt. Jim Confirms",
    body: "Capt. Jim will reach out within 24 hours to confirm tides, target species, and everything you need to know before the trip.",
  },
];

const trustBadges = [
  "All tackle & licenses included",
  "35+ years on the Nature Coast",
  "USCG Licensed Captain",
  "No hidden fees",
];

export default function ReservationsPage() {
  return (
    <>
      {/* ── MINI HERO ── */}
      <section className="bg-[#0a1520] pt-16 pb-14 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FA4616] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Homosassa · Crystal River · The Nature Coast
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Book Your Nature Coast Charter
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Select your dates, pick your adventure, and lock in your spot with
            Capt. Jim — all online in minutes.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24 px-4">

          {/* ── LEFT: Trust Signals (4 cols) ── */}
          <aside className="lg:col-span-4 flex flex-col gap-10 order-2 lg:order-1">

            {/* What Happens Next */}
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900 mb-6">
                What Happens Next?
              </h3>
              <ol className="flex flex-col gap-6">
                {steps.map(({ icon: Icon, step, title, body }) => (
                  <li key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FA4616]/10 border border-[#FA4616]/20 flex items-center justify-center">
                      <Icon size={16} className="text-[#FA4616]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#FA4616] font-bold mb-0.5">
                        Step {step}
                      </p>
                      <h4 className="text-slate-900 font-semibold text-sm mb-1">
                        {title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Trust Badges */}
            <div>
              <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-4">
                What&apos;s Included
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {trustBadges.map((badge) => (
                  <li key={badge} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <CheckCircle2 size={15} className="shrink-0 text-[#FA4616]" />
                    {badge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact block */}
            <div className="rounded-[7px] bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-[#FA4616]" />
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">
                  Prefer to call?
                </p>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-5">
                Capt. Jim is happy to discuss your trip, answer questions about
                the bite, or help you pick the best window for your upcoming adventure.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:813-917-4989"
                  className="flex items-center gap-3 text-slate-700 hover:text-[#FA4616] transition-colors duration-200 text-sm font-semibold group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#FA4616]/10 flex items-center justify-center group-hover:bg-[#FA4616]/20 transition-colors">
                    <Phone size={14} className="text-[#FA4616]" />
                  </span>
                  813-917-4989
                </a>
                <a
                  href="mailto:captjimlemke@gmail.com"
                  className="flex items-center gap-3 text-slate-700 hover:text-[#FA4616] transition-colors duration-200 text-sm group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#FA4616]/10 flex items-center justify-center group-hover:bg-[#FA4616]/20 transition-colors">
                    <Mail size={14} className="text-[#FA4616]" />
                  </span>
                  captjimlemke@gmail.com
                </a>
              </div>
            </div>

          </aside>

          {/* ── RIGHT: Booking Widget (8 cols) ── */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white rounded-[7px] shadow-lg border border-slate-200 overflow-hidden">

              {/* Widget header */}
              <div className="bg-[#0a1520] px-8 py-5 flex items-center justify-between">
                <div>
                  <p className="text-[#FA4616] text-xs uppercase tracking-widest font-bold mb-1">
                    Live Availability
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                    Reserve Your Trip
                  </h2>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <ShieldCheck size={13} className="text-[#FA4616]" />
                  <span className="text-slate-300 text-xs font-medium">Secure Booking</span>
                </div>
              </div>

              {/* TryTN embed button */}
              <div className="p-8 flex flex-col items-center justify-center min-h-[420px] gap-6">
                <p className="text-slate-500 text-sm text-center max-w-sm">
                  Click below to view available dates and complete your booking
                  through our secure reservation system.
                </p>

                {/* TryTN booking button — the class "trytn-button" is required by the widget */}
                <a
                  href="https://trytn.com/en/lighttackleadventures"
                  className="trytn-button inline-flex items-center justify-center gap-3 bg-[#FA4616] hover:bg-[#e03a0e] text-white font-bold px-10 py-5 rounded-[7px] text-base shadow-lg shadow-[#FA4616]/25 transition-all duration-300 hover:shadow-[#FA4616]/40 hover:-translate-y-0.5"
                >
                  <CalendarCheck size={20} />
                  Check Available Dates &amp; Book Now
                </a>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                  {trustBadges.map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <CheckCircle2 size={12} className="text-[#FA4616]" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Sub-note */}
            <p className="text-slate-400 text-xs text-center mt-4">
              Prefer not to book online?{" "}
              <Link href="/contact" className="text-[#FA4616] hover:underline font-medium">
                Send a message
              </Link>{" "}
              or call{" "}
              <a href="tel:813-917-4989" className="text-[#FA4616] hover:underline font-medium">
                813-917-4989
              </a>{" "}
              and Capt. Jim will take care of you.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
