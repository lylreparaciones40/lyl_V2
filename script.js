// Toggle de detalles en tarjetas de servicios
document.querySelectorAll('[data-service]').forEach((card) => {
  const toggleBtn = card.querySelector('.btn-link');
  const details = card.querySelector('.service-details');

  if (!toggleBtn || !details) return;

  toggleBtn.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

// Cerrar menú mobile al hacer click en un enlace
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navToggle && navToggle.checked) {
      navToggle.checked = false;
    }
  });
});
