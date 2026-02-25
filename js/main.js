/* =============================================
   THEME
   ============================================= */

const THEME_KEY = 'edc0der-theme';
const html   = document.documentElement;
const toggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) { applyTheme(saved); return; }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

initTheme();

/* =============================================
   SMOOTH SCROLL
   ============================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const navH = document.getElementById('nav').offsetHeight;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* =============================================
   NAV — highlight active section
   ============================================= */

const navLinks  = document.querySelectorAll('.nav__link');
const sections  = document.querySelectorAll('main section[id]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle(
        'nav__link--active',
        link.getAttribute('href') === `#${entry.target.id}`
      );
    });
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));

/* =============================================
   LIGHTBOX — activates on any page with .gallery__img
   ============================================= */

(function () {
  const imgs = document.querySelectorAll('.gallery__img');
  if (!imgs.length) return;

  const lb       = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lbImg');
  const lbCount  = document.getElementById('lbCounter');
  const lbClose  = document.getElementById('lbClose');
  const lbPrev   = document.getElementById('lbPrev');
  const lbNext   = document.getElementById('lbNext');

  const slides = Array.from(imgs).map(img => ({ src: img.src, alt: img.alt }));
  let current  = 0;

  function show(idx) {
    current        = (idx + slides.length) % slides.length;
    lbImg.src      = slides[current].src;
    lbImg.alt      = slides[current].alt;
    lbCount.textContent = `${current + 1} / ${slides.length}`;
    lbPrev.classList.toggle('lightbox__btn--hidden', slides.length < 2);
    lbNext.classList.toggle('lightbox__btn--hidden', slides.length < 2);
  }

  function open(idx) {
    show(idx);
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function close() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Open on image click
  imgs.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => open(i));
  });

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => show(current - 1));
  lbNext.addEventListener('click', () => show(current + 1));

  // Close on backdrop click
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target === lb.querySelector('.lightbox__backdrop')) close();
  });

  // Keyboard: Esc, ←, →
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Touch swipe
  let touchX = 0;
  lb.addEventListener('touchstart', e => { touchX = e.changedTouches[0].screenX; }, { passive: true });
  lb.addEventListener('touchend',   e => {
    const diff = touchX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) diff > 0 ? show(current + 1) : show(current - 1);
  }, { passive: true });
}());
