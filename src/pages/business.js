import { ASSETS, AUDIENCES, PLANS } from '../data/site.js';
import { button, contentSection, ctaBanner, featureCards, imageTiles, pageHero, processSteps } from '../components/layout.js';
import { parallaxCarousel } from '../components/carousels.js';

export function renderBusiness() {
  const content = AUDIENCES.negocios;
  return `${pageHero({eyebrow:'GYRA NEGÓCIOS / DIVULGAÇÃO + ESTRUTURA',title:'Seu negócio em movimento.',
    highlight:'Uma presença comercial conectada.',
    copy:'Integramos comunicação, audiovisual, site, catálogo e campanhas para organizar a apresentação comercial e os canais de contato.',image:ASSETS.product})}
  ${contentSection({theme:'dark',label:'EXEMPLOS DE APLICAÇÃO',title:'Da produção à presença comercial.',body:imageTiles([
    {tag:'COMÉRCIO',title:'Produtos em destaque.',image:ASSETS.product},
    {tag:'AUDIOVISUAL',title:'Captação e campanhas.',image:ASSETS.audiovisual},
    {tag:'PRESENÇA WEB',title:'Informações e contato.',image:ASSETS.web},
  ])})}
  ${parallaxCarousel()}
  ${contentSection({label:'DESAFIOS DO NEGÓCIO',title:'Bons produtos precisam de uma estrutura à altura.',body:featureCards(content.problems)})}
  ${contentSection({theme:'dark',label:'SOLUÇÕES PARA EMPRESAS',title:'Do conteúdo ao pedido de orçamento.',body:featureCards(content.solutions,{variant:'dark'})})}
  ${contentSection({label:'PLANOS PARA NEGÓCIOS',title:'Comunicação + presença digital.',body:`<div class="compact-plans">${PLANS.negocios.map(p=>`<article><span class="eyebrow">${p.name}</span><h3>${p.title}</h3><p>${p.value}</p><strong>A partir de R$ ${p.price}/mês</strong></article>`).join('')}</div><div class="align-end">${button('Comparar planos', 'planos', 'primary')}</div>`})}
  ${contentSection({label:'JORNADA COMERCIAL',title:'Da divulgação ao relacionamento.',body:processSteps([
    {title:'Descoberta',detail:'Busca, conteúdo e campanhas.'},{title:'Interesse',detail:'Apresentação de valor.'},
    {title:'Contato',detail:'Solicitação de orçamento.'},{title:'Relação',detail:'Acompanhamento comercial.'},
  ])})}
  ${ctaBanner('Conecte divulgação, site e relacionamento.')}`;
}
