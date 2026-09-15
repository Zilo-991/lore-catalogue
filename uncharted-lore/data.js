/* ===== UNCHARTED DATA =====
   Single source of truth for the hub, per-game pages (game.html?id=),
   and character background pages (character.html?id=).
*/

const UC_GAMES = [
  { id: "drakes-fortune", title: "Uncharted: Drake's Fortune", year: "2007", cover: "drakes-fortune.png", banner: "drakes-fortune.png", logo: "drakes-fortune.png",
    brief: "A treasure hunter chasing his own family legend teams up with a journalist and an old friend to track down the lost city of El Dorado — only to find it guarded by a lot more than booby traps.",
    location: "A Remote Pacific Island", locationDesc: "A fog-shrouded island hiding Nazi-era fortifications, U-boat wrecks, and the ruins of El Dorado itself, along with something that's been locked in the dark since the 1930s for a very good reason." },
  { id: "among-thieves", title: "Uncharted 2: Among Thieves", year: "2009", cover: "among-thieves.png", banner: "among-thieves.png", logo: "among-thieves.png",
    brief: "An old partner's betrayal drags Drake back into the game, chasing the Cintamani Stone across two continents toward a hidden city that isn't on any map for a reason.",
    location: "Istanbul to Shambhala", locationDesc: "A rooftop heist in Istanbul kicks off a trail through Nepal's mountains and a besieged Himalayan village, ending in the hidden, time-locked valley of Shambhala." },
  { id: "drakes-deception", title: "Uncharted 3: Drake's Deception", year: "2011", cover: "drakes-deception.png", banner: "drakes-deception.png", logo: "drakes-deception.png",
    brief: "Digging into his own mentor's history sends Drake chasing his ancestor's final expedition, straight into the path of a secret society that's been hunting the same prize for centuries.",
    location: "London to the Rub' al Khali", locationDesc: "A trail from a London auction house through the French countryside and Syrian desert, ending in the sand-buried ruins of Iram of the Pillars, the Atlantis of the Sands." },
  { id: "a-thiefs-end", title: "Uncharted 4: A Thief's End", year: "2016", cover: "a-thiefs-end.jpg", banner: "a-thiefs-end.png", logo: "a-thiefs-end.png",
    brief: "A retired Drake gets pulled back in by the estranged brother he thought was dead, chasing pirate Henry Avery's lost fortune on what both of them insist is genuinely the last job.",
    location: "Panama to Madagascar", locationDesc: "A trail from a Panamanian prison through Scottish estates and Madagascar's coastline, ending in the overgrown ruins of the pirate colony of Libertalia." },
  { id: "lost-legacy", title: "Uncharted: The Lost Legacy", year: "2017", cover: "lost-legacy.png", banner: "lost-legacy.png", logo: "lost-legacy.png",
    brief: "Chloe Frazer teams up with mercenary Nadine Ross to find the legendary Tusk of Ganesh before it can fund a civil war neither of them wants to see happen.",
    location: "The Western Ghats, India", locationDesc: "A journey from crowded city markets through India's Western Ghats mountain range, into the hidden ruins of the Hoysala Empire." },
];

const UC_CHARACTERS = [
  // ===== PROTAGONISTS =====
  { id: "nathan-drake", name: "Nathan Drake", game: ["drakes-fortune", "among-thieves", "drakes-deception", "a-thiefs-end"], role: "Protagonist",
    affiliation: "Treasure Hunter", epithet: "Fortune Favors the Reckless",
    blurb: "A charming, wisecracking treasure hunter and self-proclaimed descendant of Sir Francis Drake, whose talent for finding lost history is matched only by his talent for getting shot at because of it." },
  { id: "elena-fisher", name: "Elena Fisher", game: ["drakes-fortune", "a-thiefs-end"], role: "Protagonist",
    affiliation: "Journalist", epithet: "The One Who Keeps Him Honest",
    blurb: "A journalist who joins Drake's hunt for a story and ends up far more entangled in his life than either of them expected, on-screen and off." },
  { id: "victor-sullivan", name: "Victor \"Sully\" Sullivan", game: ["drakes-fortune", "among-thieves", "drakes-deception", "a-thiefs-end"], role: "Protagonist",
    affiliation: "Mentor, Treasure Hunter Thief", epithet: "The Closest Thing to a Father",
    blurb: "The grizzled treasure hunter who took a young Nathan Drake under his wing, staying just cynical enough to keep both of them alive through decades of bad decisions." },
    { id: "sam-drake", name: "Samuel Drake", game: "a-thiefs-end", role: "Protagonist",
    affiliation: "Brother, Fellow Treasure Hunter", epithet: "The Best Brother Ever",
    blurb: "He is a professional thief and treasure hunter, as well as the older brother of Nathan Drake." },

  // ===== ANTAGONISTS =====
  { id: "gabriel-roman", name: "Gabriel Roman", game: "drakes-fortune", role: "Antagonist",
    affiliation: "Smuggler", epithet: "Funding the Expedition, Skimming the Profit",
    blurb: "A wealthy smuggler bankrolling the hunt for El Dorado purely for personal profit, with a mercenary enforcer on hand for anyone who complicates that math." },
  { id: "atoq-navarro", name: "Atoq Navarro", game: "drakes-fortune", role: "Antagonist",
    affiliation: "Mercenary", epithet: "Roman's Enforcer",
    blurb: "A ruthless mercenary leader providing the muscle behind Roman's expedition, with a personal fascination with the island's history that runs deeper than his employer realizes." },
  { id: "zoran-lazarevic", name: "Zoran Lazarević", game: "among-thieves", role: "Antagonist",
    affiliation: "War Criminal", epithet: "A War That Never Really Ended",
    blurb: "A war criminal obsessed with unlocking the power hidden in Shambhala, hoping to reignite a conflict he's never emotionally left behind." },
  { id: "katherine-marlowe", name: "Katherine Marlowe", game: "drakes-deception", role: "Antagonist",
    affiliation: "Secret Society Leader", epithet: "Centuries in the Making",
    blurb: "The composed, ruthless head of a secret society that's been chasing the Atlantis of the Sands for generations, willing to burn every one of Drake's relationships to get there first." },
  { id: "rafe-adler", name: "Rafe Adler", game: "a-thiefs-end", role: "Antagonist",
    affiliation: "Former Partner", epithet: "Money Was Never Really the Point",
    blurb: "A wealthy former treasure-hunting partner whose obsession with finding Henry Avery's fortune curdles into open betrayal the moment Drake's brother re-enters the picture." },
    { id: "nadine-ross", name: "Nadine Ross", game: "a-thiefs-end", role: "Antagonist",
    affiliation: "Mercenary", epithet: "Reluctant Partner, Reliable Backup",
    blurb: "A former mercenary commander whose organization just collapsed out from under her, teaming up with Chloe on a job that's as much about a paycheck as it is about stopping a war." },
  { id: "asav", name: "Asav", game: "lost-legacy", role: "Antagonist",
    affiliation: "Insurgent Leader", epithet: "Unity Through Force",
    blurb: "An insurgent leader trying to seize the legendary Tusk of Ganesh to unite India's fractured states under his own violent rule." },

  // ===== LOST LEGACY PROTAGONISTS =====
  { id: "chloe-frazer", name: "Chloe Frazer", game: "lost-legacy", role: "Protagonist",
    affiliation: "Treasure Hunter", epithet: "Better at This Than Drake, Honestly",
    blurb: "A skilled, independent thief and old flame of Drake's, taking point on her own hunt for the Tusk of Ganesh before it can fall into the wrong hands." },
  { id: "nadine-ross", name: "Nadine Ross", game: "lost-legacy", role: "Protagonist",
    affiliation: "Mercenary", epithet: "Reluctant Partner, Reliable Backup",
    blurb: "A former mercenary commander whose organization just collapsed out from under her, teaming up with Chloe on a job that's as much about a paycheck as it is about stopping a war." },
    { id: "sam-drake", name: "Samuel Drake", game: "lost-legacy", role: "Protagonist",
    affiliation: "Nate's Brother, Treasure Hunter Thief", epithet: "Clever but Clumsy Thief",
    blurb: "He is a professional thief and treasure hunter, as well as the older brother of Nathan Drake." },
];