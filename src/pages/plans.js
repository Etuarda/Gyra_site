import { ASSETS, PLANS } from '../data/site.js';
import { contentSection, ctaBanner, featureCards, pageHero } from '../components/layout.js';
import { plansCarousel } from '../components/carousels.js';

export function renderPlans() {
  return `${pageHero({eyebrow:'PLANOS / ESTRUTURAÇÃO DIGITAL', title:'Planos para cada momento.',
    highlight:'Estágios de estruturação, não pacotes de posts.',
    copy:'Start, Premium e Master para profissionais e negócios. Cada nível representa um estágio da presença digital, com escopo e investimento confirmados na proposta.',image:ASSETS.marketing})}
  ${contentSection({label:'ESTÁGIOS',title:'Diferentes estágios. A mesma direção.',body:featureCards([
    ['Start','Organizar e comunicar com consistência, planejamento e presença profissional.'],
    ['Premium','Conectar e captar com conteúdo recorrente e um ambiente próprio na web.'],
    ['Master','Ampliar e acompanhar com mais produção, estrutura web e orientação consultiva.'],
  ])})}
  ${plansCarousel()}
  ${contentSection({theme:'dark',label:'VALOR GYRA',title:'O que nossos serviços agregam ao seu negócio.',description:'Cada plano combina entregas práticas com uma direção clara para tornar sua presença digital mais coerente, compreensível e útil.',body:featureCards([
    ['Direção estratégica','Você deixa de publicar por impulso e passa a comunicar com objetivos, prioridades e uma mensagem definida.'],
    ['Consistência de marca','Conteúdo, imagem e canais passam a representar o mesmo posicionamento, fortalecendo reconhecimento e confiança.'],
    ['Clareza da oferta','Serviços, produtos e diferenciais ficam mais fáceis de encontrar e compreender.'],
    ['Caminhos para contato','A comunicação orienta o público para o próximo passo, reduzindo barreiras entre interesse e solicitação.'],
    ['Tempo para o negócio','Planejamento e produção deixam de depender apenas da sua disponibilidade e das urgências do dia a dia.'],
    ['Evolução acompanhada','Relatórios e orientação consultiva ajudam a identificar ajustes compatíveis com o escopo contratado.'],
  ],{variant:'dark'})})}
  ${contentSection({label:'DETALHAMENTO DO ESCOPO',title:'O que cada plano propõe.',description:'Entregas, condições de execução e custos adicionais são confirmados no diagnóstico e detalhados na proposta comercial.',body:`
    <div class="plan-matrix">${Object.entries(PLANS).map(([audience, tiers])=>`
      <div class="plan-matrix__group"><h3>${audience==='profissionais'?'GYRA Profissionais':'GYRA Negócios'}</h3>
      <div class="plan-matrix__cards">${tiers.map(plan=>`<article class="plan-matrix__card"><span>${plan.name} / A partir de R$ ${plan.price}/mês</span><h4>${plan.title}</h4><p>${plan.value}</p><strong>O que agrega</strong><ul>${plan.benefits.map(x=>`<li>${x}</li>`).join('')}</ul><strong>Entregas propostas</strong><ul>${plan.items.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('')}</div></div>`).join('')}</div>`})}
  ${contentSection({theme:'dark',label:'SOLUÇÕES SOB ORÇAMENTO',title:'Seu negócio tem processos próprios. Sua tecnologia também pode ter.',body:featureCards([
    ['Sites e landing pages','Campanhas, ofertas, informações, formulários e eventos de mensuração conforme o projeto.'],['Catálogos e filtros','Produtos e serviços organizados por critérios relevantes para cada operação.'],
    ['Captação e qualificação','Formulários e fluxos para compreender e encaminhar cada solicitação.'],['CRM e relacionamento','Integrações para organizar contatos, oportunidades e etapas comerciais.'],
    ['Automações','Fluxos para reduzir tarefas repetitivas e atualizar registros.'],['IA aplicada','Recursos supervisionados, com fontes, permissões, limites e custos definidos.'],
  ],{variant:'dark'})})}
  <section class="section section-light"><div class="container"><div class="notice"><span class="eyebrow">TRANSPARÊNCIA COMERCIAL</span><h2>Clareza antes de contratar.</h2>
    <p>Os planos mensais não incluem automaticamente sistemas personalizados, agentes de IA, CRM, automações avançadas, catálogos complexos, filtros sob medida ou gestão de anúncios.</p>
    <p><strong>Os preços apresentados são referências sujeitas à validação de custos, capacidade e margem.</strong> Toda entrega, responsabilidade e condição é confirmada na proposta comercial.</p></div></div></section>
  ${ctaBanner('Vamos escolher o plano adequado ao seu momento.')}`;
}
