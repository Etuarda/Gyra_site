import { ASSETS, BRAND, PRINCIPLES } from '../data/site.js';
import { button, contentSection, ctaBanner, featureCards, imageTiles, pageHero, processSteps } from '../components/layout.js';

export function renderAbout() {
  return `${pageHero({
    eyebrow: 'AGÊNCIA / IDENTIDADE / PROPÓSITO', title: 'Sobre a GYRA.',
    highlight: 'Uma agência de soluções conectadas.',
    copy: 'A GYRA integra estratégia, comunicação, identidade visual, conteúdo, audiovisual, publicidade e tecnologia para desenvolver soluções adaptadas a profissionais e empresas.',
    image: ASSETS.chrome,
  })}
  <section class="section section-light"><div class="container editorial-split">
    <div><span class="eyebrow">ORIGEM / CAMPINA GRANDE, PB</span><h2>Uma marca em movimento.</h2></div>
    <div class="editorial-split__copy"><p>A GYRA nasce da compreensão de que uma marca não se constrói apenas por publicações, peças visuais ou presença em diferentes plataformas.</p>
    <p>Conectamos expressão criativa, planejamento estratégico e recursos tecnológicos para transformar ações isoladas em uma jornada mais consistente.</p></div>
  </div></section>
  <section class="section section-dark"><div class="container editorial-split">
    <div><span class="eyebrow eyebrow--light">QUEM MOVIMENTA A GYRA</span><h2>${BRAND.founders.join(' & ')}.</h2></div>
    <div class="editorial-split__copy"><p>A GYRA é conduzida por ${BRAND.founders[0]} e ${BRAND.founders[1]}, unindo pensamento estratégico, criatividade e tecnologia para transformar necessidades de comunicação em soluções conectadas.</p>
    <p>Cada projeto começa pela escuta do contexto e avança com direção, clareza e acompanhamento próximo.</p></div>
  </div></section>
  ${contentSection({label: 'PLATAFORMA INSTITUCIONAL', title: 'Aquilo que orienta a GYRA.', body: featureCards([
    ['Propósito', 'Conectar criatividade, estratégia e tecnologia para movimentar negócios e transformar sua presença digital em oportunidades reais.'],
    ['Missão', 'Desenvolver soluções integradas de comunicação, conteúdo, audiovisual e tecnologia para fortalecer marcas, ampliar sua presença digital e aproximá-las de seus clientes.'],
    ['Visão', 'Ser reconhecida como uma agência criativa que integra comunicação, estratégia e tecnologia, a partir de Campina Grande e com atuação em novos mercados.'],
    ['Promessa', 'Transformar presença digital em conexões relevantes, por meio de criatividade, estratégia e tecnologia que trabalham juntas.'],
  ])})}
  ${contentSection({theme:'dark', label:'POSICIONAMENTO / DIREÇÃO', title:'Encontrada. Lembrada. Escolhida.', body: featureCards([
    ['Encontrada', 'Facilitar a descoberta por canais, campanhas, conteúdos e experiências digitais.'],
    ['Lembrada', 'Construir coerência, identidade autoral e reconhecimento.'],
    ['Escolhida', 'Apresentar diferenciais e tornar mais simples o contato e a contratação.'],
  ], {variant:'dark'})})}
  ${contentSection({label: 'NOSSOS VALORES', title:'Criatividade com método.', body:featureCards(PRINCIPLES)})}
  ${contentSection({label:'COMO PENSAMOS',title:'Uma estrutura que acompanha sua marca.',body:processSteps([
    {title:'Comunicação integrada',detail:'Conexão entre canais e experiências.'},
    {title:'Criação estratégica',detail:'Identidade autoral alinhada aos objetivos.'},
    {title:'Tecnologia útil',detail:'Experiências e automações com finalidade.'},
    {title:'Atendimento próximo',detail:'Diagnóstico, transparência e acompanhamento.'},
  ])})}
  ${ctaBanner('Vamos mover sua marca com direção.')}`;
}
