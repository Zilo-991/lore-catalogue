// ===== Render fighter cards from data.js =====
// Card layout mirrors the official Tekken 8 site's character-select
// grid: full-bleed portrait, angled corner, diagonal DLC ribbon, name
// overlaid at the bottom on a gradient scrim.
function fighterCard(fighter) {
  const isDlc = fighter.category === 'dlc';
  const dlcRibbon = isDlc ? `<span class="dlc-ribbon">DLC</span>` : '';
  const statusCorner = isDlc
    ? `<span class="status-corner status-${fighter.status.toLowerCase()}">${fighter.status}</span>`
    : '';
  return `
    <a class="fighter-card" href="character.html?id=${fighter.id}">
      ${dlcRibbon}
      ${statusCorner}
      <img class="fighter-img" src="images/roster/${fighter.id}.jpg" alt="${fighter.name}" loading="lazy">
      <span class="portrait-fallback">image pending</span>
      <div class="fighter-overlay">
        <span class="fighter-name">${fighter.name}</span>
        
      </div>
    </a>`;
}

function renderGrid(containerId, fighters) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = fighters.map(fighterCard).join('');
}

const baseFighters = TEKKEN_FIGHTERS.filter(f => f.category === 'base');
renderGrid('base-grid', baseFighters);

const dlcFighters = TEKKEN_FIGHTERS.filter(f => f.category === 'dlc');
renderGrid('s1-grid', dlcFighters.filter(f => f.season === 'Season 1'));
renderGrid('s2-grid', dlcFighters.filter(f => f.season === 'Season 2'));
renderGrid('s3-grid', dlcFighters.filter(f => f.season === 'Season 3'));

// ===== Image fallbacks =====
document.querySelectorAll('.fighter-card').forEach((card) => {
  const img = card.querySelector('.fighter-img');
  img?.addEventListener('error', () => card.classList.add('img-missing'));
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
