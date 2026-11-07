import { SERVICES, ASSETS, WEB_FEATURES, PROCESS } from '../data/site.js';
import { button, contentSection, ctaBanner, featureCards, processSteps, sectionHead, serviceCards } from '../components/layout.js';
import { kineticHero, bentoCarousel, verticalCarousel } from '../components/carousels.js';

export function renderHome() {
  return `${kineticHero()}
  <section class="problem-solution">
    <div class="problem-solution__half problem-solution__half--light">
      <span class="eyebrow">01 / O DESAFIO</span><h2>Estar presente não significa estar conectado.</h2>
      <p>Canais e conteúdos isolados dificultam a apresentação da marca e o relacionamento com interessados.</p>
    </div>
    <div class="problem-solution__half problem-solution__half--dark texture">
      <span class="eyebrow eyebrow--light">02 / A SOLUÇÃO</span><h2>Criatividade para atrair.<br>Estratégia para orientar.<br>Tecnologia para conectar.</h2>
      <p>Uma estrutura conectada de comunicação, audiovisual, experiências web e automação.</p>
    </div>
    <span class="problem-solution__arrow" aria-hidden="true">↗</span>
  </section>
  ${contentSection({
    label: 'NOSSAS SOLUÇÕES / SEIS NÚCLEOS', title: 'Estratégia, marketing e tecnologia.<br>Trabalhando juntas.',
    description: 'Uma agência de comunicação e tecnologia para marcas que precisam organizar, apresentar e conectar suas experiências digitais.',
    body: serviceCards(SERVICES),
  })}
  ${bentoCarousel()}
  <section class="audiences">
    <article class="audience audience--people"><div class="audience__image" style="--audience-image:url('${ASSETS.branding}')"></div>
      <div class="audience__content"><span class="eyebrow eyebrow--light">GYRA PROFISSIONAIS</span><h2>Soluções para<br>profissionais.</h2>
      <p>Presença digital, identidade e conteúdos para apresentar seu conhecimento.</p>${button('Para profissionais', 'profissionais', 'light')}</div></article>
    <article class="audience audience--business"><div class="audience__image" style="--audience-image:url('${ASSETS.product}')"></div>
      <div class="audience__content"><span class="eyebrow eyebrow--light">GYRA NEGÓCIOS</span><h2>Soluções para<br>negócios.</h2>
      <p>Comunicação, sites e captação conectados à rotina comercial.</p>${button('Para negócios', 'negocios', 'light')}</div></article>
  </section>
  ${contentSection({
    label: 'WEB / EXPERIÊNCIAS DIGITAIS', title: 'Sites que fazem mais<br>do que apresentar.',
    description: 'Seu site pode organizar ofertas, receber solicitações, integrar canais e apoiar operações comerciais conforme o escopo.',
    body: `<div class="web-feature-grid">${WEB_FEATURES.map((f, index) => `<article class="web-feature"><span>${String(index + 1).padStart(2, '0')}</span><h3>${f.label}</h3><p>${f.description}</p></article>`).join('')}</div>`,
  })}
  ${verticalCarousel()}
  <section class="section section-dark ai-section texture"><div class="container ai-section__grid">
    <div>${sectionHead('TECNOLOGIA APLICADA / EFICIÊNCIA', 'Menos repetição.<br>Mais organização.', 'Criamos fluxos, integrações e aplicações de IA voltados a problemas específicos, considerando manutenção, segurança, privacidade e supervisão.', 'dark')}
      ${button('Avaliar uma solução digital', 'contato', 'light')}</div>
    <div class="ai-section__art"><img src="${ASSETS.automation}" alt="Ilustração de fluxo de automação" loading="lazy"><div class="glass ai-section__caption"><span class="micro">GYRA / SYSTEMS</span><strong>Conteúdo + web + fluxos + IA</strong></div></div>
  </div></section>
  ${contentSection({label: 'COMO TRABALHAMOS / PROCESSO', title: 'Primeiro entendemos.<br>Depois construímos.', body: processSteps(PROCESS)})}
  ${ctaBanner('O próximo movimento da sua marca começa com uma direção.')}`;
}
