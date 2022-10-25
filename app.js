const navMobile = document.querySelector(".header-nav");
const navToggle = document.querySelector(".nav-toggle_open");
const navClose = document.querySelector(".nav-toggle_close");
const navOverlay = document.querySelector(".nav-overlay");

navToggle.addEventListener("click", () => {
  navMobile.classList.add("header-visible");
  navOverlay.classList.add("overlay-visible");
  navClose.classList.add("nav-close_visible")
});

navClose.addEventListener("click", () => {
  navMobile.classList.remove("header-visible");
  navOverlay.classList.remove("overlay-visible");
  navClose.classList.remove("nav-close_visible")
});
