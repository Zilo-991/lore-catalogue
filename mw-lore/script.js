// ===== Redaction reveal (declassify / re-classify) =====
// Each .redact block holds the real text underneath a black bar.
// Clicking the bar declassifies it. A small RE-CLASSIFY tab appears
// once open, so it can be sealed back up again.
document.querySelectorAll('.redact').forEach((el) => {
  const bar = el.querySelector('.bar');
  const reclassifyBtn = el.querySelector('.reclassify-btn');

  const declassify = () => {
    el.classList.add('open');
    bar?.setAttribute('aria-expanded', 'true');
  };

  const reclassify = () => {
    el.classList.remove('open');
    bar?.setAttribute('aria-expanded', 'false');
  };

  bar?.addEventListener('click', declassify);
  reclassifyBtn?.addEventListener('click', reclassify);
});

// ===== Image fallbacks =====
// If a faction banner or operative portrait path doesn't resolve
// (paths are added manually), show a placeholder instead of a
// broken-image icon.
document.querySelectorAll('.faction-img img').forEach((img) => {
  img.addEventListener('error', () => {
    img.closest('.faction-img')?.classList.add('img-missing');
  });
});

document.querySelectorAll('.op-photo').forEach((img) => {
  img.addEventListener('error', () => {
    const frame = img.closest('.photo-frame');
    frame?.classList.add('img-missing');
    const label = frame?.querySelector('.photo-label');
    if (label) label.textContent = 'NO PHOTO';
  });
});

// ===== Active nav tab on scroll =====
const sections = document.querySelectorAll('main section[id]');
const tabs = document.querySelectorAll('.tab');

const setActive = () => {
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 140;

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) {
      current = section.id;
    }
  });

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();
