// ===== Render character cards, grouped by game, from data.js =====
function roleTag(role) {
  const label = role === 'Protagonist' ? 'Assassin' : role === 'Antagonist' ? 'Templar' : 'Modern';
  const cls = role === 'Protagonist' ? 'protagonist' : role === 'Antagonist' ? 'antagonist' : 'modern';
  return `<span class="role-tag ${cls}">${label}</span>`;
}

function charCard(character) {
  const roleCls = character.role === 'Protagonist' ? 'protagonist'
    : character.role === 'Antagonist' ? 'antagonist' : 'modern';
  return `
    <a class="char-card ${roleCls}" href="character.html?id=${character.id}">
      ${roleTag(character.role)}
      <img class="char-img" src="images/roster/${character.id}.jpg" alt="${character.name}" loading="lazy">
      <span class="portrait-fallback">image pending</span>
      <div class="char-overlay">
        <span class="char-name">${character.name}</span>
        <span class="char-affiliation">${character.affiliation}</span>
      </div>
    </a>`;
}

// ---- Games section: cover tiles linking to each game's own page ----
function gameTile(game) {
  const chars = AC_CHARACTERS.filter(c => c.game === game.id);
  const assassins = chars.filter(c => c.role === 'Protagonist').length;
  const templars = chars.filter(c => c.role === 'Antagonist').length;
  return `
    <a class="game-tile" href="game.html?id=${game.id}">
      <div class="tile-cover">
        <img src="images/covers/${game.cover}" alt="${game.title}" loading="lazy">
        <span class="cover-fallback"><span>${game.title}</span></span>
      </div>
      <div class="tile-info">
        <span class="tile-title">${game.title}</span>
        <span class="tile-meta">${game.year} · ${game.setting}</span>
        <span class="tile-counts">${assassins} Assassin${assassins===1?'':'s'} · ${templars} Templar${templars===1?'':'s'}</span>
      </div>
    </a>`;
}

const gamesContainer = document.getElementById('games-container');
if (gamesContainer) {
  gamesContainer.innerHTML = AC_GAMES.map(gameTile).join('');
}

// ---- Modern Day section ----
const modernGrid = document.getElementById('modern-grid');
if (modernGrid) {
  const modernChars = AC_CHARACTERS.filter(c => c.game === 'modern');
  modernGrid.innerHTML = modernChars.map(charCard).join('');
}

// ===== Image fallbacks =====
document.querySelectorAll('.char-card').forEach((card) => {
  const img = card.querySelector('.char-img');
  img?.addEventListener('error', () => card.classList.add('img-missing'));
});

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
