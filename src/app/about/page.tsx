import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Clock,
  Anchor,
  Tv2,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Capt. Jim Lemke | Light Tackle Adventures",
  description:
    "Meet Capt. Jim Lemke, a premier Homosassa and Crystal River fishing guide with over 35 years of experience on the Nature Coast.",
};

const credentials = [
  {
    icon: Shield,
    label: "USCG Licensed & Insured",
    detail: "United States Coast Guard Master Captain",
  },
  {
    icon: Clock,
    label: "35+ Years Experience",
    detail: "On the Nature Coast waters since the late 1980s",
  },
  {
    icon: Anchor,
    label: "Nature Coast Native",
    detail: "Deep knowledge of Homosassa, Crystal River & beyond",
  },
  {
    icon: Tv2,
    label: "Featured on National TV",
    detail: "ESPN2 Inshore Angler, Urban Angler & more",
  },
];

const targetSpecies = [
  "Tarpon (world-class Homosassa migration)",
  "Snook",
  "Redfish",
  "Sea Trout",
  "Permit",
  "Sharks",
  "Scalloping (seasonal)",
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#0a1520] pt-32 pb-20 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FA4616]/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-[#FA4616] text-xs uppercase tracking-[0.3em] font-semibold mb-5">
            Your Guide · Homosassa, Florida
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Meet Capt. Jim Lemke
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            35+ Years Navigating the Legendary Backwaters of the Nature Coast.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            <Link
              href="/reservations"
              className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-7 py-3.5 rounded-[7px] text-sm shadow-lg hover:shadow-[#FA4616]/30 transition-all duration-300 group"
            >
              Book a Trip with Capt. Jim
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

      {/* ── EDITORIAL GRID ── */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

          {/* ── LEFT: Bio (8 cols) ── */}
          <article className="lg:col-span-8">

            {/* Bio copy with editorial float wrap */}
            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">

              {/* Float image — stacks on mobile, wraps text on desktop */}
              <Image
                src="/images/jim2.jpg"
                alt="Capt. Jim Lemke"
                width={300}
                height={400}
                className="w-full md:w-auto md:float-left md:mr-6 md:mb-4 object-cover object-center rounded-[7px] shadow-md"
              />

              <p>
                Captain Jim Lemke grew up on the water. Long before he held a
                USCG Master Captain&apos;s license, he was fishing the shallow grass
                flats, spring-fed creeks, and backcountry mangrove tunnels that
                make the Nature Coast one of the most extraordinary fisheries on
                the planet. That lifelong immersion in the ecosystem — not just
                the fishing, but the tides, the seasons, the bait migrations, and
                the moods of the water — is what separates a good guide from an
                exceptional one. Capt. Jim is the latter.
              </p>

              <p>
                After earning his United States Coast Guard license in the late
                1980s, Capt. Jim transitioned to full-time guiding on the Nature
                Coast, building a reputation as one of Homosassa&apos;s most
                knowledgeable and passionate light-tackle specialists. Over more
                than three decades, he has guided anglers from all walks of life:
                first-timers casting for the first time, seasoned tournament
                competitors, television crews from ESPN2&apos;s{" "}
                <em>Inshore Angler</em> and <em>Urban Angler</em>, and celebrities
                and sports stars seeking a genuine Florida backcountry experience
                far from the crowds.
              </p>

              <p>
                His deep respect for the Homosassa ecosystem shapes every trip.
                Capt. Jim is a conservationist at heart — he practices and
                teaches proper fish handling, advocates for catch-and-release
                on trophy species, and takes active pride in educating clients
                about the fragile grass flats, spring systems, and estuaries
                that make this stretch of coastline unlike anywhere else in the
                world. When you fish with Capt. Jim, you leave knowing more
                about the water than when you arrived.
              </p>

              <p>
                Today, Light Tackle Adventures runs charters across the full
                breadth of the Nature Coast — from the world-famous Tarpon
                migration corridors off Homosassa to the crystal-clear springs
                of Crystal River, the remote backwaters of Ozello and
                Chassahowitzka, and the scalloping grounds of Hernando Beach
                and Weeki Wachee. Whatever your target, whatever your
                experience level, Capt. Jim will put you on fish.
              </p>

              {/* The Boat & Gear */}
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-2 pt-6 border-t border-slate-200">
                The Boat &amp; Gear
              </h2>

              <Image
                src="/images/boat.jpg"
                alt="Capt. Jim Lemke's Custom Flats Skiff"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-[7px] shadow-md my-6"
              />

              <p>
                Light Tackle Adventures runs a custom-rigged shallow-water
                skiff purpose-built for the Nature Coast flats. With a
                draft measured in inches, the boat accesses water most
                guides never see — the ultra-shallow back lakes, spring
                runs, and hidden pockets where trophy fish live undisturbed.
                Powered up, we can cover water fast. Engine off and poling
                quietly, we become part of the landscape.
              </p>

              <p>
                All tackle is top-tier light-action gear — tournament-grade
                fly rods, premium spinning setups, and high-end reels spooled fresh
                for every trip. Whether you prefer live bait, artificial
                lures, or flies, the boat is rigged and ready. Every charter
                includes all tackle, terminal gear, fishing license, and live
                or fresh-cut bait as conditions dictate. You just show up
                and fish.
              </p>

              {/* Target species */}
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-4 pt-6 border-t border-slate-200">
                Target Species
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {targetSpecies.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-slate-600 text-sm md:text-base">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#FA4616]" />
                    {s}
                  </li>
                ))}
              </ul>

            </div>
          </article>

          {/* ── RIGHT: Sidebar (4 cols) ── */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-5">

              {/* Credentials card */}
              <div className="bg-white p-6 rounded-[7px] border border-slate-200 shadow-sm">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-slate-900 mb-5">
                  Captain&apos;s Credentials
                </h3>
                <ul className="space-y-4">
                  {credentials.map(({ icon: Icon, label, detail }) => (
                    <li key={label} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FA4616]/10 flex items-center justify-center mt-0.5">
                        <Icon size={14} className="text-[#FA4616]" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-sm leading-tight">{label}</p>
                        <p className="text-slate-500 text-xs mt-0.5 leading-snug">{detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/reservations"
                  className="block w-full text-center bg-[#FA4616] hover:bg-orange-600 text-white py-3 rounded-[7px] font-bold text-sm transition-colors mt-6"
                >
                  Book Your Trip
                </Link>
              </div>

              {/* Quick contact card */}
              <div className="bg-[#0a1520] p-6 rounded-[7px] border border-white/10">
                <p className="text-white font-semibold text-sm mb-1">Have a question?</p>
                <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                  Capt. Jim answers his own phone. Give him a call to talk
                  tides, species, and best dates.
                </p>
                <a
                  href="tel:+18139174989"
                  className="flex items-center justify-center gap-2 border border-[#FA4616]/40 hover:border-[#FA4616] text-[#FA4616] font-semibold py-2.5 rounded-[7px] text-sm transition-colors w-full"
                >
                  <Phone size={14} />
                  (813) 917-4989
                </a>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="bg-[#0d1b2a] py-16 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FA4616] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            Ready to Fish?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Book a Charter with Capt. Jim
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Prime dates fill fast. Use the online booking system to lock in
            your trip or call Capt. Jim directly to talk through the details.
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
