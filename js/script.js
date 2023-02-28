const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".btn-mobile-nav");
hamburgerMenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
