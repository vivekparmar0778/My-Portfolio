const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileBtnClose = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".navbar");
const menuOverlay = document.querySelector(".menu-overlay");
const navLinks = document.querySelectorAll(".nav-links a");

/* Open mobile menu when clicking the menu button */
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.classList.add("menu-open");
});

/* Close mobile menu when clicking the close button */
mobileBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});

/* Close mobile menu when clicking outside */
menuOverlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});

/* Reset mobile menu on link click */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

/* Reset contact form on page show */
window.addEventListener("pageshow", () => {
  document.querySelector(".contact-form").reset();
});