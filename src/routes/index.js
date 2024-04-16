import express from "express";
import clientes from "./clientesRoutes.js";//Esse "livros" é um Alias( apelido ) que estamos chamando o routes lá do livrosRoutes.JS
import pagamentos from "./pagamentosRoutes.js";
import dividas from "./dividasRoutes.js";

//Criando um "Barril" que vai juntar a rota do livro com a rota "geral" = "/"
const routes = (app) => {
app.route("/").get((req, res) => res.status(200).send("Sistema de Pagamentos"));
app.use(express.json(), clientes);
app.use(express.json(), pagamentos);
app.use(express.json(), dividas);
};

export default routes;