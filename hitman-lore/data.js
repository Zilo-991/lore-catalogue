/* ===== HITMAN: WORLD OF ASSASSINATION DATA =====
   Single source of truth for the hub, per-game pages (game.html?id=),
   and character background pages (character.html?id=).
   Source-checked against hitman.fandom.com for the trilogy structure.
*/

const HM_GAMES = [
  { id: "hitman1", title: "HITMAN ™", year: "2016", cover: "hitman1.png", banner: "hitman1.png",  logo: "hitman1.png",
    tagline: "The ICA reboots its most valuable asset.",
    brief: "Agent 47 returns to active duty in a rebuilt International Contract Agency, taking on sanctioned kills that read like a world tour of the ultra-wealthy — a Paris fashion show, a Sicilian coastline, a Marrakesh embassy, a Bangkok hotel, a Colorado militia compound, and a Hokkaido hospital built for people who'd rather not be found.",
    locations: [
      { name: "Paris", desc: "A fashion show inside a lavishly restored palace, where the guest list is exactly as dangerous as the runway." },
      { name: "Sapienza", desc: "A sun-drenched Italian coastal town hiding a bioweapon lab underneath its prettiest villa." },
      { name: "Marrakesh", desc: "A crowded Moroccan embassy and marketplace, where a coup is being financed one quiet transaction at a time." },
      { name: "Bangkok", desc: "A luxury hotel housing a rock star, his entourage, and a cult with a very specific interest in his inheritance." },
      { name: "Colorado", desc: "An isolated militia compound posing as a survivalist retreat, built around secrets its own members aren't allowed to ask about." },
      { name: "Hokkaido", desc: "A private hospital for the ultra-wealthy, built into a mountainside for people who'd rather recover from surgery somewhere no one can find them." },
    ] },
  { id: "hitman2", title: "HITMAN 2", year: "2018", cover: "hitman2.png", banner: "hitman2.png", logo: "hitman2.png",
    tagline: "The Shadow Client's war against Providence begins in earnest.",
    brief: "47 and his handler Lucas Grey go on the offensive against Providence, the secret society that's quietly run the world from behind the ICA's own client list — tearing through a Miami race track, a cartel-run rainforest estate, a Mumbai slum-and-studio backlot, and a suburban American cul-de-sac hiding something considerably worse than nosy neighbors.",
    locations: [
      { name: "Miami", desc: "A motorsport event where the racetrack, the paddocks, and a penthouse suite are all part of the same data-harvesting operation." },
      { name: "Santa Fortuna", desc: "A Colombian rainforest estate serving as the nerve center for a cartel with far bigger clients than the drug trade alone explains." },
      { name: "Mumbai", desc: "A sprawling slum-and-film-studio backlot where a crime lord, a Bollywood set, and a hidden syndicate all share the same block." },
      { name: "Whittleton Creek", desc: "A picture-perfect Vermont cul-de-sac where the neighborhood watch has considerably more reason to be paranoid than usual." },
      { name: "Isle of Sgàil", desc: "A secretive island retreat hosting a masked ritual for the people who actually run Providence from behind the scenes." },
      { name: "New Zealand", desc: "A quiet coastal cliffside mission that doubles as the story's real beginning, long before 47 ever takes the contract." },
    ] },
  { id: "hitman3", title: "HITMAN III", year: "2021", cover: "hitman3.png", banner: "hitman3.png",  logo: "hitman3.png",
    tagline: "The finale of the World of Assassination trilogy.",
    brief: "The hunt for Providence's inner circle closes in for good, sending 47 from the tallest building in the world to an English murder-mystery estate, a Berlin nightclub full of fellow assassins, a Chinese tech city, an Argentine vineyard, and finally into the Carpathian Mountains for a reckoning two games in the making.",
    locations: [
      { name: "Dubai", desc: "The tallest building in the world, scaled from the inside during a heist disguised as routine corporate security." },
      { name: "Dartmoor", desc: "An English countryside estate hosting a will reading that unravels into a murder mystery 47 gets to solve by causing one." },
      { name: "Berlin", desc: "An underground nightclub crawling with fellow assassins, where blending in means looking like everyone else who's also here to kill someone." },
      { name: "Chongqing", desc: "A rain-soaked Chinese tech city where a surveillance firm's own cameras become part of the mission's biggest obstacle." },
      { name: "Mendoza", desc: "An Argentine vineyard hosting a family gathering with considerably more blood debts than wine pairings." },
      { name: "Carpathian Mountains", desc: "A remote mountain fortress housing the trilogy's final confrontation, two games and one very long grudge in the making." },
    ] },
];

const HM_ITEMS = [
  // ===== PROTAGONIST (constant across the trilogy) =====
  { id: "agent-47", category: "protagonist", name: "Agent 47", game: "all", tag: "ICA Contract Killer",
    epithet: "The World's Most Dangerous Asset",
    blurb: "A genetically engineered assassin raised from birth to be the perfect contract killer, working through the International Contract Agency and recognizable by exactly one detail he can never quite hide: the barcode tattooed on the back of his shaved head." },
  { id: "diana", category: "protagonist", name: "Diana Burnwood", game: "all", tag: "ICA Handler",
    epithet: "The Voice That Never Panics",
    blurb: "47's longtime handler, running every contract from a calm, clinical remove — until her own history with Providence turns her into far more than just the voice in his earpiece." },

  // ===== HITMAN (2016) TARGETS =====
  { id: "novikov-margolis", category: "target", name: "Viktor Novikov & Dalia Margolis", game: "hitman1", tag: "Paris — Fashion House Owners",
    epithet: "The ICA's First Reboot Contract",
    blurb: "Co-owners of a Parisian fashion house secretly running a private intelligence-gathering operation out of the mansion basement, eliminated during a runway show packed with exactly the kind of witnesses neither of them wanted watching." },
  { id: "caruso-santis", category: "target", name: "Silvio & Francesca De Santis Caruso", game: "hitman1", tag: "Sapienza — Reclusive Bio-Chemist & Spy in Disguise",
    epithet: "A Bioweapon With a Sea View",
    blurb: "A reclusive tech heir developing a genetically engineered virus in a private lab beneath his family's Italian coastal estate, unknowingly that a spy disguised as a scientist is after his research and posibbly to eliminate him" },
  { id: "jordan-cross", category: "target", name: "Jordan Cross", game: "hitman1", tag: "Bangkok — Rock Star",
    epithet: "Fame, Cults, and a Very Bad Inheritance",
    blurb: "The magnetic frontman of a rock band secretly entangled in a cult built around his own late father's estate, holed up in a Bangkok hotel with the kind of entourage that makes a clean approach considerably harder." },

  // ===== HITMAN 2 (2018) TARGETS =====
  { id: "robert-knox", category: "target", name: "Robert Knox", game: "hitman2", tag: "Miami — Racing Team Owner",
    epithet: "Pole Position, Dead Last",
    blurb: "The owner of a Miami motorsport team using the race itself as cover for a data-harvesting scheme, protected by his own daughter's rise as the team's star driver and a paddock full of people who all owe him something." },
  { id: "cali-cartel", category: "target", name: "The Delgado Cartel Leadership", game: "hitman2", tag: "Santa Fortuna — Cartel Command",
    epithet: "Family Business, Fatal Succession",
    blurb: "The leadership of a Colombian cartel embedded deep enough in Providence's supply lines that removing them isn't just a hit — it's a succession crisis 47 gets to trigger personally." },
  { id: "ambrose-family", category: "target", name: "The Ambrose Family", game: "hitman2", tag: "Whittleton Creek — Suburban Assassins",
    epithet: "The Nicest House on the Cul-de-Sac",
    blurb: "A seemingly ordinary suburban American family who turn out to be a household of professional killers hiding behind a white picket fence, block parties, and a level of neighborhood-watch paranoia that's more justified than anyone realizes." },

  // ===== HITMAN III (2021) TARGETS =====
  { id: "marcus-stuyvesant", category: "target", name: "Marcus Stuyvesant", game: "hitman3", tag: "Dubai — Corporate Security Chief",
    epithet: "The Opening Move",
    blurb: "The head of security for the world's tallest building, holding evidence that could expose Providence's entire network — assuming 47 can get to him before he gets to a courtroom first." },
  { id: "alexa-carlisle", category: "target", name: "Alexa Carlisle", game: "hitman3", tag: "Dartmoor — Estate Owner",
    epithet: "A Murder Mystery, Except It's Real",
    blurb: "The owner of an English country estate hosting a will reading that plays out like a locked-room mystery novel, right up until the mystery guest turns out to be an actual assassin." },
  { id: "the-constant", category: "target", name: "The Constant (Arthur Edwards)", game: "hitman3", tag: "Carpathian Mountains — Providence Founder",
    epithet: "Two Games of Buildup, One Mountain Fortress",
    blurb: "The shadowy founding member of Providence who has been pulling strings behind nearly every contract 47 has ever taken, finally cornered in a mountain fortress for a reckoning the whole trilogy has been building toward." },

  // ===== WEAPONS (available across all three games) =====
  { id: "fiber-wire", category: "weapon", name: "Fiber Wire", game: "all", tag: "Signature Garrote",
    epithet: "The Quietest Way to End a Contract",
    blurb: "A garrote wire concealed in a pocket or briefcase, synonymous with 47's hands-on approach to a contract whenever a firearm would be far too loud for the room." },
  { id: "silverballer", category: "weapon", name: "ICA Silverballer", game: "all", tag: "Signature Sidearm",
    epithet: "Elegant Enough for the Party, Lethal Enough to End It",
    blurb: "A pair of custom suppressed pistols issued by the ICA, polished enough to pass for evening wear and precise enough to close a contract in two rounds." },
  { id: "sieger-300", category: "weapon", name: "Sieger 300 Ghost", game: "all", tag: "Precision Sniper Rifle",
    epithet: "A Shot the Target Never Hears",
    blurb: "A long-range precision rifle built for contracts where 47 never sets foot anywhere near the room the target dies in." },
  { id: "lethal-poison", category: "weapon", name: "Lethal Poison", game: "all", tag: "Concealable Toxin",
    epithet: "Served Without a Trace",
    blurb: "A concealable toxin slipped into a target's food or drink, eliminating them without a single shot fired or a single witness realizing an assassin was ever in the building." },
  { id: "remote-explosive", category: "weapon", name: "Remote Explosive", game: "all", tag: "Detonation Device",
    epithet: "For Contracts That Call for a Bang",
    blurb: "A remote-triggered charge for the rare contract that calls for something louder, messier, and far more deniable than a clean, quiet kill." },
  { id: "concealed-blade", category: "weapon", name: "Concealed Blade", game: "all", tag: "Improvised Melee",
    epithet: "Whatever's Closest at Hand",
    blurb: "A screwdriver, a knife, or whatever else happens to be lying around a crime scene — proof that a professional never really needs a dedicated weapon to finish the job." },
];