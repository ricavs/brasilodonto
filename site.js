(function(){
  var btn=document.getElementById('hamburgerBtn'), menu=document.getElementById('mobileMenu');
  function setMenu(open){
    menu.classList.toggle('is-open',open); btn.classList.toggle('is-open',open);
    btn.setAttribute('aria-expanded',String(open)); document.body.style.overflow=open?'hidden':'';
  }
  btn.addEventListener('click',function(){ setMenu(!menu.classList.contains('is-open')); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ setMenu(false); }); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') setMenu(false); });

  function track(name,p){ if(typeof gtag==='function') gtag('event',name,p||{}); }
  document.querySelectorAll('a[href*="wa.me"]').forEach(function(a){
    a.addEventListener('click',function(){
      var s=a.closest('section,header,footer,aside');
      track('whatsapp_click',{page_path:location.pathname,link_location:s?(s.id||s.className.split(' ')[0]||s.tagName.toLowerCase()):'flutuante',link_text:a.textContent.trim(),event_category:'contato'});
      if(s&&s.classList.contains('cta-band')) track('generate_lead',{page_path:location.pathname,event_category:'conversao'});
    });
  });
  document.querySelectorAll('[data-ga-event="phone_click"],[data-ga-event="como_chegar"]').forEach(function(a){
    a.addEventListener('click',function(){ track(a.getAttribute('data-ga-event'),{page_path:location.pathname}); });
  });
})();
