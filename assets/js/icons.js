/* SAVORA — icon set (inline SVG, no dependencies, no emojis)
   Usage: <i data-i="utensils"></i>   */
(function(){
  var P={
    'arrow-up':'<path d="M12 19V5M5 12l7-7 7 7"/>',
    'arrow-left':'<path d="M19 12H5M12 19l-7-7 7-7"/>',
    'arrow-right':'<path d="M5 12h14M12 5l7 7-7 7"/>',
    'arrow-left':'<path d="M19 12H5M12 19l-7-7 7-7"/>',
    'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
    'x':'<path d="M18 6 6 18M6 6l12 12"/>',
    'plus':'<path d="M12 5v14M5 12h14"/>',
    'minus':'<path d="M5 12h14"/>',
    'check':'<path d="M20 6 9 17l-5-5"/>',
    'star':'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    'map-pin':'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    'phone':'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'mail':'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',
    'clock':'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    'calendar':'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    'users':'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    'utensils':'<path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3zm0 0v7"/>',
    'chef-hat':'<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z"/><path d="M6 17h12"/>',
    'truck':'<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
    'leaf':'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    'flame':'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    'award':'<circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>',
    'cup':'<path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h13v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>',
    'quote':'<path d="M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1v1a3 3 0 0 1-3 3zM15 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1v1a3 3 0 0 1-3 3z"/>',
    'bag':'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>',
    'heart':'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
    'instagram':'<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>',
    'facebook':'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    'youtube':'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><path d="M9.75 15.02 15.5 11.75 9.75 8.48z"/>',
    'send':'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    'shield':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    'camera':'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    'map':'<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4z"/><path d="M8 2v16M16 6v16"/>',
    'gift':'<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>'
  };
  function render(root){
    (root||document).querySelectorAll('i[data-i]').forEach(function(el){
      var n=el.getAttribute('data-i'); if(!P[n]) return;
      var s=document.createElementNS('http://www.w3.org/2000/svg','svg');
      s.setAttribute('viewBox','0 0 24 24'); s.setAttribute('class','ic'); s.setAttribute('aria-hidden','true');
      s.innerHTML=P[n]; el.replaceWith(s);
    });
  }
  window.SavoraIcons=render;
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){render()}); else render();
})();
