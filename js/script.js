const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileBtnClose = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".navbar");
const menuOverlay = document.querySelector(".menu-overlay");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
});

mobileBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
});