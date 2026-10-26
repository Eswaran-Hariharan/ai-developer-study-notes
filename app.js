/* AI Study Notes — web edition renderer */
(function () {
  "use strict";

  const navList = document.getElementById("navList");
  const chapters = document.getElementById("chapters");
  const chipRow = document.getElementById("chipRow");
  const search = document.getElementById("search");

  // ---- Render sidebar nav ----
  NOTES.forEach(c => {
    const li = document.createElement("li");
    li.dataset.n = c.n;
    li.innerHTML = `<a href="#ch-${c.n}"><span class="num">${c.n}.</span><span class="t">${c.title}</span></a>`;
    navList.appendChild(li);
  });

  // ---- Render intro chips (first 8 chapters as quick links) ----
  NOTES.slice(0, 8).forEach(c => {
    const a = document.createElement("a");
    a.className = "chip";
    a.href = `#ch-${c.n}`;
    a.textContent = c.title;
    chipRow.appendChild(a);
  });

  // ---- Render chapter cards ----
  NOTES.forEach(c => {
    const card = document.createElement("section");
    card.className = "chapter";
    card.id = `ch-${c.n}`;
    card.dataset.n = c.n;
    card.dataset.search = (c.title + " " + (c.tags || []).join(" ")).toLowerCase();
    card.innerHTML = `
      <div class="ch-head">
        <div class="ch-badge">${c.n}</div>
        <h2>${c.title}</h2>
        <span class="pg">Page ${c.page}</span>
      </div>
      <div class="ch-toggle">
        <button type="button" class="view-text active">📖 Readable</button>
        <button type="button" class="view-image">🖼️ Original page</button>
      </div>
      <div class="ch-body">
        <div class="text-pane">${c.html}</div>
        <div class="image-pane">
          <img loading="lazy" src="${c.img}" alt="Original study-note page ${c.page}: ${c.title}" />
          <div class="cap">Original handwritten page — ${c.page}</div>
        </div>
      </div>`;
    chapters.appendChild(card);

    // toggle handlers
    const body = card.querySelector(".ch-body");
    const btnText = card.querySelector(".view-text");
    const btnImg = card.querySelector(".view-image");
    btnText.addEventListener("click", () => {
      body.classList.remove("image-view");
      btnText.classList.add("active"); btnImg.classList.remove("active");
    });
    btnImg.addEventListener("click", () => {
      body.classList.add("image-view");
      btnImg.classList.add("active"); btnText.classList.remove("active");
    });
  });

  // ---- Search filter ----
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let anyVisible = false;
    NOTES.forEach(c => {
      const card = document.getElementById(`ch-${c.n}`);
      const navLi = navList.querySelector(`li[data-n="${c.n}"]`);
      const match = !q || card.dataset.search.includes(q) ||
        card.querySelector(".text-pane").textContent.toLowerCase().includes(q);
      card.style.display = match ? "" : "none";
      if (navLi) navLi.classList.toggle("hidden", !match);
      if (match) anyVisible = true;
    });
    const home = document.getElementById("home");
    if (home) home.style.display = q ? "none" : "";
  });

  // ---- Theme toggle ----
  const themeBtn = document.getElementById("themeBtn");
  const syncTheme = () => { themeBtn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙"; };
  syncTheme();
  themeBtn.addEventListener("click", () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("ai-notes-theme", dark ? "dark" : "light"); } catch (e) {}
    syncTheme();
  });

  // ---- Mobile sidebar ----
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const menuBtn = document.getElementById("menuBtn");
  const openMenu = () => { sidebar.classList.add("open"); backdrop.classList.add("show"); };
  const closeMenu = () => { sidebar.classList.remove("open"); backdrop.classList.remove("show"); };
  menuBtn.addEventListener("click", () => sidebar.classList.contains("open") ? closeMenu() : openMenu());
  backdrop.addEventListener("click", closeMenu);
  navList.addEventListener("click", e => { if (e.target.closest("a") && window.innerWidth <= 900) closeMenu(); });

  // ---- Progress bar + back-to-top ----
  const bar = document.getElementById("progress");
  const topBtn = document.getElementById("topBtn");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = max > 0 ? (h.scrollTop / max * 100) + "%" : "0%";
    topBtn.classList.toggle("show", h.scrollTop > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---- Scroll-spy: highlight active chapter in nav ----
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const n = en.target.dataset.n;
        navList.querySelectorAll("a").forEach(a => a.classList.remove("active"));
        const link = navList.querySelector(`li[data-n="${n}"] a`);
        if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  NOTES.forEach(c => { const el = document.getElementById(`ch-${c.n}`); if (el) spy.observe(el); });
})();
