/* Shared behaviour for every page:
   - turns "name [at] domain" into a working e-mail link (keeps the address away from simple scrapers)
   - opens external links in a new tab */
(function () {
  function fixLinks(root) {
    (root || document).querySelectorAll('.js-email').forEach(function (a) {
      var e = a.dataset.u + '@' + a.dataset.d;
      a.href = 'mailto:' + e;
      if (!a.dataset.keep) a.textContent = e;
    });
    (root || document).querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (h.charAt(0) === '#' || h.indexOf('mailto:') === 0) return;
      if (/^https?:/.test(h)) { a.target = '_blank'; a.rel = 'noopener'; }
    });
  }
  window.siteFixLinks = fixLinks;
  fixLinks(document);
})();
