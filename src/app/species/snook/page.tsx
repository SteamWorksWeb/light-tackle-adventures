import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snook Fishing Charters Homosassa | Light Tackle Adventures",
  description:
    "Learn about targeting Snook on the Nature Coast with Capt. Jim Lemke. Book a Homosassa or Crystal River Snook charter today.",
};

export default function SnookPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Snook Fishing on the Nature Coast
        </h1>

        <p>
          Targeting Snook in the pristine waters of Homosassa and Crystal River
          is a world-class inshore experience. These powerful ambush predators
          haunt the mangrove shorelines, oyster bars, and tidal creeks of
          Florida&apos;s Nature Coast, offering heart-pounding strikes on light
          tackle and fly gear alike. Capt. Jim Lemke has spent over 35 years
          learning every structure and tidal movement these fish depend on,
          making him one of the most effective Snook guides on the Gulf Coast.
        </p>

        <h2>Best Times to Catch Snook</h2>
        <p>
          Snook are available year-round on the Nature Coast, but the spring
          and early summer months — April through June — offer the most
          consistent action as fish migrate to beach passes and river mouths
          ahead of their spawn. Fall fishing, after the first cold fronts of
          October, pushes big Snook tight to the mangroves and residential
          dock lights for some of the most visual inshore fishing of the year.
        </p>

        <h2>Tactics and Gear</h2>
        <p>
          When pursuing Snook, we utilize premium light spinning tackle and
          tournament-grade fly gear to ensure the best possible presentation
          and fight. Live whitebait and scaled sardines are the top producers,
          while DOA shrimp and 4-inch jerk baits on light jig heads are deadly
          artificials when baitfish are scarce. On fly, a well-placed EP Minnow
          or a Clouser along a mangrove edge will draw aggressive strikes from
          fish that can exceed 35 inches. Leader strength matters — Snook have
          a razor-sharp gill plate, and we rig accordingly.
        </p>

        <h2>Book a Snook Charter</h2>
        <p>
          Ready to chase trophy Snook on the Nature Coast? Capt. Jim keeps a
          tight schedule and prime dates fill quickly — especially during the
          fall slot season.
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
