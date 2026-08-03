// Apexwing landing page — render dynamic lists + FAQ interactivity
const AMAZON_LINK = 'https://amazon.com';
const SOCIAL_LINK = 'https://instagram.com';

const svgCheck = `<svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L4 7.5L10 1" stroke="#C4F609" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const benefitIcons = [
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4z" stroke="#C4F609" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#C4F609" stroke-width="1.7"/><circle cx="12" cy="12" r="4" stroke="#C4F609" stroke-width="1.7"/></svg>`,
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-9" stroke="#C4F609" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 6h6v6" stroke="#C4F609" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
];

const socialIcons = [
  { href: 'https://instagram.com', svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>` },
  { href: 'https://tiktok.com', svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M14 3c.5 3 2.4 5 5 5.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>` },
  { href: 'https://x.com', svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>` },
  { href: 'https://youtube.com', svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" stroke-width="1.7"/><path d="M10.5 9.8v4.4l4-2.2-4-2.2z" fill="currentColor"/></svg>` },
];

function renderCategories() {
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = APEX_DATA.categories.map(cat => `
    <div class="cat-card">
      <div class="cat-img"><img src="${cat.img}" alt="${cat.name}" style="width:100%;height:100%;object-fit:cover"></div>
      <div class="overlay"></div>
      <div class="plate">
        <div class="name">${cat.name}</div>
        <div class="tag">${cat.tag}</div>
      </div>
    </div>`).join('');
}

function renderSpecs() {
  const list = document.getElementById('spec-list');
  list.innerHTML = APEX_DATA.featureSpecs.map(spec => `
    <li><span class="spec-check">${svgCheck}</span>${spec}</li>`).join('');
}

function renderBenefits() {
  const grid = document.getElementById('benefit-grid');
  grid.innerHTML = APEX_DATA.benefits.map((b, i) => `
    <div class="benefit-card">
      <div class="benefit-icon">${benefitIcons[i]}</div>
      <h3>${b.title}</h3>
      <p>${b.desc}</p>
    </div>`).join('');
}

function renderLaunches() {
  const grid = document.getElementById('launch-grid');
  grid.innerHTML = APEX_DATA.launches.map(l => `
    <div class="launch-card">
      <div class="launch-media">
        <img src="${l.img}" alt="${l.name}" style="width:100%;height:100%;object-fit:cover">
        <span class="launch-badge">Coming Soon</span>
      </div>
      <div class="launch-body">
        <h3>${l.name}</h3>
        <p>${l.desc}</p>
        <a href="${SOCIAL_LINK}" target="_blank" rel="noopener" class="btn btn-volt btn-sm">Notify Me</a>
      </div>
    </div>`).join('');
}

function renderFooterLinks() {
  const shop = document.getElementById('footer-shop-links');
  shop.innerHTML = APEX_DATA.categories.map(c => `<a href="#categories" class="footer-link">${c.name}</a>`).join('');
  const pol = document.getElementById('footer-policy-links');
  pol.innerHTML = APEX_DATA.policies.map(p => `<a href="#" class="footer-link">${p}</a>`).join('');
  const socials = document.getElementById('social-row');
  socials.innerHTML = socialIcons.map(s => `<a href="${s.href}" target="_blank" rel="noopener" class="social-ico">${s.svg}</a>`).join('');
}

function renderFaq() {
  const list = document.getElementById('faq-list');
  list.innerHTML = APEX_DATA.faq.map((item, i) => `
    <div class="faq-row${i === 0 ? ' open' : ''}" data-index="${i}">
      <button class="faq-q">
        <span class="q-text">${item.q}</span>
        <span class="toggle-icon">+</span>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    </div>`).join('');

  list.querySelectorAll('.faq-row').forEach(row => {
    row.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = row.classList.contains('open');
      list.querySelectorAll('.faq-row').forEach(r => r.classList.remove('open'));
      if (!isOpen) row.classList.add('open');
    });
  });
}

function setupCtaLinks() {
  document.querySelectorAll('[data-cta="amazon"]').forEach(el => el.href = AMAZON_LINK);
  document.querySelectorAll('[data-cta="social"]').forEach(el => el.href = SOCIAL_LINK);
}

function setupMobileMenu() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!header || !toggle || !nav) return;

  const closeMenu = () => {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });
}

function setupScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderSpecs();
  renderBenefits();
  renderLaunches();
  renderFooterLinks();
  renderFaq();
  setupCtaLinks();
  setupMobileMenu();
  setupScrollReveal();
});
