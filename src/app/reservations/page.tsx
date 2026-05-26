import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, CheckCircle2, Clock, CalendarCheck, MessageCircle, Hourglass } from "lucide-react";

export const metadata: Metadata = {
  title: "Reservations | Light Tackle Adventures",
  description:
    "Online booking is coming soon. In the meantime, call or email Capt. Jim directly to reserve your Nature Coast fishing charter.",
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
            Our online booking system is almost ready. In the meantime, reach
            out to Capt. Jim directly — he&apos;ll get you set up fast.
          </p>
        </div>
      </section>

      {/* ── CONVERSION GRID ── */}
      <section className="bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24 px-4">

          {/* ── LEFT: Trust Signals (5 cols) ── */}
          <aside className="lg:col-span-5 flex flex-col gap-10 order-2 lg:order-1">

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
                the bite, or help you pick the best window for Tarpon season.
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
                  href="mailto:info@lighttackleadventures.com"
                  className="flex items-center gap-3 text-slate-700 hover:text-[#FA4616] transition-colors duration-200 text-sm group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#FA4616]/10 flex items-center justify-center group-hover:bg-[#FA4616]/20 transition-colors">
                    <Mail size={14} className="text-[#FA4616]" />
                  </span>
                  info@lighttackleadventures.com
                </a>
              </div>
            </div>

          </aside>

          {/* ── RIGHT: Coming Soon Panel (7 cols) ── */}
          <div className="lg:col-span-7 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="bg-white rounded-[7px] shadow-lg border border-slate-200 min-h-[500px] flex flex-col items-center justify-center text-center p-10 gap-8">

              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-[#FA4616]/10 border-2 border-[#FA4616]/20 flex items-center justify-center">
                <Hourglass size={36} className="text-[#FA4616]" />
              </div>

              {/* Heading */}
              <div>
                <p className="text-[#FA4616] text-xs uppercase tracking-[0.25em] font-bold mb-3">
                  Online Booking
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Coming Soon!
                </h2>
                <p className="text-slate-500 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
                  Our online booking system is being set up. For now, please
                  call or email Capt. Jim — he&apos;ll get you on the water.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                <a
                  href="tel:813-917-4989"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#FA4616] hover:bg-[#e03a0e] text-white font-bold px-6 py-4 rounded-[7px] text-sm transition-colors duration-200 shadow-md shadow-[#FA4616]/25"
                >
                  <Phone size={16} />
                  Call 813-917-4989
                </a>
                <a
                  href="mailto:info@lighttackleadventures.com"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-[7px] text-sm transition-colors duration-200"
                >
                  <Mail size={16} />
                  Send an Email
                </a>
              </div>

              {/* Sub-note */}
              <p className="text-slate-400 text-xs">
                Capt. Jim typically responds within a few hours.
              </p>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
