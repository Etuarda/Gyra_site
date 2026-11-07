import { ASSETS } from '../data/site.js';
import { contentSection, ctaBanner, featureCards, pageHero, processSteps } from '../components/layout.js';

export function renderContact() {
  return `${pageHero({eyebrow:'CONTATO / DIAGNÓSTICO / PROPOSTA',title:'Vamos falar sobre seu projeto.',
    highlight:'Contato e diagnóstico.',
    copy:'Conte o que sua marca precisa comunicar, organizar ou desenvolver. Começamos com contexto, prioridades e um escopo claro.',image:ASSETS.branding})}
  <section class="section section-light"><div class="container">
    <div class="section-head"><span class="eyebrow">BRIEFING E DIAGNÓSTICO</span><h2>Conte o que precisa mudar.</h2><p>Preencha os dados e copie um resumo para enviar pelo seu canal de preferência.</p></div>
    <div class="contact-layout"><form class="contact-form" id="briefing-form" novalidate>
      <h3>Seu briefing</h3><div class="contact-form__grid">
        <label>Nome <input name="nome" type="text" autocomplete="name" maxlength="100" required placeholder="Seu nome"></label>
        <label>Empresa <input name="empresa" type="text" maxlength="120" placeholder="Nome da empresa (opcional)"></label>
        <label>E-mail <input name="email" type="email" autocomplete="email" required placeholder="seu@email.com"></label>
        <label>WhatsApp <input name="telefone" type="tel" autocomplete="tel" placeholder="(00) 00000-0000"></label>
        <label>Tipo de projeto <select name="tipo" required><option value="">Selecione uma área</option><option>Estratégia e identidade</option><option>Conteúdo e audiovisual</option><option>Website e experiência digital</option><option>Marketing e captação</option><option>Automação e integração</option><option>IA aplicada</option><option>Outro</option></select></label>
        <label>Objetivo principal <input name="objetivo" type="text" maxlength="180" required placeholder="O que deseja desenvolver?"></label>
        <label>Prazo estimado <select name="prazo"><option>A definir</option><option>Até 30 dias</option><option>1 a 3 meses</option><option>Mais de 3 meses</option></select></label>
        <label>Orçamento estimado <select name="orcamento"><option>Prefiro conversar</option><option>Até R$ 1.000</option><option>R$ 1.000 a R$ 3.000</option><option>Acima de R$ 3.000</option></select></label>
      </div><label>Contexto e detalhes <textarea name="detalhes" rows="5" maxlength="3000" required placeholder="Conte sobre o projeto, o contexto e as necessidades..."></textarea></label>
      <div class="contact-form__actions"><button type="submit" class="button button--primary">Copiar briefing <span aria-hidden="true">↗</span></button>
      <p class="form-feedback" id="form-feedback" role="status" aria-live="polite"></p></div>
      <p class="form-disclaimer">Ao continuar, o resumo do briefing será preparado para você copiar e compartilhar pelo canal de atendimento.</p>
    </form>
    <aside class="contact-panel texture"><span class="eyebrow eyebrow--light">ATENDIMENTO CONSULTIVO</span><h3>Vamos entender seu cenário.</h3>
      <div class="contact-panel__item"><span>01 / BRIEFING</span><p>Organize o contexto e as prioridades do projeto.</p></div>
      <div class="contact-panel__item"><span>02 / DIAGNÓSTICO</span><p>Necessidades, oportunidades e viabilidade.</p></div>
      <div class="contact-panel__item"><span>03 / PROPOSTA</span><p>Escopo, etapas, investimento e próximos passos.</p></div>
      <p class="contact-panel__note">Um processo consultivo, transparente e orientado ao contexto.</p>
    </aside></div></div></section>
  ${contentSection({label:'COMO FUNCIONA',title:'Processo claro, consultivo e objetivo.',body:processSteps([
    {title:'Contexto',detail:'Entender negócio e objetivos.'},{title:'Prioridades',detail:'Identificar problemas relevantes.'},
    {title:'Proposta',detail:'Definir soluções e escopo.'},{title:'Próximos passos',detail:'Alinhar cronograma e entregas.'},
  ])})}
  ${contentSection({theme:'dark',label:'SERVIÇOS DISPONÍVEIS',title:'Projetos integrados por necessidade.',body:featureCards([
    ['Estratégia','Marca, identidade e posicionamento.'],['Conteúdo','Editorial, design e audiovisual.'],
    ['Sites','Presença e experiências digitais.'],['Captação','Campanhas e formulários.'],
    ['Automação','Ferramentas e jornadas.'],['IA aplicada','Apoio a processos e organização.'],
  ],{variant:'dark'})})}
  <section class="section section-light"><div class="container"><div class="section-head"><span class="eyebrow">PERGUNTAS FREQUENTES</span><h2>Transparência desde o início.</h2></div>
    <div class="faq">
      <details><summary>Como é definido o escopo?</summary><p>Após compreender as necessidades, a GYRA define entregas, responsabilidades, condições e limites da proposta.</p></details>
      <details><summary>O que acontece após o diagnóstico?</summary><p>As possibilidades são avaliadas e uma proposta pode ser elaborada com base no contexto e na viabilidade técnica.</p></details>
      <details><summary>Como os prazos são definidos?</summary><p>O cronograma é alinhado conforme o escopo, a complexidade e as prioridades de cada projeto.</p></details>
      <details><summary>Como funciona o briefing?</summary><p>O formulário organiza as informações essenciais e prepara um resumo para compartilhamento com a equipe.</p></details>
    </div></div></section>
  ${ctaBanner('O próximo movimento começa aqui.')}`;
}

export function initializeContact(root = document) {
  const form = root.querySelector('#briefing-form');
  if (!form) return;
  const feedback = form.querySelector('#form-feedback');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      feedback.textContent = 'Confira os campos obrigatórios antes de continuar.';
      return;
    }
    const data = new FormData(form);
    const summary = [
      'GYRA — BRIEFING DE PROJETO',
      ...[...data.entries()].map(([key, value]) => `${key.toUpperCase()}: ${String(value).trim()}`),
      'Resumo preparado para compartilhamento com a equipe GYRA.',
    ].join('\n');
    try {
      await navigator.clipboard.writeText(summary);
      feedback.textContent = 'Briefing copiado. Envie o texto pelo canal oficial da GYRA quando disponível.';
    } catch {
      const box = document.createElement('textarea');
      box.value = summary;
      box.readOnly = true;
      box.className = 'contact-form__copy-fallback';
      box.setAttribute('aria-label', 'Texto do briefing para copiar');
      form.append(box);
      box.select();
      feedback.textContent = 'Selecione e copie o briefing exibido abaixo.';
    }
  });
}
