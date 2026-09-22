// Highlight active nav (desktop & drawer)
(function(){
  const routes = [
    { path: '/standards/', key: 'standards' },
    { path: '/docs/', key: 'standards' },
    { path: '/how-it-works/', key: 'how-it-works' },
    { path: '/technology/', key: 'technology' },
    { path: '/solutions/', key: 'solutions' },
    { path: '/why-safety-matters/', key: 'resources' },
    { path: '/learn/', key: 'resources' },
    { path: '/faq/', key: 'resources' },
    { path: '/training/', key: 'resources' },
    { path: '/line-tags/', key: 'resources' },
    { path: '/tower-stickers/', key: 'resources' },
    { path: '/pricing/', key: 'pricing' },
    { path: '/contact/', key: 'contact' },
    { path: '/onboarding/', key: 'contact' }
  ];
  const hit = routes.find(m => location.pathname.startsWith(m.path));
  if (hit) {
    document.querySelectorAll(`a[data-nav="${hit.key}"]`)
      .forEach(a => a.classList.add('active'));
  }
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
    const h = header.offsetHeight || 72;
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

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    body.classList.contains('nav-open') ? closeNav() : openNav();
  });
  backdrop.addEventListener('click', closeNav);
  drawer.addEventListener('click', (e) => { if (e.target.matches('a')) closeNav(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });

  ['resize','orientationchange'].forEach(ev =>
    window.addEventListener(ev, setTop, { passive:true })
  );
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 6);
    if (body.classList.contains('nav-open')) setTop();
  }, { passive:true });

  setTop();
})();

// Keep legacy reveal hooks visible; motion is intentionally restrained.
document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
