import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../DbConnect.js';
import ClienteRouter from './routes/ClienteRouter.js';
import PagamentoRouter from './routes/PagamentoRouter.js';
import DividaRouter from './routes/DividaRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', ClienteRouter);
app.use('/api', PagamentoRouter);
app.use('/api', DividaRouter);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/clientes", async (req, res) => {
    const listaClientes = await cliente.find({});
    res.status (200).json (clientes);
});

app.get("/dividas", async (req, res) => {
    const listaDividas = await divida.find({});
    res.status (200).json (dividas);
});

app.get("/pagamentos", async (req, res) => {
    const listaPagamentos = await pagamento.find({});
    res.status (200).json (pagamentos);
});

app.put("/clientes/:id", (req, res) => {
    const id = +req.params.id
    const cliente = clientes.find(cliente => cliente.id === id)
    cliente.titulo = req.body.titulo
    res.status(200).send("Cliente atualizado com sucesso")
})

app.put("/pagamentos/:id", (req, res) => {
    const id = +req.params.id
    const pagamento = pagamentos.find(pagamento => pagamento.id === id)
    pagamento.titulo = req.body.titulo
    res.status(200).send("Pagamento atualizado com sucesso")
})

app.put("/dividas/:id", (req, res) => {
    const id = +req.params.id
    const divida = dividas.find(divida => divida.id === id)
    divida.titulo = req.body.titulo
    res.status(200).send("Dívida atualizada com sucesso")
})

app.delete("/clientes/:id", (req, res) => {
    const id = +req.params.id
    const index = clientes.findIndex(cliente => cliente.id === id)
    clientes.splice(index, 1)
    res.status(200).send("Cliente foi deletado com sucesso")
})


app.delete("/pagamentos/:id", (req, res) => {
    const id = +req.params.id
    const index = pagamentos.findIndex(pagamento => pagamento.id === id)
    pagamentos.splice(index, 1)
    res.status(200).send("Pagamento foi deletado com sucesso")
})


app.delete("/dividas/:id", (req, res) => {
    const id = +req.params.id
    const index = dividas.findIndex(divida => divida.id === id)
    dividas.splice(index, 1)
    res.status(200).send("Divida foi deletada com sucesso")
})

const conexao = await conectaNaDatabase();
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})