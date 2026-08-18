// ===== Read ?type= from the URL and render that category's items =====
const params = new URLSearchParams(window.location.search);
const requestedType = params.get('type');
const category = SC_CATEGORIES.find(c => c.id === requestedType);

const view = document.getElementById('category-view');
const pageTitle = document.getElementById('page-title');

function itemCard(item) {
  return `
    <article class="item-card">
      <div class="item-thumb">
        <img src="images/${item.category}/${item.id}.jpg" alt="${item.name}" loading="lazy">
        <span class="cat-fallback"><span>${item.name}</span></span>
      </div>
      <div class="item-body">
        <h3>${item.name}</h3>
        <span class="item-tag">${item.tag}</span>
        <p>${item.blurb}</p>
      </div>
    </article>`;
}

if (category) {
  pageTitle.textContent = `${category.label} :: Splinter Cell Archive`;
  const items = SC_ITEMS.filter(i => i.category === category.id);

  view.innerHTML = `
    <div class="section-head">
      <p class="eyebrow">Field Index</p>
      <h1 class="title-display small">${category.label}</h1>
      <p class="section-desc">${category.desc}</p>
    </div>
    <div class="item-grid">${items.map(itemCard).join('')}</div>
  `;

  view.querySelectorAll('.item-thumb').forEach((thumb) => {
    const img = thumb.querySelector('img');
    img?.addEventListener('error', () => thumb.classList.add('img-missing'));
  });
} else {
  view.innerHTML = `
    <div class="file-not-found">
      <h2>Category Not Found</h2>
      <p>No index matches "${requestedType ?? ''}" in the archive.</p>
      <a class="back-link" href="sc.html#categories">← Back to Categories</a>
    </div>
  `;
}