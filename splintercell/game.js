// ===== Read ?id= from the URL and render that game's page =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const game = SC_GAMES.find(g => g.id === requestedId);

const view = document.getElementById('game-view');
const pageTitle = document.getElementById('page-title');

if (game) {
  pageTitle.textContent = `Tom Clancy's Splinter Cell: ${game.title}`;

  const sam = SC_ITEMS.find(i => i.id === 'sam-fisher');

  view.innerHTML = `
    <div class="game-banner">
      <img src="images/banners/${game.banner}" alt="${game.title}">
      <span class="cat-fallback"><span>${game.title}</span></span>
      <div class="game-banner-overlay">
        <span class="game-banner-year">${game.year}</span>
        <img src="images/titles/${game.logo}">
      </div>
    </div>

    <div class="game-tabs-wrap">
      <div class="game-tabs" role="tablist">
        <button class="game-tab active" role="tab" aria-selected="true" data-panel="protagonist">Protagonist</button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="antagonist">Antagonist</button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="place">Place of Exploration</button>
      </div>

      <div class="game-panel" id="panel-protagonist" role="tabpanel">
        ${sam ? `
        <article class="item-card">
          <div class="item-thumb">
            <img src="images/characters/${sam.id}.jpg" alt="${sam.name}" loading="lazy">
            <span class="cat-fallback"><span>${sam.name}</span></span>
          </div>
          <div class="item-body">
            <h3>${sam.name}</h3>
            <span class="item-tag">${sam.tag}</span>
            <p>${sam.blurb}</p>
          </div>
        </article>` : ''}
        <p class="threat-text">${game.blurb}</p>
      </div>

      <div class="game-panel" id="panel-antagonist" role="tabpanel" hidden>
        <p class="threat-text">${game.threat}</p>
      </div>

      <div class="game-panel" id="panel-place" role="tabpanel" hidden>
        <div class="place-card">
          <div class="place-img">
            <img src="images/places/${game.id}.jpg" alt="${game.location}">
            <span class="cat-fallback"><span>${game.location}</span></span>
          </div>
          <div class="place-body">
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
      <h2>Mission Not Found</h2>
      <p>No game record matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="index.html#games">← Back to Games</a>
    </div>
  `;
}