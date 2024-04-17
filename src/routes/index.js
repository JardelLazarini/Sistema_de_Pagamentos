import express from "express";
import clientes from "./ClienteRouter.js";
import pagamentos from "./PagamentoRouter.js";
import dividas from "./DividaRouter.js";


const router = (app) => {
app.route("/").get((req, res) => res.status(200).send("Sistema de Pagamentos"));
app.use(express.json(), clientes);
app.use(express.json(), pagamentos);
app.use(express.json(), dividas);
};

export default router;