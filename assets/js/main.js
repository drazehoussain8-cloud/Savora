/* SAVORA - main.js (vanilla JS, no dependencies) */
document.addEventListener('DOMContentLoaded',function(){
  var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var body=document.body;
  // UI strings (English by default; the Arabic pages load i18n-ar.js first to override them)
  var L=window.SAVORA_I18N||{};
  var tx=function(k,d){return L[k]||d};
  // UI strings (English by default; the Arabic pages load assets/js/i18n-ar.js first to override them)
  var T=window.SAVORA_I18N||{};
  var tx=function(k,d){return T[k]||d};

  // Header state + back-to-top
  var header=$('.header'),toTop=$('.to-top');
  var onScroll=function(){
    header.classList.toggle('scrolled',window.scrollY>40);
    if(toTop)toTop.classList.toggle('show',window.scrollY>700);
  };
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  if(toTop)toTop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

  // Mobile menu
  var burger=$('.burger'),links=$('.nav-links');
  var setMenu=function(open){
    body.classList.toggle('menu-open',open);
    burger.setAttribute('aria-expanded',open);
    burger.setAttribute('aria-label',open?tx('closeMenu','Close menu'):tx('openMenu','Open menu'));
    burger.innerHTML='<i data-i="'+(open?'x':'menu')+'"></i>';window.SavoraIcons(burger);
  };
  if(burger&&links){
    burger.addEventListener('click',function(){setMenu(!body.classList.contains('menu-open'))});
    $$('a',links).forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
    var bd=$('.menu-backdrop');if(bd)bd.addEventListener('click',function(){setMenu(false)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&body.classList.contains('menu-open')){setMenu(false);burger.focus()}});
    window.addEventListener('resize',function(){if(window.innerWidth>1024&&body.classList.contains('menu-open'))setMenu(false)});
  }

  // Scroll reveal
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    $$('.rv').forEach(function(el){io.observe(el)});
  }else{$$('.rv').forEach(function(el){el.classList.add('in')})}

  // Counters
  var fmt=function(el,v){el.textContent=v.toLocaleString('en-US')+(el.dataset.suffix||'')};
  if('IntersectionObserver' in window){
    var co=new IntersectionObserver(function(es){es.forEach(function(e){
      if(!e.isIntersecting)return;var el=e.target,end=+el.dataset.count,t0=null;
      var step=function(t){if(!t0)t0=t;var p=Math.min((t-t0)/1800,1);fmt(el,Math.floor(end*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(step)};
      requestAnimationFrame(step);co.unobserve(el);
    })},{threshold:.5});
    $$('[data-count]').forEach(function(el){co.observe(el)});
  }else{$$('[data-count]').forEach(function(el){fmt(el,+el.dataset.count)})}

  // Hero parallax (mouse devices only)
  var vis=$('.hero-visual');
  if(vis&&window.matchMedia('(min-width:1025px) and (hover:hover)').matches){
    document.addEventListener('mousemove',function(e){
      var x=(e.clientX/innerWidth-.5)*16,y=(e.clientY/innerHeight-.5)*16;
      vis.style.transform='translate('+x+'px,'+y+'px)';
    });
  }

  // Menu tabs
  var tabs=$$('.tab');
  tabs.forEach(function(t){t.addEventListener('click',function(){
    tabs.forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});
    t.classList.add('on');t.setAttribute('aria-pressed','true');
    var f=t.dataset.filter;
    $$('.m-item').forEach(function(i){i.classList.toggle('hide',f!=='all'&&i.dataset.cat!==f)});
  })});

  // FAQ accordion
  $$('.faq-item').forEach(function(it){
    var q=$('.faq-q',it),a=$('.faq-a',it);q.setAttribute('aria-expanded','false');
    q.addEventListener('click',function(){
      var open=it.classList.contains('open');
      $$('.faq-item.open').forEach(function(o){o.classList.remove('open');$('.faq-a',o).style.maxHeight=0;$('.faq-q',o).setAttribute('aria-expanded','false')});
      if(!open){it.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';q.setAttribute('aria-expanded','true')}
    });
  });
  window.addEventListener('resize',function(){$$('.faq-item.open .faq-a').forEach(function(a){a.style.maxHeight=a.scrollHeight+'px'})});

  // Testimonials slider
  var slides=$$('.t-slide'),dots=$('.dots');
  if(slides.length&&dots){
    var cur=0,timer;
    var go=function(i,manual){cur=i;slides.forEach(function(s,k){s.classList.toggle('on',k===i)});$$('button',dots).forEach(function(d,k){d.classList.toggle('on',k===i)});if(manual){clearInterval(timer);timer=setInterval(function(){go((cur+1)%slides.length)},6500)}};
    slides.forEach(function(_,i){var b=document.createElement('button');b.setAttribute('aria-label',tx('showTestimonial','Show testimonial ')+(i+1));b.onclick=function(){go(i,true)};dots.appendChild(b)});
    go(0,true);
  }

  // Forms (demo handler - connect to Formspree / Netlify Forms / your own backend)
  $$('form[data-demo]').forEach(function(f){f.addEventListener('submit',function(e){
    e.preventDefault();var ok=$('.form-ok',f.parentNode);
    if(!ok&&f.classList.contains('news')){ok=document.createElement('div');ok.className='form-ok';ok.setAttribute('role','status');ok.innerHTML='<i data-i="check"></i><span>'+tx('subscribed','Thanks! You are subscribed.')+'</span>';f.parentNode.appendChild(ok);window.SavoraIcons(ok)}
    if(ok)ok.classList.add('show');f.reset();
  })});

  // Booking: no past dates
  $$('input[type="date"]').forEach(function(d){var t=new Date();d.min=t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2)});

  // Map: show the icon placeholder until the iframe has loaded (also when the connection is slow or offline)
  var mc=$('[data-map]');
  if(mc){
    var fr=$('iframe',mc),msg=$('.map-msg',mc),lk=$('.map-link',mc),mapSrc=fr?fr.getAttribute('src'):'',loaded=false,slow;
    if(lk&&mapSrc)lk.href=mapSrc.replace(/&?output=embed/,'');
    var say=function(t){if(msg)msg.textContent=t};
    var startMap=function(){
      loaded=false;clearTimeout(slow);mc.classList.add('is-loading');say(tx('mapLoading','Loading map...'));
      if(!navigator.onLine){say(tx('mapOffline',tx('mapOffline','You appear to be offline. The map will load when you reconnect.')));return}
      slow=setTimeout(function(){if(!loaded)say(tx('mapSlow',tx('mapSlow','The map is taking longer than usual. Check your connection or open it in Google Maps.')))},10000);
      fr.setAttribute('src',mapSrc); // (re)load the map
    };
    if(fr){
      fr.addEventListener('load',function(){if(!navigator.onLine)return;loaded=true;clearTimeout(slow);mc.classList.remove('is-loading')});
      window.addEventListener('online',startMap);
      window.addEventListener('offline',function(){if(loaded)return;say(tx('mapOffline',tx('mapOffline','You appear to be offline. The map will load when you reconnect.')))}); // an already loaded map stays visible
      mc.classList.add('is-loading');
      if(!navigator.onLine)say(tx('mapOffline',tx('mapOffline','You appear to be offline. The map will load when you reconnect.')));
      else slow=setTimeout(function(){if(!loaded)say(tx('mapSlow',tx('mapSlow','The map is taking longer than usual. Check your connection or open it in Google Maps.')))},10000);
    }
  }

  var y=$('#year');if(y)y.textContent=new Date().getFullYear();
});
