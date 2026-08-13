// ===== Render game cover tiles from data.js =====
function gameTile(game) {
  const chars = FC_CHARACTERS.filter(c => c.game === game.id);
  const protagonists = chars.filter(c => c.role === 'Protagonist').length;
  const antagonists = chars.filter(c => c.role === 'Antagonist').length;
  return `
    <a class="game-tile" href="game.html?id=${game.id}">
      <div class="tile-cover">
        <img src="images/covers/${game.cover}" alt="${game.title}" loading="lazy">
        <span class="cover-fallback"><span>${game.title}</span></span>
      </div>
      <div class="tile-info">
        <span class="tile-title">${game.title}</span>
        <span class="tile-meta">${game.year} · ${game.location.name}</span>
        <span class="tile-counts">${protagonists} Protagonist${protagonists===1?'':'s'} · ${antagonists} Antagonist${antagonists===1?'':'s'}</span>
      </div>
    </a>`;
}

const gamesContainer = document.getElementById('games-container');
if (gamesContainer) {
  gamesContainer.innerHTML = FC_GAMES.map(gameTile).join('');
}

// ===== Image fallbacks =====
document.querySelectorAll('.tile-cover').forEach((cover) => {
  const img = cover.querySelector('img');
  img?.addEventListener('error', () => cover.classList.add('img-missing'));
});

const heroImg = document.querySelector('.hero-bg img');
heroImg?.addEventListener('error', () => {
  heroImg.closest('.hero-bg')?.classList.add('img-missing');
});

// ===== Active nav tab on scroll =====
const sections = document.querySelectorAll('main section[id]');
const tabs = document.querySelectorAll('.tab');

const setActive = () => {
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 140;

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) current = section.id;
  });

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();