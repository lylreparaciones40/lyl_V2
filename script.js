// Solo maneja el menú mobile.
// Los servicios se abren/cerran solo con CSS (checkbox + label).

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navToggle && navToggle.checked) {
      navToggle.checked = false;
    }
  });
});
