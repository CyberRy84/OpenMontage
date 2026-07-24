// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Sticky "Order Now" CTA — show after scrolling past the hero
const stickyCta = document.getElementById('sticky-cta');
const hero = document.querySelector('.hero');

const observer = new IntersectionObserver(
  ([entry]) => {
    stickyCta.classList.toggle('visible', !entry.isIntersecting);
  },
  { threshold: 0 }
);
observer.observe(hero);

// Order form -> plain-language summary (no backend wired up yet, see README)
const orderForm = document.getElementById('order-form');
const confirmationBox = document.getElementById('order-confirmation');
const summaryText = document.getElementById('order-summary-text');

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!orderForm.reportValidity()) return;

  const data = new FormData(orderForm);
  const summary =
    `Name: ${data.get('name')}\n` +
    `Contact: ${data.get('contact')}\n` +
    `Flavors & quantity: ${data.get('flavors')}\n` +
    `Fulfillment: ${data.get('fulfillment')}\n` +
    `Needed by: ${data.get('date')}\n` +
    `Notes: ${data.get('notes') || '—'}`;

  summaryText.textContent = summary;
  confirmationBox.hidden = false;
  confirmationBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
