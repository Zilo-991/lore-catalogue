// ===== Read ?id= from the URL and render that game's page =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const game = DMC_GAMES.find(g => g.id === requestedId);

const view = document.getElementById('game-view');
const pageTitle = document.getElementById('page-title');

function miniCharCard(character) {
  const roleCls = character.role === 'Protagonist' ? 'protagonist' : 'antagonist';
  return `
    <a class="char-card ${roleCls}" href="character.html?id=${character.id}">
      <span class="rank-badge">${character.rank}</span>
      <span class="role-tag ${roleCls}">${character.role}</span>
      <img class="char-img" src="images/roster/${character.id}.jpg" alt="${character.name}" loading="lazy">
      <span class="portrait-fallback">image pending</span>
      <div class="char-overlay">
        <span class="char-name">${character.name}</span>
        <span class="char-affiliation">${character.affiliation}</span>
      </div>
    </a>`;
}

function weaponCard(weapon, gameId) {
  const slug = weapon.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `
    <div class="weapon-card">
      <div class="weapon-img">
        <img src="images/weapons/${gameId}-${slug}.jpg" alt="${weapon.name}" loading="lazy">
        <span class="cover-fallback"><span>${weapon.name}</span></span>
      </div>
      <div class="weapon-body">
        <h4>${weapon.name}</h4>
        <p>${weapon.desc}</p>
      </div>
    </div>`;
}

if (game) {
  pageTitle.textContent = `${game.title}`;

  const chars = DMC_CHARACTERS.filter(c => c.game === game.id);
  const protagonists = chars.filter(c => c.role === 'Protagonist');
  const antagonists = chars.filter(c => c.role === 'Antagonist');

  view.innerHTML = `
    <div class="game-banner reveal">
      <img src="images/banners/${game.banner}" alt="${game.title}">
      <span class="cover-fallback"><span>${game.title}</span></span>
      <div class="game-banner-overlay">
        <span class="game-banner-year">${game.year}</span>
        <h1 class="title-display game-banner-title">${game.title}</h1>
      </div>
    </div>

    <div class="game-tabs-wrap reveal">
      <div class="game-tabs" role="tablist">
        <button class="game-tab active" role="tab" aria-selected="true" data-panel="protagonist">
          Protagonist <span class="tab-count">${protagonists.length}</span>
        </button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="antagonist">
          Antagonist <span class="tab-count">${antagonists.length}</span>
        </button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="weapons">
          Weapons <span class="tab-count">${game.weapons.length}</span>
        </button>
      </div>

      <div class="game-panel" id="panel-protagonist" role="tabpanel">
        <div class="char-grid">${protagonists.map(miniCharCard).join('') || '<p class="empty-note">No protagonist profile on file yet.</p>'}</div>
        <p class="conflict-text">${game.conflict}</p>
      </div>
      <div class="game-panel" id="panel-antagonist" role="tabpanel" hidden>
        <div class="char-grid">${antagonists.map(miniCharCard).join('') || '<p class="empty-note">No antagonist profile on file yet.</p>'}</div>
      </div>
      <div class="game-panel" id="panel-weapons" role="tabpanel" hidden>
        <div class="weapon-grid">${game.weapons.map(w => weaponCard(w, game.id)).join('')}</div>
      </div>
    </div>
  `;

  // image fallbacks
  const bannerImg = view.querySelector('.game-banner img');
  bannerImg.addEventListener('error', () => view.querySelector('.game-banner').classList.add('img-missing'));
  view.querySelectorAll('.char-card').forEach((card) => {
    const img = card.querySelector('.char-img');
    img?.addEventListener('error', () => card.classList.add('img-missing'));
  });
  view.querySelectorAll('.weapon-img').forEach((wrap) => {
    const img = wrap.querySelector('img');
    img?.addEventListener('error', () => wrap.classList.add('img-missing'));
  });

  // scroll-reveal: banner + tabs wrapper fade in as you reach them,
  // character cards inside the initially-visible panel cascade in
  staggerReveal(view.querySelectorAll('#panel-protagonist .char-card'));
  initReveal();

  // tab switching
  const tabs = view.querySelectorAll('.game-tab');
  const panels = view.querySelectorAll('.game-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => { p.hidden = true; });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`panel-${tab.dataset.panel}`);
      panel.hidden = false;
      staggerReveal(panel.querySelectorAll('.char-card:not(.in-view)'));
      initReveal(panel);
    });
  });
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>Mission Not Found</h2>
      <p>No game record matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="dmc.html#games">← Back to Games</a>
    </div>
  `;
}
