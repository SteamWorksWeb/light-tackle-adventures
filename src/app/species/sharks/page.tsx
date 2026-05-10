import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shark Fishing Charters Homosassa | Light Tackle Adventures",
  description:
    "Target Bull Sharks, Blacktip Sharks, and Nurse Sharks on the Nature Coast with Capt. Jim Lemke. Homosassa shark fishing charters.",
};

export default function SharksPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Shark Fishing on the Nature Coast
        </h1>

        <p>
          Targeting Sharks in the warm Gulf waters off Homosassa and Crystal
          River delivers an unmatched adrenaline rush for anglers looking for
          raw power on the end of a line. The Nature Coast is home to a
          diverse array of shark species, including Bull Sharks, Blacktip
          Sharks, Spinner Sharks, and the occasional Hammerhead, all of which
          can be encountered on the flats and nearshore structure throughout
          the year. Shark fishing with Capt. Jim is a high-energy experience
          that is particularly popular with groups and younger anglers looking
          for non-stop action.
        </p>

        <h2>Best Times to Catch Sharks</h2>
        <p>
          Shark fishing on the Nature Coast is productive year-round, but the
          spring and summer months — April through September — see the largest
          concentrations of Blacktip, Spinner, and Bull Sharks patrolling the
          shallow flats and beach passes as water temperatures climb into the
          upper 70s and 80s. During this period, sharks are highly visible and
          can often be sight-cast to in the same way as any other flats species.
        </p>

        <h2>Tactics and Gear</h2>
        <p>
          When pursuing Sharks, we utilize heavy-action spinning tackle and
          stout wire or heavy fluorocarbon leaders to withstand the abrasion
          of a shark&apos;s rough skin. Cut Ladyfish, Bonita, and Mullet are
          the go-to natural baits, presented on the bottom or suspended
          beneath a large float in areas with current. Chumming with ground
          fish or using a chum bag near a channel edge is a highly effective
          method for drawing multiple sharks into casting range and creating
          a sustained feeding frenzy that makes for an exciting and memorable
          charter for the whole group.
        </p>

        <h2>Book a Shark Charter</h2>
        <p>
          Shark fishing is one of the most exhilarating experiences available
          on the water. All sharks are released, making it a sustainable and
          repeatable adventure.
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
