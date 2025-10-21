/* ===== Fonts (same family the template uses) ===== */
@font-face {
  font-family: "Calibre";
  src: url("fonts/Calibre-Regular.woff2") format("woff2"),
       url("fonts/Calibre-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Calibre";
  src: url("fonts/Calibre-Semibold.woff2") format("woff2"),
       url("fonts/Calibre-Semibold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* ===== Base ===== */
* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: "Calibre", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  color: #fff;
  background: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --text: rgba(255,255,255,0.9);
  --muted: rgba(255,255,255,0.75);
  --accent: #ff4757; /* the red/pink button */
}

.row { width: 90%; max-width: 1100px; margin: 0 auto; }

/* ===== Nav (top-right, inline) ===== */
.nav {
  position: absolute; top: 0; left: 0; width: 100%; z-index: 10;
}
.nav__row {
  display: flex; align-items: center; justify-content: flex-end; padding: 28px 0;
}
ul.nav__links.site-nav {
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  gap: 32px;
}
.nav__links > li { display: inline-flex; align-items: center; }
.nav__link {
  text-decoration: none;
  color: var(--muted);
  font-weight: 500;
  letter-spacing: .02em;
  transition: color .2s ease, text-shadow .2s ease, opacity .2s ease;
}
.nav__link:hover,
.nav__link:focus {
  color: #fff;
  text-shadow: 0 0 1px rgba(255,255,255,.25);
  outline: none;
}
.nav__link:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

/* ===== Hero ===== */
.header {
  position: relative;
  min-height: 100vh;
  display: grid;
  align-items: center;
  background:
    linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.58)),
    url("images/hero.jpg") center/cover no-repeat fixed;
  /* If the image is missing you’ll only see black; ensure images/hero.jpg exists */
}
.header__text-box { padding: 140px 0 120px; }
.header__text { max-width: 780px; }

.heading-primary {
  margin: 0 0 12px;
  font-weight: 700;          /* Calibre Semibold */
  line-height: 1.1;
  font-size: clamp(36px, 6vw, 72px);
  letter-spacing: .02em;
  color: #fff;
}
.subline {
  margin: 0 0 28px;
  font-size: clamp(16px, 2.2vw, 22px);
  color: var(--text);
}

/* ===== Button ===== */
.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: .02em;
}
.btn--pink {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 10px 30px rgba(255,71,87,.25);
  transition: transform .15s ease, filter .15s ease;
}
.btn--pink:hover,
.btn--pink:focus { filter: brightness(1.08); transform: translateY(-1px); }

/* ===== Small screens ===== */
@media (max-width: 640px) {
  .nav__row { justify-content: center; }
  ul.nav__links.site-nav { gap: 22px; }
}
