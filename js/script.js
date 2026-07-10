const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileBtnClose = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".navbar");
const menuOverlay = document.querySelector(".menu-overlay");
const navLinks = document.querySelectorAll(".nav-links a");
const header = document.querySelector(".header");

/* hero section typing effect on text */
const typingText = document.getElementById("typing-text");

const words = [
  "Frontend Developer",
  "JavaScript Developer",
  "React Learner",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();


/* bottom to top button */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
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

// ===========================
// Contact Form
// ===========================

const contactForm = document.getElementById("contactForm");
const submitBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener("submit", (event) => {
  // Browser validation
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  // Message validation
  const message = document.getElementById("message").value.trim();

  if (message.length < 10) {
    event.preventDefault();
    alert("Message should be at least 10 characters.");
    document.getElementById("message").focus();
    return;
  }

  // Loading State
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
});