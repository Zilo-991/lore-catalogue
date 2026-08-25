// ===== Read ?id= from the URL and render that game's page =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const game = HM_GAMES.find(g => g.id === requestedId);

const view = document.getElementById('game-view');
const pageTitle = document.getElementById('page-title');

const pageBgImg = document.querySelector('.page-bg img');
pageBgImg?.addEventListener('error', () => pageBgImg.closest('.page-bg')?.classList.add('img-missing'));

function targetCard(item) {
  return `
    <a class="item-card" href="character.html?id=${item.id}">
      <span class="barcode-scan" aria-hidden="true"></span>
      <div class="item-thumb">
        <img src="images/roster/${item.id}.jpg" alt="${item.name}" loading="lazy">
        <span class="img-fallback"><span>${item.name}</span></span>
      </div>
      <div class="item-body">
        <span class="item-name">${item.name}</span>
        <span class="item-tag">${item.tag}</span>
      </div>
    </a>`;
}

if (game) {
  pageTitle.textContent = `${game.title}`

  const targets = HM_ITEMS.filter(i => i.category === 'target' && i.game === game.id);
  const agent47 = HM_ITEMS.find(i => i.id === 'agent-47');

  view.innerHTML = `
    <div class="game-banner">
      <img src="images/banners/${game.banner}" alt="${game.title}">
      <span class="img-fallback"><span>${game.title}</span></span>
      <div class="game-banner-overlay">
        <span class="game-banner-year">${game.year}</span>
        <h1 class="title-display game-banner-title">${game.title}</h1>
      </div>
    </div>

    <div class="game-tabs-wrap">
      <div class="game-tabs" role="tablist">
        <button class="game-tab active" role="tab" aria-selected="true" data-panel="brief">Brief</button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="targets">Targets <span class="tab-count">${targets.length}</span></button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="destinations">Destinations</button>
      </div>

      <div class="game-panel" id="panel-brief" role="tabpanel">
        ${agent47 ? `
        <a class="item-card wide" href="character.html?id=${agent47.id}">
          <span class="barcode-scan" aria-hidden="true"></span>
          <div class="item-thumb">
            <img src="images/roster/${agent47.id}.jpg" alt="${agent47.name}" loading="lazy">
            <span class="img-fallback"><span>${agent47.name}</span></span>
          </div>
          <div class="item-body">
            <span class="item-name">${agent47.name}</span>
            <span class="item-tag">${agent47.tag}</span>
          </div>
        </a>` : ''}
        <p class="brief-text">${game.brief}</p>
      </div>

      <div class="game-panel" id="panel-targets" role="tabpanel" hidden>
        <div class="item-grid">${targets.map(targetCard).join('') || '<p class="empty-note">No target files on record.</p>'}</div>
      </div>

      <div class="game-panel" id="panel-destinations" role="tabpanel" hidden>
        <div class="destination-grid">
          ${game.locations.map((loc, i) => `
            <div class="destination-card">
              <span class="dest-index">${String(i + 1).padStart(2, '0')}</span>
              <div class="dest-body">
                <h4>${loc.name}</h4>
                <p>${loc.desc}</p>
              </div>
            </div>`).join('')}
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
  // reveal + stagger
  staggerReveal(view.querySelectorAll('#panel-brief .item-card'));
  staggerReveal(view.querySelectorAll('.destination-card'));
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
      staggerReveal(panel.querySelectorAll('.item-card:not(.in-view), .destination-card:not(.in-view)'));
      initReveal(panel);
    });
  });
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>File Not Found</h2>
      <p>No contract matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="hitman.html#games">← Back to Trilogy</a>
    </div>
  `;
}