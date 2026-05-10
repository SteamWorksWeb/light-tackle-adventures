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
  title: "Fly Fishing Charters | Light Tackle Adventures",
  description:
    "Technical sight fishing for Tarpon, Redfish, and Snook on the Nature Coast with Capt. Jim Lemke.",
};

const tripDetails = [
  {
    icon: Calendar,
    label: "Season",
    value: "Year-Round",
    note: "Tarpon May–July · Redfish & Snook all year",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Homosassa & Crystal River",
    note: "Ozello, Chassahowitzka & Weeki Wachee also available",
  },
  {
    icon: Fish,
    label: "Target Species",
    value: "Tarpon, Redfish, Snook",
    note: "Plus Trout, Permit & other flats species",
  },
  {
    icon: Users,
    label: "Capacity",
    value: "1 – 2 Anglers",
    note: "Strictly enforced for optimal casting lanes",
  },
  {
    icon: Clock,
    label: "Trip Length",
    value: "Full Day (8 hrs)",
    note: "Half-day available on request",
  },
];

const included = [
  "Premium fly rods, reels & lines",
  "Fully rigged leaders & flies",
  "Custom shallow-draft bay boat",
  "Iced cooler with bottled water",
  "Florida fishing license",
  "Experienced USCG licensed guide",
];

export default function FlyFishingChartersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">

        {/* Background image */}
        <Image
          src="/images/fly-header.jpeg"
          alt="Fly fishing on the Nature Coast"
          fill
          className="object-cover object-center -z-20"
          sizes="100vw"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/80 to-[#0a1520]/95 -z-10" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase">
            The Ultimate Test
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Fly Fishing Charters
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            Sight-cast to giant Tarpon, tailing Redfish, and aggressive Snook
            in the crystal-clear shallows of Homosassa and Crystal River.
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
                src="/images/fly-header.jpeg"
                alt="Fly fishing the Nature Coast flats"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* Technical Sight Fishing */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Technical Sight Fishing
              </h2>
              <p>
                Fly fishing the Nature Coast flats is as demanding and
                rewarding as saltwater angling gets. You spot the fish before
                you cast — a copper tail waving above the waterline, a
                dark shadow pushing a wake through the shallows, a daisy chain
                of rolling Tarpon barely sixty feet away. The cast has to be
                right, right now: the correct distance, the correct angle,
                the correct presentation. Too short and you&apos;ve spooked the
                school. Too long and the fly lands out of the strike zone.
                Capt. Jim poles the boat in silence, reads the water, and puts
                you in the best possible position. What happens next is pure
                skill, precision, and instinct.
              </p>
              <p className="mt-4">
                The Nature Coast fishery is uniquely suited to the fly rod. The
                water is shallow, clear, and teeming with actively feeding fish.
                Spring-fed rivers keep visibility exceptional even in the heat
                of summer, and the grass beds and oyster bars hold fish in
                predictable, huntable locations. You are not blind-casting into
                deep blue water hoping for a strike. You are hunting individual
                fish, making presentations to specific targets, and experiencing
                every bite in vivid detail — from the moment the fish tracks
                the fly to the explosion of the eat.
              </p>
            </div>

            {/* Mid-article image break */}
            <Image
              src="/images/fly1.jpeg"
              alt="Fly casting to tailing redfish"
              width={800}
              height={500}
              className="w-full h-auto object-cover rounded-[7px] shadow-md my-8"
            />

            {/* The Species */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                The Species
              </h2>
              <p>
                Tarpon on the fly is the pinnacle of saltwater angling.
                Homosassa is one of the most storied Tarpon-on-fly destinations
                in the world, drawing serious fly anglers from every corner of
                the globe during the May through July migration window. A
                100-pound Tarpon hooked on an 11-weight in three feet of clear
                water — aerial, violent, relentless — is an experience that
                redefines what you thought fishing could be.
              </p>
              <p className="mt-4">
                The same flats that produce trophy Tarpon hold exceptional
                Redfish year-round. Tailing Redfish in skinny water are a
                fly fisherman&apos;s obsession — the challenge of presenting a
                crab or shrimp pattern to a fish feeding head-down is an art
                form. Snook haunt the mangrove edges and oyster bars, ambushing
                prey with explosive aggression. All three species — Tarpon,
                Redfish, and Snook — can be realistically targeted on the fly
                rod from the same boat on the same day, depending on the season
                and the tide.
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
                If Tarpon on the fly is your goal, book May or June — the peak
                of the Homosassa migration and the best window for fish numbers
                and ideal flat conditions. These dates fill months in advance.
                For Redfish and Snook on the fly, October through December
                delivers some of the most consistent sight-fishing of the year.
                Tell Capt. Jim your target species and skill level when you
                book — he will build the trip around you.
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
            Book Your Fly Fishing Trip
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            The Nature Coast Awaits
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you&apos;re chasing your first Tarpon on the fly or
            hunting tailing Redfish in the skinny water, Capt. Jim will put
            you on fish. Reserve your dates now — prime windows fill fast.
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
