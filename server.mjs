/** Servidor HTTP estático mínimo para desenvolvimento local; sem dependências. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)));
const PORT = Number(process.env.PORT ?? 5173);
const TYPES = Object.freeze({
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
});

const server = createServer(async (req, res) => {
  try {
    const rawPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const filepath = resolve(ROOT, `.${rawPath === '/' ? '/index.html' : rawPath}`);

    if (!filepath.startsWith(`${ROOT}${sep}`)) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    const info = await stat(filepath);
    if (!info.isFile()) {
      res.writeHead(404).end('Not Found');
      return;
    }

    const contents = await readFile(filepath);
    res.writeHead(200, {
      'Content-Type': TYPES[extname(filepath)] ?? 'application/octet-stream',
      'Content-Length': contents.length,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(req.method === 'HEAD' ? undefined : contents);
  } catch (error) {
    res.writeHead(error.code === 'ENOENT' ? 404 : 500).end('Not Found');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`GYRA disponível em http://localhost:${PORT}`);
  console.log('Pressione Ctrl+C para encerrar.');
});
