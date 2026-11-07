import { ASSETS, SERVICES, WEB_FEATURES } from '../data/site.js';
import { button, contentSection, ctaBanner, featureCards, imageTiles, pageHero, processSteps, serviceCards } from '../components/layout.js';
import { isometricCarousel } from '../components/carousels.js';

export function renderSolutions() {
  return `${pageHero({eyebrow:'SOLUÇÕES / MARKETING + TECNOLOGIA',title:'Serviços que se conectam.',
    highlight:'Estratégia, marketing e tecnologia.',
    copy:'Seis núcleos integrados que conectam descoberta, apresentação, captação, relacionamento e eficiência operacional.', image:ASSETS.web})}
  ${contentSection({theme:'dark', label:'EXEMPLOS DE ENTREGAS', title:'Da ideia à experiência digital.',
    description:'Direção visual aplicada a diferentes frentes. Cada trabalho é dimensionado conforme a necessidade e o escopo.',
    body:imageTiles([
      {tag:'BRANDING',title:'Direção que orienta.',image:ASSETS.branding},
      {tag:'CAMPANHAS',title:'Conteúdo que comunica.',image:ASSETS.marketing},
      {tag:'WEB + UX',title:'Interfaces que conectam.',image:ASSETS.web},
    ])})}
  ${isometricCarousel()}
  ${contentSection({label:'SEIS NÚCLEOS INTEGRADOS',title:'Marketing, criatividade e código.',body:serviceCards(SERVICES)})}
  ${contentSection({label:'JORNADA INTEGRADA',title:'Uma solução acompanha a outra.',body:processSteps([
    {title:'Descoberta',detail:'Conteúdo, busca e campanha.'},{title:'Apresentação',detail:'Identidade, site e catálogo.'},
    {title:'Captação',detail:'Contato e solicitação.'},{title:'Operação',detail:'Relacionamento e automação.'},
  ])})}
  ${contentSection({theme:'dark',label:'WEB COMO INFRAESTRUTURA',title:'Muito além de uma vitrine.',body:featureCards(WEB_FEATURES.map((x)=>({title:x.label,description:x.description})),{variant:'dark'})})}
  <section class="section section-light"><div class="container editorial-split">
    <div><span class="eyebrow">PROJETOS SOB MEDIDA</span><h2>Tecnologia com propósito.</h2></div>
    <div class="editorial-split__copy"><p>Sites, sistemas sob medida, catálogos, integrações, CRM e IA são dimensionados e orçados conforme diagnóstico técnico.</p>${button('Solicitar diagnóstico', 'contato', 'primary')}</div>
  </div></section>
  ${ctaBanner('A próxima solução começa com um diagnóstico.')}`;
}
