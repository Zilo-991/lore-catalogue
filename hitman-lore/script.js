// ===== Game cover tiles =====
function gameTile(game) {
  return `
    <a class="game-tile" href="game.html?id=${game.id}">
      <div class="tile-cover">
        <img src="images/covers/${game.cover}" alt="${game.title}" loading="lazy">
        <span class="img-fallback"><span>${game.title}</span></span>
      </div>
      <div class="tile-info">
        <span class="tile-title">${game.title}</span>
        <span class="tile-year">${game.year}</span>
        <span class="tile-tagline">${game.tagline}</span>
      </div>
    </a>`;
}

const gamesContainer = document.getElementById('games-container');
if (gamesContainer) {
  gamesContainer.innerHTML = HM_GAMES.map(gameTile).join('');
  staggerReveal(gamesContainer.querySelectorAll('.game-tile'));
}

// ===== Constant roster (Agent 47, Diana) =====
function itemCard(item) {
  return `
    <a class="item-card" href="character.html?id=${item.id}">
      <span class="barcode-scan" aria-hidden="true"></span>
      <div class="item-thumb">
        <img src="images/roster/${item.id}.jpg" alt="${item.name}" loading="lazy">
        <span class="img-fallback"><span>${item.name}</span></span>
      </div>
      <div class="item-body">
        <span class="item-name">${item.name}</span>
        <span class="item-tag">${item.tag}</span>
      </div>
    </a>`;
}

const rosterContainer = document.getElementById('roster-container');
if (rosterContainer) {
  const protagonists = HM_ITEMS.filter(i => i.category === 'protagonist');
  rosterContainer.innerHTML = protagonists.map(itemCard).join('');
  staggerReveal(rosterContainer.querySelectorAll('.item-card'));
}

// ===== Weapons grid =====
const weaponsContainer = document.getElementById('weapons-container');
if (weaponsContainer) {
  const weapons = HM_ITEMS.filter(i => i.category === 'weapon');
  weaponsContainer.innerHTML = weapons.map(itemCard).join('');
  staggerReveal(weaponsContainer.querySelectorAll('.item-card'));
}

// ===== Image fallbacks =====
document.querySelectorAll('.tile-cover, .item-thumb').forEach((el) => {
  const img = el.querySelector('img');
  img?.addEventListener('error', () => el.classList.add('img-missing'));
});
const heroImg = document.querySelector('.hero-bg img');
heroImg?.addEventListener('error', () => heroImg.closest('.hero-bg')?.classList.add('img-missing'));

const pageBgImg = document.querySelector('.page-bg img');
pageBgImg?.addEventListener('error', () => pageBgImg.closest('.page-bg')?.classList.add('img-missing'));

// ===== Active nav tab on scroll =====
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