import { BRAND, NAV, ASSETS, SERVICES, PROCESS } from '../data/site.js';

/** Components return trusted, static HTML; user input is never inserted as HTML. */
export const link = (slug) => `#/${slug}`;
export const img = (src, alt = '', extra = '') => `<img src="${src}" alt="${alt}" decoding="async" ${extra}>`;

export function button(label, slug = 'contato', variant = 'primary', extra = '') {
  return `<a class="button button--${variant}" href="${link(slug)}" ${extra}>${label}<span aria-hidden="true">↗</span></a>`;
}

export function siteHeader(active = 'inicio') {
  const links = NAV.map(({ slug, label }) => `
    <a class="site-nav__link ${slug === active ? 'is-current' : ''}"
       href="${link(slug)}" ${slug === active ? 'aria-current="page"' : ''}>${label}</a>`).join('');

  return `<header class="site-header">
    <div class="site-header__inner container">
      <a href="#/inicio" class="brand" aria-label="GYRA — Início">
        ${img('./assets/brand/gyra-logo.svg', 'GYRA', 'class="brand__wordmark" loading="eager"')}
      </a>
      <nav class="site-nav" aria-label="Navegação principal">${links}</nav>
      ${button('Falar com a GYRA', 'contato', 'primary')}
      <button type="button" class="mobile-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-navigation" data-menu-toggle>
        <span class="mobile-toggle__label">MENU</span><span class="mobile-toggle__icon" aria-hidden="true"><i></i><i></i></span>
      </button>
    </div>
    <nav class="mobile-nav" id="mobile-navigation" aria-label="Navegação mobile" inert>
      <div class="mobile-nav__intro">GYRA / MENU</div>
      ${NAV.map(({ slug, label }) => `<a href="${link(slug)}" ${slug === active ? 'aria-current="page"' : ''}>${label}<span aria-hidden="true">↗</span></a>`).join('')}
      <p>${BRAND.signature}</p>
    </nav>
  </header>`;
}

export function siteFooter() {
  return `<footer class="site-footer"><div class="container site-footer__grid">
    <div class="site-footer__brand">
      ${img('./assets/brand/gyra-logo-footer.svg', 'GYRA', 'class="footer-logo"')}
      <p>${BRAND.signature}</p>
      <span class="micro">Estratégia · Marketing · Tecnologia</span>
    </div>
    <nav aria-label="Navegação do rodapé" class="site-footer__links">
      ${NAV.map(({ label, slug }) => `<a href="${link(slug)}">${label}</a>`).join('')}
    </nav>
    <div class="site-footer__contact">
      <span class="micro">CONTATO E DIAGNÓSTICO</span>
      <p>${BRAND.location}</p>
      ${button('Iniciar conversa', 'contato', 'outline')}
    </div>
  </div><div class="container site-footer__bottom"><span>© 2026 GYRA. Todos os direitos reservados.</span><span>Estratégia · Design · Tecnologia</span></div></footer>`;
}

export function sectionHead(label, title, description = '', contrast = 'dark') {
  return `<div class="section-head section-head--${contrast}">
    <span class="eyebrow">${label}</span>
    <h2>${title}</h2>
    ${description ? `<p>${description}</p>` : ''}
  </div>`;
}

export function pageHero({ eyebrow, title, highlight, copy, image = ASSETS.chrome }) {
  return `<section class="page-hero section-dark texture">
    <div class="container page-hero__grid">
      <div class="page-hero__copy">
        <span class="eyebrow eyebrow--light">${eyebrow}</span>
        <h1>${title}</h1>
        <div class="page-hero__highlight">${highlight}</div>
        <p>${copy}</p>
        <div class="button-row">${button('Conhecer soluções', 'solucoes', 'light')}${button('Falar com a GYRA', 'contato', 'outline')}</div>
      </div>
      <div class="page-hero__art">
        ${img(image, '', 'class="page-hero__photo" loading="eager"')}
        <div class="glass panel-floating"><span class="micro">ESTRATÉGIA / DESIGN / TECNOLOGIA</span><strong>Uma marca. Muitas conexões.</strong></div>
      </div>
    </div>
  </section>`;
}

export function serviceCards(items = SERVICES) {
  return `<div class="service-grid">${items.map((s) => `
    <article class="service-card" style="--card-image:url('${s.image}')">
      ${img(s.image, '', 'class="service-card__image"')}
      <div class="service-card__content"><span class="micro">${s.tag}</span><h3>${s.title}</h3><p>${s.description}</p>
      <a href="#/solucoes" aria-label="Conhecer soluções: ${s.title}" class="circle-arrow"><span aria-hidden="true">↗</span></a></div>
    </article>`).join('')}</div>`;
}

export function featureCards(data, options = {}) {
  const type = options.variant ?? 'light';
  return `<div class="feature-grid feature-grid--${type}">${data.map((a, index) => {
    const title = Array.isArray(a) ? a[0] : a.title;
    const desc = Array.isArray(a) ? a[1] : a.description;
    return `<article class="feature-card"><span class="feature-card__number">${String(index + 1).padStart(2, '0')}</span>
      <span class="feature-card__signal" aria-hidden="true"></span><h3>${title}</h3><p>${desc}</p></article>`;
  }).join('')}</div>`;
}

export function processSteps(items = PROCESS) {
  return `<div class="process-grid">${items.map(({ title, detail }, index) => `
    <article class="process-card"><span>${String(index + 1).padStart(2, '0')} /</span><span class="process-card__rail" aria-hidden="true"></span>
      <h3>${title}</h3><p>${detail}</p>
      ${index + 1 < items.length ? '<span class="process-card__arrow" aria-hidden="true">↗</span>' : ''}
    </article>`).join('')}</div>`;
}

export function imageTiles(items) {
  return `<div class="image-tile-grid">${items.map(({ image, tag, title }, index) => `
    <article class="image-tile"><img src="${image}" alt="" loading="lazy" decoding="async" />
      <div class="image-tile__glass glass"><span class="micro">0${index + 1} / ${tag}</span><h3>${title}</h3></div>
    </article>`).join('')}</div>`;
}

export function ctaBanner(headline) {
  return `<section class="cta-section"><div class="container cta-section__inner">
    <div><span class="motion-label">PRÓXIMO MOVIMENTO</span><h2>${headline}</h2></div>
    ${button('Conversar com a GYRA', 'contato', 'light')}
  </div></section>`;
}

export function contentSection({ theme = 'light', label, title, description = '', body = '' }) {
  return `<section class="section section-${theme} editorial-section"><div class="container">
    <div class="editorial-section__index" aria-hidden="true">GYRA / ${label}</div>
    ${sectionHead(label, title, description, theme)}${body}
  </div></section>`;
}
