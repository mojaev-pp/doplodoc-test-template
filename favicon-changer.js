// favicon-changer.js
if (window.location.pathname.includes('/help/')) {
  const link = document.querySelector("link[rel='icon']") || document.createElement('link');
  link.rel = 'icon';
  link.href = '/1.png';
  document.head.appendChild(link);
}
