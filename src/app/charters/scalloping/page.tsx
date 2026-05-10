import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Homosassa Scalloping Charters | Light Tackle Adventures",
  description:
    "Book a family-friendly scalloping charter in the crystal-clear waters of Homosassa and Crystal River. All snorkeling gear provided.",
};

const tripDetails = [
  {
    icon: Calendar,
    label: "Season",
    value: "July 1 – Sept 24",
    note: "Dates vary slightly by year — check FWC for current regs",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Homosassa & Crystal River",
    note: "Spring-fed Gulf waters with exceptional clarity",
  },
  {
    icon: Waves,
    label: "Activity",
    value: "Snorkeling & Harvesting",
    note: "Collecting bay scallops by hand in 3–6 ft of water",
  },
  {
    icon: Users,
    label: "Capacity",
    value: "Up to 4 – 6 Passengers",
    note: "Depending on vessel — great for families & groups",
  },
];

const included = [
  "Masks, snorkels & fins",
  "Mesh collection bags",
  "Florida saltwater fishing licenses",
  "Iced coolers for your catch & drinks",
  "Experienced USCG licensed captain",
  "Safe, comfortable bay boat",
];

export default function ScallopingChartersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">

        {/* Background image */}
        <Image
          src="/images/scallop1.jpg"
          alt="Homosassa Scalloping"
          fill
          className="object-cover object-center -z-20"
          sizes="100vw"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/80 to-[#0a1520]/95 -z-10" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase">
            The Ultimate Family Adventure
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Nature Coast Scalloping
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            Dive into the warm, clear waters of the Gulf for a fun-filled
            underwater Easter egg hunt.
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
                src="/images/scallop1.jpg"
                alt="Family snorkeling for bay scallops in Homosassa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* An Underwater Easter Egg Hunt */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                An Underwater Easter Egg Hunt
              </h2>
              <p>
                Scalloping is hands-down one of the most accessible, exciting,
                and rewarding water activities on the Gulf Coast — and it
                requires zero fishing experience. You don&apos;t need to be an
                angler. You don&apos;t even need to be a strong swimmer. You
                float effortlessly in three to six feet of warm, crystal-clear
                water over pristine sea grass beds, peer down through your mask,
                and spot the vivid blue eyes of bay scallops nestled in the grass
                below. Then you simply reach down and pick them up.
              </p>
              <p className="mt-4">
                It&apos;s genuinely one of the most unique wildlife experiences
                in Florida — perfect for families with young children, couples
                looking for something different, and anyone who wants to spend a
                gorgeous summer morning in gin-clear Gulf water. The haul at the
                end of the day is the bonus: fresh-caught bay scallops are
                arguably the most delicious seafood on the Florida coast, and
                you harvested them yourself.
              </p>
            </div>

            {/* What to Expect */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                What to Expect
              </h2>
              <p>
                We&apos;ll meet at the dock in the early morning, load up the
                bay boat, and cruise out through the scenic Homosassa or Crystal
                River system — winding past cypress-lined banks, manatee grass
                flats, and the first open glimpses of the Gulf. Once we reach
                the scalloping grounds, the captain anchors up and everyone goes
                in. The water is warm, shallow, and exceptionally clear — you
                can see the bottom in perfect detail even from the boat.
              </p>
              <p className="mt-4">
                Capt. Jim positions the group on the most productive grass beds
                and keeps an eye on everyone from the boat. When your bags are
                full — or you&apos;ve hit the daily limit — we head back in with
                a cooler loaded with bay scallops. That evening, you can shuck
                and sauté them with butter and garlic for one of the freshest,
                most satisfying meals you&apos;ll ever put on the table.
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

            {/* Pro tip callout */}
            <div className="bg-[#FA4616]/5 border border-[#FA4616]/20 rounded-[7px] p-6">
              <p className="text-sm font-bold text-[#FA4616] uppercase tracking-wider mb-2">
                Capt. Jim&apos;s Advice
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                The scalloping season runs July 1 through September 24 in
                Citrus County — but the best action is typically in July and
                early August before the grass beds get worked over. Weekend
                dates fill fast. Book as early as possible to lock in your
                preferred morning, and bring a bag of ice for the ride home.
                These scallops are worth it.
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
            Limited Summer Dates
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Scalloping Adventure
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            The scalloping season is short and summer weekends book fast.
            Secure your family&apos;s spot now and spend a morning in the most
            beautiful water on Florida&apos;s Gulf Coast.
          </p>
          <Link
            href="/reservations"
            className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-9 py-4 rounded-[7px] text-base shadow-xl hover:shadow-[#FA4616]/40 transition-all duration-300 group"
          >
            Reserve Your Dates
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
