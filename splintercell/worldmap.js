// ===== World map background, drawn from streaming binary code =====
// WORLD_MAP_GRID (loaded from worldmap-grid.js) marks which coarse
// grid cells are "land". Each land column gets its own falling column
// of 0/1 characters, like Matrix rain — but only inside the map shape,
// so the continents are visibly built out of the running code itself.
(function () {
  const canvas = document.getElementById('worldmap-canvas');
  if (!canvas || typeof WORLD_MAP_GRID === 'undefined') return;
  const ctx = canvas.getContext('2d');

  const GRID_COLS = WORLD_MAP_GRID[0].length;
  const GRID_ROWS = WORLD_MAP_GRID.length;

  let width, height, cellW, cellH;
  let drops = []; // per land-column: current fall position (in grid rows)
  let landColumns = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    cellW = width / GRID_COLS;
    cellH = height / GRID_ROWS;

    // find every column that has at least one land cell
    landColumns = [];
    for (let x = 0; x < GRID_COLS; x++) {
      let hasLand = false;
      for (let y = 0; y < GRID_ROWS; y++) {
        if (WORLD_MAP_GRID[y][x] === '1') { hasLand = true; break; }
      }
      if (hasLand) landColumns.push(x);
    }
    drops = landColumns.map(() => Math.random() * GRID_ROWS);
  }

  function isLand(col, row) {
    if (row < 0 || row >= GRID_ROWS) return false;
    return WORLD_MAP_GRID[row][col] === '1';
  }

  function draw() {
    ctx.fillStyle = 'rgba(4, 8, 6, 0.15)';
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${Math.max(cellH * 0.9, 8)}px "Space Mono", monospace`;
    ctx.textBaseline = 'top';

    landColumns.forEach((col, i) => {
      const row = Math.floor(drops[i]);
      // draw a short trailing streak upward from the current row,
      // but only render characters that actually fall within land
      for (let t = 0; t < 6; t++) {
        const r = row - t;
        if (!isLand(col, r)) continue;
        const char = Math.random() > 0.5 ? '1' : '0';
        const alpha = t === 0 ? 1 : 0.85 - t * 0.14;
        ctx.fillStyle = t === 0
          ? 'rgba(140, 255, 170, 0.95)'
          : `rgba(57, 255, 106, ${Math.max(alpha, 0)})`;
        ctx.fillText(char, col * cellW, r * cellH);
      }

      drops[i] += 0.28;
      if (drops[i] - 6 > GRID_ROWS + 4) {
        drops[i] = -Math.random() * GRID_ROWS * 0.5;
      }
    });
  }

  resize();
  window.addEventListener('resize', resize);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // draw a single static-ish pass instead of a running animation
    for (let n = 0; n < 40; n++) draw();
  } else {
    setInterval(draw, 70);
  }
})();