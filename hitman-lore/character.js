// ===== Read ?id= from the URL and render that character's file =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const character = HM_ITEMS.find(i => i.id === requestedId);

const view = document.getElementById('file-view');
const pageTitle = document.getElementById('page-title');

const pageBgImg = document.querySelector('.page-bg img');
pageBgImg?.addEventListener('error', () => pageBgImg.closest('.page-bg')?.classList.add('img-missing'));

if (character) {
  pageTitle.textContent = `${character.name}`;

  const game = HM_GAMES.find(g => g.id === character.game);
  const isTarget = character.category === 'target';
  const isWeapon = character.category === 'weapon';
  const statusLabel = isTarget ? 'Sanctioned Target' : isWeapon ? 'Signature Equipment' : 'Field Constant';

  // point the header's back link at this character's own game page
  const headerBack = document.querySelector('.site-header .tab');
  if (headerBack && game) {
    headerBack.href = `game.html?id=${game.id}`;
    headerBack.textContent = `← Back to ${game.title}`;
  }

  view.innerHTML = `
    <div class="file-scene ${isTarget ? 'target' : isWeapon ? 'weapon' : ''}">
      <div class="file-portrait-scene">
        <img src="images/roster/${character.id}.jpg" alt="${character.name}">
        <span class="portrait-fallback"><span>${character.name}</span></span>
      </div>
      <span class="corner-barcode" aria-hidden="true"></span>
      <div class="file-text reveal">
        <h1 class="file-name">${character.name}</h1>
        <p class="file-epithet">${character.epithet}</p>
        <div class="file-facts">
          <p><span class="fact-label">Designation:</span> <span class="fact-value">${character.tag}</span></p>
          <p><span class="fact-label">Appears in:</span> <span class="fact-value">${game ? game.title : 'All three games'}</span></p>
        </div>
        <p class="file-blurb">${character.blurb}</p>
        <div class="file-meta-row">
          <span class="status-pill">${statusLabel}</span>
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
      <h2>File Not Found</h2>
      <p>No record matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="hitman.html#games">← Back to Trilogy</a>
    </div>
  `;
}