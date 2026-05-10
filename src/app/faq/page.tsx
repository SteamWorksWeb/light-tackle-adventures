import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Light Tackle Adventures",
  description:
    "Everything you need to know before your Homosassa fishing or scalloping charter with Capt. Jim Lemke.",
};

const faqs = [
  {
    question: "Do I need a fishing license?",
    answer:
      "No. Capt. Jim provides all necessary state and federal fishing licenses for everyone on board. You are fully covered — just show up ready to fish.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring polarized sunglasses (crucial for sight fishing), a hat, non-aerosol sunscreen, and any specific snacks you want. An iced cooler with bottled water is provided. Comfortable, non-slip footwear is also recommended for the boat.",
  },
  {
    question: "Can we keep our catch?",
    answer:
      "We strongly practice catch-and-release for Tarpon and Snook. However, legal limits of edible species — like Trout, Redfish, or Scallops — can absolutely be kept. Capt. Jim will clean and bag them for you at the dock so you can bring fresh fish home.",
  },
  {
    question: "Is alcohol allowed on board?",
    answer:
      "Yes, you are welcome to bring beer or other beverages. However, for safety reasons, hard liquor and glass bottles are strictly prohibited on the boat.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Your safety is the number one priority. Weather cancellations are strictly at the Captain's discretion. If we cannot safely fish due to dangerous weather conditions, we will make every effort to reschedule your trip or refund your deposit.",
  },
  {
    question: "How early do we leave in the morning?",
    answer:
      "Most charters depart between 6:00 and 7:00 AM, depending on the tide and target species. Capt. Jim will confirm your exact departure time the evening before your trip. Early starts put you on the water during the most productive tidal windows.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Deposits are fully refundable if you cancel more than 7 days before your scheduled trip. Cancellations within 7 days are non-refundable unless caused by dangerous weather as determined by the Captain. We always do our best to accommodate rescheduling.",
  },
  {
    question: "Are charters appropriate for kids?",
    answer:
      "Absolutely — especially scalloping trips, which are perfect for children of all ages. Inshore charters are also great for families. Capt. Jim is patient and experienced with younger anglers. Just let us know the ages of your group when you book so we can plan accordingly.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">

        {/* Background image */}
        <Image
          src="/images/tarpon7.jpeg"
          alt="Nature Coast Fishing"
          fill
          className="object-cover object-center -z-20"
          sizes="100vw"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520]/80 to-[#0a1520]/95 -z-10" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[#FA4616] font-bold tracking-widest text-sm uppercase">
            Trip Details
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl leading-relaxed">
            Everything you need to know before you step on the bay boat.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

          {/* ── LEFT: FAQs (8 cols) ── */}
          <article className="lg:col-span-8 space-y-10">

            {faqs.map(({ question, answer }, i) => (
              <div
                key={i}
                className="border-b border-slate-200 pb-10 last:border-0 last:pb-0"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {question}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {answer}
                </p>
              </div>
            ))}

          </article>

          {/* ── RIGHT: Sticky Contact CTA (4 cols) ── */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-6 md:p-8 rounded-[7px] border border-slate-200 shadow-sm space-y-6">

              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-900 mb-3">
                  Still have questions?
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  If you have a specific request or need more details before
                  booking, don&apos;t hesitate to reach out. Capt. Jim
                  personally reviews every inquiry.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/reservations"
                  className="flex items-center justify-center gap-2 w-full text-center bg-[#FA4616] hover:bg-[#d93a0f] text-white py-4 rounded-[7px] font-bold text-sm shadow-md hover:shadow-[#FA4616]/30 transition-all duration-300 group"
                >
                  Check Available Dates
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:+18139174989"
                  className="flex items-center justify-center gap-2 w-full border border-slate-200 hover:border-[#FA4616]/40 text-slate-600 hover:text-[#FA4616] py-3.5 rounded-[7px] font-semibold text-sm transition-all duration-300"
                >
                  <Phone size={14} />
                  Call (813) 917-4989
                </a>

                <a
                  href="mailto:jlemke2@tampabay.rr.com"
                  className="flex items-center justify-center gap-2 w-full border border-slate-200 hover:border-[#FA4616]/40 text-slate-600 hover:text-[#FA4616] py-3.5 rounded-[7px] font-semibold text-sm transition-all duration-300"
                >
                  Send an Email
                </a>
              </div>

              {/* Availability note */}
              <div className="bg-[#FA4616]/5 border border-[#FA4616]/20 rounded-[7px] p-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-[#FA4616]">Prime dates book fast.</span>{" "}
                  Tarpon season (May–July) and summer scalloping weekends
                  typically fill 4–6 months in advance. Book early to secure
                  your preferred window.
                </p>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="bg-[#0d1b2a] py-16 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FA4616] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            Ready to Go?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Charter Today
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Check availability and reserve your dates online — or call Capt.
            Jim directly. He personally handles every booking.
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
