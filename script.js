

// Dark mode
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
  lucide.createIcons(); // re-render icons after swap
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
}

// Init Lucide icons
lucide.createIcons();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], header[id]');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 90;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (!link) return;
    const active = y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight;
    link.classList.toggle('active', active);
  });
}, { passive: true });

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.stack-category, .project-card, .about-text, .about-image, .cert-item, .contact-left, #contact-form, .section-header, .timeline-item'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.children];
    const delay    = siblings.indexOf(entry.target) * 80;
    setTimeout(() => entry.target.classList.add('visible'), delay);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.08 });

revealTargets.forEach(el => observer.observe(el));

// Contact form
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const success = document.getElementById('form-success');
  success.classList.add('show');
  e.target.reset();
  setTimeout(() => success.classList.remove('show'), 5000);
});
// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
