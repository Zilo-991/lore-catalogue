// ===== Read ?id= from the URL and render that tournament's roster =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const game = MK_GAMES.find(g => g.id === requestedId);

const view = document.getElementById('game-view');
const pageTitle = document.getElementById('page-title');

function fighterLookup(id) {
  return MK_FIGHTERS.find(f => f.id === id);
}

function fighterCard(entry) {
  const fighter = fighterLookup(entry.fighter);
  if (!fighter) return '';
  const dlcTag = entry.status === 'DLC' ? `<span class="pack-tag">${entry.pack}</span>` : '';
  return `
    <a class="fighter-card" href="mk-character.html?id=${fighter.id}">
      <div class="fighter-thumb">
        <img src="images/roster/${fighter.id}.jpg" alt="${fighter.name}" loading="lazy">
        <span class="img-fallback"><span>${fighter.name}</span></span>
      </div>
      <div class="fighter-body">
        <span class="fighter-name">${fighter.name}</span>
        ${dlcTag}
      </div>
    </a>`;
}

if (game) {
  pageTitle.textContent = `${game.title}`;

  const roster = MK_ROSTERS[game.id];
  const base = roster.filter(r => r.status === 'Base');
  const dlc = roster.filter(r => r.status === 'DLC');

  // group DLC by pack, preserving first-seen pack order
  const packOrder = [];
  const packGroups = {};
  dlc.forEach((r) => {
    if (!packGroups[r.pack]) { packGroups[r.pack] = []; packOrder.push(r.pack); }
    packGroups[r.pack].push(r);
  });

  view.innerHTML = `
    <div class="game-banner">
      <img src="images/banners/${game.banner}" alt="${game.title}">
      <span class="img-fallback"><span>${game.title}</span></span>
      <div class="game-banner-overlay">
        <span class="game-banner-year">${game.year}</span>
        <img src="images/titles/${game.logo}">
        <p class="game-banner-tagline">${game.tagline}</p>
      </div>
    </div>

    <div class="game-tabs-wrap">
      <div class="game-tabs" role="tablist">
        <button class="game-tab active" role="tab" aria-selected="true" data-panel="base">Base Roster <span class="tab-count">${base.length}</span></button>
        <button class="game-tab" role="tab" aria-selected="false" data-panel="dlc">DLC Fighters <span class="tab-count">${dlc.length}</span></button>
      </div>

      <div class="game-panel" id="panel-base" role="tabpanel">
        <div class="fighter-grid">${base.map(fighterCard).join('')}</div>
      </div>

      <div class="game-panel" id="panel-dlc" role="tabpanel" hidden>
        ${packOrder.map(pack => `
          <h3 class="pack-heading">${pack}</h3>
          <div class="fighter-grid">${packGroups[pack].map(fighterCard).join('')}</div>
        `).join('')}
      </div>
    </div>
  `;

  // image fallbacks
  const bannerImg = view.querySelector('.game-banner img');
  bannerImg.addEventListener('error', () => view.querySelector('.game-banner').classList.add('img-missing'));
  view.querySelectorAll('.fighter-thumb').forEach((thumb) => {
    const img = thumb.querySelector('img');
    img?.addEventListener('error', () => thumb.classList.add('img-missing'));
  });

  staggerReveal(view.querySelectorAll('#panel-base .fighter-card'));
  initReveal();

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
      staggerReveal(panel.querySelectorAll('.fighter-card:not(.in-view)'));
      initReveal(panel);
    });
  });
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>Tournament Not Found</h2>
      <p>No record matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="mk.html#games">← Back to Tournaments</a>
    </div>
  `;
}