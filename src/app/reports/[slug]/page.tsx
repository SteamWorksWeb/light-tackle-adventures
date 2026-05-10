import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { reports } from "@/data/reports";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) return {};
  return {
    title: `${report.title} | Light Tackle Adventures`,
    description: report.excerpt,
  };
}

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export default async function ReportPage({ params }: Props) {
  const { slug } = await params;
  const report = reports.find((r) => r.slug === slug);
  if (!report) return notFound();

  // Adjacent reports for prev/next navigation
  const currentIndex = reports.indexOf(report);
  const prevReport = reports[currentIndex - 1] ?? null;
  const nextReport = reports[currentIndex + 1] ?? null;

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <Image
          src={report.image}
          alt={report.title}
          fill
          className="object-cover object-center -z-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/80 to-[#0a1520]/95 -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/reports"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#FA4616] text-sm font-medium transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to Reports
          </Link>
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase block mb-4">
            Fishing Report
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-tight">
            {report.title}
          </h1>
        </div>
      </section>

      {/* ── REPORT BODY ── */}
      <section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-16 prose prose-lg prose-slate">

          {/* Hero image */}
          <div className="relative w-full aspect-video rounded-[7px] overflow-hidden shadow-md mb-10 not-prose">
            <Image
              src={report.image}
              alt={report.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Content — split on newlines to preserve paragraph breaks */}
          <div className="not-prose space-y-5">
            {report.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-700 text-base md:text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="not-prose mt-12 bg-[#FA4616]/5 border border-[#FA4616]/20 rounded-[7px] p-6">
            <p className="text-sm font-bold text-[#FA4616] uppercase tracking-wider mb-2">
              Ready to Book?
            </p>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Capt. Jim is on the water regularly — dates go fast. Reserve
              your spot online or give him a call directly.
            </p>
            <Link
              href="/reservations"
              className="inline-flex items-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] text-white font-bold px-6 py-3 rounded-[7px] text-sm shadow-md hover:shadow-[#FA4616]/30 transition-all duration-300 group"
            >
              Check Available Dates
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

        {/* ── Prev / Next navigation ── */}
        {(prevReport || nextReport) && (
          <div className="max-w-4xl mx-auto px-4 pb-16 grid grid-cols-2 gap-4">
            {prevReport ? (
              <Link
                href={`/reports/${prevReport.slug}`}
                className="group flex flex-col gap-1 bg-white border border-slate-200 rounded-[7px] p-5 hover:border-[#FA4616]/30 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                  <ArrowLeft size={12} /> Previous
                </span>
                <span className="text-slate-900 font-semibold text-sm group-hover:text-[#FA4616] transition-colors leading-snug">
                  {prevReport.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextReport ? (
              <Link
                href={`/reports/${nextReport.slug}`}
                className="group flex flex-col gap-1 bg-white border border-slate-200 rounded-[7px] p-5 hover:border-[#FA4616]/30 hover:shadow-sm transition-all duration-200 text-right"
              >
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1 justify-end">
                  Next <ArrowRight size={12} />
                </span>
                <span className="text-slate-900 font-semibold text-sm group-hover:text-[#FA4616] transition-colors leading-snug">
                  {nextReport.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}
      </section>
    </>
  );
}
