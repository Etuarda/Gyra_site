import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { NAV, SERVICES, ASSETS, PLANS, PORTFOLIO } from '../src/data/site.js';
import { parseRoute } from '../src/utils/router.js';
import { renderHome } from '../src/pages/home.js';
import { renderAbout } from '../src/pages/about.js';
import { renderSolutions } from '../src/pages/solutions.js';
import { renderProfessionals } from '../src/pages/professionals.js';
import { renderBusiness } from '../src/pages/business.js';
import { renderPlans } from '../src/pages/plans.js';
import { renderPortfolio } from '../src/pages/portfolio.js';
import { renderContact } from '../src/pages/contact.js';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const pages = [renderHome, renderAbout, renderSolutions, renderProfessionals, renderBusiness, renderPlans, renderPortfolio, renderContact];

test('as oito rotas do protótipo têm slugs únicos', () => {
  assert.equal(NAV.length, 8);
  assert.equal(new Set(NAV.map((item) => item.slug)).size, 8);
});

test('rotas desconhecidas redirecionam para início', () => {
  assert.equal(parseRoute('#/negocios', NAV.map((p) => p.slug)), 'negocios');
  assert.equal(parseRoute('#/nao-existe', NAV.map((p) => p.slug)), 'inicio');
  assert.equal(parseRoute('', NAV.map((p) => p.slug)), 'inicio');
});

test('cada página contém título principal, conteúdo e um CTA final', () => {
  for (const render of pages) {
    const html = render();
    assert.match(html, /<h1\b/);
    assert.match(html, /<section\b/);
    assert.match(html, /PRÓXIMO MOVIMENTO/);
    assert.match(html, /#\/contato/);
  }
});

test('os oito modelos de carrossel estão distribuídos entre as páginas', () => {
  const html = pages.map((render) => render()).join(' ');
  const kinds = ['kinetic', 'vertical', 'bento', 'isometric', 'hover', 'parallax', 'plans', 'liquid'];
  for (const type of kinds) assert.match(html, new RegExp(`data-carousel="${type}"`), `${type} não encontrado`);
});

test('os dois públicos têm três planos consistentes', () => {
  for (const audience of ['profissionais', 'negocios']) {
    assert.deepEqual(PLANS[audience].map((p) => p.id), ['start', 'premium', 'master']);
    for (const p of PLANS[audience]) {
      assert.ok(Number(p.price.replace('.', '')) > 0);
      assert.ok(p.items.length >= 4);
    }
  }
});

test('portfólio apresenta capacidades sem atribuir resultados a clientes', () => {
  assert.match(renderPortfolio(), /CAPACIDADE GYRA/);
  assert.doesNotMatch(renderPortfolio(), /cliente atendido|resultado garantido/i);
  assert.equal(PORTFOLIO.length, 4);
});

test('contato não afirma envio a um backend inexistente', () => {
  assert.match(renderContact(), /copiar e compartilhar/);
  assert.match(renderContact(), /Copiar briefing/);
  assert.doesNotMatch(renderContact(), /enviado com sucesso/i);
});

test('todos os assets locais referenciados existem', () => {
  const files = [...Object.values(ASSETS), './assets/brand/logo-book.png'];
  for (const asset of files) assert.ok(existsSync(resolve(root, asset.replace(/^\.\//, ''))), `Arquivo ausente: ${asset}`);
});

test('paleta mantém azul oficial e amarelo como sinalização secundária', () => {
  const css = readFileSync(resolve(root, 'src/styles/tokens.css'), 'utf8');
  assert.match(css, /--color-brand:\s*#0332fb/);
  assert.match(css, /--color-accent-secondary:\s*#f4ec91/);
  assert.match(css, /--color-ink:\s*#090b12/);
});
