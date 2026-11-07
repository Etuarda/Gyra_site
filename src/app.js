import { BRAND, NAV } from './data/site.js';
import { parseRoute } from './utils/router.js';
import { siteHeader, siteFooter } from './components/layout.js';
import { initializeCarousels } from './components/carousels.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderSolutions } from './pages/solutions.js';
import { renderProfessionals } from './pages/professionals.js';
import { renderBusiness } from './pages/business.js';
import { renderPlans } from './pages/plans.js';
import { renderPortfolio } from './pages/portfolio.js';
import { renderContact, initializeContact } from './pages/contact.js';

const pages = Object.freeze({
  inicio: renderHome,
  sobre: renderAbout,
  solucoes: renderSolutions,
  profissionais: renderProfessionals,
  negocios: renderBusiness,
  planos: renderPlans,
  portfolio: renderPortfolio,
  contato: renderContact,
});

/** Hash routing keeps direct navigation compatible with any static HTTP server. */
export function getRoute(hash = window.location.hash) {
  return parseRoute(hash, Object.keys(pages));
}

let previousRoute;

function initializeMenu(container) {
  const header = container.querySelector('.site-header');
  const toggle = container.querySelector('[data-menu-toggle]');
  const navigation = container.querySelector('#mobile-navigation');
  if (!toggle || !navigation) return;

  const setOpen = (open) => {
    header.classList.toggle('is-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navigation.inert = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) navigation.querySelector('a')?.focus();
    else if (header.contains(document.activeElement)) toggle.focus();
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('is-menu-open')) setOpen(false);
  }, { signal: appAbortController.signal });
}

let appAbortController = new AbortController();

export function renderApp() {
  appAbortController.abort();
  appAbortController = new AbortController();

  const active = getRoute();
  const app = document.querySelector('#app');
  const pageLabel = NAV.find((item) => item.slug === active)?.label ?? 'Início';

  document.title = `${pageLabel} | ${BRAND.name} — ${BRAND.descriptor}`;
  app.innerHTML = `${siteHeader(active)}<main id="conteudo" tabindex="-1">${pages[active]()}</main>${siteFooter()}`;

  initializeMenu(app);
  initializeCarousels(app);
  initializeContact(app);

  if (previousRoute && previousRoute !== active) window.scrollTo({ top: 0, behavior: 'instant' });
  previousRoute = active;
}

window.addEventListener('hashchange', renderApp);
window.addEventListener('DOMContentLoaded', renderApp, { once: true });
