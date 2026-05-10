import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redfish Fishing Charters Homosassa | Light Tackle Adventures",
  description:
    "Target tailing and schooling Redfish on the Nature Coast flats with Capt. Jim Lemke. Homosassa and Crystal River Redfish charters.",
};

export default function RedfishPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">

        <h1>Redfish Fishing on the Nature Coast</h1>

        <p>
          Targeting Redfish in the pristine waters of Homosassa and Crystal
          River delivers some of the most exciting and visual inshore fishing
          available anywhere in Florida. The Nature Coast&apos;s expansive
          shallow grass flats, oyster bars, and backwater creeks support
          enormous Redfish populations.
        </p>
        <p>
          The gin-clear water makes sight-casting to tailing fish a realistic,
          adrenaline-charged pursuit. Capt. Jim Lemke specializes in locating
          and presenting to Redfish in water so shallow the boat must be poled
          by hand.
        </p>

        <h2>Best Times to Catch Redfish</h2>
        <p>
          Redfish are available year-round on the Nature Coast, but fall is
          widely considered the prime season. September through December brings
          large schools of bull Reds to the flats, and the cooling water
          temperatures make the fish highly aggressive on both natural baits
          and artificials.
        </p>
        <p>
          Summer offers excellent sight-fishing opportunities to smaller slot
          fish on the grass flats during early morning low tides.
        </p>

        <h2>Tactics and Gear</h2>
        <p>
          When pursuing Redfish, we utilize premium light spinning tackle and
          tournament-grade fly gear to ensure the best possible presentation
          and fight. Live pinfish, cut mullet, and live shrimp are the most
          reliable natural baits, while gold spoons, paddle tail jigs, and
          weedless soft plastics are highly effective artificials.
        </p>
        <p>
          On fly, a properly presented crab or shrimp pattern dropped just
          ahead of a tailing Red in two feet of water is one of the most
          satisfying moments in inshore fishing.
        </p>

        <h2>Book a Redfish Charter</h2>
        <p>
          Whether you want to sight-fish tailing Reds or target large schools
          in the fall, Capt. Jim can put you on the fish. Book your Nature
          Coast Redfish charter today.
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
