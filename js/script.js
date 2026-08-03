document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');

  toggle.addEventListener('click', function () {
    var isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
