// ===== Image fallbacks =====
// Figure and boss images use manually-supplied paths. If one doesn't
// resolve, swap in a placeholder instead of a broken icon.
document.querySelectorAll('.figure-img img').forEach((img) => {
  img.addEventListener('error', () => {
    img.closest('.figure-img')?.classList.add('img-missing');
  });
});

document.querySelectorAll('.boss-img img').forEach((img) => {
  img.addEventListener('error', () => {
    img.closest('.boss-img')?.classList.add('img-missing');
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
