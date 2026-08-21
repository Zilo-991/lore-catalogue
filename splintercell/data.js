/* ===== SPLINTER CELL DATA =====
   Six categories matching the wiki's own browsing structure.
   Each item: { id, name, category, tag, blurb }
   category: "characters" | "weapons" | "uniforms" | "pistols" | "equipment" | "gadgets"
*/

const SC_GAMES = [
  { id: "sc1", title: "Splinter Cell", year: "2002", cover: "sc1.png", banner: "sc1.png", logo: "sc1.png",
    blurb: "The mission that introduced Sam Fisher and the Splinter Cell program, establishing stealth, shadow, and deniability as the series' entire language.",
    threat: "A Georgian ultranationalist movement moving to seize a strategic pipeline region, secretly racing toward a nuclear option nobody in Washington believed they actually had.",
    location: "Georgia and the wider Caucasus region", locationDesc: "A Cold War-era conflict everyone assumed was long settled turns out to have just been waiting — pipeline routes, border towns, and cut-off military installations across a region back on the edge of open war." },
  { id: "pandora", title: "Pandora Tomorrow", year: "2004", cover: "pandora.png", banner: "pandora.png", logo: "pandora.png",
    blurb: "A bioterrorism threat in Indonesia pulls Sam into a mission complicated by a former colleague presumed dead — and very much not.",
    threat: "An Indonesian separatist militia backed by a bioterrorism threat serious enough that Third Echelon can't afford to treat it as a regional problem.",
    location: "East Timor and the Indonesian archipelago", locationDesc: "A separatist uprising and a biological weapon nobody can afford to let slip loose, spread across island installations, refugee camps, and the shipping routes tying the region together." },
  { id: "chaos", title: "Chaos Theory", year: "2005", cover: "chaos.png", banner: "chaos.png", logo: "chaos.png",
    blurb: "Widely considered the series' high point, sending Sam through an escalating crisis across Asia that blurs the line between preventing a war and starting one.",
    threat: "A cyberterrorism plot threading through East Asia, tangled up with the kind of information-warfare provocation that's one bad move away from an actual shooting war.",
    location: "East and Southeast Asia", locationDesc: "A sweep from a Japanese cargo ferry to Cold War tensions still simmering under the surface of the region's shipping lanes and shadow economies." },
  { id: "doubleagent", title: "Double Agent", year: "2006", cover: "doubleagent.png", banner: "doubleagent.png", logo: "doubleagent.png",
    blurb: "Sam goes undercover inside a domestic terrorist cell, forced to earn the trust of people he's been sent to bring down.",
    threat: "The JBA — a domestic terrorist cell Sam has to infiltrate and genuinely earn the trust of, blurring exactly who he's supposed to be loyal to by the end.",
    location: "An Iceland prison yard, later American soil", locationDesc: "A cold-open prison infiltration that becomes a foothold inside the JBA's own operations, tracking the cell's reach as it turns toward targets back home." },
  { id: "conviction", title: "Conviction", year: "2010", cover: "conviction.png", banner: "conviction.png", logo: "conviction.png",
    blurb: "A more aggressive, personal Sam Fisher goes off the grid to find out who really killed his daughter — and why Third Echelon lied about it.",
    threat: "A conspiracy inside Third Echelon's own leadership, using Sam's daughter's death as cover for something considerably larger than a single family tragedy.",
    location: "Washington D.C. and beyond", locationDesc: "A string of increasingly personal locations as Sam's search stops being about following orders and starts being about following the truth, wherever inside his own agency it leads." },
  { id: "blacklist", title: "Blacklist", year: "2013", cover: "blacklist.png", banner: "blacklist.png", logo: "blacklist.png",
    blurb: "As the newly formed Fourth Echelon, Sam races against a countdown of escalating attacks threatening to strike U.S. soil one by one.",
    threat: "The Engineers — a militant group carrying out an escalating countdown of attacks on American interests, each one a deadline Fourth Echelon has to beat.",
    location: "A rotating list of global hotspots", locationDesc: "Missions run out of Fourth Echelon's mobile command aircraft, the Paladin, chasing each Blacklist attack to wherever in the world it's about to happen next." },
];

const SC_CATEGORIES = [
  { id: "characters", label: "Characters", desc: "The operatives, handlers, and allies who carry Third and Fourth Echelon's missions." },
  { id: "weapons", label: "Weapons", desc: "Standard-issue firearms and ammunition built for missions that end quietly." },
  { id: "uniforms", label: "Uniforms", desc: "Field suits across Sam Fisher's career, from black-ops infiltration gear to modern deniable-op kits." },
  { id: "pistols", label: "Pistols", desc: "Sidearms carried when the mission calls for something smaller than a rifle." },
  { id: "equipment", label: "Equipment", desc: "Field tools built for getting in, gathering intel, and getting out unseen." },
  { id: "gadgets", label: "Gadgets", desc: "The optics and remote devices that turn a dark room into readable information." },
];

const SC_ITEMS = [
  // ===== CHARACTERS =====
  { id: "sam-fisher", name: "Sam Fisher", category: "characters", tag: "Field Operative",
    blurb: "A veteran Third Echelon field operative and the series' defining figure — ruthless efficiency and dry wit, and a willingness to work in the dark so his country doesn't have to." },
  { id: "grim", name: "Anna \"Grim\" Grimsdóttir", category: "characters", tag: "Mission Control",
    blurb: "Sam's longtime technical analyst and mission control, whose voice in his earpiece is as much a part of every op as his own gear." },
  { id: "lambert", name: "Irving Lambert", category: "characters", tag: "Third Echelon Director",
    blurb: "The director who recruited and ran Sam for years, whose own choices eventually put him on the wrong side of Sam's trust." },
  { id: "coste", name: "Victor Coste", category: "characters", tag: "Former Army Ranger",
    blurb: "A former Army Ranger and one of the few people Sam considers an actual friend, occasionally called in for backup when a solo op stops being an option." },
  { id: "sarah-fisher", name: "Sarah Fisher", category: "characters", tag: "Sam's Daughter",
    blurb: "Sam's daughter, whose safety becomes a recurring pressure point the series uses to humanize a man who spends his life in the shadows." },
  { id: "briggs", name: "Isaac Briggs", category: "characters", tag: "Fourth Echelon Agent",
    blurb: "A Fourth Echelon field agent working alongside Sam in the series' later era, bringing a different generation's approach to the same dark work." },

  // ===== WEAPONS =====
  { id: "sc-20k", name: "SC-20K", category: "weapons", tag: "Standard-Issue Rifle",
    blurb: "The standard-issue rifle of Sam's field kit, modular enough to reconfigure for nearly any mission profile." },
  { id: "sc-pistol", name: "SC Pistol", category: "weapons", tag: "Suppressed Sidearm",
    blurb: "A suppressed sidearm built for quiet takedowns rather than firefights, prioritizing precision over stopping power." },
     { id: "karambit", name: "Karambit", category: "weapons", tag: "Fixed Curved Knife",
    blurb: "A blade that designed with a quick-draw, is versatile, and deadly with cuts that cause deep gashes and wounds." },
  { id: "sticky-shocker", name: "Sticky Shocker", category: "weapons", tag: "Non-Lethal Round",
    blurb: "A non-lethal projectile round that clings to a target and delivers an incapacitating shock, standard for missions that call for silence over kills." },
  { id: "airfoil-round", name: "Airfoil Round", category: "weapons", tag: "Subsonic Sniper Round",
    blurb: "A subsonic sniper round designed to travel with almost no sound signature, built for eliminating a target before anyone even knows a shot was fired." },

  // ===== UNIFORMS =====
  { id: "infiltration-suit", name: "Third Echelon Infiltration Suit", category: "uniforms", tag: "Early-Career Gear",
    blurb: "The iconic black tactical suit associated with Sam's early career, built for thermal and night-vision concealment as much as protection." },
  { id: "wetsuit", name: "Chaos Theory Wetsuit", category: "uniforms", tag: "Amphibious Variant",
    blurb: "An amphibious variant of Sam's field gear, built for missions that start underwater and end somewhere considerably more dangerous." },
  { id: "mercenary-gear", name: "Four-Eyed Mercenary Gear", category: "uniforms", tag: "Off-the-Books Kit",
    blurb: "A rugged, exposed-tech variant of field armor used during Sam's off-the-books mercenary period." },
  { id: "echelon", name: "Fourth Echelon Field Suit", category: "uniforms", tag: "Modern Infiltration Kit",
    blurb: "A lighter, more modern infiltration outfit reflecting the agency's shift toward smaller, faster, deniable teams." },

  // ===== PISTOLS =====
  { id: "five-seven", name: "Five-seveN", category: "pistols", tag: "High-Capacity Sidearm",
    blurb: "A lightweight, high-capacity sidearm favored for its low recoil and reliability in close-quarters work." },
  { id: "sc-pistol-suppressed", name: "SC Pistol (Suppressed)", category: "pistols", tag: "Signature Sidearm",
    blurb: "The signature quiet sidearm of Sam's early operations, built around one priority: nobody hears it." },
  { id: "mp-446", name: "MP-446", category: "pistols", tag: "Service Pistol",
    blurb: "A rugged service pistol occasionally carried when the mission calls for more stopping power than stealth." },
  { id: "deagle", name: "Desert Eagle", category: "pistols", tag: "Heavy Sidearm",
    blurb: "A heavy sidearm carried less for subtlety than for the rare moments when subtlety has already failed." },

  // ===== EQUIPMENT =====
  { id: "opsat", name: "OPSAT", category: "equipment", tag: "Tactical Computer",
    blurb: "A wrist-mounted tactical computer used for mission data, communications, and hacking on the move." },
  { id: "grapple-rope", name: "Grappling Hook / Rope", category: "equipment", tag: "Vertical Access",
    blurb: "Climbing gear that turns vertical spaces most guards never think to watch into a way through a facility." },
  { id: "emp-device", name: "EMP Device", category: "equipment", tag: "Electronic Countermeasure",
    blurb: "A tool for disabling electronic security systems and cameras from a distance without tripping a physical alarm." },
  { id: "medkit", name: "Field Resupply Kit", category: "equipment", tag: "Field Resupply",
    blurb: "Basic medical and ammunition resupply gear carried to keep an operation running when nothing has gone according to plan." },

  // ===== GADGETS =====
  { id: "nv-goggles", name: "Night Vision Goggles", category: "gadgets", tag: "Optics",
    blurb: "The iconic triple-lens green optics that have become as much a symbol of the series as Sam himself." },
  { id: "thermal-vision", name: "Thermal Vision", category: "gadgets", tag: "Optics",
    blurb: "Optics that reveal heat signatures through walls and smoke, turning a dark room into readable information." },
  { id: "sticky-camera", name: "Sticky Camera", category: "gadgets", tag: "Remote Recon",
    blurb: "A small adhesive camera and listening device that can be fired onto a wall or ceiling to scout a room remotely." },
  { id: "optic-cable", name: "Optic Cable", category: "gadgets", tag: "Remote Recon",
    blurb: "A fiber-optic camera that slides under doors, letting an operative see a room's layout before ever stepping inside it." },
];