const http = require('http')
const porta = process.env.PORT || 3000;


const servidor = http.createServer((req,res) => {
    
    res.statusCode=200
    res.writeHead(200,{'content-type': 'text/plain'})
    res.end('CFB Cursos')

})

servidor.listen(porta, '127.0.0.1', () => {
    console.log(`Servidor rodando na porta ${porta}`);
  });