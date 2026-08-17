// ===== Scroll-reveal utility =====
// Adds .in-view to any .reveal element once it scrolls into the
// viewport, then stops watching it (one-time reveal, not re-triggered
// on scroll back up). Falls back to revealing everything immediately
// if IntersectionObserver isn't available.
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

// Applies a staggered transition-delay to a NodeList/array of elements,
// so grid items cascade in rather than popping together.
function staggerReveal(elements, stepMs = 60, maxMs = 480) {
  elements.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * stepMs, maxMs)}ms`;
  });
}
