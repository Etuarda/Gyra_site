/** Conteúdo editorial da plataforma digital GYRA. */
const assetsRoot = new URL('../../assets/', import.meta.url);
const asset = (path) => assetsRoot.protocol === 'file:' ? `./assets/${path}` : new URL(path, assetsRoot).pathname;

export const BRAND = Object.freeze({
  name: 'GYRA',
  descriptor: 'Agência Criativa',
  founders: Object.freeze(['Emylle', 'Eduarda']),
  signature: 'Marcas em movimento, ideias sem órbitas definidas.',
  location: 'Campina Grande, Paraíba',
  figma: 'https://www.figma.com/design/16aLJX63DkslZb28XXqCi6/GYRA?node-id=136-69',
});

export const NAV = Object.freeze([
  { slug: 'inicio', label: 'Início' },
  { slug: 'sobre', label: 'Sobre' },
  { slug: 'solucoes', label: 'Soluções' },
  { slug: 'profissionais', label: 'Profissionais' },
  { slug: 'negocios', label: 'Negócios' },
  { slug: 'planos', label: 'Planos' },
  { slug: 'portfolio', label: 'Portfólio' },
  { slug: 'contato', label: 'Contato' },
]);

export const ASSETS = Object.freeze({
  chrome: asset('figma-v3/editorial-creative.png'),
  branding: asset('figma-v3/service-strategy.png'),
  audiovisual: asset('figma-v3/mobile-content-production.png'),
  web: asset('figma-v3/strategy-identity.png'),
  marketing: asset('figma-v3/campaign-strategy.png'),
  automation: asset('figma-v3/digital-automation.png'),
  ai: asset('figma-v3/applied-ai.png'),
  product: asset('figma-v3/business-presentation.png'),
  collage: asset('figma-v3/portfolio-showcase.png'),
});

export const SERVICES = Object.freeze([
  { id: 'estrategia', tag: '01 / POSICIONAMENTO', title: 'Estratégia e identidade', description: 'Posicionamento, proposta de valor, identidade visual e direção de marca.', image: ASSETS.branding },
  { id: 'conteudo', tag: '02 / NARRATIVA', title: 'Conteúdo e audiovisual', description: 'Planejamento, criação, vídeo, fotografia e formatos para comunicar valor.', image: ASSETS.audiovisual },
  { id: 'sites', tag: '03 / EXPERIÊNCIA', title: 'Sites e experiências digitais', description: 'Sites, landing pages, catálogos, formulários e interfaces responsivas.', image: ASSETS.web },
  { id: 'captacao', tag: '04 / ATRAÇÃO', title: 'Aquisição e captação', description: 'Campanhas e jornadas de interesse conectadas aos canais de contato.', image: ASSETS.marketing },
  { id: 'automacao', tag: '05 / OPERAÇÃO', title: 'Integrações e automações', description: 'Fluxos, integrações, CRM e processos conforme as necessidades do projeto.', image: ASSETS.automation },
  { id: 'inteligencia', tag: '06 / TECNOLOGIA', title: 'Inteligência artificial aplicada', description: 'IA para problemas específicos, com análise técnica e supervisão humana.', image: ASSETS.ai },
]);

export const BENTO = Object.freeze([
  { caption: 'ESTRATÉGIA + IDENTIDADE', title: 'Identidade que faz sentido.', feature: 'Comunicação que mostra valor', secondary: 'Criatividade autoral', takeaway: 'Definição antes da execução', detail: 'Marca, mensagem e presença coordenadas.', image: ASSETS.branding, secondaryImage: ASSETS.collage },
  { caption: 'CONTEÚDO + AUDIOVISUAL', title: 'Ideias em movimento.', feature: 'Audiovisual com direção', secondary: 'Campanhas e materiais', takeaway: 'Consistência em múltiplos canais', detail: 'Fotografia, vídeo e narrativas com propósito.', image: ASSETS.audiovisual, secondaryImage: ASSETS.marketing },
  { caption: 'WEB + TECNOLOGIA', title: 'Mais do que um site.', feature: 'Sites e landing pages', secondary: 'Automação de fluxos', takeaway: 'IA aplicada quando faz sentido', detail: 'Experiências web, captação e processos conectados.', image: ASSETS.web, secondaryImage: ASSETS.automation },
]);

export const JOURNEY = Object.freeze([
  { tag: 'ATRAÇÃO', title: 'Ideia que apresenta.', description: 'Conteúdo, identidade e audiovisual.', sub: 'Um primeiro contato com clareza.', image: ASSETS.marketing },
  { tag: 'PRESENÇA', title: 'Experiência que explica.', description: 'Site, catálogo e páginas digitais.', sub: 'Uma oferta compreensível e organizada.', image: ASSETS.web },
  { tag: 'CONTATO', title: 'Estrutura que recebe.', description: 'Formulários, integrações e fluxos.', sub: 'Solicitações encaminhadas conforme o escopo.', image: ASSETS.automation },
]);

export const WEB_FEATURES = Object.freeze([
  { label: 'Apresentação', description: 'Quem você é e o que oferece.' },
  { label: 'Atração', description: 'Páginas para busca e campanhas.' },
  { label: 'Captação', description: 'Formulários e solicitações.' },
  { label: 'Qualificação', description: 'Contexto de cada interessado.' },
  { label: 'Experiência', description: 'Navegação e informações claras.' },
  { label: 'Relacionamento', description: 'Canais e acompanhamento.' },
  { label: 'Operação', description: 'Integrações e processos.' },
  { label: 'Mensuração', description: 'Eventos e indicadores.' },
]);

export const PROCESS = Object.freeze([
  { title: 'Diagnóstico', detail: 'Contexto, objetivos e restrições.' },
  { title: 'Direção', detail: 'Estratégia e plano de ação.' },
  { title: 'Execução', detail: 'Conteúdo, design e tecnologia.' },
  { title: 'Evolução', detail: 'Acompanhamento e ajustes.' },
]);

export const PRINCIPLES = Object.freeze([
  { title: 'Criatividade com propósito', description: 'Originalidade que contribui para a identidade e a experiência.' },
  { title: 'Estratégia antes da execução', description: 'Contexto e diagnóstico precedem ferramentas.' },
  { title: 'Tecnologia aplicada', description: 'Recursos digitais úteis, viáveis e sustentáveis.' },
  { title: 'Integração', description: 'Canais e processos atuando juntos.' },
  { title: 'Transparência', description: 'Escopo, prazos e limites comunicados com clareza.' },
  { title: 'Evolução contínua', description: 'Feedback e melhoria progressiva.' },
]);

export const AUDIENCES = Object.freeze({
  profissionais: {
    title: 'Soluções para profissionais.',
    description: 'Conteúdo, identidade e presença digital para apresentar serviços e facilitar contatos.',
    image: ASSETS.branding,
    problems: [
      ['Rotina corrida', 'Pouco tempo para planejar e produzir conteúdos.'],
      ['Informação dispersa', 'Serviços e diferenciais espalhados por canais.'],
      ['Dependência das redes', 'Oferta sem ambiente próprio e organizado.'],
      ['Contato fragmentado', 'Mensagens e solicitações chegam sem padrão.'],
    ],
    solutions: [
      ['Conteúdo estratégico', 'Planejamento editorial com contexto profissional.'],
      ['Identidade consistente', 'Coerência entre canais e materiais.'],
      ['Landing page', 'Serviços, modalidades, FAQ e contato.'],
      ['Perfil no Google', 'Informações e presença local, quando elegível.'],
      ['Audiovisual', 'Vídeos e materiais explicativos.'],
      ['Relacionamento', 'Organização de solicitações conforme o escopo.'],
    ],
  },
  negocios: {
    title: 'Soluções para negócios.',
    description: 'Comunicação, audiovisual, sites e captação integrados à rotina comercial.',
    image: ASSETS.product,
    problems: [
      ['Apresentação', 'Produtos e serviços sem clareza.'],
      ['Dependência das redes', 'Contato concentrado em plataformas de terceiros.'],
      ['Atrito comercial', 'Orçamentos e dúvidas sem um fluxo organizado.'],
      ['Pouca estrutura web', 'Oferta sem um endereço digital próprio.'],
    ],
    solutions: [
      ['Conteúdo comercial', 'Fotos, vídeos, ofertas e campanhas.'],
      ['Captação presencial', 'Registro de produtos, espaços e serviços.'],
      ['Site compacto', 'Informações e contato acessíveis.'],
      ['Site ampliado', 'Serviços e catálogos estruturados.'],
      ['Campanhas', 'Planejamento e peças para divulgação.'],
      ['Formulários', 'Pedidos de orçamento e encaminhamento.'],
    ],
  },
});

export const PLANS = Object.freeze({
  profissionais: [
    { id: 'start', name: 'Start', price: '297', title: 'Presença profissional.', value: 'Sua comunicação mais organizada, consistente e profissional.', benefits: ['Reduz a comunicação improvisada', 'Deixa serviços e contatos mais fáceis de compreender', 'Constrói constância sem consumir sua rotina profissional'], items: ['8 publicações no feed (até 2 carrosséis)', '8 stories, planejamento editorial e legendas', 'Revisão básica do perfil e link de contato', 'Ajustes no Google, quando elegível'], image: ASSETS.branding },
    { id: 'premium', name: 'Premium', price: '497', title: 'Presença + jornada digital.', value: 'Conteúdo recorrente conectado a uma landing page profissional.', benefits: ['Cria um ambiente próprio além das redes sociais', 'Organiza serviços, diferenciais e próximos passos', 'Facilita o caminho entre interesse e contato'], items: ['10 publicações no feed e 12 stories', 'Até 3 carrosséis e 1 reel no total do feed', 'Landing page: uma implementação', 'Google conforme escopo e relatório mensal'], image: ASSETS.web },
    { id: 'master', name: 'Master', price: '797', title: 'Presença ampliada.', value: 'Mais diversidade de conteúdo, apresentação web ampliada e acompanhamento periódico.', benefits: ['Sustenta uma comunicação mais completa entre canais', 'Aprofunda a apresentação de diferentes serviços', 'Transforma indicadores em ajustes de direção'], items: ['12 publicações no feed e 16 stories', 'Até 4 carrosséis e 2 reels no total do feed', 'Landing ampliada e ajustes mensais limitados', 'Relatório e reunião consultiva de 30 min'], image: ASSETS.audiovisual },
  ],
  negocios: [
    { id: 'start', name: 'Start', price: '597', title: 'Presença comercial.', value: 'Comunicação recorrente e produção audiovisual planejada para destacar produtos e serviços.', benefits: ['Valoriza visualmente produtos, serviços e experiências', 'Reduz a dependência de conteúdo feito de última hora', 'Mantém a divulgação alinhada à rotina comercial'], items: ['8 publicações no feed e 12 stories', 'Até 2 carrosséis e 1 vídeo no total do feed', 'Captação presencial de até 60 min/mês', 'Planejamento promocional e ajustes no Google'], image: ASSETS.marketing },
    { id: 'premium', name: 'Premium', price: '897', title: 'Conteúdo + presença web.', value: 'Divulgação, audiovisual e um ambiente próprio para organizar informações e facilitar contatos.', benefits: ['Conecta a atenção gerada nas redes a um site próprio', 'Centraliza informações que hoje ficam dispersas', 'Cria caminhos mais claros para localização e contato'], items: ['10 publicações no feed e 16 stories', 'Até 3 carrosséis e 2 vídeos no total do feed', 'Captação presencial de até 90 min/mês', 'Site compacto de até 3 páginas ou seções'], image: ASSETS.web },
    { id: 'master', name: 'Master', price: '1.297', title: 'Comunicação ampliada.', value: 'Marca, produtos e canais trabalhando com mais integração.', benefits: ['Organiza uma oferta mais ampla em diferentes páginas', 'Integra campanhas, audiovisual, busca e presença web', 'Permite revisar a comunicação com acompanhamento consultivo'], items: ['12 publicações no feed e 20 stories', 'Até 4 carrosséis e 3 vídeos no total do feed', 'Captação presencial de até 2h/mês', 'Site de até 5 páginas, SEO básico e consultoria'], image: ASSETS.product },
  ],
});

export const PORTFOLIO = Object.freeze([
  { title: 'Identidade e apresentação', tag: 'BRANDING', image: ASSETS.branding, items: ['Direção de marca', 'Sistema visual e verbal', 'Materiais de comunicação', 'Arquivos e orientações'] },
  { title: 'Conteúdo e audiovisual', tag: 'AUDIOVISUAL', image: ASSETS.audiovisual, items: ['Planejamento editorial', 'Captação e edição de vídeo', 'Peças de campanha', 'Formatos para canais'] },
  { title: 'Sites e experiências', tag: 'WEB + UX', image: ASSETS.web, items: ['Arquitetura de informação', 'Sites e landing pages', 'Catálogos e formulários', 'Design responsivo'] },
  { title: 'Fluxos e IA aplicada', tag: 'TECNOLOGIA', image: ASSETS.automation, items: ['Mapeamento de rotinas', 'Integrações conforme escopo', 'Automação supervisionada', 'Documentação técnica'] },
]);
