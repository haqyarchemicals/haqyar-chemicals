(function () {
  var btn = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setOpen(false); });
})();
