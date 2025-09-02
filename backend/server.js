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

//CONFIGURAR O EXPRESS PARA REQUISIÇÕES EM JSON
app.use(express.json());

//HABILITA O CORS PARA ACEITAR AS REQUISIÇÕES
app.use(cors());


//TABELA DE PREÇOS
const precos={
    bicicleta: 0.80,
    carro: 0.95,
    drone: 1.20
}

//CRIANDO A ROTA DA APLICAÇÃO
app.post("/calcularfrete",(req,res)=>{
    //DESESTRUTURAÇÃO PARA EXTRAIR AS VARIÁVEIS DA APLICAÇÃO 
    const{distancia,tipoTransporte} = req.body;
    if(distancia === undefined || tipoTransporte === undefined){
        return res.status(400).json({error:"distância e transporte obrigatórios"})
    }

    const precoPorKM = precos[tipoTransporte.toLowerCase()];
    if(precoPorKM === undefined){
        return res.status(400).json({error:"tipo de transporte inválido"})
    }

    //CALCULAR O VALOR TOTAL DO FRETE
    const valorTotal = distancia * precoPorKM;

    //ARREDONDA PARA 2 CASAS DECIMAIS
    res.json ({valorTotal: valorTotal.toFixed(2)})

})