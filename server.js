import express from 'express';

const app = express() // Cria um servidor express e armazena ele na constante app

app.get("/",(req,res) =>{
    res.send("Hello World") // Quando uma requisição for realizada em /
})

app.get('/clientes', (req,res) => {
    res.json(clientes);
})

app.get('/dividas', (req,res) => {
    res.json(dividas);
})

app.get('/pagamentos', (req, res) => {
    res.json(pagamentos);
})

app.post('./clientes', (req,res) => {
    const cliente = req.body; //Guarda a variavel cliente no body que enviamos na requisição
    clientes.push(cliente); //Adiciona esse cliente ao nosso Array de clientes
    res.json(clientes); //Renderiza todos os clientes
})

app.post('./pagamentos', (req, res) => {
    const pagamento = req.body;
    pagamentos.push(pagamento);
    res.json(pagamentos);
})

app.post('./dividas', (req, res) => {
    const divida = req.body;
    divida.push(divida);
    res.json(dividas);
})

const clientes = [ //Criando um Array de Clientes
    {
        id_cliente: 1,
        nome: 'Jardel',
        endereco: 'Avenida A',
        telefone: '82988880000',
        email: 'jardel@gmail.com'
    },
    //Adicionar Mais...
];

const dividas = [ //Criando um Array de Dividas
{
    id_dividas: 1,
    id_cliente: 1, //Referenciando o ID do Cliente
    valorRestante : 150.50,
    valorDividaTotal: 385.50,
    dataDivida: '2024-04-15',
    prazoPagamento: '2024-10-25',
    status: 'Pendente'
},
    //Adicione Mais...
];

const pagamentos = [ //Criando um Array de Pagamentos
{
    id_pagamento: 1,
    id_cliente: 1, //referenciando o ID do Cliente
    valorPago: 235.00,
    valorTotalDivida: 385.50,
    dataPagamento: '2024-04-15',
    metodoPagamento: 'Cartao'
},
    //Adicione Mais...
]

app.listen(3000,() => {
    console.log("Servidor Rodando em http://localhost:3000")
})
