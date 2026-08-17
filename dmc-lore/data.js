/* ===== DEVIL MAY CRY DATA =====
   Single source of truth for the games hub, per-game pages
   (game.html?id=), and character background pages (character.html?id=).
   character.role: "Protagonist" | "Antagonist"
   character.rank: a flavor "style rank" (D/C/B/A/S/SSS), matching the
   series' own combat-scoring letter grades.
   game.weapons: iconic weapons featured in that entry.
*/

const DMC_GAMES = [
  { id: "dmc1", title: "Devil May Cry", year: "2001", cover: "dmc1.jpg", banner: "dmc1.jpg",
    weapons: [
      { name: "Rebellion", desc: "Dante's signature demonic longsword, inherited from his father and rarely far from his hand in any appearance since." },
      { name: "Alastor", desc: "A lightning-charged sword that lets Dante move and strike with unnatural speed." },
      { name: "Ifrit", desc: "A pair of fire-wreathed gauntlets and greaves built for close, brutal punches and kicks." },
      { name: "Ebony & Ivory", desc: "Dante's matched pair of custom handguns, fired akimbo and rarely holstered for long." },
    ],
    conflict: "A devil hunter follows an invitation baited with his dead mother's memory to an island fortress, only to find it's a trap set by the demon king responsible for her death — and his father's oldest enemy." },
  { id: "dmc2", title: "Devil May Cry 2", year: "2003", cover: "dmc2.jpg", banner: "dmc2.jpg",
    weapons: [
      { name: "Rebellion", desc: "Carried over as Dante's default blade, dependable no matter how strange the job gets." },
      { name: "Vendetta", desc: "A curved katana-style blade favored for quick, precise strikes over brute force." },
      { name: "Artemis", desc: "A demonic staff-rifle hybrid channeling ranged energy blasts at a distance." },
      { name: "Luce & Ombra", desc: "A refined pair of sidearms standing in for Dante's usual Ebony & Ivory this time out." },
      { name: "Ebony & Ivory", desc: "Dante's matched pair of custom handguns, fired akimbo and rarely holstered for long." },
    ],
    conflict: "A routine job for a devil hunter turns into a citywide conspiracy once it's clear a business magnate has already fused himself with demonic power, and is hunting the last piece he needs to finish the job." },
  { id: "dmc3", title: "Devil May Cry 3: Dante's Awakening", year: "2005", cover: "dmc3.jpg", banner: "dmc3.jpg",
    weapons: [
      { name: "Rebellion", desc: "Dante's core blade, now available in multiple distinct stylish combat forms." },
      { name: "Yamato", desc: "Vergil's katana, sharp enough to cut clean through the barrier between the human and demon worlds." },
      { name: "Cerberus", desc: "A three-sectioned bo staff infused with ice, as much a whip as it is a weapon." },
      { name: "Agni & Rudra", desc: "A pair of living twin blades, one wind and one fire, that talk back when they don't approve of how they're being used." },
      { name: "Ebony & Ivory", desc: "Dante's matched pair of custom handguns, fired akimbo and rarely holstered for long." },
    ],
    conflict: "A younger, brasher devil hunter is drawn back into his estranged twin brother's orbit just as that brother raises an ancient tower meant to tear the demon world open — convinced that power is the only thing that ever mattered between them." },
  { id: "dmc4", title: "Devil May Cry 4", year: "2008", cover: "dmc4.jpg", banner: "dmc4.jpg",
    weapons: [
      { name: "Red Queen", desc: "Nero's revved-up broadsword, its Exceed system letting him supercharge every swing mid-combo." },
      { name: "Blue Rose", desc: "Nero's double-barreled revolver, powerful enough to hold and release charged shots for extra punch." },
      { name: "Devil Bringer", desc: "Nero's demonic right arm, letting him grab and yank enemies into close range with brutal ease." },
      { name: "Pandora", desc: "Dante's shapeshifting demonic case, able to reconfigure into nearly any weapon it's asked to become." },
      { name: "Ebony & Ivory", desc: "Dante's matched pair of custom handguns, fired akimbo and rarely holstered for long." },
    ],
    conflict: "A young knight's ceremonial duty turns into a manhunt the moment a demonic power awakens in his own right arm, right as the holy order he's sworn to starts revealing exactly how far it's willing to go for its own ends." },
  { id: "dmc-reboot", title: "DmC: Devil May Cry", year: "2013", cover: "dmc-reboot.jpg", banner: "dmc-reboot.jpg",
    weapons: [
      { name: "Rebellion", desc: "Reimagined here as a broad, angel-forged greatsword rather than Dante's usual rapier-quick blade." },
      { name: "Arbiter", desc: "A brutal angelic axe favored for its raw, armor-breaking power." },
      { name: "Ebony & Ivory", desc: "Dante's signature sidearms, carried over even into this reimagined take on him." },
      { name: "Osiris", desc: "A demonic scythe capable of pulling both Dante and his enemies through reality itself." },
    ],
    conflict: "A drifter living off the grid discovers his own demonic heritage the moment his estranged twin brother tracks him down, dragging him into a fight against a media-and-political empire that's been quietly running humanity for a very long time." },
  { id: "dmc5", title: "Devil May Cry 5", year: "2019", cover: "dmc5.jpg", banner: "dmc5.jpg",
    weapons: [
      { name: "Devil Sword Dante", desc: "A living, ever-shifting version of Rebellion that changes shape based on how aggressively it's fought with." },
      { name: "Devil Sword Sparda", desc: "Vergil's own take on the family blade, channeling raw power over finesse." },
      { name: "Red Queen", desc: "Nero's returning broadsword, unchanged in spirit even after everything since." },
      { name: "Balrog", desc: "Balrog is a set of gauntlets, greaves, and shoulder pads (Blow Mode only) created with the sealed power of the king of Fire Hell." },
      { name: "Ebony & Ivory", desc: "Dante's matched pair of custom handguns, fired akimbo and rarely holstered for long." },
      { name: "Devil Breakers", desc: "A line of disposable, one-use prosthetic arms replacing Nero's lost Devil Bringer, each with a wildly different specialty." },
    ],
    conflict: "A demonic tree erupts through a devil hunter's hometown just as a face from his own bloodline resurfaces, forcing three hunters with very different reasons to fight toward the same source at the center of it all." },
];

const DMC_CHARACTERS = [
  // ===== DEVIL MAY CRY (2001) =====
  { id: "dante-1", name: "Dante", game: "dmc1", role: "Protagonist", rank: "S",
    affiliation: "Devil Hunter, son of Sparda", epithet: "Baited With a Memory",
    blurb: "A devil hunter lured to an island fortress by an invitation that uses his dead mother's memory as bait, walking straight into a trap set by the demon king who ended her life in the first place." },
    { id: "trish-1", name: "Trish", game: "dmc1", role: "Protagonist", rank: "A+++",
    affiliation: "Devil Hunter, the Bewitching Devil", epithet: "Fiendish Femme Fatale",
    blurb: "A woman bearing an uncanny resemblance to Dante's mother, Eva. She speaks little, preferring to keep her secrets close—especially the one about her true purpose." },
  { id: "mundus", name: "Mundus", game: "dmc1", role: "Antagonist", rank: "SSS",
    affiliation: "Prince of Darkness", epithet: "The King Sparda Once Stopped",
    blurb: "The demon king who once conquered the human world outright, sealed away by a legendary dark knight generations ago, and now one ritual away from finishing what that defeat interrupted." },

  // ===== DEVIL MAY CRY 2 (2003) =====
  { id: "dante-2", name: "Dante", game: "dmc2", role: "Protagonist", rank: "S",
    affiliation: "Devil Hunter, business owner", epithet: "Now With a Storefront",
    blurb: "Running his own devil-hunting business out of a shop most clients find by accident, Dante gets pulled into a citywide conspiracy that goes a lot deeper than the job posting suggested." },
    { id: "lucia", name: "Lucia", game: "dmc2", role: "Protagonist", rank: "S",
    affiliation: "Ritual Chief", epithet: "Vie de Marli Guardian",
    blurb: "A mannequin demon created by Arius. She later defected from him and became a member of the Protectors clan, adopted by Matier as her daughter and apprentice to be trained as a Devil Hunter. She later worked alongside Dante to defeat both Arius and Argosax." },
  { id: "arius", name: "Arius", game: "dmc2", role: "Antagonist", rank: "A",
    affiliation: "Corporate magnate, demon-fused", epithet: "Halfway to Godhood Already",
    blurb: "A business magnate who's already fused his own body with demonic power, hunting the last piece of a legendary artifact he's convinced will finish turning him into something humanity can't stop." },

  // ===== DEVIL MAY CRY 3 (2005) =====
  { id: "dante-3", name: "Dante", game: "dmc3", role: "Protagonist", rank: "S",
    affiliation: "Devil Hunter, twin of Vergil", epithet: "Younger, Louder, Not Ready",
    blurb: "A brasher, less seasoned version of the devil hunter, forced to confront the twin brother he hasn't spoken to in years the moment that brother starts tearing the demon world open from below." },
  { id: "vergil", name: "Vergil", game: "dmc3", role: "Antagonist", rank: "SSS",
    affiliation: "Dante's twin brother", epithet: "Power Is the Only Truth",
    blurb: "Dante's estranged twin, convinced that raw power is the only thing that ever mattered between them, manipulated at every turn by an ally with his own reasons for wanting the demon world's gate wide open." },

  // ===== DEVIL MAY CRY 4 (2008) =====
  { id: "nero", name: "Nero", game: "dmc4", role: "Protagonist", rank: "A",
    affiliation: "Order of the Sword", epithet: "The Arm He Didn't Ask For",
    blurb: "A young knight of a demon-worshipping order whose ceremonial life falls apart the moment a demonic power awakens in his own right arm — one he can barely control and everyone around him suddenly wants." },
  { id: "sanctus", name: "Sanctus", game: "dmc4", role: "Antagonist", rank: "A",
    affiliation: "Order of the Sword, leader", epithet: "Faith as a Weapon",
    blurb: "The Order's own leader, secretly holding a captive divine being in reserve and treating Nero's uncontrollable power as one more tool for a plan to remake the world entirely on his own terms." },

  // ===== DmC: DEVIL MAY CRY (2013) =====
  { id: "dante-reboot", name: "Dante", game: "dmc-reboot", role: "Protagonist", rank: "B",
    affiliation: "Drifter, unaware heir", epithet: "Off the Grid, On the Run",
    blurb: "A reimagined, streetwise version of the devil hunter living off the grid and unaware of his own heritage, until his estranged twin brother finds him and drags him into a fight neither of them chose." },
  { id: "mundus", name: "Mundus", game: "dmc-reboot", role: "Antagonist", rank: "S",
    affiliation: "Media & political empire, CEO", epithet: "Control in Plain Sight",
    blurb: "Reimagined as the CEO of a sprawling media and political empire, controlling humanity through corporate influence and mass persuasion rather than open conquest — subtler, and just as absolute." },

  // ===== DEVIL MAY CRY 5 (2019) =====
  { id: "nero-5", name: "Nero", game: "dmc5", role: "Protagonist", rank: "A",
    affiliation: "Devil Hunter, own agency", epithet: "Running His Own Shop Now",
    blurb: "Running his own fledgling devil-hunting outfit, Nero is forced back into a fight he thought was behind him when a demonic tree erupts through his hometown and a face from his past resurfaces with it." },
    { id: "v", name: "V", game: "dmc5", role: "Protagonist", rank: "B",
    affiliation: "The Mysterious One", epithet: "Controls Three Demonic Beasts",
    blurb: "A human with demonic ties, V presents himself as Dante's new client to put him on the trail of Urizen and takes Nero as backup insurance. It's revealed later that V is, in fact, the human half of Vergil." },
    { id: "dante-5", name: "Dante", game: "dmc5", role: "Protagonist", rank: "S",
    affiliation: "Devil Hunter, strongest Demon Slayer", epithet: "The Legendary Dark Knight",
    blurb: " A paranormal mercenary, private investigator and vigilante Devil Hunter dedicated to exterminating evil demons and other malevolent supernatural forces; a mission he follows in pursuit of those that killed his mother and corrupted his brother." },
  { id: "urizen", name: "Urizen", game: "dmc5", role: "Antagonist", rank: "SSS",
    affiliation: "Demon King, corrupted origin", epithet: "What Power Left Behind",
    blurb: "A newly emerged demon king feeding a colossal tree with human souls, eventually revealed to be a corrupted, power-obsessed fragment split away from someone the other hunters know all too well." },
];
