// ===== Read ?id= from the URL and render that fighter's file =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const fighter = MK_FIGHTERS.find(f => f.id === requestedId);

const view = document.getElementById('file-view');
const pageTitle = document.getElementById('page-title');

if (fighter) {
  pageTitle.textContent = `${fighter.name}`;

  // find every tournament + status this fighter appears in
  const appearances = MK_GAMES
    .map((game) => {
      const entry = MK_ROSTERS[game.id].find(r => r.fighter === fighter.id);
      if (!entry) return null;
      const label = entry.status === 'Base' ? 'Base Roster' : entry.pack;
      return { game, label };
    })
    .filter(Boolean);

  const isDlcOnly = appearances.every(a => a.label !== 'Base Roster');

  // link back to the first tournament this fighter appears in
  const headerBack = document.querySelector('.site-header .tab');
  if (headerBack && appearances[0]) {
    headerBack.href = `mk-game.html?id=${appearances[0].game.id}`;
    headerBack.textContent = `← Back to ${appearances[0].game.title}`;
  }

  const appearanceList = appearances
    .map(a => `${a.game.title} <span class="appearance-tag">${a.label}</span>`)
    .join(' &nbsp;&middot;&nbsp; ');

  view.innerHTML = `
    <div class="file-scene ${isDlcOnly ? 'dlc' : ''}">
      <div class="file-portrait-scene">
        <img src="images/roster/${fighter.id}.jpg" alt="${fighter.name}">
        <span class="portrait-fallback"><span>${fighter.name}</span></span>
      </div>
      <span class="corner-mark" aria-hidden="true">龍</span>
      <div class="file-text reveal">
        <h1 class="file-name">${fighter.name}</h1>
        <p class="file-epithet">${fighter.epithet}</p>
        <div class="file-facts">
          <p><span class="fact-label">Appears in:</span> <span class="fact-value">${appearanceList}</span></p>
        </div>
        <p class="file-blurb">${fighter.blurb}</p>
        <div class="file-meta-row">
          <span class="status-pill">${appearances.length} Tournament${appearances.length === 1 ? '' : 's'}</span>
        </div>
      </div>
    </div>
  `;

  const portraitScene = view.querySelector('.file-portrait-scene');
  const img = portraitScene.querySelector('img');
  img.addEventListener('error', () => portraitScene.classList.add('img-missing'));

  initReveal();
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>Fighter Not Found</h2>
      <p>No record matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="mk.html#games">← Back to Tournaments</a>
    </div>
  `;
}