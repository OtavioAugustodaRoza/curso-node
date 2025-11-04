const http = require('http');
const fs = require('fs');

const porta = process.env.PORT || 3000

const server = http.createServer((req,res) => {
    fs.appendFile('text.txt','curso de node - CFB Cursos',((err) => {
        if(err)throw err
       console.log('arquivo criado')
    }))

   
    });
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})