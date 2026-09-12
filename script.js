(function () {
  var toggle = document.getElementById('navToggle');
  var list = document.getElementById('siteNavList');

  if (!toggle || !list) {
    return;
  }

  function closeMenu() {
    list.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    list.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (list.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  list.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
})();
