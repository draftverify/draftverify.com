(function(){
  const btn = document.getElementById('navToggle');
  const panel = document.getElementById('mobileMenu');
  function closeMenu(){ if(!btn||!panel) return; btn.setAttribute('aria-expanded','false'); panel.classList.remove('open'); }
  function toggleMenu(){ if(!btn||!panel) return; const o = btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded', String(!o)); panel.classList.toggle('open', !o); }
  if(btn){
    btn.addEventListener('click', toggleMenu);
    window.addEventListener('resize', ()=>{ if(window.innerWidth>=901) closeMenu(); });
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeMenu(); });
    panel?.addEventListener('click', e=>{ if(e.target.closest('a')) closeMenu(); });
  }

  const ddParent = document.querySelector('.has-dd');
  const ddBtn = ddParent?.querySelector('.dd-btn');
  if(ddBtn && ddParent){
    ddBtn.addEventListener('click', ()=>{
      const open = ddBtn.getAttribute('aria-expanded')==='true';
      ddBtn.setAttribute('aria-expanded', String(!open));
      ddParent.toggleAttribute('data-open');
    });
    ddParent.addEventListener('keydown', (e)=>{
      if(e.key==='Escape'){ ddBtn.setAttribute('aria-expanded','false'); ddParent.removeAttribute('data-open'); ddBtn.focus(); }
    });
  }

  const here = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('header a[href]').forEach(a=>{
    const abs = new URL(a.getAttribute('href'), location.origin).pathname;
    if(abs===here) a.setAttribute('aria-current','page');
  });
})();
