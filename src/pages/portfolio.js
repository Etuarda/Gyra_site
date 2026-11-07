import { ASSETS, PORTFOLIO } from '../data/site.js';
import { contentSection, ctaBanner, imageTiles, pageHero, processSteps } from '../components/layout.js';
import { liquidCarousel } from '../components/carousels.js';

export function renderPortfolio() {
  return `${pageHero({eyebrow:'PROJETOS / PROCESSO / EVIDÊNCIAS',title:'Ideias que ganham forma.',
    highlight:'Explore o que podemos construir.',
    copy:'Uma galeria de possibilidades: linguagem visual, audiovisual, sites e processos digitais conectados por uma mesma direção.',image:ASSETS.collage})}
  ${contentSection({label:'REPERTÓRIO DE ENTREGAS',title:'O que a GYRA pode desenvolver.',description:'Frentes de atuação que combinam estratégia, criação, produção e tecnologia em soluções integradas.',body:`
    <div class="portfolio-grid">${PORTFOLIO.map((item,i)=>`<article class="portfolio-card"><div class="portfolio-card__image"><img src="${item.image}" alt="Direção visual para ${item.title}" loading="lazy"><span class="portfolio-card__tag">CAPACIDADE GYRA</span></div><div class="portfolio-card__body"><span class="eyebrow">${item.tag}</span><h3>${item.title}</h3><ul>${item.items.map(x=>`<li>${x}</li>`).join('')}</ul></div></article>`).join('')}</div>`})}
  ${liquidCarousel()}
  ${contentSection({label:'COMO DOCUMENTAMOS CASES',title:'Resultados reais exigem evidências.',description:'Quando houver trabalhos autorizados, cada caso poderá apresentar seu contexto, as entregas e as evidências verificadas.',body:processSteps([
    {title:'Contexto',detail:'Objetivo e situação inicial.'},
    {title:'Solução',detail:'O que foi desenvolvido.'},
    {title:'Papel da GYRA',detail:'Responsabilidades e entregas.'},
    {title:'Evidências',detail:'Indicadores confirmados e autorização.'},
  ])})}
  ${ctaBanner('Apresente seu projeto com clareza.')}`;
}
