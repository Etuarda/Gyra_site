import { ASSETS, AUDIENCES, PLANS } from '../data/site.js';
import { button, contentSection, ctaBanner, featureCards, imageTiles, pageHero, processSteps } from '../components/layout.js';
import { hoverCarousel } from '../components/carousels.js';

export function renderProfessionals() {
  const content = AUDIENCES.profissionais;
  return `${pageHero({eyebrow:'GYRA PROFISSIONAIS / PRESENÇA + AUTORIDADE',title:'Sua experiência merece presença.',
    highlight:'Digital à altura do seu trabalho.',
    copy:'Conteúdo, identidade, landing pages e comunicação para apresentar serviços com clareza e facilitar o contato com interessados.',image:ASSETS.branding})}
  ${contentSection({theme:'dark',label:'EXEMPLOS DE APLICAÇÃO',title:'A sua especialidade em evidência.',body:imageTiles([
    {tag:'IDENTIDADE',title:'Clareza na apresentação.',image:ASSETS.branding},
    {tag:'SITE PRÓPRIO',title:'Serviços em uma página.',image:ASSETS.web},
    {tag:'CONTEÚDO',title:'Consistência entre canais.',image:ASSETS.audiovisual},
  ])})}
  ${hoverCarousel()}
  ${contentSection({label:'DESAFIOS',title:'Sua expertise precisa ser compreendida.',body:featureCards(content.problems)})}
  ${contentSection({theme:'dark',label:'ESTRUTURA PROFISSIONAL',title:'Uma presença à altura do seu trabalho.',body:featureCards(content.solutions,{variant:'dark'})})}
  ${contentSection({label:'PLANOS PARA PROFISSIONAIS',title:'Planos pensados para a sua realidade.',description:'O conteúdo é o ponto de partida. Os demais recursos se somam conforme sua necessidade.',body:`<div class="compact-plans">${PLANS.profissionais.map(p=>`<article><span class="eyebrow">${p.name}</span><h3>${p.title}</h3><p>${p.value}</p><strong>A partir de R$ ${p.price}/mês</strong></article>`).join('')}</div><div class="align-end">${button('Comparar planos', 'planos', 'primary')}</div>`})}
  ${contentSection({label:'JORNADA PROFISSIONAL',title:'Ser encontrada, compreendida e contatada.',body:processSteps([
    {title:'Descoberta',detail:'Conteúdos, redes e buscas.'},{title:'Compreensão',detail:'Serviços e diferenciais claros.'},
    {title:'Contato',detail:'Canais e formulários.'},{title:'Organização',detail:'Solicitações bem encaminhadas.'},
  ])})}
  ${ctaBanner('Sua experiência merece ser compreendida.')}`;
}
