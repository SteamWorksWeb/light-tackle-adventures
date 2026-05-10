import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scallop Charters Homosassa | Light Tackle Adventures",
  description:
    "Book a family-friendly scalloping charter in the crystal-clear waters of Homosassa and Crystal River with Capt. Jim Lemke. All gear provided.",
};

export default function ScallopsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">

        <h1>Scalloping on the Nature Coast</h1>

        <p>
          Scalloping in the pristine, spring-fed waters of Homosassa and
          Crystal River is one of Florida&apos;s most beloved summertime
          traditions — and the Nature Coast is the epicenter of it. The
          Gulf&apos;s bay scallops thrive in the lush seagrass beds of Citrus
          and Levy Counties, making this one of the most productive and enjoyable
          harvest fisheries in the state.
        </p>
        <p>
          Capt. Jim&apos;s scalloping charters are the perfect family adventure
          — no fishing experience required, just enthusiasm and a willingness
          to get wet.
        </p>

        <h2>Best Time for Scalloping</h2>
        <p>
          The Florida Bay Scallop season on the Nature Coast runs from July 1
          through September 24, during which time families can legally harvest
          scallops by hand while snorkeling in designated state waters.
        </p>
        <p>
          Weekends during peak season fill extremely fast, so early booking is
          strongly advised. The clearest water and most abundant scallop
          concentrations are typically found in late July and early August.
        </p>

        <h2>What to Expect</h2>
        <p>
          On a scalloping charter with Capt. Jim, everything is provided —
          snorkeling masks, fins, mesh harvest bags, and coolers to store your
          catch. We locate the best grass beds based on current conditions,
          anchor the boat, and everyone goes in the water together.
        </p>
        <p>
          Scallops are found resting on and just above the seagrass bottom in
          3 to 8 feet of crystal-clear water, making them easy to spot and fun
          to collect. At the end of the trip, Capt. Jim can clean and shuck
          your scallops dockside so you leave with a cooler full of fresh, sweet
          bay scallop meat. Florida regulations allow 2 gallons of whole
          scallops or 1 pint of meat per person.
        </p>

        <h2>Book a Scalloping Charter</h2>
        <p>
          Summer scalloping weekends book out months in advance. Reserve your
          family&apos;s spot with Capt. Jim today and secure your place on
          the water.
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
