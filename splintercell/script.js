// ===== Render category tiles, matching the wiki's popular-categories grid =====
function categoryTile(cat) {
  const count = SC_ITEMS.filter(i => i.category === cat.id).length;
  return `
    <a class="cat-tile" href="category.html?type=${cat.id}">
      <div class="cat-thumb">
        <img src="images/categories/${cat.id}.jpg" alt="${cat.label}" loading="lazy">
        <span class="cat-fallback"><span>${cat.label}</span></span>
      </div>
      <div class="cat-label-row">
        <span class="cat-label">${cat.label}</span>
        <span class="cat-icon" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </span>
      </div>
      <span class="cat-count">${count} entries</span>
    </a>`;
}

const categoriesContainer = document.getElementById('categories-container');
if (categoriesContainer) {
  categoriesContainer.innerHTML = SC_CATEGORIES.map(categoryTile).join('');
}

// ===== Image fallbacks =====
document.querySelectorAll('.cat-thumb').forEach((thumb) => {
  const img = thumb.querySelector('img');
  img?.addEventListener('error', () => thumb.classList.add('img-missing'));
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