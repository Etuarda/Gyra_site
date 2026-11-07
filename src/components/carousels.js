import { ASSETS, BENTO, JOURNEY, PLANS } from '../data/site.js';
import { button, sectionHead } from './layout.js';

const pad = (i) => String(i + 1).padStart(2, '0');
const arrow = (direction, label, action = direction) =>
  `<button type="button" class="carousel-arrow" data-action="${action}" aria-label="${label}"><span aria-hidden="true">${direction === 'next' ? '→' : '←'}</span></button>`;
const progress = (current, total) => `<div class="carousel-progress"><div class="carousel-progress__track"><span style="width:${((current + 1) / total) * 100}%"></span></div><span>${pad(current)} / ${String(total).padStart(2, '0')}</span></div>`;

const heroSlides = [
  { kicker: 'GYRA / AGÊNCIA CRIATIVA / 01', title: 'Sua marca em movimento.<br>Sua presença digital conectada.', copy: 'Estratégia, conteúdo, audiovisual e tecnologia para ajudar profissionais e empresas a serem encontrados, apresentarem seu valor e criarem novas oportunidades.', image: ASSETS.chrome, tag: 'ESTRATÉGIA + CONTEÚDO + TECNOLOGIA' },
  { kicker: 'COMUNICAÇÃO + MARKETING / 02', title: 'Sua marca não precisa<br>apenas aparecer.', copy: 'Conectamos comunicação e audiovisual para atrair interessados, apresentar diferenciais e facilitar o próximo passo.', image: ASSETS.audiovisual, tag: 'BRANDING + AUDIOVISUAL + MARKETING' },
  { kicker: 'TECNOLOGIA + EXPERIÊNCIA / 03', title: 'Presença digital<br>que cria caminhos.', copy: 'Sites e experiências digitais para organizar informações, receber solicitações e conectar diferentes canais.', image: ASSETS.web, tag: 'WEB + AUTOMAÇÃO + EXPERIÊNCIAS' },
];

/** 02 — Tipografia cinética: transição de slides e do conteúdo, com redução de movimento. */
export function kineticHero() {
  const item = heroSlides[0];
  return `<section class="hero-kinetic texture" data-carousel="kinetic" aria-label="Apresentação da GYRA">
    <div class="container hero-kinetic__inner">
      <div class="hero-kinetic__copy">
        <span class="eyebrow eyebrow--light" data-hero-kicker>${item.kicker}</span>
        <h1 data-hero-title>${item.title}</h1>
        <p data-hero-copy>${item.copy}</p>
        <div class="button-row">${button('Conhecer nossas soluções', 'solucoes', 'primary')}${button('Falar com a GYRA', 'contato', 'outline')}</div>
        <div class="hero-kinetic__nav">${progress(0, 3)}${arrow('prev', 'Slide anterior')}${arrow('next', 'Próximo slide')}</div>
      </div>
      <div class="hero-kinetic__art">
        <img src="${item.image}" alt="" data-hero-image loading="eager" decoding="async">
        <div class="glass hero-kinetic__glass"><span class="micro">GYRA / AGÊNCIA CRIATIVA</span><strong data-hero-tag>${item.tag}</strong></div>
      </div>
    </div>
  </section>`;
}

const bentoSlide = (item, i) => `<div class="bento__grid">
  <article class="bento__main" style="--visual-image:url('${item.image}')"><img src="${item.image}" alt="" loading="lazy"><div class="bento__main-caption glass"><span class="micro">${item.caption}</span><h3>${item.title}</h3></div></article>
  <article class="bento__feature"><span class="micro">01 / ESTRATÉGIA</span><h3>${item.feature}</h3><span class="bento__meta">COMPETÊNCIA / ${pad(i)}</span></article>
  <article class="bento__secondary"><img src="${item.secondaryImage}" alt="" loading="lazy"><div><span class="micro">02 / CRIAÇÃO</span><h3>${item.secondary}</h3></div></article>
  <article class="bento__wide"><span class="micro">DIREÇÃO + CRIAÇÃO + TECNOLOGIA</span><h3>${item.takeaway}</h3><p>${item.detail}</p><button type="button" class="carousel-arrow carousel-arrow--light" data-action="next" aria-label="Explorar próxima competência">→</button></article>
</div>`;

/** 03 — Bento Grid: módulos assimétricos e três conjuntos de conteúdo. */
export function bentoCarousel() {
  return `<section class="section section-dark bento-section texture" data-carousel="bento">
  <div class="container">${sectionHead('INTERACTIVE BENTO GRID / 01—03', 'Tudo se conecta. Sua marca também.', 'Navegue pelas competências que se complementam — da direção da marca à experiência digital e à organização de processos.', 'dark')}
  <div class="section-carousel-meta"><span class="motion-label motion-label--small">MOVIMENTO AUTOMÁTICO</span>${progress(0, BENTO.length)}</div>
  <div class="bento-stage" data-bento-stage>${bentoSlide(BENTO[0], 0)}</div>
  </div></section>`;
}

const verticalCard = (item, i, current) => `<button type="button" class="vertical-card ${i === current ? 'is-active' : ''}" data-index="${i}" aria-pressed="${i === current}">
  <span class="micro">${pad(i)} / ${item.tag}</span><strong>${i === current ? item.title : item.description}</strong>
  ${i === current ? `<span>${item.sub}</span>` : ''}
</button>`;

/** 01 — Jornada em cartões verticais, acessível por clique/teclado. */
export function verticalCarousel() {
  return `<section class="section section-light" data-carousel="vertical"><div class="container">
    ${sectionHead('01 / ROLAGEM VERTICAL', 'Uma jornada que faz sentido.', 'A entrega é um sistema conectado, não uma sequência de posts isolados.', 'light')}
    <div class="section-carousel-meta"><span class="motion-label motion-label--small">MOVIMENTO AUTOMÁTICO</span>${progress(0, 3)}</div>
    <div class="vertical-slider">
      <figure class="vertical-slider__image"><img data-vertical-image src="${JOURNEY[0].image}" alt="" loading="lazy"><figcaption><span data-vertical-tag>01 / ATRAÇÃO</span><strong data-vertical-title>${JOURNEY[0].title}</strong></figcaption></figure>
      <div class="vertical-slider__cards" data-vertical-cards>${JOURNEY.map((item, i) => verticalCard(item, i, 0)).join('')}</div>
      <div class="vertical-slider__controls">${arrow('prev', 'Etapa anterior')}${arrow('next', 'Próxima etapa')}</div>
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
  return `<section class="section section-light" data-carousel="isometric"><div class="container">
  ${sectionHead('04 / ISOMETRIC CARD SLIDER', 'Camadas que se conectam.', 'Fotografia, web e tecnologia formam experiências diferentes, mas trabalham dentro de uma mesma estratégia.', 'light')}
  <div class="isometric-stage" data-isometric-stage>${isometricItems.map((item, i) => `
    <button type="button" class="isometric-card ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-pressed="${i === 0}">
      <img src="${item.image}" alt="" loading="lazy"><span class="isometric-card__content"><small>${pad(i)} / ${item.tag}</small><strong>${item.title}</strong><span>${item.description}</span></span>
    </button>`).join('')}
    <div class="isometric-stage__controls">${arrow('prev', 'Anterior')}${progress(0, 3)}${arrow('next', 'Próximo')}</div>
  </div>
  </div></section>`;
}

const hoverItems = [
  { title: 'Identidade e presença', headline: 'Sua trajetória constrói valor.', description: 'Identidade, conteúdo e materiais que apresentam sua especialidade.', image: ASSETS.branding },
  { title: 'Landing page própria', headline: 'Uma página para explicar.', description: 'Seus serviços e informações de contato em um lugar.', image: ASSETS.web },
  { title: 'Conteúdo e audiovisual', headline: 'Uma linguagem reconhecível.', description: 'Narrativas, vídeos e imagens para comunicar seu trabalho.', image: ASSETS.audiovisual },
];

/** 05 — Zoom progressivo por hover, clique e foco; sem perder suporte touch. */
export function hoverCarousel() {
  return `<section class="section section-light" data-carousel="hover"><div class="container">
  ${sectionHead('05 / HOVER ZOOM DEPTH', 'Sua experiência tem muitas dimensões.', 'Explore entregas que ajudam a apresentar serviços com personalidade e consistência.', 'light')}
  <div class="hover-stage">${hoverItems.map((item, i) => `
    <button type="button" class="hover-card ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-pressed="${i === 0}">
      <img src="${item.image}" alt="" loading="lazy"><span class="hover-card__content"><small>${pad(i)} / ${item.title.toUpperCase()}</small><strong>${item.headline}</strong><span>${item.description}</span></span>
    </button>`).join('')}</div><p class="interaction-hint">Passe o cursor, toque ou use Tab para explorar.</p>
  </div></section>`;
}

const parallaxItems = [
  { tag: 'DESCUBRA', title: 'Sua marca precisa aparecer.', description: 'Fotografia, conteúdo e campanhas para apresentar produtos e experiências.', image: ASSETS.product, overlay: ASSETS.marketing },
  { tag: 'APRESENTE', title: 'Seu negócio merece clareza.', description: 'Site e catálogo para explicar serviços e facilitar escolhas.', image: ASSETS.web, overlay: ASSETS.product },
  { tag: 'CONECTE', title: 'Do interesse à conversa.', description: 'Canais e formulários organizados para receber solicitações.', image: ASSETS.automation, overlay: ASSETS.web },
];

/** 06 — Parallax multicamadas via CSS custom properties e pointermove. */
export function parallaxCarousel() {
  const item = parallaxItems[0];
  return `<section class="section section-dark" data-carousel="parallax"><div class="container">
    ${sectionHead('06 / PARALLAX MULTICAMADAS', 'Produtos, experiências e conexões.', 'A imagem que atrai, a apresentação que explica e o canal que aproxima.', 'dark')}
    <div class="parallax-stage" data-parallax-stage>
      <img class="parallax-stage__background" data-parallax-back src="${item.image}" alt="" loading="lazy">
      <div class="parallax-stage__glow" aria-hidden="true"></div>
      <img class="parallax-stage__foreground" data-parallax-front src="${item.overlay}" alt="" loading="lazy">
      <div class="parallax-stage__copy glass"><span class="micro" data-parallax-tag>${item.tag} / GYRA NEGÓCIOS</span><h3 data-parallax-title>${item.title}</h3><p data-parallax-copy>${item.description}</p></div>
      <div class="parallax-stage__bottom">${arrow('prev', 'Anterior')}${progress(0, 3)}${arrow('next', 'Próxima cena')}</div>
    </div>
  </div></section>`;
}

const planCard = (plan, active) => `<button type="button" class="plan-expand ${active ? 'is-active' : ''}" data-tier="${plan.id}" aria-pressed="${active}">
  <span class="plan-expand__image" style="--plan-image:url('${plan.image}')"><span class="micro">${plan.name.toUpperCase()}</span></span>
  <span class="plan-expand__body"><strong class="plan-expand__price">A partir de R$ ${plan.price}/mês</strong><strong class="plan-expand__title">${plan.title}</strong>
    <span class="plan-expand__value">${plan.value}</span>
    <span class="plan-expand__items"><strong>O QUE ISSO AGREGA</strong>${plan.benefits.map((line) => `<span>✓ ${line}</span>`).join('')}</span>
    <span class="plan-expand__more">${active ? 'EM DESTAQUE' : 'VER DETALHES  ↗'}</span>
  </span>
</button>`;

/** 07 — Planos por público e tier, expandindo o card selecionado. */
export function plansCarousel() {
  return `<section class="section section-light" data-carousel="plans"><div class="container">
    ${sectionHead('07 / VALOR DE CADA PLANO', 'Mais do que entregas: uma presença que trabalha melhor.', 'Compare o que cada plano agrega à comunicação, à jornada do público e à rotina do seu negócio.', 'light')}
    <div class="plans-stage"><div class="plans-stage__top"><div class="segmented" role="group" aria-label="Público dos planos">
      <button type="button" class="is-active" data-audience="profissionais" aria-pressed="true">Profissionais</button>
      <button type="button" data-audience="negocios" aria-pressed="false">Negócios</button>
    </div><span class="micro">POR QUE VALE A PENA</span></div>
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
  return `<section class="section section-dark" data-carousel="liquid"><div class="container">
    ${sectionHead('08 / LIQUID MEDIA / EXPERIMENTAÇÃO', 'Diferentes linguagens. Uma direção.', 'Uma galeria de possibilidades visuais, explorando composição, superfícies e movimento.', 'dark')}
    <div class="liquid-stage"><div class="liquid-stage__image"><img data-liquid-image src="${item.image}" alt="" loading="lazy"></div>
      <div class="liquid-stage__glass glass"><span class="micro">MEDIA LAB / GYRA</span><span class="liquid-stage__tag" data-liquid-tag>${item.tag}</span><h3 data-liquid-title>${item.title}</h3><p data-liquid-desc>${item.description}</p></div>
      <div class="liquid-stage__controls">${progress(0, 3)}${arrow('next', 'Próxima imagem')}</div>
    </div>
  </div></section>`;
}

/** Atributos data-carousel garantem que cada interação fique isolada em seu componente. */
export function initializeCarousels(root = document) {
  for (const carousel of root.querySelectorAll('[data-carousel]')) {
    const kind = carousel.dataset.carousel;
    if (kind === 'hover') bindHover(carousel);
    else if (kind === 'plans') bindPlans(carousel);
    else if (kind === 'isometric') bindIsometric(carousel);
    else bindSwitching(carousel, kind);
  }
  initializeEditorialDecks(root);
}

function autoplayOnView(element, delay, reset, advance) {
  let intervalId = 0;
  let visible = false;
  const stop = () => {
    if (intervalId) clearInterval(intervalId);
    intervalId = 0;
  };
  const start = () => {
    stop();
    reset();
    intervalId = setInterval(() => {
      if (!element.isConnected) { stop(); return; }
      advance();
    }, delay);
  };

  reset();
  if (!('IntersectionObserver' in window)) { start(); return; }
  const observer = new IntersectionObserver(([entry]) => {
    const nextVisible = entry.isIntersecting && entry.intersectionRatio >= .22;
    if (nextVisible === visible) return;
    visible = nextVisible;
    if (visible) start();
    else { stop(); reset(); }
  }, { threshold: [0, .22, .5], rootMargin: '0px 0px -8% 0px' });
  observer.observe(element);
}

/** Converte coleções editoriais em movimentos automáticos coerentes com cada conteúdo. */
function initializeEditorialDecks(root) {
  const decks = [
    ['.service-grid', 'services', 3000],
    ['.feature-grid', 'features', 2700],
    ['.process-grid', 'timeline', 2400],
    ['.image-tile-grid', 'gallery', 3200],
    ['.compact-plans', 'plans', 3000],
    ['.portfolio-grid', 'portfolio', 3200],
    ['.plan-matrix__cards', 'matrix', 2900],
  ];

  for (const [selector, variant, delay] of decks) {
    for (const deck of root.querySelectorAll(selector)) {
      const items = [...deck.children];
      if (items.length < 2) continue;
      deck.classList.add('is-auto-carousel', `is-auto-carousel--${variant}`);
      deck.setAttribute('aria-roledescription', 'carrossel automático');
      let current = 0;
      items.forEach((item, index) => {
        item.tabIndex = 0;
        item.addEventListener('click', () => {
          current = variant === 'gallery' ? (index + 1) % items.length : index;
          update();
        });
        item.addEventListener('keydown', (event) => {
          if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
          event.preventDefault();
          current = event.key === 'ArrowRight'
            ? (current + 1) % items.length
            : (current + items.length - 1) % items.length;
          update();
          items[current].focus({ preventScroll: true });
        });
      });

      const update = () => {
        items.forEach((item, index) => {
          const selected = index === current;
          item.classList.toggle('is-active', selected);
          item.classList.toggle('is-before', index < current);
          item.classList.toggle('is-after', index > current);
          item.setAttribute('aria-current', selected ? 'true' : 'false');
          if (variant === 'gallery') item.tabIndex = selected ? 0 : -1;
        });
        if (variant !== 'gallery') {
          const target = items[current];
          const left = target.offsetLeft - Math.max(0, (deck.clientWidth - target.clientWidth) / 2);
          deck.scrollTo({ left, behavior: 'smooth' });
        }
      };

      autoplayOnView(
        deck,
        delay,
        () => { current = 0; update(); },
        () => { current = (current + 1) % items.length; update(); },
      );
    }
  }
}

function setProgress(root, index, total = 3) {
  const fill = root.querySelector('.carousel-progress__track > span');
  const value = root.querySelector('.carousel-progress > span');
  if (fill) fill.style.width = `${((index + 1) / total) * 100}%`;
  if (value) value.textContent = `${pad(index)} / ${String(total).padStart(2, '0')}`;
}

function bindSwitching(root, kind) {
  let current = 0;
  const slides = { kinetic: heroSlides, bento: BENTO, vertical: JOURNEY, parallax: parallaxItems, liquid: liquidItems }[kind];
  if (!slides) return;
  let timer;

  function update() {
    const item = slides[current];
    setProgress(root, current, slides.length);
    if (kind === 'kinetic') {
      root.querySelector('[data-hero-kicker]').textContent = item.kicker;
      root.querySelector('[data-hero-title]').innerHTML = item.title;
      root.querySelector('[data-hero-copy]').textContent = item.copy;
      root.querySelector('[data-hero-image]').src = item.image;
      root.querySelector('[data-hero-tag]').textContent = item.tag;
    }
    if (kind === 'bento') root.querySelector('[data-bento-stage]').innerHTML = bentoSlide(item, current);
    if (kind === 'vertical') {
      root.querySelector('[data-vertical-image]').src = item.image;
      root.querySelector('[data-vertical-tag]').textContent = `${pad(current)} / ${item.tag}`;
      root.querySelector('[data-vertical-title]').textContent = item.title;
      root.querySelector('[data-vertical-cards]').innerHTML = slides.map((v, i) => verticalCard(v, i, current)).join('');
    }
    if (kind === 'parallax') {
      root.querySelector('[data-parallax-back]').src = item.image;
      root.querySelector('[data-parallax-front]').src = item.overlay;
      root.querySelector('[data-parallax-tag]').textContent = `${item.tag} / GYRA NEGÓCIOS`;
      root.querySelector('[data-parallax-title]').textContent = item.title;
      root.querySelector('[data-parallax-copy]').textContent = item.description;
    }
    if (kind === 'liquid') {
      const image = root.querySelector('[data-liquid-image]');
      image.classList.add('is-transitioning');
      clearTimeout(timer);
      timer = setTimeout(() => {
        image.src = item.image;
        root.querySelector('[data-liquid-tag]').textContent = item.tag;
        root.querySelector('[data-liquid-title]').textContent = item.title;
        root.querySelector('[data-liquid-desc]').textContent = item.description;
        image.classList.remove('is-transitioning');
      }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220);
    }
  }

  root.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    const selection = event.target.closest('[data-index]')?.dataset.index;
    if (!action && selection === undefined) return;
    if (selection !== undefined) current = Number(selection);
    else if (action === 'next') current = (current + 1) % slides.length;
    else if (action === 'prev') current = (current + slides.length - 1) % slides.length;
    else return;
    update();
  });

  if (kind === 'parallax') {
    const stage = root.querySelector('[data-parallax-stage]');
    stage.addEventListener('pointermove', (event) => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = stage.getBoundingClientRect();
      stage.style.setProperty('--pointer-x', ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
      stage.style.setProperty('--pointer-y', ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
    }, { passive: true });
    stage.addEventListener('pointerleave', () => {
      stage.style.setProperty('--pointer-x', '0');
      stage.style.setProperty('--pointer-y', '0');
    });
  }

  const delay = kind === 'kinetic' ? 3400 : 2700;
  autoplayOnView(
    root,
    delay,
    () => { current = 0; update(); },
    () => { current = (current + 1) % slides.length; update(); },
  );
}

function bindIsometric(root) {
  const cards = [...root.querySelectorAll('.isometric-card')];
  let current = 0;
  function update() {
    cards.forEach((card, i) => {
      const distance = (i - current + cards.length) % cards.length;
      card.dataset.position = distance === 0 ? 'center' : distance === 1 ? 'right' : 'left';
      card.classList.toggle('is-active', i === current);
      card.setAttribute('aria-pressed', String(i === current));
    });
    setProgress(root, current);
  }
  root.addEventListener('click', (event) => {
    const index = event.target.closest('[data-index]')?.dataset.index;
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (index !== undefined) current = Number(index);
    else if (action === 'next') current = (current + 1) % 3;
    else if (action === 'prev') current = (current + 2) % 3;
    else return;
    update();
  });
  autoplayOnView(
    root,
    2700,
    () => { current = 0; update(); },
    () => { current = (current + 1) % cards.length; update(); },
  );
}

function bindHover(root) {
  const cards = [...root.querySelectorAll('.hover-card')];
  const select = (index) => cards.forEach((card, i) => {
    const selected = i === index;
    card.classList.toggle('is-active', selected);
    card.setAttribute('aria-pressed', String(selected));
  });
  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => select(index));
    card.addEventListener('focus', () => select(index));
    card.addEventListener('click', () => select(index));
  });
  let current = 0;
  autoplayOnView(
    root,
    2700,
    () => { current = 0; select(current); },
    () => { current = (current + 1) % cards.length; select(current); },
  );
}

function bindPlans(root) {
  let audience = 'profissionais';
  let tier = 'premium';
  const cards = root.querySelector('[data-plans-cards]');
  function update() {
    for (const button of root.querySelectorAll('[data-audience]')) {
      const selected = button.dataset.audience === audience;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    }
    cards.innerHTML = PLANS[audience].map((plan) => planCard(plan, plan.id === tier)).join('');
  }
  root.addEventListener('click', (event) => {
    const audienceButton = event.target.closest('[data-audience]');
    const planButton = event.target.closest('[data-tier]');
    if (audienceButton) { audience = audienceButton.dataset.audience; tier = 'premium'; update(); }
    else if (planButton) { tier = planButton.dataset.tier; update(); }
  });
  const tiers = ['start', 'premium', 'master'];
  let index = 0;
  autoplayOnView(
    root,
    3000,
    () => { audience = 'profissionais'; index = 0; tier = tiers[index]; update(); },
    () => {
      index = (index + 1) % tiers.length;
      tier = tiers[index];
      if (index === 0) audience = audience === 'profissionais' ? 'negocios' : 'profissionais';
      update();
    },
  );
}
