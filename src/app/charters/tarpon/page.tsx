import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Fish,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Homosassa Tarpon Charters | Light Tackle Adventures",
  description:
    "Book a world-class Tarpon fishing charter on the Nature Coast with Capt. Jim Lemke. Prime dates available May through July.",
};

const tripDetails = [
  {
    icon: Calendar,
    label: "Season",
    value: "May – July",
    note: "Peak migration window — book early",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Homosassa, FL",
    note: "Crystal River & Ozello flats also available",
  },
  {
    icon: Fish,
    label: "Target",
    value: "Migratory Tarpon",
    note: "70 – 150+ lbs (Silver King)",
  },
  {
    icon: Users,
    label: "Capacity",
    value: "1 – 2 Anglers",
    note: "Strictly enforced for shallow-water stealth",
  },
  {
    icon: Clock,
    label: "Trip Length",
    value: "Full Day (8 hrs)",
    note: "Half-day available on request",
  },
];

const included = [
  "Top-tier rods, reels & rigged tackle",
  "All necessary bait (live & artificial)",
  "Custom shallow-draft bay boat",
  "Iced cooler with bottled water",
  "Florida fishing license",
  "Experienced USCG licensed guide",
];

export default function TarponChartersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#0a1520] pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FA4616]/5 via-transparent to-transparent pointer-events-none" />

        {/* Hero background image at low opacity */}
        <div className="absolute inset-0">
          <Image
            src="/images/tarpon7.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/60 via-transparent to-[#0a1520]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase">
            The Ultimate Adrenaline Rush
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Homosassa Tarpon Charters
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            Chase the Silver King in the shallow, crystal-clear flats of the
            Nature Coast.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/reservations"
              className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-7 py-3.5 rounded-[7px] text-sm shadow-lg hover:shadow-[#FA4616]/30 transition-all duration-300 group"
            >
              Check Available Dates
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+18139174989"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-[7px] text-sm transition-all duration-300"
            >
              <Phone size={15} />
              (813) 917-4989
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE GRID ── */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

          {/* ── LEFT: The Experience (8 cols) ── */}
          <article className="lg:col-span-8 space-y-8 text-slate-600 text-base md:text-lg leading-relaxed">

            {/* Section image */}
            <div className="relative w-full h-64 md:h-80 rounded-[7px] overflow-hidden shadow-md">
              <Image
                src="/images/tarpon-1.jpeg"
                alt="Tarpon fishing on the Homosassa flats"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* The Migration */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                The Homosassa Tarpon Migration
              </h2>
              <p>
                Every May through July, one of the greatest wildlife spectacles
                in North America unfolds just off the Nature Coast. Massive
                migratory Atlantic Tarpon — averaging 80 to 150 pounds — flood
                the shallow grass flats of Homosassa, Crystal River, and Ozello
                in extraordinary numbers. These ancient fish, unchanged for
                millions of years, travel ancient underwater highways that
                Capt. Jim has spent over three decades learning intimately.
              </p>
              <p className="mt-4">
                Homosassa is considered by many fly and light-tackle anglers
                to be the single greatest Tarpon destination on earth. The
                spring-fed water clarity is exceptional, the fish are large,
                and the opportunity for a true trophy — a Tarpon over 100
                pounds — is very real. The season is short, the dates are
                limited, and the demand is intense. If Tarpon fishing is on
                your bucket list, this is the trip.
              </p>
            </div>

            {/* Sight Fishing Giants */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Sight Fishing Giants
              </h2>
              <Image
                src="/images/tarpon-2.jpeg"
                alt="Sight fishing for giant Tarpon in Homosassa"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-[7px] shadow-md my-8"
              />
              <p>
                There is nothing in saltwater fishing quite like stalking a
                rolling Tarpon on a shallow flat. You see the fish first —
                sometimes a daisy chain of a dozen or more, rolling in calm
                water barely knee deep — before you cast. The presentation,
                the pickup, the jump: a hooked Tarpon is the most explosive,
                aerial fighter in Florida waters, capable of clearing the
                surface by six feet or more. Capt. Jim poles the bay boat quietly
                into position, reads the fish, calls the cast, and gives you
                the best possible shot. The rest is up to you.
              </p>
              <p className="mt-4">
                These charters are available in spin, conventional, and fly
                fishing formats. Whether you are laying down a perfectly
                placed fly on a daisy chain or pitching a live crab to a
                rolling school, Capt. Jim will match the technique to the
                conditions and your skill level.
              </p>
            </div>

            {/* What We Provide */}
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-slate-900 mb-4">
                What We Provide
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                    <CheckCircle2 size={17} className="shrink-0 mt-0.5 text-[#FA4616]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Tip callout */}
            <div className="bg-[#FA4616]/5 border border-[#FA4616]/20 rounded-[7px] p-6">
              <p className="text-sm font-bold text-[#FA4616] uppercase tracking-wider mb-2">
                Capt. Jim&apos;s Advice
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Prime Tarpon dates — especially weekends in June — book 4 to 6
                months in advance. If you have a target window, don&apos;t wait.
                Call or book online now to secure your dates. Capt. Jim
                personally reviews every request.
              </p>
            </div>

          </article>

          {/* ── RIGHT: Trip Details & CTA (4 cols) ── */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-6 md:p-8 rounded-[7px] border border-slate-200 shadow-sm">

              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-900 mb-6">
                Trip Details
              </h3>

              <ul className="space-y-5 mb-2">
                {tripDetails.map(({ icon: Icon, label, value, note }) => (
                  <li key={label} className="flex gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FA4616]/10 flex items-center justify-center mt-0.5">
                      <Icon size={16} className="text-[#FA4616]" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{label}</p>
                      <p className="text-slate-900 font-bold text-sm mt-0.5">{value}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-snug">{note}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/reservations"
                className="block w-full text-center bg-[#FA4616] hover:bg-orange-600 text-white py-4 rounded-[7px] font-bold text-lg transition-colors mt-8 shadow-md"
              >
                Check Available Dates
              </Link>

              <a
                href="tel:+18139174989"
                className="flex items-center justify-center gap-2 mt-3 text-slate-500 hover:text-[#FA4616] text-sm font-medium transition-colors"
              >
                <Phone size={14} />
                Or call (813) 917-4989
              </a>

            </div>
          </aside>

        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="bg-[#0d1b2a] py-16 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FA4616] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            Limited Dates Remain
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Tarpon Date Now
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            The Homosassa Tarpon season is the most sought-after window on the
            Nature Coast. Prime May and June dates fill by January. Don&apos;t
            miss your shot at the Silver King.
          </p>
          <Link
            href="/reservations"
            className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-9 py-4 rounded-[7px] text-base shadow-xl hover:shadow-[#FA4616]/40 transition-all duration-300 group"
          >
            Book Tarpon Charter
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
