(function () {
  var header = document.querySelector('[data-header]');
  var nav = document.querySelector('[data-nav]');
  var navToggle = document.querySelector('[data-nav-toggle]');

  function setNavState(isOpen) {
    if (!header || !navToggle) {
      return;
    }

    header.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  if (header && nav && navToggle) {
    navToggle.addEventListener('click', function () {
      setNavState(!header.classList.contains('is-open'));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setNavState(false);
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        setNavState(false);
      }
    });

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setNavState(false);
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  if (header) {
    function syncHeaderState() {
      header.classList.toggle('is-scrolled', window.scrollY > 16);
    }

    syncHeaderState();
    window.addEventListener('scroll', syncHeaderState, { passive: true });
  }
})();
