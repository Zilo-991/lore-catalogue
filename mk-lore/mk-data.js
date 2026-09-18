/* ===== MORTAL KOMBAT DATA (MKX -> MK1) =====
   Single source of truth for the hub, per-game roster pages
   (game.html?id=), and fighter background pages (character.html?id=).
   pack: "Base" | "Kombat Pack" | "Kombat Pack 2" | "Aftermath" | "Khaos Reigns" | "Bonus"
*/

const MK_GAMES = [
  { id: "mkx", title: "Mortal Kombat X", year: "2015", cover: "mkx.png", banner: "mkx.png", logo: "mkx.png",
    tagline: "A new generation inherits an old war." },

  { id: "mk11", title: "Mortal Kombat 11", year: "2019", cover: "mk11.png", banner: "mk11.png",  logo: "mk11.png",
    tagline: "Time itself becomes a weapon." },

  { id: "mk1", title: "Mortal Kombat 1", year: "2023", cover: "mk1.png", banner: "mk1.png",  logo: "mk1.png",
    tagline: "Liu Kang rewrites the timeline from scratch." },
];

const MK_FIGHTERS = [
  {
    id: "baraka",
    name: "Baraka",
    epithet: "A Blade for Every Argument",
    blurb: "A Tarkatan warlord whose retractable arm-blades make him one of the most viscerally dangerous fighters in any tournament he enters."
  },
  {
    id: "cassie-cage",
    name: "Cassie Cage",
    epithet: "The Family Business, Reluctantly",
    blurb: "The wisecracking daughter of Johnny Cage and Sonya Blade, leading a new generation of Special Forces into a war her parents never fully escaped."
  },
  {
    id: "dvorah",
    name: "D'Vorah",
    epithet: "The Hive Picks Its Favorites",
    blurb: "An insectoid Kytinn whose body doubles as a living hive, serving whichever faction currently offers her swarm the best odds of survival."
  },
  {
    id: "ermac",
    name: "Ermac",
    epithet: "We Are Considerably More Than One",
    blurb: "A fused mass of tortured souls bound together into a single telekinetic weapon, speaking as \"we\" because there's genuinely more than one of him in there."
  },
  {
    id: "erron-black",
    name: "Erron Black",
    epithet: "Whoever's Paying This Week",
    blurb: "An outlaw gunslinger for hire, more mercenary than soldier, fighting for whoever's currently paying enough to make the politics worth ignoring."
  },
  {
    id: "ferra-torr",
    name: "Ferra/Torr",
    epithet: "One Fighter, Two Very Different Bodies",
    blurb: "A vicious pairing of a small, feral rider and the hulking brute she controls, functioning as one fighter built from two very different bodies."
  },
  {
    id: "jacqui-briggs",
    name: "Jacqui Briggs",
    epithet: "Didn't Just Inherit the Name",
    blurb: "Jax's daughter, fighting in high-tech armored gauntlets that make it very clear she didn't just inherit her father's reputation."
  },
  {
    id: "jax-briggs",
    name: "Jax Briggs",
    epithet: "Metal Arms, No Patience",
    blurb: "A Special Forces veteran with cybernetic arms built to replace the ones he lost, hitting exactly as hard as that upgrade implies."
  },
  {
    id: "johnny-cage",
    name: "Johnny Cage",
    epithet: "Still Performing, Even Here",
    blurb: "A washed-up action star turned genuinely capable fighter, still performing for an audience even in a battle to the death."
  },
  {
    id: "kano",
    name: "Kano",
    epithet: "A Laser Where His Morals Should Be",
    blurb: "The leader of the Black Dragon crime syndicate, armed with a chest-mounted laser and a moral compass that's never once pointed anywhere useful."
  },
  {
    id: "kenshi",
    name: "Kenshi Takahashi",
    epithet: "A Sword With Its Own Opinions",
    blurb: "A blind swordsman guided by telekinetic sight, wielding a sentient blade that occasionally has stronger feelings about a fight than he does."
  },
  {
    id: "kitana",
    name: "Kitana",
    epithet: "Torn Between Throne and Mother",
    blurb: "Edenian royalty and a master of bladed fans, torn for years between the throne she was raised for and the mother she thought she'd lost."
  },
  {
    id: "kotal-kahn",
    name: "Kotal Kahn",
    epithet: "Blood-Soaked Politics, Same as Ever",
    blurb: "An Osh-Tekk sun-god warrior who rises to rule Outworld through the same blood-soaked politics that put every leader before him on the throne."
  },
  {
    id: "kung-jin",
    name: "Kung Jin",
    epithet: "A Legacy He Didn't Ask For",
    blurb: "An archer and distant relative of Kung Lao, carrying a family legacy he never quite asked for onto a battlefield he can't avoid."
  },
  {
    id: "kung-lao",
    name: "Kung Lao",
    epithet: "More Than Just the Other Bald Monk",
    blurb: "A Shaolin monk whose razor-edged hat is exactly as lethal as it sounds, fighting to prove he's more than just Liu Kang's shadow."
  },
  {
    id: "liu-kang",
    name: "Liu Kang",
    epithet: "Earthrealm's Most Reliable Champion",
    blurb: "Earthrealm's most celebrated champion, a Shaolin monk whose fire-based fighting style has repeatedly decided the fate of entire realms."
  },
  {
    id: "mileena",
    name: "Mileena",
    epithet: "Every Bit as Dangerous as Unstable",
    blurb: "A genetically twisted clone of Kitana with a mouth full of Tarkatan teeth, every bit as dangerous as she is unstable."
  },
  {
    id: "quan-chi",
    name: "Quan Chi",
    epithet: "Centuries of Wars, All His Fault",
    blurb: "A necromancer sorcerer whose centuries of manipulation and betrayal have started more realm-spanning wars than almost anyone else in Outworld's history."
  },
  {
    id: "raiden",
    name: "Raiden",
    epithet: "Bending His Own Rules Further Each Time",
    blurb: "The Thunder God and protector of Earthrealm, willing to bend his own principles further with every tournament that threatens to end it."
  },
  {
    id: "reptile",
    name: "Reptile",
    epithet: "The Last of a Race He Fights Alone For",
    blurb: "The last known survivor of the reptilian Zaterrans, using camouflage and acid to make up for having no race left to fight for but himself."
  },
  {
    id: "scorpion",
    name: "Scorpion",
    epithet: "Vengeance, On an Endless Loop",
    blurb: "A vengeful Netherrealm specter bound to a cycle of resurrection and revenge, forever hunting the man responsible for his clan's massacre."
  },
  {
    id: "shinnok",
    name: "Shinnok",
    epithet: "Patient, Fallen, Still Ambitious",
    blurb: "A fallen Elder God stripped of his throne, whose amulet-fueled ambitions to reclaim power have made him one of Earthrealm's most patient enemies."
  },
  {
    id: "sonya-blade",
    name: "Sonya Blade",
    epithet: "Holding the Line, Unthanked",
    blurb: "A Special Forces commander who's spent decades fighting Outworld's incursions without ever fully being thanked for holding the line."
  },
  {
    id: "sub-zero",
    name: "Sub-Zero",
    epithet: "Discipline, Frozen Solid",
    blurb: "The current Grandmaster of the Lin Kuei, wielding ice powers with the same discipline he demands from every warrior under his command."
  },
  {
    id: "takeda",
    name: "Takeda Takahashi",
    epithet: "Figuring Out His Own Legacy",
    blurb: "Kenshi's son and a Shirai Ryu-trained fighter with retractable steel whips, still learning what kind of legacy he actually wants to inherit."
  },

  // MKX DLC
  {
    id: "goro",
    name: "Goro",
    epithet: "Four Arms, One Very Old Reputation",
    blurb: "A four-armed Shokan prince and former Mortal Kombat champion, brute strength personified even generations after his prime."
  },
  {
    id: "jason-voorhees",
    name: "Jason Voorhees",
    epithet: "Imported Wholesale, Machete Included",
    blurb: "The unkillable Crystal Lake slasher, imported wholesale into the tournament with all the machete-swinging inevitability that implies."
  },
  {
    id: "predator",
    name: "Predator",
    epithet: "The Deadliest Game He's Found Yet",
    blurb: "An alien trophy hunter drawn to the tournament purely by the promise of the deadliest game he's found yet."
  },
  {
    id: "tanya",
    name: "Tanya",
    epithet: "Nobody's Sure Whose Side She's On",
    blurb: "An Edenian operative whose loyalty has changed sides so many times that nobody currently trusts her word, including her supposed allies."
  },
  {
    id: "tremor",
    name: "Tremor",
    epithet: "Harder to Kill the Second Time",
    blurb: "A rock-and-earth-manipulating ninja and former Black Dragon operative, reconstructed after death into something considerably harder to actually kill."
  },
  {
    id: "leatherface",
    name: "Leatherface",
    epithet: "Zero Subtlety, As Advertised",
    blurb: "The chainsaw-wielding face of the Sawyer family, dropped into the tournament with the exact same subtlety he's known for everywhere else."
  },
  {
    id: "xenomorph",
    name: "Xenomorph",
    epithet: "Just Another Hunting Ground",
    blurb: "A perfect alien predator with acid blood and a second set of jaws, treating the entire tournament as just another hunting ground."
  },
  {
    id: "bo-rai-cho",
    name: "Bo' Rai Cho",
    epithet: "Training Champions, Mostly Sober",
    blurb: "A hard-drinking martial arts master who trains Outworld's finest fighters between — and often during — considerable amounts of drinking."
  },
  {
    id: "triborg",
    name: "Triborg",
    epithet: "Four Ninjas' Worth of Protocols",
    blurb: "A reconstructed cyborg shell capable of switching between the combat protocols of Sektor, Cyrax, Smoke, and Cyber Sub-Zero."
  },

  // MK11
  {
    id: "skarlet",
    name: "Skarlet",
    epithet: "Her Own Blood, Weaponized",
    blurb: "A blood-magic assassin created from Shao Kahn's own experiments, able to control and weaponize blood — including, often, her own."
  },
  {
    id: "geras",
    name: "Geras",
    epithet: "The Opponent Who Never Stays Down",
    blurb: "An immortal servant of Kronika who can rewind his own death mid-fight, making him one of the only opponents who never really stays down."
  },
  {
    id: "kabal",
    name: "Kabal",
    epithet: "Too Fast to Really See Coming",
    blurb: "A scarred Black Dragon mercenary turned reluctant hero, moving fast enough on his hook swords and cybernetic legs to blur on sight."
  },
  {
    id: "jade",
    name: "Jade",
    epithet: "Loyalty That's Outlasted Several Wars",
    blurb: "Kitana's fiercely loyal best friend and personal guardian, wielding a glaive with a level of trust between them that's outlasted several wars."
  },
  {
    id: "frost",
    name: "Frost",
    epithet: "Tired of Being Second-Best",
    blurb: "An ambitious Lin Kuei cryomancer who resents living in Sub-Zero's shadow enough to eventually do something drastic about it."
  },
  {
    id: "kollector",
    name: "Kollector",
    epithet: "Six Arms, Endless Grudges",
    blurb: "A six-armed Naknadan enforcer serving Shao Kahn, collecting weapons, relics, and grudges with equal enthusiasm."
  },
  {
    id: "cetrion",
    name: "Cetrion",
    epithet: "Serene, and Entirely Ruthless",
    blurb: "An Elder God of nature and the elements, whose serene exterior hides an entirely ruthless willingness to let realms burn for a greater plan."
  },
  {
    id: "noob-saibot",
    name: "Noob Saibot",
    epithet: "Considerably Darker Than He Left",
    blurb: "The corrupted wraith of a fallen Lin Kuei grandmaster, commanding shadow clones from a realm considerably darker than the one he left behind."
  },
  {
    id: "shao-kahn",
    name: "Shao Kahn",
    epithet: "One Merged Soul at a Time",
    blurb: "The tyrannical Emperor of Outworld, whose entire reign has been built on conquering realms one merged soul at a time."
  },
  {
    id: "shang-tsung",
    name: "Shang Tsung",
    epithet: "Wearing Everyone He's Ever Killed",
    blurb: "A soul-stealing sorcerer who can wear the bodies and fighting styles of everyone he's ever killed, which by now is a considerable number of people."
  },
  {
    id: "nightwolf",
    name: "Nightwolf",
    epithet: "Ancestors on His Side",
    blurb: "A Matoka shaman drawing on spirit-guided weapons and ancestral magic to defend both Earthrealm and his own people's sovereignty."
  },
  {
    id: "terminator",
    name: "Terminator (T-800)",
    epithet: "A Fairly Mild Tuesday, Honestly",
    blurb: "A relentless cybernetic assassin from a war against machines, imported into a tournament that's honestly a fairly mild Tuesday for him."
  },
  {
    id: "sindel",
    name: "Sindel",
    epithet: "A Scream That Levels Rooms",
    blurb: "Kitana's resurrected mother and former Queen of Edenia, brought back under Shao Kahn's control with a scream capable of leveling a room."
  },
  {
    id: "joker",
    name: "The Joker",
    epithet: "The Same Bit, Bigger Stage",
    blurb: "Gotham's own agent of chaos, treating a realm-spanning death tournament as just a larger stage for the same anarchic bit he's always running."
  },
  {
    id: "spawn",
    name: "Spawn",
    epithet: "A War He Never Agreed To",
    blurb: "A hellspawn soldier bound by an infernal contract, wielding chains and Necroplasm in a war he never actually agreed to fight."
  },
  {
    id: "fujin",
    name: "Fujin",
    epithet: "Holding the Line as the Order Collapses",
    blurb: "The God of Wind and one of Raiden's few remaining allies among the Elder Gods, holding the line as the old order collapses around him."
  },
  {
    id: "sheeva",
    name: "Sheeva",
    epithet: "As Loyal as She Is Terrifying",
    blurb: "A four-armed Shokan general as loyal to her people's independence as she is terrifying in direct combat."
  },
  {
    id: "robocop",
    name: "RoboCop",
    epithet: "Due Process, Not Included",
    blurb: "A half-man, half-machine Detroit police officer, bringing prime-directive law enforcement to a tournament that has never once respected due process."
  },
  {
    id: "rain",
    name: "Rain",
    epithet: "A Birthright Nobody Else Acknowledges",
    blurb: "A purple-clad Edenian prince obsessed with a royal birthright everyone else seems reluctant to actually acknowledge."
  },
  {
    id: "rambo",
    name: "Rambo",
    epithet: "A Distressingly Familiar Tuesday",
    blurb: "A one-man Vietnam-era war machine, treating the tournament's death and violence as a distressingly familiar Tuesday."
  },

  // MK1
  {
    id: "ashrah",
    name: "Ashrah",
    epithet: "Atoning for a Nature She Didn't Choose",
    blurb: "A demon seeking redemption through a sacred kris blade, trying to atone for a nature she never chose in the first place."
  },
  {
    id: "general-shao",
    name: "General Shao",
    epithet: "Ruthless in Strategy, More So in Combat",
    blurb: "The military commander behind Outworld's invading army, ruthless in strategy and even more so in personal combat."
  },
  {
    id: "havik",
    name: "Havik",
    epithet: "Disorder as Devotion",
    blurb: "A chaos-worshipping cleric of the Cult of Havik, treating pain, disorder, and heresy as a form of religious devotion."
  },
  {
    id: "li-mei",
    name: "Li Mei",
    epithet: "One Invading Army at a Time",
    blurb: "A village champion turned resistance leader, fighting to free her people from occupation one invading army at a time."
  },
  {
    id: "nitara",
    name: "Nitara",
    epithet: "A New Source, By Any Means",
    blurb: "A vampiric Vaeternus warrior fighting to secure a new, sustainable blood source for her dying species."
  },
  {
    id: "reiko",
    name: "Reiko",
    epithet: "Serving Whoever He'll Eventually Replace",
    blurb: "A power-hungry warlord willing to serve whichever tyrant currently offers him the clearest path toward eventually replacing them."
  },
  {
    id: "smoke",
    name: "Smoke",
    epithet: "Increasingly Hard to Fully Control",
    blurb: "A Lin Kuei ninja caught between loyalty to the clan and the smoke-and-shadow abilities that make him increasingly hard to fully control."
  },
  {
    id: "omni-man",
    name: "Omni-Man",
    epithet: "A Darker Agenda Than the Planet Realizes",
    blurb: "A seemingly benevolent superhero secretly serving a considerably darker agenda than the planet he claims to protect realizes."
  },
  {
    id: "peacemaker",
    name: "Peacemaker",
    epithet: "Peace, At Any Cost That Makes No Sense",
    blurb: "A loud, aggressively patriotic mercenary who believes in peace at literally any cost, including several that make no sense."
  },
  {
    id: "homelander",
    name: "Homelander",
    epithet: "A Hero's Image, Barely Holding",
    blurb: "A superpowered figurehead whose public image as America's hero barely covers the amount of damage he's willing to cause to keep it."
  },
  {
    id: "cyrax",
    name: "Cyrax",
    epithet: "Fighting Through His Own Stolen Memories",
    blurb: "A reconstructed Lin Kuei cyborg ninja specializing in net traps and explosives, still fighting through the fog of his own stolen memories."
  },
  {
    id: "sektor",
    name: "Sektor",
    epithet: "Whatever's Left of His Humanity, Deprioritized",
    blurb: "A Lin Kuei cyborg enforcer built around missile launchers and flamethrowers, prioritizing the clan's directives over whatever's left of his own humanity."
  },
  {
    id: "ghostface",
    name: "Ghostface",
    epithet: "Slasher Tactics for a Tournament That Has Plenty",
    blurb: "The masked killer from Woodsboro, bringing slasher-movie stalking tactics to a tournament that already has plenty of its own."
  },
  {
    id: "t1000",
    name: "T-1000",
    epithet: "The Hardest Thing Here to Actually Stop",
    blurb: "A liquid-metal assassin capable of reshaping itself around any weapon it needs, making it one of the hardest things in the tournament to actually stop."
  },
  {
    id: "conan",
    name: "Conan the Barbarian",
    epithet: "Brute Simplicity, Decades Running",
    blurb: "A legendary sword-and-sorcery warrior, cutting through the tournament with the same brute simplicity that's kept him alive for decades."
  }
];

const MKX_ROSTER = [
  { fighter: "baraka", status: "Base" },
  { fighter: "cassie-cage", status: "Base" },
  { fighter: "dvorah", status: "Base" },
  { fighter: "ermac", status: "Base" },
  { fighter: "erron-black", status: "Base" },
  { fighter: "ferra-torr", status: "Base" },
  { fighter: "jacqui-briggs", status: "Base" },
  { fighter: "jax-briggs", status: "Base" },
  { fighter: "johnny-cage", status: "Base" },
  { fighter: "kano", status: "Base" },
  { fighter: "kenshi", status: "Base" },
  { fighter: "kitana", status: "Base" },
  { fighter: "kotal-kahn", status: "Base" },
  { fighter: "kung-jin", status: "Base" },
  { fighter: "kung-lao", status: "Base" },
  { fighter: "liu-kang", status: "Base" },
  { fighter: "mileena", status: "Base" },
  { fighter: "quan-chi", status: "Base" },
  { fighter: "raiden", status: "Base" },
  { fighter: "reptile", status: "Base" },
  { fighter: "scorpion", status: "Base" },
  { fighter: "shinnok", status: "Base" },
  { fighter: "sonya-blade", status: "Base" },
  { fighter: "sub-zero", status: "Base" },
  { fighter: "takeda", status: "Base" },

  { fighter: "goro", status: "DLC", pack: "Bonus" },
  { fighter: "jason-voorhees", status: "DLC", pack: "Kombat Pack" },
  { fighter: "predator", status: "DLC", pack: "Kombat Pack" },
  { fighter: "tanya", status: "DLC", pack: "Kombat Pack" },
  { fighter: "tremor", status: "DLC", pack: "Kombat Pack" },
  { fighter: "leatherface", status: "DLC", pack: "Kombat Pack 2" },
  { fighter: "xenomorph", status: "DLC", pack: "Kombat Pack 2" },
  { fighter: "bo-rai-cho", status: "DLC", pack: "Kombat Pack 2" },
  { fighter: "triborg", status: "DLC", pack: "Kombat Pack 2" }
];

const MK11_ROSTER = [
  { fighter: "scorpion", status: "Base" },
  { fighter: "sub-zero", status: "Base" },
  { fighter: "raiden", status: "Base" },
  { fighter: "sonya-blade", status: "Base" },
  { fighter: "baraka", status: "Base" },
  { fighter: "skarlet", status: "Base" },
  { fighter: "geras", status: "Base" },
  { fighter: "kano", status: "Base" },
  { fighter: "kabal", status: "Base" },
  { fighter: "dvorah", status: "Base" },
  { fighter: "jade", status: "Base" },
  { fighter: "liu-kang", status: "Base" },
  { fighter: "kung-lao", status: "Base" },
  { fighter: "frost", status: "Base" },
  { fighter: "cassie-cage", status: "Base" },
  { fighter: "jacqui-briggs", status: "Base" },
  { fighter: "erron-black", status: "Base" },
  { fighter: "kotal-kahn", status: "Base" },
  { fighter: "kollector", status: "Base" },
  { fighter: "cetrion", status: "Base" },
  { fighter: "kitana", status: "Base" },
  { fighter: "johnny-cage", status: "Base" },
  { fighter: "noob-saibot", status: "Base" },
  { fighter: "jax-briggs", status: "Base" },

  { fighter: "shao-kahn", status: "DLC", pack: "Bonus" },
  { fighter: "shang-tsung", status: "DLC", pack: "Kombat Pack" },
  { fighter: "nightwolf", status: "DLC", pack: "Kombat Pack" },
  { fighter: "terminator", status: "DLC", pack: "Kombat Pack" },
  { fighter: "sindel", status: "DLC", pack: "Kombat Pack" },
  { fighter: "joker", status: "DLC", pack: "Kombat Pack" },
  { fighter: "spawn", status: "DLC", pack: "Kombat Pack" },
  { fighter: "fujin", status: "DLC", pack: "Aftermath" },
  { fighter: "sheeva", status: "DLC", pack: "Aftermath" },
  { fighter: "robocop", status: "DLC", pack: "Aftermath" },
  { fighter: "mileena", status: "DLC", pack: "Kombat Pack 2" },
  { fighter: "rain", status: "DLC", pack: "Kombat Pack 2" },
  { fighter: "rambo", status: "DLC", pack: "Kombat Pack 2" }
];

const MK1_ROSTER = [
  { fighter: "baraka", status: "Base" },
  { fighter: "ashrah", status: "Base" },
  { fighter: "geras", status: "Base" },
  { fighter: "general-shao", status: "Base" },
  { fighter: "havik", status: "Base" },
  { fighter: "johnny-cage", status: "Base" },
  { fighter: "kenshi", status: "Base" },
  { fighter: "kitana", status: "Base" },
  { fighter: "kung-lao", status: "Base" },
  { fighter: "li-mei", status: "Base" },
  { fighter: "liu-kang", status: "Base" },
  { fighter: "mileena", status: "Base" },
  { fighter: "nitara", status: "Base" },
  { fighter: "raiden", status: "Base" },
  { fighter: "reiko", status: "Base" },
  { fighter: "reptile", status: "Base" },
  { fighter: "scorpion", status: "Base" },
  { fighter: "shang-tsung", status: "Base" },
  { fighter: "smoke", status: "Base" },
  { fighter: "sonya-blade", status: "Base" },
  { fighter: "sub-zero", status: "Base" },
  { fighter: "tanya", status: "Base" },
  { fighter: "rain", status: "Base" },

  { fighter: "omni-man", status: "DLC", pack: "Kombat Pack" },
  { fighter: "quan-chi", status: "DLC", pack: "Kombat Pack" },
  { fighter: "peacemaker", status: "DLC", pack: "Kombat Pack" },
  { fighter: "ermac", status: "DLC", pack: "Kombat Pack" },
  { fighter: "homelander", status: "DLC", pack: "Kombat Pack" },
  { fighter: "takeda", status: "DLC", pack: "Kombat Pack" },
  { fighter: "noob-saibot", status: "DLC", pack: "Khaos Reigns" },
  { fighter: "cyrax", status: "DLC", pack: "Khaos Reigns" },
  { fighter: "sektor", status: "DLC", pack: "Khaos Reigns" },
  { fighter: "ghostface", status: "DLC", pack: "Khaos Reigns" },
  { fighter: "t1000", status: "DLC", pack: "Khaos Reigns" },
  { fighter: "conan", status: "DLC", pack: "Khaos Reigns" }
];

const MK_ROSTERS = {
  mkx: MKX_ROSTER,
  mk11: MK11_ROSTER,
  mk1: MK1_ROSTER
};