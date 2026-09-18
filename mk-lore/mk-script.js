function gameTile(game) {
  const roster = MK_ROSTERS[game.id];
  const baseCount = roster.filter(r => r.status === 'Base').length;
  const dlcCount = roster.filter(r => r.status === 'DLC').length;
  return `
    <a class="game-tile" href="mk-game.html?id=${game.id}">
      <div class="tile-cover">
        <img src="images/covers/${game.cover}" alt="${game.title}" loading="lazy">
        <span class="img-fallback"><span>${game.title}</span></span>
      </div>
      <div class="tile-info">
        <span class="tile-title">${game.title}</span>
        <span class="tile-year">${game.year}</span>
        <span class="tile-tagline">${game.tagline}</span>
        <span class="tile-counts">${baseCount} Base &middot; ${dlcCount} DLC</span>
      </div>
    </a>`;
}

const gamesContainer = document.getElementById('games-container');
if (gamesContainer) {
  gamesContainer.innerHTML = MK_GAMES.map(gameTile).join('');
  staggerReveal(gamesContainer.querySelectorAll('.game-tile'));
}

document.querySelectorAll('.tile-cover').forEach((el) => {
  const img = el.querySelector('img');
  img?.addEventListener('error', () => el.classList.add('img-missing'));
});
const heroImg = document.querySelector('.hero-bg img');
heroImg?.addEventListener('error', () => heroImg.closest('.hero-bg')?.classList.add('img-missing'));

const sections = document.querySelectorAll('main section[id]');
const tabs = document.querySelectorAll('.tab');
const setActive = () => {
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 140;
  sections.forEach((section) => { if (section.offsetTop <= scrollPos) current = section.id; });
  tabs.forEach((tab) => tab.classList.toggle('active', tab.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', setActive, { passive: true });
setActive();

initReveal();