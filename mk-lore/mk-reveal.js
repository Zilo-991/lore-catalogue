// ===== Scroll-reveal utility =====
function initReveal(root = document) {
  const items = root.querySelectorAll('.reveal:not(.in-view)');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach(el => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  items.forEach((el) => observer.observe(el));
}

function staggerReveal(elements, stepMs = 40, maxMs = 480) {
  elements.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * stepMs, maxMs)}ms`;
  });
}