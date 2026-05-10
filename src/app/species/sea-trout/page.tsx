import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sea Trout Fishing Charters Homosassa | Light Tackle Adventures",
  description:
    "Target trophy Gator Trout on the Nature Coast grass flats with Capt. Jim Lemke. Homosassa and Crystal River Sea Trout charters.",
};

export default function SeaTroutPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Sea Trout Fishing on the Nature Coast
        </h1>

        <p>
          Targeting Spotted Sea Trout — locally called Speckled Trout or
          Specks — in the pristine grass flats of Homosassa and Crystal River
          is a year-round staple of Nature Coast inshore fishing. The seagrass
          meadows off the Gulf Coast of Citrus County are among the most
          productive Trout habitats in Florida, supporting large populations
          of slot-size fish alongside occasional trophy &ldquo;Gator Trout&rdquo;
          pushing 30 inches or more. These hard-fighting fish are accessible
          to anglers of all skill levels and make for outstanding table fare.
        </p>

        <h2>Best Times to Catch Sea Trout</h2>
        <p>
          Sea Trout are available every month of the year on the Nature Coast,
          with winter and spring producing the most consistent numbers of larger
          fish. During the cooler months, Trout stack up in deeper grass pockets
          and channel edges; as the water warms in spring, they spread across
          the shallow flats and become highly catchable on topwater lures
          during the early morning hours.
        </p>

        <h2>Tactics and Gear</h2>
        <p>
          When pursuing Sea Trout, we utilize premium light spinning tackle
          and tournament-grade fly gear to ensure the best possible presentation
          and fight. Live shrimp under a popping cork is the most reliable
          producer across all conditions, while paddle tail jigs in natural
          colors and topwater walk-the-dog plugs produce explosive strikes in
          shallow water during low-light periods. On fly, a slow-sinking
          Clouser or a EP Shrimp pattern worked through a grass flat at
          first light is a highly effective and enjoyable approach to this
          abundant species.
        </p>

        <h2>Book a Sea Trout Charter</h2>
        <p>
          Sea Trout charters are ideal for families and first-time anglers.
          Fast action, light gear, and a beautiful environment make for a
          memorable day on the water.
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
