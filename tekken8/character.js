// ===== Read ?id= from the URL and render that fighter's file =====
const params = new URLSearchParams(window.location.search);
const requestedId = params.get('id');
const fighter = TEKKEN_FIGHTERS.find(f => f.id === requestedId);

const view = document.getElementById('file-view');
const pageTitle = document.getElementById('page-title');

if (fighter) {
  pageTitle.textContent = `${fighter.name} :: Tekken 8 Archive`;

  const isDlc = fighter.category === 'dlc';
  const statusPill = isDlc
    ? `<span class="status-pill status-${fighter.status.toLowerCase()}">${fighter.status} — ${fighter.season}</span>`
    : `<span class="status-pill status-released">Base Roster</span>`;

  view.innerHTML = `
    <div class="file-scene${isDlc ? ' dlc' : ''}">
      <div class="file-portrait-scene">
        <img src="images/roster/${fighter.id}.jpg" alt="${fighter.name}">
        <span class="portrait-fallback">image pending</span>
      </div>
      <span class="corner-bracket" aria-hidden="true"></span>
      <div class="file-text">
        <h1 class="file-name">${fighter.name}</h1>
        <p class="file-epithet">${fighter.epithet}</p>
        <div class="file-facts">
          <p><span class="fact-label">Country of origin:</span> <span class="fact-value">${fighter.country}</span></p>
          <p><span class="fact-label">Fighting style:</span> <span class="fact-value">${fighter.style}</span></p>
        </div>
        <p class="file-blurb">${fighter.blurb}</p>
        <div class="file-meta-row">${statusPill}</div>
      </div>
    </div>
  `;

  const portraitScene = view.querySelector('.file-portrait-scene');
  const img = portraitScene.querySelector('img');
  img.addEventListener('error', () => portraitScene.classList.add('img-missing'));
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>Fighter Not Found</h2>
      <p>No entrant matches "${requestedId ?? ''}" in the registry.</p>
      <a class="back-link" href="index.html">← Back to Registry</a>
    </div>
  `;
}
