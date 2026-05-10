import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permit Fishing Charters Homosassa | Light Tackle Adventures",
  description:
    "Target elusive Permit on the Nature Coast flats with Capt. Jim Lemke. One of the most challenging and rewarding saltwater fish to catch on the fly.",
};

export default function PermitPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Permit Fishing on the Nature Coast
        </h1>

        <p>
          Targeting Permit in the pristine waters of Homosassa and Crystal
          River is the ultimate challenge for serious inshore and fly anglers.
          Permit are notoriously selective feeders — highly attuned to their
          environment and quick to spook — making a successful catch one of
          the most celebrated achievements in saltwater fishing. The
          Nature Coast&apos;s clear, shallow flats offer sight-fishing
          opportunities to tailing and cruising Permit that test every
          aspect of an angler&apos;s skill set, from the cast to the
          presentation to the hookset.
        </p>

        <h2>Best Times to Catch Permit</h2>
        <p>
          Permit are present on the Nature Coast throughout the warmer months,
          with the most consistent encounters occurring from April through
          October as fish move onto the shallow flats to feed on crabs and
          crustaceans during incoming and outgoing tidal cycles. Spring
          and early summer, when the water first warms and baitfish are
          plentiful, can produce outstanding numbers of sightable fish.
        </p>

        <h2>Tactics and Gear</h2>
        <p>
          When pursuing Permit, we utilize premium light spinning tackle and
          tournament-grade fly gear to ensure the best possible presentation
          and fight. Live crabs — blue crabs and sand fleas in particular —
          are the most reliable natural bait, presented with minimal weight
          to allow a slow, natural sink directly into a fish&apos;s feeding
          zone. On fly, a well-tied Merkin crab or EP Spawning Shrimp cast
          ahead of a tailing Permit on a 9-weight system is as difficult and
          rewarding as any fishing on earth. Patience and precise casting are
          the defining skills.
        </p>

        <h2>Book a Permit Charter</h2>
        <p>
          Chasing Permit on the fly is a bucket-list pursuit. Capt. Jim
          knows the flats and the fish — let him put you in position for
          a shot at one of saltwater&apos;s most coveted catches.
        </p>
        <Link
          href="/reservations"
          className="inline-block bg-[#FA4616] text-white font-bold px-6 py-3 rounded-[7px] no-underline hover:bg-[#d93a0f] transition-colors"
        >
          Check Available Dates →
        </Link>
      </div>
    </div>
  );
}
