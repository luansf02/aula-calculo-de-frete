//IMPORTANDO OS MÓDULOS DAS DEPENDÊNCIAS
const express = require("express");
const cors = require("cors");

//CRIANDO A INSTÂNCIA DA APLICAÇÃO EXPRESS
const app = express();

//DEFININDO A PORTA DA APLICAÇÃO QUE IRÁ EXECUTAR
const port = 5001;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})