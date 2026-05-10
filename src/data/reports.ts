export interface Report {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

// Rotating image pool — assign visually relevant images to each report
const imgs = [
  "/images/tarpon7.jpeg",
  "/images/hero-red.jpg",
  "/images/fly-header.jpeg",
  "/images/tarpon-1.jpeg",
  "/images/fly1.jpeg",
  "/images/scallop1.jpeg",
  "/images/tarpon-2.jpeg",
  "/images/fly2.jpeg",
  "/images/tarpon-5.jpeg",
  "/images/hero-tarpon.jpeg",
];

export const reports: Report[] = [
  {
    slug: "tampa-bay-flats-fishing-with-light-tackle-adventures",
    title: "Tampa Bay Flats Fishing with Light Tackle Adventures!",
    excerpt:
      "Tampa Bay's Flats are renowned as the World's best inshore fishing — and Capt. Jim knows every inch of them.",
    content:
      "Tampa Bay's Flats are, topographically, a gently sloping road to the ocean's depths. The region's shallow Continental Shelf is dotted with sandbars and deep silky pockets where fish school for protection. Often, low tide reveals miles of silt bottom sea floor. Captain Jim Lemke has mapped the subtle nuances of Tampa's shallow coast like an oceanic cartographer — he knows where to reel in the region's best offerings. With his guidance, expect to catch Seatrout, Redfish, Snook, and Tarpon.\n\nThere's no bond with nature like floating atop the region's shallow waters and feeling a Snook, Redfish or Tarpon struggle on the line. Captain Lemke and his crew will guide you on an unforgettable journey through the Tampa Bay Flats. He possesses over 20 years of experience reaping fish from these calm waters. Fear not seasickness — Tampa Bay's waters are as gentle as a lake.\n\nLight Tackle Adventures' charters are embarked on shallow draft boats. Shallow draft hulls allow anglers to penetrate the region's skinny waters. \"We pole the boat with the motor up as it is literally too shallow to power the boat into. Poling is the ultimate way to spot and stalk fish on the flats,\" states Captain Lemke.",
    image: imgs[0],
  },
  {
    slug: "overview-tampa-fishing",
    title: "Overview: Tampa Fishing",
    excerpt:
      "Tampa is renowned for premier Tarpon fishing, world-class inshore angling, and one of the largest saltwater estuaries on the planet.",
    content:
      "Tampa is renowned for energetic nightlife, unadulterated mangrove, and premier Tarpon fishing. Migrating schools of Tarpon may be reeled in from Tampa's shores, along bridges, or atop the artificial reef.\n\nTampa's artificial reefs make for a superb fishing experience. According to the Environmental Protection Commission, fifty-thousand tons of material has been submerged in the Gulf Coast since 1986. These artificial reefs promote biodiversity and enhance local fishing. Whether fishing from a dock, the shore, or atop a reef, Tampa is bound to please all fishermen.\n\nFlorida's Gulf Coast waters are a complex system of currents. The Caribbean and Antilles current converge along Florida's West Coast, making their way to the Atlantic. It's Tampa's deep offshore waters that relinquish the heftiest Red Snapper, Permit, and Sailfish. Tarpon are revered for their fighting spirit and aerial displays — a braided line and heavy hook are required to reel one in. Tampa Bay is one of the largest saltwater estuaries in the world, home to Redfish, Trout, Snook, Tarpon, Sheepshead, Cobia, several species of sharks, and many other species.",
    image: imgs[1],
  },
  {
    slug: "tampa-tarpon-fishing",
    title: "Tampa Tarpon Fishing",
    excerpt:
      "Florida's Tampa Bay is known for the big catch — and chief among the Gulf's offerings is the Silver King: Tarpon.",
    content:
      "Florida's Tampa Bay is known for the big catch. Local anglers reel in some of the ocean's most sought-after fish, and chief among the Gulf's boon is Tarpon. Tampa locals refer to the Tarpon as the Silver King due to its silver hue and girth. This fish is a hard-fightin' catch, revered for its aerial displays. Many a fish tale is told of the Tarpon's antics on the line.\n\nJuvenile Tarpon are easily retrieved with light tackle along Tampa Bay. Fort De Soto, a county park and historical site, is the region's premier inshore Tarpon fishing excursion. The park consists of pristine islands and covers over 1,100 square acres.\n\nTampa's offshore Tarpon can exceed 280 pounds and 7 feet in length. A fish of this size can be challenging to reel in — two-hundred-and-eighty pounds of fish exerts a tremendous amount of resistance on a fishing rig. But there is no reward quite like catching one of Florida's Tarpon, the sun and blue waters making for an unforgettable experience.\n\nWhile fishing for Tampa's Tarpon, it's important to use the correct tackle. Heavy tackle is best for both the angler and the Tarpon — it reduces exhaustion and aids the fish in avoiding predators after release.",
    image: imgs[2],
  },
  {
    slug: "saltwater-fly-fishing-tampa",
    title: "Saltwater Fly Fishing Tampa",
    excerpt:
      "Fly fishermen will find paradise wading the bay's shallow waters. Spanish Mackerel, Snook, Redfish, and more await.",
    content:
      "Tampa is the Emerald Coast's most understated city. Ecologically, Tampa is renowned for the artificial reef, diversity of fauna, and white sand beaches. Fly fishermen will find a paradise while wading the bay's shallow waters. Tampa Bay is relatively shallow, not exceeding 12 feet in depth — the perfect shoreline for wading with a fly rod.\n\nA favorite pastime among Tampa locals is saltwater fly fishing, especially inshore along the bay. Spanish Mackerel, or \"Spannies\" in local vernacular, are abundant in the bay's serene waters. De Soto Park is an exemplary location for reeling in Mackerel on a fly rod — the barrier island possesses 1,136 acres of mangrove, white sand beaches, and a pier claimed to be Florida's longest recreational fishing deck.\n\nWith the right fly and a well-executed cast, Mackerel leap from Tampa's waters. Anglers may want to invest in a fine wire tippet; Spannies possess barracuda-like teeth and can bite through monofilament with ease.\n\nThere's more than Mackerel beneath Tampa's waters. A plethora of species call the bay home: Pompano, Drum, Red Grouper, Amberjack, Snook, Sea Trout, and Redfish. Many of these fish are caught with more affordable equipment and even homemade lures — which is part of the beauty of this fishery.",
    image: imgs[3],
  },
  {
    slug: "fall-fishing-tampa-bay",
    title: "Fall Fishing Tampa Bay",
    excerpt:
      "Cold fronts rolling in, Kingfish in full swing, and the inshore bite absolutely fired up — fall is prime time on Tampa Bay.",
    content:
      "Fall Fishing Tampa Bay — with the cold fronts starting to roll in and the Kingfish run in full swing, the dropping air and water temps have the bite fired up inshore and offshore. The dropping temps down to the mid to upper 70s at night will have this cold front pushing fish hard.\n\nSnook: The Snook fishing is on fire with these cooler temps. We have been finding them around and up the major rivers, creeks, and residential docks. A ton of smaller Snook along with some over-slot fish mixed in. The best bait is still a scaled sardine or whitebait, with a white 4-inch jerk bait coming in second.\n\nRedfish: The Redfishing is just starting to get better on the flats. Look for mullet schools in 1 to 3 feet of water and use your trolling motor to get into position. The best baits are live sardines or pinfish; for artificials, jerk baits or paddle tail jigs.\n\nMackerel and Kingfish: Fall always means big schools of Kingfish and Mackerel in the bay and off the beaches — some of the best fun fishing around. I use a 2x long-shanked hook in a 3/0 with a short piece of 60 or 80-pound fluorocarbon leader. Popular methods include live baiting with Shad, Ladyfish, or Blue Runners, and slow-trolling a Mackerel for a smoker-quality Kingfish.",
    image: imgs[4],
  },
  {
    slug: "spring-snook-kingfish-st-petersburg",
    title: "Spring Snook and Kingfish in St Petersburg",
    excerpt:
      "With water temps on the rise in St Petersburg, the Snook bite is on fire and the Kingfish run is cranking up along the beaches.",
    content:
      "With the last of the cold fronts rolling in this week to the St Petersburg area, it also means the water temps are on the rise to the mid-to-low 70s — and that has the bite fired up inshore and nearshore.\n\nSnook: The spring Snook fishing is on fire with these warmer air temps. We have been finding them around and up the major river mouths, the mouths of creeks, and residential docks. A lot of smaller Snook along with some over-slot fish mixed in. The best bait is still a scaled sardine or whitebait, with a white 4-inch jerk bait on a 1/8oz jig head coming in second.\n\nKingfish: The spring Kingfish run is getting cranked up along the St Petersburg area beaches. I like St Pete and Clearwater because they have a large hard bottom — and the long shipping channel is key too. What they all have in common is they hold large amounts of bait fish. The top approach is live baiting with sardines in a chum line, or trolling hardware like big spoons or plugs at different depths and speeds.\n\nMackerel: Spring always brings big schools of Mackerel in the bay and off the beaches. I use a 2x long-shanked hook in a 3/0 with a short piece of 60 or 80-pound fluorocarbon leader. These fish are some of the most fun you can have on light tackle.",
    image: imgs[5],
  },
  {
    slug: "spring-like-fishing-clearwater-beach",
    title: "Spring Like Fishing in Clearwater Beach",
    excerpt:
      "With spring-like temps and bait moving onto the flats, Clearwater Beach is fishing like a dream — Trout, Snook, and Redfish all in play.",
    content:
      "Spring like fishing in Clearwater Beach — with the spring-like air temperatures still hanging in the 60s at night and the upper 70s during the day, you want to look for the warmer windows to fish: the last of the outgoing tide, the first few hours of the incoming, or mid-morning and later in the afternoon.\n\nWith the water temperature hanging around the upper 60s to low 70s during mid-day, I would first fish the reefs in the morning for Sheepshead, Snapper, and a variety of other species. I'll also put out a flat line for Mackerel and maybe a shark.\n\nAs you move up to the flats of Clearwater Beach this month, you'll find a lot of fry bait and nice sardines — and that means the fish are moving up on the flats to feed. In 2 to 5 feet of water you'll find Trout feeding; as you move into that 3-foot range and up toward the mangroves, you'll find Snook and Redfish. In the springtime, I like the outgoing tide to about halfway up the incoming — that's when the water temperature is warmest and the fish are most active.",
    image: imgs[6],
  },
  {
    slug: "winter-tampa-bay-inshore-tactics",
    title: "Winter Tampa Bay Inshore Tactics",
    excerpt:
      "Between cold fronts, with water temps in the upper 70s, the Snook and Redfish bite is surprisingly great. Here's how to capitalize.",
    content:
      "Winter Tampa Bay Inshore Tactics — with the warmer air temperature still in the upper 70s to low 80s during the day in between the cold fronts, you might want to look around the bay area reefs and bay area flats. When the water starts warming up in the middle of the day the Snook start biting — and don't forget the dock lights and bay area bridges at night for great fishing with this warm weather.\n\nWith the water temperature still hanging around the 68-degree mark during mid-day, I would first fish the reefs in the morning for Sheepshead and Mango Snapper. The bite has been great in the morning when the sun gets up a little. As the water warms up, nice Trout and Redfish are moving around the flats. As the sun gets higher in the sky, I start heading to bay area creeks and flats looking for Snook near the Skyway or up the bay by the Gandy Bridge area.\n\nIn the late afternoon and evenings, I like to fish the mangrove shorelines with jerk baits and suspending baits. As it gets darker, I start looking around the dock lights for Trout, Snook, and even a resident baby Tarpon in some areas. No matter when you can get out there, there is always great fishing in the Tampa Bay area — and the best part is you can use your flats rods to do it all.",
    image: imgs[7],
  },
  {
    slug: "fall-tampa-bay-fishing",
    title: "Fall Tampa Bay Fishing",
    excerpt:
      "Cold fronts are rolling in, water temps are dropping to the mid-70s, and the Tampa Bay bite is absolutely fired up inshore and offshore.",
    content:
      "Fall Tampa Bay — we are starting to see some cold fronts rolling in, dropping water temps down to the mid-to-low 70s. The bite is fired up inshore and offshore fishing right now, and with the holidays around the corner and the weather looking good, it's time to get out and enjoy Tampa Bay fishing.\n\nThe Tampa Bay area reefs and wrecks are holding a lot of Sheepshead, Mango Snapper, and some keeper Grouper this time of year. When you are bottom fishing these places I like fishing the slower tide so I can use the smallest weight possible to get to the bottom.\n\nSnook: The Snook fishing is on fire with these cooler temps. We have been finding them around and up the major rivers, creeks, and residential docks — a ton of smaller Snook along with some over-slot fish mixed in. Best bait is still a scaled sardine or whitebait, with a white 4-inch jerk bait coming in second.\n\nRedfish: The Redfishing is just starting to get better on the flats. Look for mullet schools in 1 to 3 feet of water and get into position with your trolling motor. Best baits: live sardines or pinfish, or jerk baits and paddle tail jigs for artificials.\n\nMackerel: Fall always means big schools of Mackerel in the bay and off the beaches — some of the best fun fishing around, for kids and adults alike.",
    image: imgs[8],
  },
  {
    slug: "tampa-spring-snook-fishing",
    title: "Tampa Spring Snook Fishing is On",
    excerpt:
      "Tampa spring Snook fishing has been off the hook off the mangrove shorelines — April is living up to its reputation as one of our best months.",
    content:
      "Tampa spring Snook fishing has been off the hook off the mangrove shorelines around the Tampa Bay area. April is typically one of our very best months for flats fishing and so far it has lived up to my expectations. The Snook, Redfish, and Trout fishing has all been on fire.\n\nSnook fishing has been great overall with many small to giant over-slot fish. I have been pleasantly surprised by the number of big trophy Snook we have been catching. The last few years were okay, but this year I have boated more trophy Snook than in years past. We have been averaging around 12 Snook per day, including a few over-slot fish per trip.\n\nRedfish have also been doing very well. On most days I've been getting plenty of Reds mixed in with the mullet schools. Most have been in the 18 to 27-inch class with a handful over 30 inches. On the lower tide days, the larger 30-plus-inch Reds have been showing up consistently.\n\nTrout fishing has also been really great — a lot of big Gator Trout, ranging from 16 to 25 inches with some just under 30. This is the time of year when Snook and Tarpon start their migration to the beaches and passes. If you have a livewell, go catch bait, head to your area of choice, and throw a handful out to see if fish start popping the bait. It's that simple right now.",
    image: imgs[9],
  },
];
