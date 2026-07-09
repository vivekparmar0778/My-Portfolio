const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileBtnClose = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".navbar");
const menuOverlay = document.querySelector(".menu-overlay");
const navLinks = document.querySelectorAll(".nav-links a");
const header = document.querySelector(".header");

/* bottom to top button */
const scrollTopBtn = document.querySelector(".scroll-top-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

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

/* for footer year update */
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

/* section highlight */
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  // Navbar shadow
  header.classList.toggle("scrolled", window.scrollY > 80);

  // Active navigation
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/* Reveal Animation */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

revealElements.forEach((element) => {
  observer.observe(element);
});