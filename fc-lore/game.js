// ===== Read ?id= from the URL and render that game's page =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const game = FC_GAMES.find(g => g.id === requestedId);

const view = document.getElementById('game-view');
const pageTitle = document.getElementById('page-title');

function miniCharCard(character) {
  const roleCls = character.role === 'Protagonist' ? 'protagonist' : 'antagonist';
  return `
    <a class="char-card ${roleCls}" href="character.html?id=${character.id}">
      <span class="role-tag ${roleCls}">${character.role}</span>
      <img class="char-img" src="images/roster/${character.id}.png" alt="${character.name}" loading="lazy">
      <span class="portrait-fallback">image pending</span>
      <div class="char-overlay">
        <span class="char-name">${character.name}</span>
        <span class="char-affiliation">${character.affiliation}</span>
      </div>
    </a>`;
}

if (game) {
  pageTitle.textContent = `${game.title}`;

  const chars = FC_CHARACTERS.filter(c => c.game === game.id);
  const protagonists = chars.filter(c => c.role === 'Protagonist');
  const antagonists = chars.filter(c => c.role === 'Antagonist');

  view.innerHTML = `
    <div class="game-banner">
      <img src="images/banners/${game.banner}" alt="${game.title}">
      <span class="cover-fallback"><span>${game.title}</span></span>
      <div class="game-banner-overlay">
        <span class="game-banner-year">${game.year} · ${game.place}</span>
        <h1 class="title-display game-banner-title">${game.title}</h1>
      </div>
    </div>

    <div class="game-tabs-wrap">
      <div class="game-tabs" role="tablist">
        <button class="game-tab active" role="tab" aria-selected="true" data-panel="protagonist">
          Protagonist <span class="tab-count">${protagonists.length}</span>
        </button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="antagonist">
          Antagonist <span class="tab-count">${antagonists.length}</span>
        </button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="place">
          Place of Exploration
        </button>
      </div>

      <div class="game-panel" id="panel-protagonist" role="tabpanel">
        <div class="char-grid">${protagonists.map(miniCharCard).join('') || '<p class="empty-note">No protagonist profile on file yet.</p>'}</div>
      </div>
      <div class="game-panel" id="panel-antagonist" role="tabpanel" hidden>
        <div class="char-grid">${antagonists.map(miniCharCard).join('') || '<p class="empty-note">No antagonist profile on file yet.</p>'}</div>
      </div>
      <div class="game-panel" id="panel-place" role="tabpanel" hidden>
        <div class="place-card">
          <div class="place-img">
            <img src="images/places/${game.id}.png" alt="${game.place}">
            <span class="cover-fallback"><span>${game.place}</span></span>
          </div>
          <div class="place-body">
            <h3>${game.place}</h3>
            <p>${game.placeDesc}</p>
          </div>
        </div>
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
  const placeImg = view.querySelector('.place-img img');
  placeImg?.addEventListener('error', () => view.querySelector('.place-img').classList.add('img-missing'));

  // tab switching
  const tabs = view.querySelectorAll('.game-tab');
  const panels = view.querySelectorAll('.game-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => { p.hidden = true; });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(`panel-${tab.dataset.panel}`).hidden = false;
    });
  });
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>Region Not Found</h2>
      <p>No game record matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="index.html#games">← Back to Games</a>
    </div>
  `;
}