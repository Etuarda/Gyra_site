import { ASSETS, BENTO, JOURNEY, PLANS } from '../data/site.js';
import { button, sectionHead } from './layout.js';

const pad = (i) => String(i + 1).padStart(2, '0');

const arrow = (direction, label, extraClass = '') =>
  `<button type="button" class="carousel-arrow ${extraClass}".trim() data-action="${direction}" aria-label="${label}"><span aria-hidden="true">${direction === 'next' ? '→' : '←'}</span></button>`
    .replace('class="carousel-arrow ".trim()', 'class="carousel-arrow"')
    .replace('.trim()', '');

function navArrow(direction, label, extraClass = '') {
  const cls = extraClass ? `carousel-arrow ${extraClass}` : 'carousel-arrow';
  return `<button type="button" class="${cls}" data-action="${direction}" aria-label="${label}"><span aria-hidden="true">${direction === 'next' ? '→' : '←'}</span></button>`;
}

function progress(current, total, itemLabel = 'Ir para slide') {
  const dots = Array.from({ length: total }, (_, i) => {
    const active = i === current;
    return `<button type="button" class="carousel-dot ${active ? 'is-active' : ''}" data-index="${i}" aria-label="${itemLabel} ${pad(i)}" aria-current="${active ? 'true' : 'false'}"></button>`;
  }).join('');
  return `<div class="carousel-progress">
    <div class="carousel-dots" role="group" aria-label="Indicadores de navegação">${dots}</div>
    <span class="carousel-progress__count" data-carousel-count>${pad(current)} / ${String(total).padStart(2, '0')}</span>
  </div>`;
}

function controlsBar(current, total, prevLabel = 'Anterior', nextLabel = 'Próximo', itemLabel = 'Ir para slide') {
  return `<div class="carousel-controls">
    ${progress(current, total, itemLabel)}
    <div class="carousel-controls__arrows">${navArrow('prev', prevLabel)}${navArrow('next', nextLabel)}</div>
  </div>`;
}

const heroSlides = [
  { kicker: 'GYRA / AGÊNCIA CRIATIVA / 01', title: 'Sua marca em movimento.<br>Sua presença digital conectada.', copy: 'Estratégia, conteúdo, audiovisual e tecnologia para ajudar profissionais e empresas a serem encontrados, apresentarem seu valor e criarem novas oportunidades.', image: ASSETS.chrome, tag: 'ESTRATÉGIA + CONTEÚDO + TECNOLOGIA' },
  { kicker: 'COMUNICAÇÃO + MARKETING / 02', title: 'Sua marca não precisa<br>apenas aparecer.', copy: 'Conectamos comunicação e audiovisual para atrair interessados, apresentar diferenciais e facilitar o próximo passo.', image: ASSETS.audiovisual, tag: 'BRANDING + AUDIOVISUAL + MARKETING' },
  { kicker: 'TECNOLOGIA + EXPERIÊNCIA / 03', title: 'Presença digital<br>que cria caminhos.', copy: 'Sites e experiências digitais para organizar informações, receber solicitações e conectar diferentes canais.', image: ASSETS.web, tag: 'WEB + AUTOMAÇÃO + EXPERIÊNCIAS' },
];

/** 02 — Tipografia cinética: slides empilhados sem salto de layout, com controles e swipe. */
export function kineticHero() {
  const copySlides = heroSlides.map((item, i) => {
    const active = i === 0;
    const headingTag = i === 0 ? 'h1' : 'h2';
    return `<div class="hero-kinetic__slide ${active ? 'is-active' : ''}" data-hero-slide="${i}" ${active ? '' : 'aria-hidden="true" inert'}>
      <span class="eyebrow eyebrow--light">${item.kicker}</span>
      <${headingTag} class="hero-kinetic__headline">${item.title}</${headingTag}>
      <p class="hero-kinetic__lead">${item.copy}</p>
    </div>`;
  }).join('');

  const artSlides = heroSlides.map((item, i) => {
    const active = i === 0;
    return `<div class="hero-kinetic__art-frame ${active ? 'is-active' : ''}" data-hero-art="${i}" aria-hidden="true">
      <img src="${item.image}" alt="" ${i === 0 ? 'loading="eager"' : 'loading="lazy"'} decoding="async" draggable="false">
      <div class="glass hero-kinetic__glass"><span class="micro">GYRA / AGÊNCIA CRIATIVA</span><strong>${item.tag}</strong></div>
    </div>`;
  }).join('');

  return `<section class="hero-kinetic texture" data-carousel="kinetic" aria-label="Apresentação da GYRA">
    <div class="container hero-kinetic__inner">
      <div class="hero-kinetic__copy">
        <div class="hero-kinetic__stack">${copySlides}</div>
        <div class="button-row">${button('Conhecer nossas soluções', 'solucoes', 'primary')}${button('Falar com a GYRA', 'contato', 'outline')}</div>
        <div class="hero-kinetic__nav">${controlsBar(0, heroSlides.length, 'Slide anterior', 'Próximo slide', 'Ir para destaque')}</div>
      </div>
      <div class="hero-kinetic__art">${artSlides}</div>
    </div>
  </section>`;
}

const bentoSlide = (item, i, active) => `<div class="bento__grid ${active ? 'is-active' : ''}" data-bento-slide="${i}" ${active ? '' : 'aria-hidden="true" inert'}>
  <article class="bento__main" style="--visual-image:url('${item.image}')"><img src="${item.image}" alt="" loading="lazy" draggable="false"><div class="bento__main-caption glass"><span class="micro">${item.caption}</span><h3>${item.title}</h3></div></article>
  <article class="bento__feature"><span class="micro">01 / ESTRATÉGIA</span><h3>${item.feature}</h3><span class="bento__meta">COMPETÊNCIA / ${pad(i)}</span></article>
  <article class="bento__secondary"><img src="${item.secondaryImage}" alt="" loading="lazy" draggable="false"><div><span class="micro">02 / CRIAÇÃO</span><h3>${item.secondary}</h3></div></article>
  <article class="bento__wide">
    <div class="bento__wide-copy"><span class="micro">DIREÇÃO + CRIAÇÃO + TECNOLOGIA</span><h3>${item.takeaway}</h3><p>${item.detail}</p></div>
    ${navArrow('next', 'Explorar próxima competência', 'carousel-arrow--light')}
  </article>
</div>`;

/** 03 — Bento Grid: módulos assimétricos e três conjuntos de conteúdo. */
export function bentoCarousel() {
  return `<section class="section section-dark bento-section texture" data-carousel="bento">
  <div class="container">${sectionHead('INTERACTIVE BENTO GRID / 01—03', 'Tudo se conecta. Sua marca também.', 'Navegue pelas competências que se complementam — da direção da marca à experiência digital e à organização de processos.', 'dark')}
  <div class="section-carousel-meta"><span class="motion-label motion-label--small">MOVIMENTO AUTOMÁTICO</span>${controlsBar(0, BENTO.length, 'Competência anterior', 'Próxima competência', 'Ir para competência')}</div>
  <div class="bento-stage" data-bento-stage>${BENTO.map((item, i) => bentoSlide(item, i, i === 0)).join('')}</div>
  </div></section>`;
}

const verticalCard = (item, i, active) => `<button type="button" class="vertical-card ${active ? 'is-active' : ''}" data-index="${i}" aria-pressed="${active}">
  <span class="micro">${pad(i)} / ${item.tag}</span>
  <strong class="vertical-card__title">${item.title}</strong>
  <span class="vertical-card__desc">${item.description}</span>
  <span class="vertical-card__extra"><span>${item.sub}</span></span>
</button>`;

/** 01 — Jornada em cartões verticais, acessível por clique, teclado e swipe. */
export function verticalCarousel() {
  const images = JOURNEY.map((item, i) => `<img data-vertical-image="${i}" class="${i === 0 ? 'is-active' : ''}" src="${item.image}" alt="" loading="lazy" draggable="false">`).join('');
  return `<section class="section section-light" data-carousel="vertical"><div class="container">
    ${sectionHead('01 / ROLAGEM VERTICAL', 'Uma jornada que faz sentido.', 'A entrega é um sistema conectado, não uma sequência de posts isolados.', 'light')}
    <div class="section-carousel-meta"><span class="motion-label motion-label--small">MOVIMENTO AUTOMÁTICO</span>${controlsBar(0, JOURNEY.length, 'Etapa anterior', 'Próxima etapa', 'Ir para etapa')}</div>
    <div class="vertical-slider">
      <figure class="vertical-slider__image">${images}<figcaption><span data-vertical-tag>01 / ${JOURNEY[0].tag}</span><strong data-vertical-title>${JOURNEY[0].title}</strong></figcaption></figure>
      <div class="vertical-slider__cards" data-vertical-cards>${JOURNEY.map((item, i) => verticalCard(item, i, i === 0)).join('')}</div>
    </div>
  </div></section>`;
}

const isometricItems = [
  { title: 'Interfaces que explicam.', tag: 'EXPERIÊNCIA WEB', description: 'Sites e páginas digitais com navegação clara.', image: ASSETS.web },
  { title: 'Sistemas que conversam.', tag: 'INTEGRAÇÕES', description: 'Fluxos e ferramentas conectados conforme o escopo.', image: ASSETS.automation },
  { title: 'Imagens em movimento.', tag: 'AUDIOVISUAL', description: 'Captação e narrativas para comunicar valor.', image: ASSETS.audiovisual },
];

/** 04 — Cards em perspectiva com transições responsivas. */
export function isometricCarousel() {
  const posFor = (i) => (i === 0 ? 'center' : i === 1 ? 'right' : 'left');
  return `<section class="section section-light" data-carousel="isometric"><div class="container">
  ${sectionHead('04 / ISOMETRIC CARD SLIDER', 'Camadas que se conectam.', 'Fotografia, web e tecnologia formam experiências diferentes, mas trabalham dentro de uma mesma estratégia.', 'light')}
  <div class="isometric-stage" data-isometric-stage>${isometricItems.map((item, i) => `
    <button type="button" class="isometric-card ${i === 0 ? 'is-active' : ''}" data-index="${i}" data-position="${posFor(i)}" aria-pressed="${i === 0}">
      <img src="${item.image}" alt="" loading="lazy" draggable="false"><span class="isometric-card__content"><small>${pad(i)} / ${item.tag}</small><strong>${item.title}</strong><span>${item.description}</span></span>
    </button>`).join('')}
    <div class="isometric-stage__controls">${navArrow('prev', 'Card anterior')}${progress(0, isometricItems.length, 'Selecionar camada')}${navArrow('next', 'Próximo card')}</div>
  </div>
  </div></section>`;
}

const hoverItems = [
  { title: 'Identidade e presença', headline: 'Sua trajetória constrói valor.', description: 'Identidade, conteúdo e materiais que apresentam sua especialidade.', image: ASSETS.branding },
  { title: 'Landing page própria', headline: 'Uma página para explicar.', description: 'Seus serviços e informações de contato em um lugar.', image: ASSETS.web },
  { title: 'Conteúdo e audiovisual', headline: 'Uma linguagem reconhecível.', description: 'Narrativas, vídeos e imagens para comunicar seu trabalho.', image: ASSETS.audiovisual },
];

/** 05 — Zoom progressivo por hover, clique, swipe e foco; sem perder suporte touch. */
export function hoverCarousel() {
  return `<section class="section section-light" data-carousel="hover"><div class="container">
  ${sectionHead('05 / HOVER ZOOM DEPTH', 'Sua experiência tem muitas dimensões.', 'Explore entregas que ajudam a apresentar serviços com personalidade e consistência.', 'light')}
  <div class="section-carousel-meta"><span class="motion-label motion-label--small">EXPLORAÇÃO INTERATIVA</span>${controlsBar(0, hoverItems.length, 'Dimensão anterior', 'Próxima dimensão', 'Ir para dimensão')}</div>
  <div class="hover-stage">${hoverItems.map((item, i) => `
    <button type="button" class="hover-card ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-pressed="${i === 0}">
      <img src="${item.image}" alt="" loading="lazy" draggable="false"><span class="hover-card__content"><small>${pad(i)} / ${item.title.toUpperCase()}</small><strong>${item.headline}</strong><span class="hover-card__detail"><span>${item.description}</span></span></span>
    </button>`).join('')}</div><p class="interaction-hint">Passe o cursor, toque, arraste ou use as setas para explorar.</p>
  </div></section>`;
}

const parallaxItems = [
  { tag: 'DESCUBRA', title: 'Sua marca precisa aparecer.', description: 'Fotografia, conteúdo e campanhas para apresentar produtos e experiências.', image: ASSETS.product, overlay: ASSETS.marketing },
  { tag: 'APRESENTE', title: 'Seu negócio merece clareza.', description: 'Site e catálogo para explicar serviços e facilitar escolhas.', image: ASSETS.web, overlay: ASSETS.product },
  { tag: 'CONECTE', title: 'Do interesse à conversa.', description: 'Canais e formulários organizados para receber solicitações.', image: ASSETS.automation, overlay: ASSETS.web },
];

/** 06 — Parallax multicamadas via CSS custom properties, swipe e controles. */
export function parallaxCarousel() {
  const item = parallaxItems[0];
  const backs = parallaxItems.map((entry, i) => `<img class="parallax-stage__background ${i === 0 ? 'is-active' : ''}" data-parallax-back="${i}" src="${entry.image}" alt="" loading="lazy" draggable="false">`).join('');
  const fronts = parallaxItems.map((entry, i) => `<img class="parallax-stage__foreground ${i === 0 ? 'is-active' : ''}" data-parallax-front="${i}" src="${entry.overlay}" alt="" loading="lazy" draggable="false">`).join('');
  return `<section class="section section-dark" data-carousel="parallax"><div class="container">
    ${sectionHead('06 / PARALLAX MULTICAMADAS', 'Produtos, experiências e conexões.', 'A imagem que atrai, a apresentação que explica e o canal que aproxima.', 'dark')}
    <div class="parallax-stage" data-parallax-stage>
      ${backs}
      <div class="parallax-stage__glow" aria-hidden="true"></div>
      <div class="parallax-stage__visual" aria-hidden="true">${fronts}</div>
      <div class="parallax-stage__copy glass"><span class="micro" data-parallax-tag>${item.tag} / GYRA NEGÓCIOS</span><h3 data-parallax-title>${item.title}</h3><p data-parallax-copy>${item.description}</p></div>
      <div class="parallax-stage__bottom">${navArrow('prev', 'Cena anterior')}${progress(0, parallaxItems.length, 'Ir para cena')}${navArrow('next', 'Próxima cena')}</div>
    </div>
  </div></section>`;
}

const planCard = (plan, active) => `<button type="button" class="plan-expand ${active ? 'is-active' : ''}" data-tier="${plan.id}" aria-pressed="${active}">
  <span class="plan-expand__image" style="--plan-image:url('${plan.image}')"><span class="micro">${plan.name.toUpperCase()}</span></span>
  <span class="plan-expand__body"><strong class="plan-expand__price">A partir de R$ ${plan.price}/mês</strong><strong class="plan-expand__title">${plan.title}</strong>
    <span class="plan-expand__details"><span class="plan-expand__details-inner">
      <span class="plan-expand__value">${plan.value}</span>
      <span class="plan-expand__items"><strong>O QUE ISSO AGREGA</strong>${plan.benefits.map((line) => `<span>✓ ${line}</span>`).join('')}</span>
    </span></span>
    <span class="plan-expand__more" data-plan-more>${active ? 'EM DESTAQUE' : 'VER DETALHES  ↗'}</span>
  </span>
</button>`;

/** 07 — Planos por público e tier, expandindo suavemente o card selecionado. */
export function plansCarousel() {
  return `<section class="section section-light" data-carousel="plans"><div class="container">
    ${sectionHead('07 / VALOR DE CADA PLANO', 'Mais do que entregas: uma presença que trabalha melhor.', 'Compare o que cada plano agrega à comunicação, à jornada do público e à rotina do seu negócio.', 'light')}
    <div class="plans-stage"><div class="plans-stage__top"><div class="segmented" role="group" aria-label="Público dos planos">
      <button type="button" class="is-active" data-audience="profissionais" aria-pressed="true">Profissionais</button>
      <button type="button" data-audience="negocios" aria-pressed="false">Negócios</button>
    </div>${controlsBar(1, 3, 'Plano anterior', 'Próximo plano', 'Selecionar plano')}</div>
    <div class="plans-stage__cards" data-plans-cards>${PLANS.profissionais.map((p) => planCard(p, p.id === 'premium')).join('')}</div>
    </div><div class="plans-note"><p>Valores de referência, sujeitos a diagnóstico e validação comercial. Mídia paga, domínio, hospedagem e projetos fora do escopo são contratados separadamente.</p>${button('Solicitar diagnóstico', 'contato', 'primary')}</div>
  </div></section>`;
}

const liquidItems = [
  { tag: 'IDENTIDADE', title: 'Linguagens que marcam.', description: 'Direção visual e identidade com personalidade.', image: ASSETS.branding },
  { tag: 'AUDIOVISUAL', title: 'Imagens que contam.', description: 'Narrativas para valorizar experiências e produtos.', image: ASSETS.audiovisual },
  { tag: 'EXPERIÊNCIAS', title: 'Digital para aproximar.', description: 'Interfaces e percursos que ajudam a apresentar e conectar.', image: ASSETS.web },
];

/** 08 — Transição líquida leve (CSS blur/scale); sem dependência de shader GPU. */
export function liquidCarousel() {
  const item = liquidItems[0];
  const imgs = liquidItems.map((entry, i) => `<img data-liquid-image="${i}" class="${i === 0 ? 'is-active' : ''}" src="${entry.image}" alt="" loading="lazy" draggable="false">`).join('');
  return `<section class="section section-dark" data-carousel="liquid"><div class="container">
    ${sectionHead('08 / LIQUID MEDIA / EXPERIMENTAÇÃO', 'Diferentes linguagens. Uma direção.', 'Uma galeria de possibilidades visuais, explorando composição, superfícies e movimento.', 'dark')}
    <div class="liquid-stage" data-liquid-stage><div class="liquid-stage__image">${imgs}</div>
      <div class="liquid-stage__glass glass"><span class="micro">MEDIA LAB / GYRA</span><span class="liquid-stage__tag" data-liquid-tag>${item.tag}</span><h3 data-liquid-title>${item.title}</h3><p data-liquid-desc>${item.description}</p></div>
      <div class="liquid-stage__controls">${navArrow('prev', 'Imagem anterior')}${progress(0, liquidItems.length, 'Ir para linguagem')}${navArrow('next', 'Próxima imagem')}</div>
    </div>
  </div></section>`;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Atributos data-carousel garantem que cada interação fique isolada em seu componente. */
export function initializeCarousels(root = document, { signal } = {}) {
  for (const carousel of root.querySelectorAll('[data-carousel]')) {
    const kind = carousel.dataset.carousel;
    if (kind === 'hover') bindHover(carousel, signal);
    else if (kind === 'plans') bindPlans(carousel, signal);
    else if (kind === 'isometric') bindIsometric(carousel, signal);
    else bindSwitching(carousel, kind, signal);
  }
  initializeEditorialDecks(root, signal);
}

/** Controlador de reprodução automática que pausa imediatamente ao interagir, focar ou tocar. */
function createAutoplay(element, delay, advance, signal) {
  let timerId = 0;
  let visible = !('IntersectionObserver' in window);
  let hovered = false;
  let focused = false;
  let pointerDown = false;
  let cooldownTimer = 0;
  let inCooldown = false;

  const shouldPause = () =>
    !element.isConnected || !visible || hovered || focused || pointerDown || inCooldown || document.hidden || prefersReducedMotion();

  const syncState = () => {
    const paused = shouldPause();
    element.classList.toggle('is-autoplay-paused', paused);
    if (timerId) {
      clearInterval(timerId);
      timerId = 0;
    }
    if (!paused) {
      timerId = setInterval(() => {
        if (shouldPause()) {
          syncState();
          return;
        }
        advance();
      }, delay);
    }
  };

  const notifyInteraction = (cooldownMs = 7500) => {
    inCooldown = true;
    if (cooldownTimer) clearTimeout(cooldownTimer);
    syncState();
    cooldownTimer = setTimeout(() => {
      inCooldown = false;
      syncState();
    }, cooldownMs);
  };

  element.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse') {
      hovered = true;
      syncState();
    }
  }, { passive: true });
  element.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'mouse') {
      hovered = false;
      syncState();
    }
  }, { passive: true });
  element.addEventListener('pointerdown', () => {
    pointerDown = true;
    syncState();
  }, { passive: true });
  const releasePointer = () => {
    if (!pointerDown) return;
    pointerDown = false;
    syncState();
  };
  element.addEventListener('pointerup', releasePointer, { passive: true });
  element.addEventListener('pointercancel', releasePointer, { passive: true });
  element.addEventListener('focusin', () => {
    focused = true;
    syncState();
  });
  element.addEventListener('focusout', (e) => {
    if (!element.contains(e.relatedTarget)) {
      focused = false;
      syncState();
    }
  });

  const onVisibility = () => syncState();
  document.addEventListener('visibilitychange', onVisibility, signal ? { signal } : undefined);

  let observer;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.2;
      syncState();
    }, { threshold: [0, 0.2, 0.5], rootMargin: '0px 0px -6% 0px' });
    observer.observe(element);
  }

  if (signal) {
    signal.addEventListener('abort', () => {
      if (timerId) clearInterval(timerId);
      if (cooldownTimer) clearTimeout(cooldownTimer);
      observer?.disconnect();
    }, { once: true });
  }

  syncState();
  return { notifyInteraction, stop: () => { inCooldown = true; if (cooldownTimer) clearTimeout(cooldownTimer); syncState(); } };
}

/** Suporte a gesto de arraste/swipe horizontal sem bloquear rolagem vertical. */
function bindSwipe(surface, { onPrev, onNext }) {
  if (!surface) return;
  let startX = 0;
  let startY = 0;
  let activeId = null;
  let didSwipe = false;

  surface.addEventListener('pointerdown', (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    if (event.target.closest('a[href], [data-action], .carousel-dot, [data-audience]')) return;
    activeId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    didSwipe = false;
  }, { passive: true });

  surface.addEventListener('pointermove', (event) => {
    if (event.pointerId !== activeId || didSwipe) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      didSwipe = true;
      activeId = null;
      if (dx < 0) onNext();
      else onPrev();
    }
  }, { passive: true });

  const clear = (event) => {
    if (event.pointerId === activeId) activeId = null;
  };
  surface.addEventListener('pointerup', clear, { passive: true });
  surface.addEventListener('pointercancel', clear, { passive: true });

  surface.addEventListener('click', (event) => {
    if (!didSwipe) return;
    didSwipe = false;
    event.preventDefault();
    event.stopPropagation();
  }, true);
}

function bindKeyboardNav(root, { onPrev, onNext, onFirst, onLast }) {
  root.addEventListener('keydown', (event) => {
    if (event.target.matches('input, textarea, select')) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      onNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onPrev();
    } else if (event.key === 'Home' && onFirst) {
      event.preventDefault();
      onFirst();
    } else if (event.key === 'End' && onLast) {
      event.preventDefault();
      onLast();
    }
  });
}

function setProgress(root, index, total = 3) {
  for (const count of root.querySelectorAll('[data-carousel-count]')) {
    count.textContent = `${pad(index)} / ${String(total).padStart(2, '0')}`;
  }
  for (const group of root.querySelectorAll('.carousel-dots')) {
    const dots = group.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      const selected = i === index;
      dot.classList.toggle('is-active', selected);
      dot.setAttribute('aria-current', selected ? 'true' : 'false');
    });
  }
}

/** Converte coleções editoriais em carrosséis responsivos com arraste, swipe, sincronização de scroll e controles. */
function initializeEditorialDecks(root, signal) {
  const decks = [
    ['.service-grid', 'services', 4600],
    ['.feature-grid', 'features', 4400],
    ['.process-grid', 'timeline', 4200],
    ['.image-tile-grid', 'gallery', 4800],
    ['.compact-plans', 'plans', 4600],
    ['.portfolio-grid', 'portfolio', 5000],
    ['.plan-matrix__cards', 'matrix', 4600],
  ];

  for (const [selector, variant, delay] of decks) {
    for (const deck of root.querySelectorAll(selector)) {
      const items = [...deck.children];
      if (items.length < 2) continue;

      deck.classList.add('is-auto-carousel', `is-auto-carousel--${variant}`);
      deck.setAttribute('aria-roledescription', 'carrossel interativo');

      const navHost = document.createElement('div');
      navHost.className = `deck-nav deck-nav--${variant}`;
      navHost.innerHTML = controlsBar(0, items.length, 'Item anterior', 'Próximo item', 'Ir para item');
      deck.after(navHost);

      let current = 0;
      let programmaticUntil = 0;

      const applyState = () => {
        items.forEach((item, index) => {
          const selected = index === current;
          item.classList.toggle('is-active', selected);
          item.classList.toggle('is-before', index < current);
          item.classList.toggle('is-after', index > current);
          item.setAttribute('aria-current', selected ? 'true' : 'false');
          if (variant === 'gallery') item.tabIndex = selected ? 0 : -1;
        });
        setProgress(navHost, current, items.length);
      };

      const scrollToCurrent = (smooth = true) => {
        if (variant === 'gallery') return;
        const target = items[current];
        if (!target) return;
        const maxScroll = Math.max(0, deck.scrollWidth - deck.clientWidth);
        if (maxScroll <= 2) return;

        const deckRect = deck.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const style = getComputedStyle(deck);
        const padStart = parseFloat(style.paddingLeft) || 0;
        const rawLeft = deck.clientWidth < 631
          ? deck.scrollLeft + (targetRect.left - deckRect.left) - padStart
          : deck.scrollLeft + (targetRect.left - deckRect.left) - Math.max(0, (deckRect.width - targetRect.width) / 2);
        const left = Math.max(0, Math.min(maxScroll, rawLeft));

        programmaticUntil = performance.now() + 520;
        deck.scrollTo({ left, behavior: smooth && !prefersReducedMotion() ? 'smooth' : 'auto' });
      };

      const goTo = (nextIndex, { scroll = true, user = false } = {}) => {
        current = ((nextIndex % items.length) + items.length) % items.length;
        applyState();
        if (scroll) scrollToCurrent(true);
        if (user) autoplay.notifyInteraction();
      };

      items.forEach((item, index) => {
        item.tabIndex = variant === 'gallery' && index !== 0 ? -1 : 0;
        item.querySelectorAll('img').forEach((imgEl) => { imgEl.draggable = false; });

        item.addEventListener('click', (event) => {
          if (event.target.closest('a[href]')) return;
          const next = variant === 'gallery' && index === current ? (current + 1) % items.length : index;
          goTo(next, { scroll: true, user: true });
        });

        item.addEventListener('keydown', (event) => {
          if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
          event.preventDefault();
          const next = event.key === 'ArrowRight' ? current + 1 : current - 1;
          goTo(next, { scroll: true, user: true });
          items[current].focus({ preventScroll: true });
        });
      });

      navHost.addEventListener('click', (event) => {
        const action = event.target.closest('[data-action]')?.dataset.action;
        const indexAttr = event.target.closest('[data-index]')?.dataset.index;
        if (indexAttr !== undefined) goTo(Number(indexAttr), { scroll: true, user: true });
        else if (action === 'next') goTo(current + 1, { scroll: true, user: true });
        else if (action === 'prev') goTo(current - 1, { scroll: true, user: true });
      });

      if (variant === 'gallery') {
        bindSwipe(deck, {
          onPrev: () => goTo(current - 1, { scroll: false, user: true }),
          onNext: () => goTo(current + 1, { scroll: false, user: true }),
        });
      } else {
        // Sincroniza o item ativo em tempo real durante swipe/scroll nativo
        let rafId = 0;
        deck.addEventListener('scroll', () => {
          if (performance.now() < programmaticUntil) return;
          if (rafId) return;
          rafId = requestAnimationFrame(() => {
            rafId = 0;
            const deckRect = deck.getBoundingClientRect();
            const padStart = parseFloat(getComputedStyle(deck).paddingLeft) || 0;
            const anchor = deck.clientWidth < 631 ? deckRect.left + padStart + 24 : deckRect.left + deckRect.width / 2;
            let bestIndex = current;
            let bestDist = Infinity;
            items.forEach((item, idx) => {
              const r = item.getBoundingClientRect();
              const point = deck.clientWidth < 631 ? r.left : r.left + r.width / 2;
              const dist = Math.abs(point - anchor);
              if (dist < bestDist) {
                bestDist = dist;
                bestIndex = idx;
              }
            });
            if (bestIndex !== current) {
              current = bestIndex;
              applyState();
            }
          });
        }, { passive: true });

        // Arraste com mouse no desktop
        let dragging = false;
        let moved = false;
        let dragStartX = 0;
        let startScrollLeft = 0;

        deck.addEventListener('pointerdown', (event) => {
          if (event.pointerType !== 'mouse' || event.button !== 0) return;
          if (event.target.closest('a[href], button')) return;
          dragging = true;
          moved = false;
          dragStartX = event.clientX;
          startScrollLeft = deck.scrollLeft;
          deck.classList.add('is-dragging');
        });

        window.addEventListener('pointermove', (event) => {
          if (!dragging) return;
          const dx = event.clientX - dragStartX;
          if (Math.abs(dx) > 7) moved = true;
          if (moved) {
            programmaticUntil = 0;
            deck.scrollLeft = startScrollLeft - dx;
          }
        }, signal ? { passive: true, signal } : { passive: true });

        const endDrag = () => {
          if (!dragging) return;
          dragging = false;
          deck.classList.remove('is-dragging');
          if (moved) {
            autoplay.notifyInteraction();
            scrollToCurrent(true);
          }
        };
        window.addEventListener('pointerup', endDrag, signal ? { passive: true, signal } : { passive: true });
        window.addEventListener('pointercancel', endDrag, signal ? { passive: true, signal } : { passive: true });

        deck.addEventListener('click', (event) => {
          if (!moved) return;
          moved = false;
          event.preventDefault();
          event.stopPropagation();
        }, true);
      }

      applyState();
      const autoplay = createAutoplay(
        deck,
        delay,
        () => goTo(current + 1, { scroll: true, user: false }),
        signal,
      );

      navHost.addEventListener('pointerenter', () => autoplay.notifyInteraction(4500), { passive: true });
      navHost.addEventListener('focusin', () => autoplay.notifyInteraction(6000));
    }
  }
}

function bindSwitching(root, kind, signal) {
  let current = 0;
  const slides = { kinetic: heroSlides, bento: BENTO, vertical: JOURNEY, parallax: parallaxItems, liquid: liquidItems }[kind];
  if (!slides) return;
  let swapTimer = 0;

  function update() {
    const item = slides[current];
    setProgress(root, current, slides.length);

    if (kind === 'kinetic') {
      root.querySelectorAll('[data-hero-slide]').forEach((slide, i) => {
        const active = i === current;
        slide.classList.toggle('is-active', active);
        slide.toggleAttribute('inert', !active);
        if (active) slide.removeAttribute('aria-hidden');
        else slide.setAttribute('aria-hidden', 'true');
      });
      root.querySelectorAll('[data-hero-art]').forEach((art, i) => {
        art.classList.toggle('is-active', i === current);
      });
    }

    if (kind === 'bento') {
      root.querySelectorAll('[data-bento-slide]').forEach((grid, i) => {
        const active = i === current;
        grid.classList.toggle('is-active', active);
        grid.toggleAttribute('inert', !active);
        if (active) grid.removeAttribute('aria-hidden');
        else grid.setAttribute('aria-hidden', 'true');
      });
    }

    if (kind === 'vertical') {
      root.querySelectorAll('[data-vertical-image]').forEach((imgEl, i) => {
        imgEl.classList.toggle('is-active', i === current);
      });
      root.querySelector('[data-vertical-tag]').textContent = `${pad(current)} / ${item.tag}`;
      root.querySelector('[data-vertical-title]').textContent = item.title;
      root.querySelectorAll('.vertical-card').forEach((card, i) => {
        const active = i === current;
        card.classList.toggle('is-active', active);
        card.setAttribute('aria-pressed', String(active));
      });
    }

    if (kind === 'parallax') {
      const stage = root.querySelector('[data-parallax-stage]');
      root.querySelectorAll('[data-parallax-back]').forEach((imgEl, i) => imgEl.classList.toggle('is-active', i === current));
      root.querySelectorAll('[data-parallax-front]').forEach((imgEl, i) => imgEl.classList.toggle('is-active', i === current));
      const copyBox = stage.querySelector('.parallax-stage__copy');
      copyBox.classList.add('is-switching');
      clearTimeout(swapTimer);
      swapTimer = setTimeout(() => {
        root.querySelector('[data-parallax-tag]').textContent = `${item.tag} / GYRA NEGÓCIOS`;
        root.querySelector('[data-parallax-title]').textContent = item.title;
        root.querySelector('[data-parallax-copy]').textContent = item.description;
        copyBox.classList.remove('is-switching');
      }, prefersReducedMotion() ? 0 : 120);
    }

    if (kind === 'liquid') {
      const stage = root.querySelector('[data-liquid-stage]');
      root.querySelectorAll('[data-liquid-image]').forEach((imgEl, i) => {
        imgEl.classList.toggle('is-active', i === current);
      });
      const glass = stage.querySelector('.liquid-stage__glass');
      glass.classList.add('is-switching');
      clearTimeout(swapTimer);
      swapTimer = setTimeout(() => {
        root.querySelector('[data-liquid-tag]').textContent = item.tag;
        root.querySelector('[data-liquid-title]').textContent = item.title;
        root.querySelector('[data-liquid-desc]').textContent = item.description;
        glass.classList.remove('is-switching');
      }, prefersReducedMotion() ? 0 : 140);
    }
  }

  const goTo = (next, user = false) => {
    current = ((next % slides.length) + slides.length) % slides.length;
    update();
    if (user) autoplay.notifyInteraction();
  };

  root.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    const selection = event.target.closest('[data-index]')?.dataset.index;
    if (!action && selection === undefined) return;
    if (selection !== undefined) goTo(Number(selection), true);
    else if (action === 'next') goTo(current + 1, true);
    else if (action === 'prev') goTo(current - 1, true);
  });

  bindSwipe(root, {
    onPrev: () => goTo(current - 1, true),
    onNext: () => goTo(current + 1, true),
  });

  bindKeyboardNav(root, {
    onPrev: () => goTo(current - 1, true),
    onNext: () => goTo(current + 1, true),
    onFirst: () => goTo(0, true),
    onLast: () => goTo(slides.length - 1, true),
  });

  if (kind === 'parallax') {
    const stage = root.querySelector('[data-parallax-stage]');
    stage.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse' || prefersReducedMotion()) return;
      const rect = stage.getBoundingClientRect();
      stage.style.setProperty('--pointer-x', ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
      stage.style.setProperty('--pointer-y', ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
    }, { passive: true });
    stage.addEventListener('pointerleave', () => {
      stage.style.setProperty('--pointer-x', '0');
      stage.style.setProperty('--pointer-y', '0');
    });
  }

  const delay = kind === 'kinetic' ? 5400 : 4800;
  const autoplay = createAutoplay(root, delay, () => goTo(current + 1, false), signal);
}

function bindIsometric(root, signal) {
  const cards = [...root.querySelectorAll('.isometric-card')];
  let current = 0;

  function update() {
    cards.forEach((card, i) => {
      const distance = (i - current + cards.length) % cards.length;
      card.dataset.position = distance === 0 ? 'center' : distance === 1 ? 'right' : 'left';
      card.classList.toggle('is-active', i === current);
      card.setAttribute('aria-pressed', String(i === current));
    });
    setProgress(root, current, cards.length);
  }

  const goTo = (next, user = false) => {
    current = ((next % cards.length) + cards.length) % cards.length;
    update();
    if (user) autoplay.notifyInteraction();
  };

  root.addEventListener('click', (event) => {
    const cardBtn = event.target.closest('.isometric-card');
    const dotIndex = event.target.closest('.carousel-dot')?.dataset.index;
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (dotIndex !== undefined) goTo(Number(dotIndex), true);
    else if (cardBtn) {
      const idx = Number(cardBtn.dataset.index);
      goTo(idx === current ? current + 1 : idx, true);
    } else if (action === 'next') goTo(current + 1, true);
    else if (action === 'prev') goTo(current - 1, true);
  });

  bindSwipe(root.querySelector('[data-isometric-stage]') ?? root, {
    onPrev: () => goTo(current - 1, true),
    onNext: () => goTo(current + 1, true),
  });

  bindKeyboardNav(root, {
    onPrev: () => goTo(current - 1, true),
    onNext: () => goTo(current + 1, true),
    onFirst: () => goTo(0, true),
    onLast: () => goTo(cards.length - 1, true),
  });

  update();
  const autoplay = createAutoplay(root, 4800, () => goTo(current + 1, false), signal);
}

function bindHover(root, signal) {
  const cards = [...root.querySelectorAll('.hover-card')];
  let current = 0;

  const select = (index, user = false) => {
    current = ((index % cards.length) + cards.length) % cards.length;
    cards.forEach((card, i) => {
      const selected = i === current;
      card.classList.toggle('is-active', selected);
      card.setAttribute('aria-pressed', String(selected));
    });
    setProgress(root, current, cards.length);
    if (user) autoplay.notifyInteraction();
  };

  cards.forEach((card, index) => {
    card.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse') select(index, true);
    });
    card.addEventListener('focus', () => select(index, true));
    card.addEventListener('click', () => select(index, true));
  });

  root.addEventListener('click', (event) => {
    const dotIndex = event.target.closest('.carousel-dot')?.dataset.index;
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (dotIndex !== undefined) select(Number(dotIndex), true);
    else if (action === 'next') select(current + 1, true);
    else if (action === 'prev') select(current - 1, true);
  });

  bindSwipe(root.querySelector('.hover-stage') ?? root, {
    onPrev: () => select(current - 1, true),
    onNext: () => select(current + 1, true),
  });

  bindKeyboardNav(root, {
    onPrev: () => select(current - 1, true),
    onNext: () => select(current + 1, true),
    onFirst: () => select(0, true),
    onLast: () => select(cards.length - 1, true),
  });

  const autoplay = createAutoplay(root, 4800, () => select(current + 1, false), signal);
}

function bindPlans(root, signal) {
  const tiers = ['start', 'premium', 'master'];
  let audience = 'profissionais';
  let renderedAudience = 'profissionais';
  let tier = 'premium';
  const cardsContainer = root.querySelector('[data-plans-cards]');

  function syncSelection() {
    for (const btn of root.querySelectorAll('[data-audience]')) {
      const selected = btn.dataset.audience === audience;
      btn.classList.toggle('is-active', selected);
      btn.setAttribute('aria-pressed', String(selected));
    }

    if (renderedAudience !== audience) {
      renderedAudience = audience;
      cardsContainer.innerHTML = PLANS[audience].map((plan) => planCard(plan, plan.id === tier)).join('');
    } else {
      for (const card of cardsContainer.querySelectorAll('.plan-expand')) {
        const active = card.dataset.tier === tier;
        card.classList.toggle('is-active', active);
        card.setAttribute('aria-pressed', String(active));
        const more = card.querySelector('[data-plan-more]');
        if (more) more.textContent = active ? 'EM DESTAQUE' : 'VER DETALHES  ↗';
      }
    }

    const tierIndex = Math.max(0, tiers.indexOf(tier));
    setProgress(root, tierIndex, tiers.length);
  }

  const selectTierByIndex = (idx, user = false) => {
    const normalized = ((idx % tiers.length) + tiers.length) % tiers.length;
    tier = tiers[normalized];
    syncSelection();
    if (user) autoplay.stop();
  };

  root.addEventListener('click', (event) => {
    const audienceButton = event.target.closest('[data-audience]');
    const planButton = event.target.closest('[data-tier]');
    const dotIndex = event.target.closest('.carousel-dot')?.dataset.index;
    const action = event.target.closest('[data-action]')?.dataset.action;

    if (audienceButton) {
      audience = audienceButton.dataset.audience;
      syncSelection();
      autoplay.stop();
    } else if (planButton) {
      tier = planButton.dataset.tier;
      syncSelection();
      autoplay.stop();
    } else if (dotIndex !== undefined) {
      selectTierByIndex(Number(dotIndex), true);
    } else if (action === 'next') {
      selectTierByIndex(tiers.indexOf(tier) + 1, true);
    } else if (action === 'prev') {
      selectTierByIndex(tiers.indexOf(tier) - 1, true);
    }
  });

  bindSwipe(cardsContainer, {
    onPrev: () => selectTierByIndex(tiers.indexOf(tier) - 1, true),
    onNext: () => selectTierByIndex(tiers.indexOf(tier) + 1, true),
  });

  bindKeyboardNav(root, {
    onPrev: () => selectTierByIndex(tiers.indexOf(tier) - 1, true),
    onNext: () => selectTierByIndex(tiers.indexOf(tier) + 1, true),
    onFirst: () => selectTierByIndex(0, true),
    onLast: () => selectTierByIndex(tiers.length - 1, true),
  });

  syncSelection();
  const autoplay = createAutoplay(root, 5200, () => {
    selectTierByIndex(tiers.indexOf(tier) + 1, false);
  }, signal);
}
