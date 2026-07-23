document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var navLinks = document.querySelector(".nav-links");
  if (!burger || !navLinks) return;
  burger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    burger.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      burger.classList.remove("open");
    });
  });
});

