"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import BlogCard from "@/components/BlogCard";

/* ─────────────── YouTube Facade ─────────────── */
function YouTubeFacade({ videoId, startAt = 0 }: { videoId: string; startAt?: number }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?start=${startAt}&autoplay=1`}
        title="Capt. Jim Lemke Fishing Charter Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      aria-label="Play video"
      className="absolute inset-0 w-full h-full group"
    >
      {/* Local verified thumbnail — no external network request */}
      <Image
        src="/images/vid1.jpg"
        alt="Nature Coast fishing charter video"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 900px"
      />
      {/* Dark scrim */}
      <span className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      {/* Play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-[#FA4616] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 translate-x-0.5"><path d="M8 5v14l11-7z"/></svg>
        </span>
      </span>
    </button>
  );
}

/* ─────────────── Animation Variants ─────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

/* ─────────────── Data ─────────────── */
const charterTypes = [
  {
    title: "Homosassa Tarpon Fishing",
    subtitle: "NOW BOOKING — Chase the \"Silver King\"",
    description:
      "Homosassa is world-famous as the premier destination for giant Tarpon. Fish the legendary migration corridors of the Nature Coast with Capt. Jim Lemke — Florida's most acrobatic fish awaits.",
    href: "/charters/tarpon",
    image: "/images/tarpon7.jpeg",
    alt: "Angler holding a large tarpon on the Homosassa flats",
    badge: "Most Exciting",
  },
  {
    title: "Nature Coast Flats Fishing",
    subtitle: "Inshore Light Tackle",
    description:
      "Catch Snook, Trout, Redfish and much more on a Nature Coast Flats Fishing Charter. The shallow grass flats and backwaters of Homosassa and Crystal River are home to some of Florida's best inshore fishing.",
    href: "/charters/inshore",
    image: "/images/hero-red.jpg",
    alt: "Snook caught on the Homosassa flats",
    badge: "Most Popular",
  },
  {
    title: "Homosassa Scalloping",
    subtitle: "Cool Off & Catch Dinner",
    description:
      "What better way to cool off in the heat of the Florida Summer? Get right into the crystal-clear water off Homosassa and Crystal River and gather up dinner right off the shallow sea floor. A unique adventure for the whole family!",
    href: "/charters/scalloping",
    image: "/images/scallop1.jpeg",
    alt: "Scalloping in the crystal clear waters of Homosassa",
    badge: "Family Favorite",
  },
  {
    title: "Nature Coast Fly Fishing",
    subtitle: "Sight Fishing on the Flats",
    description:
      "If you like flinging flies, you've come to the right place! Experience incredible shallow-water fly fishing across the Nature Coast with Capt. Jim — one of Homosassa's most seasoned fly guides.",
    href: "/charters/fly-fishing",
    image: "/images/fly2.jpeg",
    alt: "Fly fisherman casting on the Homosassa flats",
    badge: "Specialty",
  },
];

const faqItems = [
  {
    q: "Why choose Homosassa for my fishing trip?",
    a: "Homosassa and the Nature Coast offer unmatched diversity — world-famous Tarpon migrations, trophy Snook and Redfish on pristine grass flats, and crystal-clear springs that few guides know how to navigate. Capt. Jim has over 35 years reading these specific waters.",
  },
  {
    q: "What should I bring?",
    a: "Bring a good pair of UV sunglasses, a hat, weather-relevant clothing, sunscreen, drinks, and snacks. We provide everything else — including the license and all tackle.",
  },
  {
    q: "What style of fishing do you offer?",
    a: "Whether novice or pro, Captain Jim can cater the trip to best meet your needs. He specializes in sight fishing the shallow backwaters of Homosassa, Crystal River, and Chassahowitzka, supporting both light tackle and fly fishing with live/frozen bait and artificial lures.",
  },
  {
    q: "What is light tackle fishing?",
    a: "Light tackle fishing uses light line and light action rods — perfect for the shallow grass flats of the Nature Coast. We also offer heavier tackle for Homosassa Tarpon charters, but light tackle sight fishing is what these waters are legendary for.",
  },
  {
    q: "What is sight fishing?",
    a: "Sight fishing means scanning the water for the push or nervous water of game fish in the shallows. Capt. Jim poles the flats of Homosassa and Ozello in mere inches of water, stalking fish before you ever make a cast.",
  },

];

const species = [
  { label: "Snook",     href: "/species/snook" },
  { label: "Tarpon",    href: "/species/tarpon" },
  { label: "Redfish",   href: "/species/redfish" },
  { label: "Sea Trout", href: "/species/sea-trout" },
  { label: "Permit",    href: "/species/permit" },
  { label: "Sharks",    href: "/species/sharks" },
  { label: "Scallops",  href: "/species/scallops" },
];

const blogPosts = [
  {
    title: "Fall Fishing Tampa Bay",
    excerpt:
      "With the cold fronts starting to roll in and the Kingfish run in full swing, the dropping water temps have the bite fired up inshore and offshore across the Nature Coast.",
    date: "",
    href: "/reports/fall-tampa-bay-fishing",
    imageSrc: "/images/tarpon-5.jpeg",
    imageAlt: "Fall fishing action on the Nature Coast",
    category: "Fishing Report",
  },
  {
    title: "Tampa Spring Snook Fishing is On",
    excerpt:
      "Tampa spring Snook fishing has been off the hook off the mangrove shorelines. April is living up to its reputation as one of our best months.",
    date: "",
    href: "/reports/tampa-spring-snook-fishing",
    imageSrc: "/images/snook.jpeg",
    imageAlt: "Snook caught on the Nature Coast flats",
    category: "Fishing Report",
  },
  {
    title: "Homosassa Scalloping Charters",
    excerpt:
      "What better way to cool off in the heat of the Florida Summer than to get right into the water and gather up dinner right off the shallow sea floor!",
    date: "",
    href: "/reports/spring-snook-kingfish-st-petersburg",
    imageSrc: "/images/scallop1.jpeg",
    imageAlt: "Scalloping in Homosassa Florida",
    category: "Adventure",
  },
];

/* ─────────────── Page ─────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Desktop hero — wide landscape */}
          <Image
            src="/images/hero-red.jpg"
            alt="Capt. Jim Lemke on the Nature Coast flats"
            fill
            priority
            quality={80}
            className="hidden md:block object-cover"
            sizes="100vw"
          />
          {/* Mobile hero — vertical portrait */}
          <Image
            src="/images/tarpon-hero-mobile.jpeg"
            alt="Homosassa Tarpon Charter"
            fill
            priority
            quality={80}
            className="block md:hidden object-cover object-center"
            sizes="100vw"
          />
          {/* Overlays — z-10 ensures they sit above both images */}
          <div className="absolute inset-0 bg-slate-900/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1b2a] z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm uppercase tracking-[0.25em] font-semibold mb-4"
          >
            Homosassa · Crystal River · The Nature Coast
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Fly Fishing, Inshore, Scalloping, &amp; Tarpon Charters
          </motion.h1>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/reservations"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-book-cta"
              className="inline-flex items-center justify-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-8 py-4 rounded-[7px] text-base shadow-xl hover:shadow-[#FA4616]/50 transition-all duration-300 group"
            >
              Reserve Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/about"
              id="hero-learn-cta"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-[7px] text-base hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Meet Capt. Jim
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── TARPON SEASON CTA BANNER ── */}
      <section className="bg-white py-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-[7px] bg-gradient-to-r from-[#FA4616] to-orange-500 shadow-xl shadow-[#FA4616]/20 overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left — Image */}
          <div className="relative h-56 md:h-auto min-h-[280px]">
            <Image
              src="/images/tarpon-cta.jpeg"
              alt="Angler with a large Tarpon"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right — Text */}
          <div className="px-8 py-12 flex flex-col justify-center">
            <p className="text-white/80 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              Homosassa · The Nature Coast · 2026 Season
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Now Booking World-Class Homosassa Tarpon Charters for 2026
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
              Homosassa is the Tarpon capital of the world — and the calendar
              fills up fast. Secure your prime migration dates before they&apos;re gone.
            </p>
            <div>
              <Link
                href="/reservations"
                id="tarpon-season-cta"
                className="inline-block px-8 py-4 bg-white text-[#FA4616] font-bold text-base rounded-[7px] hover:bg-slate-50 hover:scale-105 transition-all duration-200 shadow-md"
              >
                Reserve Your Dates →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CHARTER TYPES ── */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-[#FA4616] text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-slate-900">
              Our Charter Experiences
            </h2>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {charterTypes.map((charter) => (
              <motion.div key={charter.title} {...fadeUp}>
                <Link
                  href={charter.href}
                  className="group relative rounded-[7px] overflow-hidden block h-72 border border-white/10 hover:border-[#0ea5e9]/50 shadow-lg hover:shadow-[#0ea5e9]/10 transition-all duration-300"
                >
                  <Image
                    src={charter.image}
                    alt={charter.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060f1a]/95 via-[#060f1a]/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0ea5e9] text-white px-2.5 py-1 rounded-[7px]">
                      {charter.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#0ea5e9] text-xs uppercase tracking-widest mb-1 font-semibold">
                      {charter.subtitle}
                    </p>
                    <h3 className="font-[family-name:var(--font-playfair)] text-white text-2xl font-bold mb-2">
                      {charter.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 mb-3">
                      {charter.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#0ea5e9] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LINE BREAK DIVIDER [EXPERIMENT] — delete this block to revert ── */}
      <div className="w-full flex justify-center py-6 md:py-10 px-4 bg-white">
        <Image
          src="/images/line-break.png"
          alt="Decorative fly line divider"
          width={800}
          height={80}
          className="w-full max-w-3xl h-auto opacity-70 mix-blend-multiply"
        />
      </div>
      {/* ── /LINE BREAK DIVIDER ── */}

      {/* ── ABOUT CAPT. JIM ── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image — left column */}
          <motion.div {...fadeUp}>
            <Image
              src="/images/jim2.jpg"
              alt="Capt. Jim Lemke holding a trophy redfish"
              width={600}
              height={750}
              className="w-full h-auto object-cover rounded-[7px] shadow-lg"
            />
          </motion.div>

          {/* Text — right column */}
          <motion.div {...fadeUp}>
            <p className="text-[#FA4616] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              Your Guide
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              About Capt. Jim Lemke
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Light Tackle Adventures offers world-class fishing charters on
              Florida&apos;s Nature Coast — guided by Capt. Jim Lemke, a seasoned
              Homosassa and Crystal River fishing guide with more than 35 years
              of experience navigating these legendary backwaters. Whether you&apos;re
              chasing Tarpon through Homosassa, sight-fishing Snook and Redfish
              on the Crystal River flats, or exploring the backwaters of Ozello
              and Chassahowitzka, Capt. Jim is the go-to choice for anglers,
              television producers, sports stars, and celebrities alike.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Capt. Jim Lemke has been featured in many worldwide television
              shows like{" "}
              <span className="text-slate-900 font-medium">
                ESPN2 Inshore Angler and Urban Angler
              </span>{" "}
              along with many local shows like Hooked on Fishing with Capt.
              Bill Miller, The Average Angler, and the 47 Fish Finder with
              many more.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Homosassa &amp; Crystal River fishing guide",
                "Featured on ESPN2 and national fishing shows",
                "Specializes in light tackle, fly fishing &amp; Homosassa Tarpon",
                "USCG Licensed Captain — all tackle &amp; licenses provided",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#FA4616]" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-semibold px-6 py-3 rounded-[7px] transition-all duration-300 text-sm group shadow-md hover:shadow-[#FA4616]/30"
            >
              Learn More About Capt. Jim
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SPECIES SPOTLIGHT ── */}
      {/* ── LINE BREAK DIVIDER [EXPERIMENT] — delete this block to revert ── */}
      <div className="w-full flex justify-center py-6 md:py-10 px-4 bg-slate-50">
        <Image
          src="/images/line-break.png"
          alt="Decorative fly line divider"
          width={800}
          height={80}
          className="w-full max-w-3xl h-auto opacity-70 mix-blend-multiply"
        />
      </div>
      {/* ── /LINE BREAK DIVIDER ── */}
      <motion.section {...fadeUp} className="py-10 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-slate-900 mb-2">
              Species Spotlight on the Nature Coast
            </h2>
            <p className="text-slate-600 text-sm">
              Florida is the Fishing Capital of the World — and Homosassa delivers year-round.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {species.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 bg-white text-slate-800 text-sm font-semibold rounded-[7px] shadow-sm border border-slate-200 hover:border-[#FA4616]/40 hover:shadow-md hover:text-[#FA4616] transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── BOOK NOW CTA BAND ── */}
      <section className="relative z-0 overflow-hidden py-20 px-6 bg-gradient-to-r from-[#1e3a5f] via-[#1e6091] to-[#0ea5e9]/20">
        {/* [EXPERIMENT] 10% boat bg texture — delete this Image block to revert */}
        <Image src="/images/slideRedBoat-1024x449.jpg.jpeg" alt="" fill className="object-cover -z-10 opacity-10 pointer-events-none" sizes="100vw" />
        {/* [/EXPERIMENT] */}
        <motion.div {...fadeUp} className="relative isolate z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-5">
            Book Your Homosassa Charter Instantly Online Now!
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Whether you want to catch a giant tarpon, make that perfect cast
            with a fly, catch Florida&apos;s most sought-after shallow water fish, or
            swim around and cool off during scallop season — there&apos;s no better
            time than right now to book your next adventure with Capt. Jim
            Lemke!
          </p>
          <a
            href="/reservations"
            target="_blank"
            rel="noopener noreferrer"
            id="mid-page-book-cta"
            className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-10 py-5 rounded-[7px] text-lg shadow-xl hover:shadow-[#FA4616]/50 transition-all duration-300 group"
          >
            Reserve Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-[#FA4616] text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Good to Know
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div {...stagger} className="space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="bg-white border border-slate-200 hover:border-[#FA4616]/30 rounded-[7px] p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-slate-900 font-semibold mb-2 text-base">
                  {item.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FISHING REPORTS BLOG ── */}
      {/* ── LINE BREAK DIVIDER [EXPERIMENT] — delete this block to revert ── */}
      <div className="w-full flex justify-center py-6 md:py-10 px-4 bg-white">
        <Image
          src="/images/line-break.png"
          alt="Decorative fly line divider"
          width={800}
          height={80}
          className="w-full max-w-3xl h-auto opacity-70 mix-blend-multiply"
        />
      </div>
      {/* ── /LINE BREAK DIVIDER ── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-[#FA4616] text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Latest Updates
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-slate-900 mb-3">
              Fishing Reports
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Check out our recent fishing charter updates. Our Nature Coast guided
              fishing trips capture moments on the water that no client can forget.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.title} {...fadeUp}>
                <BlogCard {...post} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="text-center">
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#FA4616] text-slate-700 hover:text-[#FA4616] px-6 py-3 rounded-[7px] text-sm font-medium transition-all duration-300 hover:bg-[#FA4616]/5"
            >
              See All Fishing Reports
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <motion.section
        {...fadeUp}
        className="py-20 px-6 bg-[#0a1520] border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#0ea5e9] text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            See the Action
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-4">
            Nature Coast Fishing Videos
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-2 max-w-2xl mx-auto">
            Check out one of our recent fishing charter videos. Our Homosassa and
            Crystal River guided fishing trips capture moments on the water that no client can forget.
          </p>
          <p className="text-slate-500 text-sm mb-8">
            Capt. Jim Lemke has been featured in worldwide television shows like{" "}
            <span className="text-slate-300">ESPN2 Inshore Angler</span> and{" "}
            <span className="text-slate-300">Urban Angler</span> along with many
            local shows.
          </p>

          {/* YouTube facade — loads iframe only on click, saving ~500KB on initial load */}
          <div className="relative w-full max-w-5xl mx-auto rounded-[7px] overflow-hidden aspect-video shadow-xl ring-1 ring-white/10 mb-8">
            <YouTubeFacade videoId="tQfGUuKWfFk" startAt={19} />
          </div>

          <Link
            href="/videos"
            className="inline-flex items-center gap-2 border border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white font-semibold px-6 py-3 rounded-[7px] text-sm transition-all duration-300"
          >
            See More Videos
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.section>
    </>
  );
}
