// ===== Read ?id= from the URL and render that character's file =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const character = FC_CHARACTERS.find(c => c.id === requestedId);

const view = document.getElementById('file-view');
const pageTitle = document.getElementById('page-title');

if (character) {
  pageTitle.textContent = `${character.name}`;

  const game = FC_GAMES.find(g => g.id === character.game);
  const roleCls = character.role === 'Antagonist' ? 'antagonist' : '';

  // point the header's back link at this character's own game page
  const headerBack = document.querySelector('.site-header .tab');
  if (headerBack && game) {
    headerBack.href = `game.html?id=${game.id}`;
    headerBack.textContent = `← Back to ${game.title}`;
  }

  view.innerHTML = `
    <div class="file-scene ${roleCls}">
      <div class="file-portrait-scene">
        <img src="images/roster/${character.id}.png" alt="${character.name}">
        <span class="portrait-fallback">image pending</span>
      </div>
      <span class="corner-bracket" aria-hidden="true"></span>
      <div class="file-text">
        <h1 class="file-name">${character.name}</h1>
        <p class="file-epithet">${character.epithet}</p>
        <div class="file-facts">
          <p><span class="fact-label">Affiliation:</span> <span class="fact-value">${character.affiliation}</span></p>
          <p><span class="fact-label">Appears in:</span> <span class="fact-value">${game ? game.title : 'Unknown'}</span></p>
        </div>
        <p class="file-blurb">${character.blurb}</p>
        <div class="file-meta-row">
          <span class="status-pill">${character.role}</span>
        </div>
      </div>
    </div>
  `;

  const portraitScene = view.querySelector('.file-portrait-scene');
  const img = portraitScene.querySelector('img');
  img.addEventListener('error', () => portraitScene.classList.add('img-missing'));
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>Character Not Found</h2>
      <p>No record matches "${requestedId ?? ''}" in the archive.</p>
      <a class="back-link" href="index.html#games">← Back to Games</a>
    </div>
  `;
}