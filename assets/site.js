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

// 2) Mobile menu toggle + accessibility
(function(){
  const body = document.body;
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  const backdrop = document.getElementById('nav-backdrop');

  if(!toggle || !nav) return;

  function openNav(){
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

  toggle.addEventListener('click', toggleNav);
  backdrop && backdrop.addEventListener('click', closeNav);
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeNav(); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
})();

// 3) Header shadow on scroll
(function(){
  const header = document.querySelector('.header');
  if(!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 6);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
})();

// 4) Scroll-reveal for .reveal (respects reduced motion)
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
