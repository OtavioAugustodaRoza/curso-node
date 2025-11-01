// usando express
const express = require('express')
const app = express()
const porta = process.env.PORT || 3000;


app.get('/', (req,res) =>{
    res.send('seja bem-vindo')
})
app.get('/canal', (req,res) =>{
    res.json({canal: "CFB cursos"})
})



app.listen(porta, '127.0.0.1', () => {
    console.log(`Servidor rodando na porta ${porta}`);
  });