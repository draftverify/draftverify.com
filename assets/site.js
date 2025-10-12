// Highlight active nav (desktop & drawer)
(function(){
  const routes = [
    { path: '/standards/', key: 'standards' },
    { path: '/line-tags/', key: 'line-tags' },
    { path: '/tower-stickers/', key: 'tower-stickers' },
    { path: '/pricing/', key: 'pricing' },
    { path: '/training/', key: 'training' },
    { path: '/contact/', key: 'contact' },
  ];
  const hit = routes.find(m => location.pathname.startsWith(m.path));
  if (hit)
    document.querySelectorAll(`a[data-nav="${hit.key}"]`)
      .forEach(a => a.classList.add('active'));
})();

// Mobile drawer: stable & aligned under sticky header
(function(){
  const body = document.body;
  const root = document.documentElement;
  const header = document.querySelector('.header');
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');
  if (!toggle || !drawer || !backdrop || !header) return;

  function setTop(){
    const h = header.offsetHeight || 64;
    root.style.setProperty('--nav-top', `${h}px`);
  }
  function openNav(){
    setTop();
    body.classList.add('nav-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded','true');
    drawer.setAttribute('aria-hidden','false');
    backdrop.hidden = false;
  }
  function closeNav(){
    body.classList.remove('nav-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
    drawer.setAttribute('aria-hidden','true');
    backdrop.hidden = true;
  }
  function toggleNav(){
    if (body.classList.contains('nav-open')) closeNav();
    else openNav();
  }

  // Click / tap
  toggle.addEventListener('click', (e) => { e.stopPropagation(); toggleNav(); });
  backdrop.addEventListener('click', closeNav);
  drawer.addEventListener('click', (e) => { if (e.target.matches('a')) closeNav(); });

  // Esc to close
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });

  // Keep drawer aligned below sticky header
  ['resize','orientationchange'].forEach(ev =>
    window.addEventListener(ev, setTop, { passive:true })
  );
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 6);
    if (body.classList.contains('nav-open')) setTop();
  }, { passive:true });

  setTop();
})();

// Scroll-reveal (reduced motion friendly)
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (prefersReduced) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();
