// ===== Read ?id= from the URL and render that expedition's page =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const game = UC_GAMES.find(g => g.id === requestedId);

const view = document.getElementById('game-view');
const pageTitle = document.getElementById('page-title');

function charCard(item) {
  return `
    <a class="item-card" href="character.html?id=${item.id}">
      <div class="item-thumb">
        <img src="images/roster/${item.id}.jpg" alt="${item.name}" loading="lazy">
        <span class="img-fallback"><span>${item.name}</span></span>
      </div>
      <div class="item-body">
        <span class="item-name">${item.name}</span>
        <span class="item-tag">${item.affiliation}</span>
      </div>
    </a>`;
}

if (game) {
  pageTitle.textContent = `${game.title}`;

  const protagonists = UC_CHARACTERS.filter(c =>
  (Array.isArray(c.game) ? c.game.includes(game.id) : c.game === game.id) &&
  c.role === 'Protagonist'
);
  const antagonists = UC_CHARACTERS.filter(c => c.game === game.id && c.role === 'Antagonist');

  view.innerHTML = `
    <div class="game-banner">
      <img src="images/banners/${game.banner}" alt="${game.title}">
      <span class="img-fallback"><span>${game.title}</span></span>
      <div class="game-banner-overlay">
        <span class="game-banner-year">${game.year}</span>
        <img src="images/title/${game.logo}" alt="${game.title}">
      </div>
    </div>

    <div class="game-tabs-wrap">
      <div class="game-tabs" role="tablist">
        <button class="game-tab active" role="tab" aria-selected="true" data-panel="hunters">Fortune Hunters <span class="tab-count">${protagonists.length}</span></button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="rivals">Rivals <span class="tab-count">${antagonists.length}</span></button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="location">Location</button>
      </div>

      <div class="game-panel" id="panel-hunters" role="tabpanel">
        <div class="item-grid">${protagonists.map(charCard).join('') || '<p class="empty-note">No fortune hunters on record for this expedition.</p>'}</div>
        <p class="brief-text">${game.brief}</p>
      </div>

      <div class="game-panel" id="panel-rivals" role="tabpanel" hidden>
        <div class="item-grid">${antagonists.map(charCard).join('') || '<p class="empty-note">No rivals on record for this expedition.</p>'}</div>
      </div>

      <div class="game-panel" id="panel-location" role="tabpanel" hidden>
        <div class="location-card">
          <div class="location-img">
            <img src="images/destinations/${game.id}.png" alt="${game.location}">
            <span class="img-fallback"><span>${game.location}</span></span>
          </div>
          <div class="location-body">
            <h3>${game.location}</h3>
            <p>${game.locationDesc}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // image fallbacks
  const bannerImg = view.querySelector('.game-banner img');
  bannerImg.addEventListener('error', () => view.querySelector('.game-banner').classList.add('img-missing'));
  view.querySelectorAll('.item-thumb').forEach((thumb) => {
    const img = thumb.querySelector('img');
    img?.addEventListener('error', () => thumb.classList.add('img-missing'));
  });
  const locImg = view.querySelector('.location-img img');
  locImg?.addEventListener('error', () => view.querySelector('.location-img').classList.add('img-missing'));

  // reveal + stagger
  staggerReveal(view.querySelectorAll('#panel-hunters .item-card'));
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
      staggerReveal(panel.querySelectorAll('.item-card:not(.in-view)'));
      initReveal(panel);
    });
  });
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>Expedition Not Found</h2>
      <p>No journal entry matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="uc.html#games">← Back to Expeditions</a>
    </div>
  `;
}