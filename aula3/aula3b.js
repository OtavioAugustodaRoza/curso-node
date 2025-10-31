const http = require('http')
const porta = 3000
const host = '127.0.0.1'
const url = require('url');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write(`<p>URL: ${req.url}</p>`);
  const p = url.parse(req.url, true).query;
  res.write(`<p>Nome: ${p.name || 'nao informado'}</p>`);
  res.write(`<p>Curso: ${p.curso || 'nao informado'}</p>`);
  res.end();
})

servidor.listen(porta, host, () => console.log('servidor rodando'))
