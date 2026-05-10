import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarpon Fishing Charters Homosassa | Light Tackle Adventures",
  description:
    "Book a world-class Homosassa Tarpon charter with Capt. Jim Lemke. The Silver King migrates through the Nature Coast May through July.",
};

export default function TarponPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">

        <h1>Tarpon Fishing on the Nature Coast</h1>

        <p>
          Targeting Tarpon in the pristine waters of Homosassa and Crystal River
          is widely regarded as one of the greatest angling experiences on
          earth. Homosassa holds a legendary status among serious Tarpon anglers
          — the crystal-clear spring-fed water allows sight fishing to schools
          of 100- to 200-pound Silver Kings in as little as 3 feet of water.
        </p>
        <p>
          Capt. Jim Lemke has guided clients to Homosassa Tarpon for decades
          and knows the fish&apos;s patterns, daisy chains, and preferred tidal
          windows intimately.
        </p>

        <h2>Best Times to Catch Tarpon</h2>
        <p>
          The Homosassa Tarpon season runs from mid-April through July, with
          the peak migration pushing through in May and June.
        </p>
        <p>
          During this window, large schools of migratory Tarpon stack up on the
          flats offshore of Homosassa in predictable patterns, offering anglers
          multiple shots per morning on calm, clear days.
        </p>

        <h2>Tactics and Gear</h2>
        <p>
          When pursuing Tarpon, we utilize premium heavy-action spinning and
          conventional tackle rigged with circle hooks in compliance with
          Florida regulations — treble hooks are prohibited for Tarpon. Live
          crabs, threadfin herring, and large scaled sardines are the top
          natural baits.
        </p>
        <p>
          On fly, large Tarpon patterns like the EP Tarpon Toad or a Puglisi
          Crab presented accurately to a rolling school on a 12-weight system
          is the pinnacle of the sport. We practice strict catch-and-release
          for all Tarpon.
        </p>

        <h2>Book a Tarpon Charter</h2>
        <p>
          Homosassa Tarpon season is one of the most in-demand fisheries in
          Florida. Capt. Jim&apos;s dates book out months in advance — reserve
          your spot early.
        </p>

        <div className="not-prose mt-8">
          <Link
            href="/reservations"
            className="inline-block bg-[#FA4616] text-white font-bold px-6 py-3 rounded-[7px] hover:bg-[#d93a0f] transition-colors"
          >
            Check Available Dates →
          </Link>
        </div>

      </div>
    </div>
  );
}
