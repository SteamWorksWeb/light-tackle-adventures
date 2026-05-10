import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { reports } from "@/data/reports";

export const metadata: Metadata = {
  title: "Fishing Reports | Light Tackle Adventures",
  description:
    "Dispatches from the Homosassa and Crystal River flats with Capt. Jim Lemke. Read the latest fishing reports from the Nature Coast.",
};

export default function ReportsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/images/tarpon7.jpeg"
          alt="Nature Coast Fishing Reports"
          fill
          quality={80}
          className="object-cover object-center -z-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/80 to-[#0a1520]/95 -z-10" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase">
            From the Water
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Fishing Reports
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            Dispatches from the Homosassa and Crystal River flats.
          </p>
        </div>
      </section>

      {/* ── REPORT GRID ── */}
      <section className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <Link
                key={report.slug}
                href={`/reports/${report.slug}`}
                className="group bg-white rounded-[7px] border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                {/* Card image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={report.image}
                    alt={report.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FA4616] transition-colors duration-200 leading-snug">
                    {report.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {report.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#FA4616] font-semibold text-sm mt-5 group-hover:gap-2.5 transition-all duration-200">
                    Read Report
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="bg-[#0d1b2a] py-16 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FA4616] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            Get Out There
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            The Fish Are Biting
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            The reports speak for themselves. Reserve your dates with Capt. Jim
            and get on the water.
          </p>
          <Link
            href="/reservations"
            className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-9 py-4 rounded-[7px] text-base shadow-xl hover:shadow-[#FA4616]/40 transition-all duration-300 group"
          >
            Book Your Charter
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
