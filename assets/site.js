// Highlight active nav for non-home pages
(function(){
  const routes = [
    { path: '/standards/', key: 'standards' },
    { path: '/contact/',   key: 'contact'   },
  ];
  const r = routes.find(m => location.pathname.startsWith(m.path));
  if (r) {
    const link = document.querySelector(`a[data-nav="${r.key}"]`);
    if (link) link.classList.add('active');
  }
})();
