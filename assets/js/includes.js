(function(){
  async function inject(el){
    const file = el.getAttribute('data-include');
    if(!file) return;
    try{
      const res = await fetch(file, {cache:'no-store'});
      if(!res.ok) throw new Error('Fetch failed');
      const html = await res.text();
      el.outerHTML = html;
    }catch(e){
      console.error('Include error:', file, e);
    }
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-include]').forEach(inject);
  });
})();
