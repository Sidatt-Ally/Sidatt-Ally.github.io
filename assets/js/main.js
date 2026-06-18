// ── Fade-in au scroll ────────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Navbar active link ────────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(a => {
        a.classList.toggle('active-link', a.getAttribute('href') === `#${sec.id}`);
      });
    }
  });
});

// ── Contact form (mailto fallback) ────────────────────────────────────────────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value;
    const email   = form.querySelector('[name="email"]').value;
    const message = form.querySelector('[name="message"]').value;
    const subject = encodeURIComponent(`Message de ${name}`);
    const body    = encodeURIComponent(`De : ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:sidatt6969@gmail.com?subject=${subject}&body=${body}`;
  });
}
