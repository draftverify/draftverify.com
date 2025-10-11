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

// 2) Mobile menu: robust toggle with CSS var top + scroll lock
(function(){
  const body = document.body;
  const root = document.documentElement;
  const header = document.querySelector('.header');
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  const backdrop = document.getElementById('nav-backdrop');

  if(!toggle || !nav || !header) return;

  function setPanelTop(){
    const h = header.getBoundingClientRect().height || 60;
    root.style.setProperty('--nav-top', `${h}px`);
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

  toggle.addEventListener('click', toggleNav, { passive: true });
  backdrop && backdrop.addEventListener('click', closeNav, { passive: true });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeNav(); });

  // Close after clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  // Keep panel aligned on resize/scroll/orientation
  ['resize','orientationchange'].forEach(ev => window.addEventListener(ev, setPanelTop, { passive:true }));
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 6);
    if (body.classList.contains('nav-open')) setPanelTop();
  }, { passive:true });

  // Initial
  setPanelTop();
})();

// 3) Scroll-reveal (respects reduced motion)
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
