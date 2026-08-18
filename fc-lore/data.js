/* ===== FAR CRY DATA =====
   Single source of truth for the games grid (far-cry.html), the
   per-game tabbed page (game.html?id=), and character background
   pages (character.html?id=). Mirrors the structure used for the
   Assassin's Creed archive elsewhere in this catalogue.
*/

const FC_GAMES = [
  { id: "fc1", title: "Far Cry", year: "2004", developer: "Crytek",
    cover: "fc1.png", banner: "fc1.png", logo: "fc1.png",
    place: "The Islands", placeDesc: "A lush, sprawling tropical archipelago dotted with mercenary camps, hidden coves, and a secret genetic research facility, serving as the series' first sandbox battleground."  },
  { id: "fc2", title: "Far Cry 2", year: "2008", developer: "Ubisoft Montreal",
    cover: "fc2.png", banner: "fc2.png", logo: "fc2.png",
    place: "An Unnamed African Nation", placeDesc: "A fictional, sun-scorched nation gripped by civil war between two factions, its dusty savannas and diamond mines serving as the backdrop for a conflict neither side is really fighting to win." },
  { id: "fc3", title: "Far Cry 3", year: "2012", developer: "Ubisoft Montreal",
    cover: "fc3.png", banner: "fc3.png", logo: "fc3.png",
    place: "Rook Islands", placeDesc: "A lawless tropical archipelago run by pirates and slavers, its beaches and jungle ruins hiding both natural beauty and a thriving trade in human cargo." },
  { id: "fc4", title: "Far Cry 4", year: "2014", developer: "Ubisoft Montreal",
    cover: "fc4.png", banner: "fc4.png", logo: "fc4.png",
    place: "Kyrat", placeDesc: "A fictional Himalayan nation of soaring peaks and hidden monasteries, held under the unpredictable rule of a self-declared king while a civil war simmers in its valleys." },
  { id: "primal", title: "Far Cry Primal", year: "2016", developer: "Ubisoft Montreal",
    cover: "primal.png", banner: "primal.png", logo: "primal.png",
    place: "Oros, 10,000 BCE", placeDesc: "An untamed Stone Age valley of dense forests and mammoth-crossed plains, contested by three tribes with very different visions for how to survive in it." },
  { id: "fc5", title: "Far Cry 5", year: "2018", developer: "Ubisoft Montreal",
    cover: "fc5.png", banner: "fc5.png", logo: "fc5.png",
    place: "Hope County, Montana", placeDesc: "A fictional slice of rural Montana, all pine forests and river valleys, quietly overtaken county by county by a cult convinced it alone will survive what's coming." },
  { id: "newdawn", title: "Far Cry New Dawn", year: "2019", developer: "Ubisoft Montreal",
    cover: "newdawn.png", banner: "newdawn.png", logo: "newdawn.png",
    place: "Hope County, Reborn", placeDesc: "The same Montana valleys, seventeen years after a global nuclear exchange, now overgrown with mutated superbloom flora and fought over by resettling survivors and raider gangs alike." },
  { id: "fc6", title: "Far Cry 6", year: "2021", developer: "Ubisoft Toronto",
    cover: "fc6.png", banner: "fc6.png", logo: "fc6.png",
    place: "Yara", placeDesc: "A fictional Caribbean island nation modeled on Cuba, its sugarcane fields, colonial cities, and jungle interior all caught in the middle of a revolution." },
];

const FC_CHARACTERS = [
  // ===== FAR CRY (2004) =====
  { id: "jackcarver", name: "Jack Carver", game: "fc1", role: "Protagonist",
    affiliation: "Boat charter captain, ex-special forces", epithet: "Stranded, Not Sunk",
    blurb: "A boat charter captain and former special-forces operative, stranded on the islands after his boat is destroyed, forced to fight through mercenaries and genetically engineered soldiers to rescue a journalist and uncover a rogue scientist's experiments." },
  { id: "krieger", name: "Dr. Krieger", game: "fc1", role: "Antagonist",
    affiliation: "Rogue geneticist", epithet: "The Island's Own Creator",
    blurb: "A brilliant, morally unmoored geneticist whose private island lab produces the very mutant super-soldiers hunting Jack across it." },

  // ===== FAR CRY 2 (2008) =====
  { id: "paul", name: "Paul Ferenc", game: "fc2", role: "Protagonist",
    affiliation: " Corporal, IDF (retired); Contraband smuggler", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },
    { id: "andre", name: "Andre Hyppolite", game: "fc2", role: "Protagonist",
    affiliation: "Private; NA (retired); Paramilitary; Insurgent", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },
     { id: "warren", name: "Warren Clyde", game: "fc2", role: "Protagonist",
    affiliation: "Registered security permit Florida State", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },

    { id: "josip", name: "Josip Idromeno", game: "fc2", role: "Protagonist",
    affiliation: "Paratrooper, YPA (retired); Bodyguard; Teamster; Guerrilla (KLA)", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },

    { id: "bai", name: "Xianyong Bai", game: "fc2", role: "Protagonist",
    affiliation: "Contraband smuggler; Informant, FIA, ISI, stop-loss consultant, Cameroon, Zambia)", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },
    
    { id: "singh", name: "Quarbani Singh", game: "fc2", role: "Protagonist",
    affiliation: "SMF (retired) instructor", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },

    { id: "hakim", name: "Hakim Echebbi", game: "fc2", role: "Protagonist",
    affiliation: "Lt Cmdr, Navy (retired)", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },

    { id: "marty", name: "Marty Alencar", game: "fc2", role: "Protagonist",
    affiliation: "USMC (Force protection); SOUTHCOM advisory group Columbia, Peru (retired)", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },

    { id: "frank", name: "Frank Bilders", game: "fc2", role: "Protagonist",
    affiliation: "Prov IRA (direct action) weapons smuggle", epithet: "The Job That Wouldn't End",
    blurb: "A hired gun sent to assassinate an arms dealer, who contracts the same deadly malaria the conflict runs on and has to survive both the disease and the war just to finish the job." },

  { id: "jackal", name: "The Jackal", game: "fc2", role: "Antagonist",
    affiliation: "Arms dealer, former UN peacekeeper", epithet: "The War's Only Honest Voice",
    blurb: "A former UN peacekeeper turned arms dealer whose cynical philosophy about the region's endless conflict makes him both the target and, unsettlingly, the most coherent voice in the whole war." },

  // ===== FAR CRY 3 (2012) =====
  { id: "jasonbrody", name: "Jason Brody", game: "fc3", role: "Protagonist",
    affiliation: "Tourist, later island warrior", epithet: "The Tourist Who Didn't Leave",
    blurb: "A privileged young tourist whose vacation turns into a fight for survival after pirates kidnap his friends, slowly reshaping him into exactly the kind of warrior the island seems to be grooming him to become." },
  { id: "vaas", name: "Vaas Montenegro", game: "fc3", role: "Antagonist",
    affiliation: "Pirate lieutenant", epithet: "The Island's Loudest Warning",
    blurb: "A volatile, magnetic pirate lieutenant whose unpredictable cruelty makes him the island's most immediate threat, serving a slave-trading empire that goes deeper than he lets on." },
  { id: "hoytvolker", name: "Hoyt Volker", game: "fc3", role: "Antagonist",
    affiliation: "Slave trader, private army commander", epithet: "The Business Above the Chaos",
    blurb: "The disciplined, businesslike slave trader running the empire Vaas only thinks he controls, treating the entire island as one large, profitable inventory." },

  // ===== FAR CRY 4 (2014) =====
  { id: "ajayghale", name: "Ajay Ghale", game: "fc4", role: "Protagonist",
    affiliation: "Kyrati-American, son of a Golden Path founder", epithet: "His Mother's Unfinished War",
    blurb: "A Kyrati-American returning to his parents' homeland to scatter his mother's ashes, and finding himself pulled into a civil war his own mother once helped lead." },
  { id: "paganmin", name: "Pagan Min", game: "fc4", role: "Antagonist",
    affiliation: "Self-proclaimed King of Kyrat", epithet: "Charm as a Weapon",
    blurb: "The flamboyant, self-appointed king of Kyrat, whose charm and violence are so tightly wound together that even his enemies struggle to know where they stand with him." },

  // ===== FAR CRY PRIMAL (2016) =====
  { id: "takkar", name: "Takkar", game: "primal", role: "Protagonist",
    affiliation: "Hunter of the Wenja tribe", epithet: "The Last of the Wenja Hunters",
    blurb: "A hunter of the Wenja tribe stranded without weapons or allies at the dawn of the Stone Age, who rebuilds his people's fortunes one tamed beast and reclaimed territory at a time." },
  { id: "ull", name: "Ull", game: "primal", role: "Antagonist",
    affiliation: "Leader of the Udam", epithet: "Hunger Given a Name",
    blurb: "The leader of the Udam, a cannibalistic tribe that hunts anything weaker than itself and sees Takkar's people as nothing more than the next meal." },
  { id: "batari", name: "Batari", game: "primal", role: "Antagonist",
    affiliation: "Leader of the Izila", epithet: "A Prophet of Fire",
    blurb: "The ruler of the fire-worshipping Izila, convinced her people are destined to burn everything else in Oros to the ground in service of her god." },

  // ===== FAR CRY 5 (2018) =====
  { id: "deputy", name: "The Deputy", game: "fc5", role: "Protagonist",
    affiliation: "Hope County Sheriff's Department", epithet: "The Arrest That Started It",
    blurb: "A rookie Hope County sheriff's deputy whose attempted arrest of a cult leader triggers the very uprising it was meant to prevent." },
  { id: "josephseed", name: "Joseph Seed", game: "fc5", role: "Antagonist",
    affiliation: "The Father, Eden's Gate", epithet: "Certain of the End",
    blurb: "The self-proclaimed prophet of a doomsday cult, whose calm certainty that the end times are coming is somehow more unsettling than if he were simply a raving fanatic." },
  { id: "johnseed", name: "John Seed", game: "fc5", role: "Antagonist",
    affiliation: "Herald, Eden's Gate", epithet: "Confession as Control",
    blurb: "Joseph's brother and the cult's enforcer of confession and atonement, using guilt itself as the instrument he breaks people with." },
  { id: "jacobseed", name: "Jacob Seed", game: "fc5", role: "Antagonist",
    affiliation: "Herald, Eden's Gate", epithet: "Survival of the Strongest",
    blurb: "A former soldier turned Herald who believes only the strong deserve to survive what's coming, and conditions Hope County's people accordingly." },
  { id: "faithseed", name: "Faith Seed", game: "fc5", role: "Antagonist",
    affiliation: "Herald, Eden's Gate", epithet: "The Gentle Trap",
    blurb: "The youngest Herald, whose serene presence and a drug-laced fog called Bliss make her recruits' surrender feel less like capture and more like peace." },

  // ===== FAR CRY NEW DAWN (2019) =====
  { id: "captain", name: "The Captain", game: "newdawn", role: "Protagonist",
    affiliation: "Survivor coalition", epithet: "Rebuilding After the End",
    blurb: "A survivor arriving in post-apocalyptic Hope County to help rebuild what's left of it, only to find the county's new order is just as violent as its old one." },
  { id: "mickey", name: "Mickey", game: "newdawn", role: "Antagonist",
    affiliation: "Highwaymen, twin leader", epithet: "Scarcity as an Economy",
    blurb: "One half of the twin sisters leading the Highwaymen raider gang, who've turned the wasteland's scarcity into their own brutal economy." },
  { id: "lou", name: "Lou", game: "newdawn", role: "Antagonist",
    affiliation: "Highwaymen, twin leader", epithet: "Scarcity as an Economy",
    blurb: "The other half of the Highwaymen's twin leadership, just as ruthless as her sister in keeping the gang's grip on Hope County's dwindling resources." },

  // ===== FAR CRY 6 (2021) =====
  { id: "danirojas", name: "Dani Rojas", game: "fc6", role: "Protagonist",
    affiliation: "Libertad guerrilla movement", epithet: "Yara's Newest Recruit, By Force",
    blurb: "A Yaran forced into the dictatorship's own army, who escapes and joins a ragtag guerrilla movement to liberate the island from the inside." },
  { id: "clara", name: "Clara Garcia", game: "fc6", role: "Protagonist",
    affiliation: "Co-founder, Libertad", epithet: "The Revolution's First Believer",
    blurb: "A co-founder of the Libertad guerrilla movement, hardened by years of fighting Castillo's regime long before Dani ever picked up a weapon." },
  { id: "antoncastillo", name: "Antón Castillo", game: "fc6", role: "Antagonist",
    affiliation: "President of Yara", epithet: "Salvation, His Way",
    blurb: "Yara's authoritarian president, whose genuine belief that he's saving his country justifies, in his own mind, exactly how far he's willing to go to keep it — including what he demands of his own son." },
  { id: "diegocastillo", name: "Diego Castillo", game: "fc6", role: "Antagonist",
    affiliation: "Son of Antón Castillo", epithet: "Being Raised to Replace Him",
    blurb: "Antón's teenage son, being groomed to inherit both a country and a role he's increasingly unsure he wants any part of." },
];