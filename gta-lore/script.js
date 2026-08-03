// ===== Ink seal reveal (break / reseal) =====
document.querySelectorAll('.seal-block').forEach((el) => {
  const seal = el.querySelector('.seal');
  const resealBtn = el.querySelector('.reseal-btn');

  const breakSeal = () => {
    el.classList.add('open');
    seal?.setAttribute('aria-expanded', 'true');
  };
  const reseal = () => {
    el.classList.remove('open');
    seal?.setAttribute('aria-expanded', 'false');
  };

  seal?.addEventListener('click', breakSeal);
  resealBtn?.addEventListener('click', reseal);
});

// ===== Image fallbacks =====
// Faction banners and figure portraits use manually-supplied image paths.
// If a path doesn't resolve, swap in a placeholder instead of a broken icon.
document.querySelectorAll('.faction-banner img').forEach((img) => {
  img.addEventListener('error', () => {
    img.closest('.faction-banner')?.classList.add('img-missing');
  });
});

document.querySelectorAll('.figure-photo').forEach((img) => {
  img.addEventListener('error', () => {
    const frame = img.closest('.mask-frame');
    frame?.classList.add('img-missing');
    const label = frame?.querySelector('.mask-label');
    if (label) label.textContent = 'no image';
  });
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
