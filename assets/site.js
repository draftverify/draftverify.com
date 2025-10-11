// Highlight active nav (desktop & drawer)
(function(){
  const routes = [
    { path: '/standards/',      key: 'standards' },
    { path: '/line-tags/',      key: 'line-tags' },
    { path: '/tower-stickers/', key: 'tower-stickers' },
    { path: '/pricing/',        key: 'pricing' },
    { path: '/training/',       key: 'training' },
    { path: '/contact/',        key: 'contact' },
  ];
  const hit = routes.find(m => location.pathname.startsWith(m.path));
  if (hit) document.querySelectorAll(`a[data-nav="${hit.key}"]`).forEach(a => a.classList.add('active'));
})();

// Mobile drawer: deterministic and aligned under sticky header
(function(){
  const body = document.body, root = document.documentElement;
  const header = document.querySelector('.header');
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');
  if (!toggle || !drawer || !header) return;

  function setTop(){
    const h = header.getBoundingClientRect().height || 64;
    root.style.setProperty('--nav-top', `${h}px`);
  }
  function open(){
    setTop();
    body.classList.add('nav-open');
    toggle.classList.add('is-open');                       // NEW: animate to X
    toggle.setAttribute('aria-expanded','true');
    drawer.setAttribute('aria-hidden','false');
    if (backdrop) backdrop.hidden = false;
  }
  function close(){
    body.classList.remove('nav-open');
    toggle.classList.remove('is-open');                    // NEW: reset icon
    toggle.setAttribute('aria-expanded','false');
    drawer.setAttribute('aria-hidden','true');
    if (backdrop) backdrop.hidden = true;
  }
  function toggleNav(){
    if (body.classList.contains('nav-open')) close();
    else open();
  }

  toggle.addEventListener('click', toggleNav);
  backdrop && backdrop.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  ['resize','orientationchange'].forEach(ev => window.addEventListener(ev, setTop, { passive:true }));
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 6);
    if (body.classList.contains('nav-open')) setTop();
  }, { passive:true });

  setTop();
})();


// Scroll-reveal (respects reduced motion)
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (prefersReduced) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();
