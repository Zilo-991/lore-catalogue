// ===== Read ?id= from the URL and render that character's file =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const character = AC_CHARACTERS.find(c => c.id === requestedId);

const view = document.getElementById('file-view');
const pageTitle = document.getElementById('page-title');

if (character) {
  pageTitle.textContent = `${character.name}`;

  const game = AC_GAMES.find(g => g.id === character.game);
  const roleCls = character.role === 'Protagonist' ? '' : character.role === 'Antagonist' ? 'antagonist' : 'modern';
  const gameLabel = game ? game.title : 'Modern Day';

  view.innerHTML = `
    <div class="file-scene ${roleCls}">
      <div class="file-portrait-scene">
        <img src="images/roster/${character.id}.jpg" alt="${character.name}">
        <span class="portrait-fallback">image pending</span>
      </div>
      <span class="corner-bracket" aria-hidden="true"></span>
      <div class="file-text">
        <h1 class="file-name">${character.name}</h1>
        <p class="file-epithet">${character.epithet}</p>
        <div class="file-facts">
          <p><span class="fact-label">Affiliation:</span> <span class="fact-value">${character.affiliation}</span></p>
          <p><span class="fact-label">Era:</span> <span class="fact-value">${character.era}</span></p>
        </div>
        <p class="file-blurb">${character.blurb}</p>
        <div class="file-meta-row">
          <span class="status-pill">${character.role} — ${gameLabel}</span>
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
      <h2>Memory Not Found</h2>
      <p>No genetic record matches "${requestedId ?? ''}" in the Animus database.</p>
      <a class="back-link" href="index.html">← Back to Database</a>
    </div>
  `;
}
