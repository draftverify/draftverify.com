// 1) Active link highlighting for subpages
(function(){
  const routes = [
    { path: '/standards/',      key: 'standards' },
    { path: '/line-tags/',      key: 'line-tags' },
    { path: '/tower-stickers/', key: 'tower-stickers' },
    { path: '/pricing/',        key: 'pricing' },
    { path: '/training/',       key: 'training' },
    { path: '/contact/',        key: 'contact' },
  ];
  const r = routes.find(m => location.pathname.startsWith(m.path));
  if (r) {
    const link = document.querySelector(`a[data-nav="${r.key}"]`);
    if (link) link.classList.add('active');
  }
})();

// 2) Mobile menu: robust toggle + correct top offset
(function(){
  const body = document.body;
  const header = document.querySelector('.header');
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  const backdrop = document.getElementById('nav-backdrop');

  if(!toggle || !nav || !header) return;

  function setPanelTop(){
    const h = header.getBoundingClientRect().height;
    nav.style.top = `${h}px`;
  }

  function openNav(){
    setPanelTop();
    body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded','true');
    if (backdrop) backdrop.hidden = false;
  }
  function closeNav(){
    body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded','false');
    if (backdrop) backdrop.hidden = true;
  }
  function toggleNav(){
    body.classList.contains('nav-open') ? closeNav() : openNav();
  }

  // Events
  toggle.addEventListener('click', toggleNav);
  backdrop && backdrop.addEventListener('click', closeNav);
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeNav(); });

  // Close after clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  // Keep panel aligned on resize/scroll (header height may change)
  window.addEventListener('resize', setPanelTop, { passive: true });
  window.addEventListener('orientationchange', setPanelTop);
  window.addEventListener('scroll', () => {
    // add shadow on scroll
    header.classList.toggle('scrolled', window.scrollY > 6);
    if (body.classList.contains('nav-open')) setPanelTop();
  }, { passive: true });

  // Initial
  setPanelTop();
})();

// 3) Scroll-reveal for .reveal elements (respects reduced motion)
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (prefersReduced) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();
