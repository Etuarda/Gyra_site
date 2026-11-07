/** Parseia apenas as rotas reconhecidas; entradas desconhecidas voltam ao Início. */
export function parseRoute(hash, validRoutes) {
  const slug = String(hash ?? '').replace(/^#\/?/, '').split('?')[0].split('/')[0];
  return validRoutes.includes(slug) ? slug : 'inicio';
}
