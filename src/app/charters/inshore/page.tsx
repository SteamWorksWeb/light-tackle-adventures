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
  title: "Homosassa Inshore Fishing Charters | Light Tackle Adventures",
  description:
    "Fish the pristine grass flats and backcountry of Homosassa and Crystal River for Redfish, Speckled Trout, and Snook with Capt. Jim Lemke.",
};

const tripDetails = [
  {
    icon: Calendar,
    label: "Season",
    value: "Year-Round",
    note: "Best action in fall & winter — book any time",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Homosassa & Crystal River",
    note: "Ozello, Chassahowitzka & Weeki Wachee also available",
  },
  {
    icon: Fish,
    label: "Target",
    value: "Redfish, Speckled Trout, Snook",
    note: "Plus Flounder, Sharks & seasonal species",
  },
  {
    icon: Users,
    label: "Capacity",
    value: "1 – 4 Anglers",
    note: "Great for families, couples & groups",
  },
  {
    icon: Clock,
    label: "Trip Length",
    value: "Full or Half Day",
    note: "4-hour and 8-hour options available",
  },
];

const included = [
  "Premium spinning & light tackle gear",
  "All necessary tackle & bait",
  "Custom shallow-draft bay boat",
  "Iced cooler with bottled water",
  "Florida fishing license",
  "Experienced USCG licensed guide",
];

const species = [
  { name: "Redfish (Red Drum)", detail: "Tailing & cruising on the flats year-round" },
  { name: "Speckled Trout", detail: "Gator trout on grass beds & oyster bars" },
  { name: "Snook", detail: "Ambush predators in mangrove tunnels & passes" },
  { name: "Flounder", detail: "Bottom-dwellers in sandy pockets & channels" },
  { name: "Sharks", detail: "Bull, Lemon & Blacktip in backcountry waters" },
  { name: "Sheepshead", detail: "Pilings, bridges & structure year-round" },
];

export default function InshoreChartersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">

        {/* Background image */}
        <Image
          src="/images/hero-red.jpg"
          alt=""
          fill
          className="object-cover object-center -z-20"
          sizes="100vw"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/80 to-[#0a1520]/95 -z-10" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase">
            Year-Round Action
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Homosassa Inshore &amp; Backcountry Fishing Charters
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            Stalk Redfish, Trout, and Snook in the pristine shallow waters of
            the Nature Coast.
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
                src="/images/hero-red.jpg"
                alt="Redfish caught on a Homosassa inshore charter"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* The Backcountry */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                The Nature Coast Backcountry
              </h2>
              <p>
                The Homosassa and Crystal River fishery is one of Florida&apos;s
                best-kept secrets — a labyrinth of spring-fed rivers, oyster
                bar flats, mangrove islands, and tidal creeks that stretch for
                miles in every direction. Unlike the crowded boat ramps of
                South Florida, the Nature Coast backcountry is wild, remote,
                and absolutely teeming with fish. On any given morning, you
                might sight-cast to tailing Redfish on a shallow grass flat,
                work a live shrimp along a mangrove shoreline for Snook, and
                then drift a grass bed for Gator Trout — all before lunch.
              </p>
              <p className="mt-4">
                Capt. Jim has spent over three decades learning every point,
                flat, creek mouth, and oyster bar in this system. He knows
                where the fish are by season, by tide, and by wind direction.
                That knowledge — built over thousands of days on the water —
                is what you are booking when you step onto the boat. You are
                not fishing blind. You are fishing with someone who sees the
                water differently than anyone else out there.
              </p>
            </div>

            {/* Target Species */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Target Species
              </h2>
              <p>
                The Nature Coast inshore fishery offers extraordinary variety.
                Tailing Redfish are a sight-fishing obsession — spotting a
                copper tail waving above the waterline in six inches of water,
                making the cast, and watching the fish eat is as good as it
                gets in inshore fishing. Speckled Trout — the Gator variety
                pushing 20 to 28 inches — haunt the deeper grass beds and
                shell bars. Snook are masters of ambush, lurking in the shadow
                of mangrove roots and bridge pilings, exploding on a well-placed
                bait with breath-taking force.
              </p>
              <p className="mt-4">
                These charters run light tackle — spinning rods, live shrimp,
                baitfish, and carefully matched artificials. Fly fishing is
                available on request. Capt. Jim tailors every trip to the
                conditions and your target, maximizing your time on productive
                water rather than running around looking for fish.
              </p>

              {/* Species breakdown */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {species.map(({ name, detail }) => (
                  <li key={name} className="bg-white rounded-[7px] border border-slate-200 p-4 shadow-sm">
                    <p className="text-slate-900 font-semibold text-sm mb-1">{name}</p>
                    <p className="text-slate-500 text-xs leading-snug">{detail}</p>
                  </li>
                ))}
              </ul>
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

            {/* Tip callout */}
            <div className="bg-[#FA4616]/5 border border-[#FA4616]/20 rounded-[7px] p-6">
              <p className="text-sm font-bold text-[#FA4616] uppercase tracking-wider mb-2">
                Best Time to Go
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Inshore fishing is excellent year-round on the Nature Coast, but
                fall (October–December) delivers some of the most consistent
                action. Redfish school up in large numbers, Trout are aggressive,
                and the crowds thin out. Spring tides in April and May also
                produce exceptional sight-fishing. There is never a bad time —
                but book early for your preferred window.
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
            Year-Round Availability
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Inshore Charter
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            The Nature Coast backcountry is fishing every day of the year.
            Select your dates online or call Capt. Jim directly to talk through
            target species and the best tides for your trip.
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
