// ===== Toggle mobile menu =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Smooth Scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      navLinks.classList.remove("show"); // close menu after clicking
    }
  });
});

// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Basic contact form handler (client-side only) =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // simple front-end validation
  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const message = document.getElementById("cmessage").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "#b00020";
    return;
  }

  // simulate success (you can hook this to a backend later)
  formStatus.textContent = "Thanks! Your message has been sent (demo).";
  formStatus.style.color = "#046a38";
  contactForm.reset();
});
