# GYRA — Agência Criativa | Website local

Website institucional GYRA em **HTML + CSS + JavaScript nativo (ES Modules)**, com arquitetura pequena, organizada e sem dependências externas.

## 1. Execução local

### Requisitos
- Node.js **18 ou superior** (recomendado Node.js 20+).
- Navegador atualizado.

```bash
# 1. Descompacte o ZIP e entre na pasta
cd gyra-site

# 2. Inicie o servidor local (não precisa de npm install)
npm run dev

# 3. Abra no navegador
# http://localhost:5173/#/inicio
```

Alternativa sem npm:

```bash
node server.mjs
```

Alternativa com Python 3:

```bash
python3 -m http.server 5500
# abra http://localhost:5500/#/inicio
```

> **Não abra `index.html` diretamente com `file://`:** ES Modules podem ser bloqueados pelo navegador nesse modo. Use um servidor HTTP local.

## 2. Organização

```text
gyra-site/
├── index.html                     # Documento base e metadados
├── package.json                   # Comandos, sem dependências
├── server.mjs                     # Servidor estático Node.js
├── assets/
│   ├── brand/                     # Marca extraída do manual fornecido
│   └── illustrations/             # Arte vetorial editorial independente
├── src/
│   ├── app.js                     # Router, navegação e bootstrap
│   ├── components/
│   │   ├── layout.js              # Header, footer, cards e layouts
│   │   └── carousels.js           # Oito carrosséis e controladores
│   ├── data/
│   │   └── site.js                # Textos, serviços, planos e imagens
│   ├── pages/                     # Uma função por página
│   │   ├── home.js
│   │   ├── about.js
│   │   ├── solutions.js
│   │   ├── professionals.js
│   │   ├── business.js
│   │   ├── plans.js
│   │   ├── portfolio.js
│   │   └── contact.js
│   ├── styles/
│   │   ├── tokens.css             # Design tokens
│   │   ├── base.css               # Tipografia e reset
│   │   ├── layout.css             # Seções e estrutura
│   │   ├── components.css         # Cards, portfólio e formulário
│   │   ├── carousels.css          # Oito formatos de interação
│   │   ├── responsive.css         # Desktop/tablet/mobile e movimento reduzido
│   │   └── main.css               # Entrypoint CSS
│   └── utils/
│       └── router.js              # Roteamento puro/testável
├── tests/
│   └── site.test.mjs              # Testes com node:test
└── scripts/
    └── create-artwork.py         # Recria ilustrações SVG locais
```

## 3. Páginas disponíveis

`#/inicio`, `#/sobre`, `#/solucoes`, `#/profissionais`, `#/negocios`, `#/planos`, `#/portfolio`, `#/contato`.

O menu mobile, a navegação, as abas dos planos, os cards expansíveis e os estados dos carrosséis funcionam **sem APIs externas**.

## 4. Carrosséis

| Modelo | Onde | Implementação |
| --- | --- | --- |
| Tipografia cinética | Hero da homepage | Troca de título, imagem, legenda e progresso |
| Bento Grid | Homepage | Três composições editoriais responsivas |
| Rolagem vertical | Homepage | Etapas empilhadas selecionáveis |
| Isométrico 3D | Soluções | Perspectiva CSS com botão anterior/próximo |
| Hover Zoom Depth | Profissionais | Foco por hover, clique e teclado |
| Parallax multicamadas | Negócios | Camadas e pointermove, desativado com movimento reduzido |
| Cartões expandidos | Planos | Público + tier com expansão responsiva |
| Liquid Media | Portfólio | Transição editorial automática e interativa |

## 5. Design System

- Azul principal: `#0332FB`
- Preto Órbita: `#090B12`
- Branco: `#FFFFFF`
- Prata: `#CFD4E2`
- Gelo: `#E8ECF5`
- Amarelo-claro: `#F4EC91` — **somente** navegação ativa, progressos e selos “PRÓXIMO MOVIMENTO”.

Tokens ficam em `src/styles/tokens.css`, com `var(--color-...)` nos demais arquivos. A tipografia utiliza alternativas locais seguras (serifada Georgia e sans-serif do sistema): fontes Adobe/Google não são obrigatórias nem embutidas.

## 6. Imagens e fidelidade visual

Os assets locais seguem uma direção editorial única, com linguagem escura, azul elétrico, superfícies cromadas e temas alinhados a estratégia, design, audiovisual e tecnologia.

Referência oficial: https://www.figma.com/design/16aLJX63DkslZb28XXqCi6/GYRA?node-id=136-69

## 7. Formulário e canais de contato

O briefing usa validação HTML e **copia o resumo para a área de transferência**. Não envia informações, não grava um banco de dados e não confirma atendimento. E-mail, WhatsApp e automações comerciais oficiais precisam ser definidos antes da publicação.

## 8. Testes

```bash
npm test
```

Os testes verificam as rotas, as páginas, os oito carrosséis, os planos, a transparência do portfólio, a ausência de backend fictício e os arquivos de mídia.

## 9. Ajustes usuais

- **Textos e preços:** `src/data/site.js`.
- **Hierarquia e conteúdo de cada página:** `src/pages/`.
- **Design tokens:** `src/styles/tokens.css`.
- **Cards e menus:** `src/components/layout.js` + `src/styles/components.css`.
- **Carrosséis:** `src/components/carousels.js` + `src/styles/carousels.css`.
- **Mobile:** `src/styles/responsive.css`.

Antes da publicação em domínio próprio, confirme direitos de marca, política de privacidade e configuração dos canais oficiais de atendimento.

## 10. Deploy no GitHub Pages

O deploy é automático pela workflow `.github/workflows/pages.yml` sempre que houver um `push` na branch `main`.

No GitHub, abra **Settings → Pages** e confirme **Source: GitHub Actions**. Depois da primeira execução bem-sucedida, o site ficará disponível em:

`https://etuarda.github.io/Gyra_site/`
