/* Data-driven clean card renderer. Builds a plain-background SVG per chapter. */
(function () {
  "use strict";

  const PALETTE = {
    indigo: { bg: "#eef2ff", border: "#c7d2fe", head: "#3730a3" },
    blue:   { bg: "#eff6ff", border: "#bfdbfe", head: "#1d4ed8" },
    green:  { bg: "#ecfdf5", border: "#a7f3d0", head: "#047857" },
    teal:   { bg: "#f0fdfa", border: "#99f6e4", head: "#0f766e" },
    purple: { bg: "#f5f3ff", border: "#ddd6fe", head: "#6d28d9" },
    orange: { bg: "#fff7ed", border: "#fed7aa", head: "#c2410c" },
    rose:   { bg: "#fff1f2", border: "#fecdd3", head: "#be123c" },
    slate:  { bg: "#f1f5f9", border: "#cbd5e1", head: "#334155" },
  };

  const W = 900;                 // card width
  const PAD = 36;                // outer padding
  const GAP = 18;                // gap between blocks
  const COL_W = (W - PAD * 2 - GAP) / 2; // two columns
  const HEAD_H = 92;             // header band height
  const LINE_H = 21;             // bullet line height
  const BLOCK_HEAD = 40;         // space for block heading
  const BLOCK_PAD_BOTTOM = 16;
  const CHAR_W = 6.6;            // approx char width at 13px for wrapping

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // crude but effective word-wrap to a pixel width
  function wrap(text, maxWidth) {
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = "";
    const max = Math.floor(maxWidth / CHAR_W);
    for (const w of words) {
      const test = line ? line + " " + w : w;
      if (test.length > max && line) { lines.push(line); line = w; }
      else { line = test; }
    }
    if (line) lines.push(line);
    return lines;
  }

  function blockHeight(block) {
    let lines = 0;
    block.items.forEach(it => { lines += wrap(it, COL_W - 36).length; });
    return BLOCK_HEAD + lines * LINE_H + BLOCK_PAD_BOTTOM;
  }

  function buildSVG(card) {
    // distribute blocks into two balanced columns
    const heights = card.blocks.map(blockHeight);
    const colY = [HEAD_H + PAD, HEAD_H + PAD];
    const colX = [PAD, PAD + COL_W + GAP];
    const placements = [];
    card.blocks.forEach((b, i) => {
      const col = colY[0] <= colY[1] ? 0 : 1;
      placements.push({ b, x: colX[col], y: colY[col], h: heights[i] });
      colY[col] += heights[i] + GAP;
    });
    const H = Math.max(colY[0], colY[1]) + PAD - GAP + 14;

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif">`;
    svg += `<rect width="${W}" height="${H}" fill="#ffffff"/>`;
    // header band
    svg += `<rect x="0" y="0" width="${W}" height="${HEAD_H}" fill="#2b4fd6"/>`;
    svg += `<text x="${PAD}" y="${card.subtitle ? 46 : 56}" font-size="28" font-weight="800" fill="#ffffff">${esc(card.title)}</text>`;
    if (card.subtitle)
      svg += `<text x="${PAD}" y="74" font-size="14" fill="#cdd8ff">${esc(card.subtitle)}</text>`;

    // blocks
    placements.forEach(p => {
      const c = PALETTE[p.b.color] || PALETTE.slate;
      svg += `<rect x="${p.x}" y="${p.y}" width="${COL_W}" height="${p.h}" rx="12" fill="${c.bg}" stroke="${c.border}"/>`;
      svg += `<text x="${p.x + 18}" y="${p.y + 28}" font-size="16" font-weight="700" fill="${c.head}">${esc(p.b.h)}</text>`;
      let ty = p.y + BLOCK_HEAD + 8;
      p.b.items.forEach(it => {
        const lines = wrap(it, COL_W - 36);
        lines.forEach((ln, idx) => {
          const bullet = idx === 0 ? "•&#160;" : "&#160;&#160;";
          svg += `<text x="${p.x + 18}" y="${ty}" font-size="13" fill="#1c2230">${bullet}${esc(ln)}</text>`;
          ty += LINE_H;
        });
      });
    });

    svg += `</svg>`;
    return svg;
  }

  const gallery = document.getElementById("gallery");
  const svgStrings = {};

  CARDS.forEach(card => {
    const svg = buildSVG(card);
    svgStrings[card.n] = svg;

    const wrapEl = document.createElement("div");
    wrapEl.className = "card-wrap";
    wrapEl.innerHTML = `
      <div class="svg-host">${svg}</div>
      <div class="card-actions">
        <span class="name">${esc(card.title)}</span>
        <button class="ghost" data-svg="${card.n}">⬇ SVG</button>
        <button data-png="${card.n}">⬇ PNG</button>
      </div>`;
    gallery.appendChild(wrapEl);
  });

  function download(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function slug(card) {
    return "ai-card-" + String(card.n).padStart(2, "0") + "-" +
      card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function svgToPng(svgStr, scale, cb) {
    const vb = svgStr.match(/viewBox="0 0 (\d+) (\d+)"/);
    const w = vb ? +vb[1] : 900, h = vb ? +vb[2] : 600;
    const img = new Image();
    const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = w * scale; canvas.height = h * scale;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob(cb, "image/png");
    };
    img.onerror = function () { URL.revokeObjectURL(url); alert("PNG export failed for this card."); };
    img.src = url;
  }

  gallery.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const nSvg = btn.getAttribute("data-svg");
    const nPng = btn.getAttribute("data-png");
    if (nSvg) {
      const card = CARDS.find(c => c.n == nSvg);
      download(slug(card) + ".svg", new Blob([svgStrings[nSvg]], { type: "image/svg+xml" }));
    } else if (nPng) {
      const card = CARDS.find(c => c.n == nPng);
      svgToPng(svgStrings[nPng], 2, blob => { if (blob) download(slug(card) + ".png", blob); });
    }
  });

  // Download all SVGs sequentially
  document.getElementById("dlAllSvg").addEventListener("click", () => {
    CARDS.forEach((card, i) => {
      setTimeout(() => {
        download(slug(card) + ".svg", new Blob([svgStrings[card.n]], { type: "image/svg+xml" }));
      }, i * 300);
    });
  });

  document.getElementById("printBtn").addEventListener("click", () => window.print());
})();
