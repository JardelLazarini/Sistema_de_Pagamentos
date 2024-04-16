import express from "express";
import PagamentoController from "../controllers/PagamentoController.js";
const routes = express.Router();
routes.get("/pagamentos", PagamentoController.listarPagamento);
routes.get("/pagamentos/:id", PagamentoController.listarPagamentoPorId);
routes.post("/pagamentos", PagamentoController.cadastrarPagamento);
routes.put("/pagamentos/:id", PagamentoController.atualizarPagamento);
routes.delete("/pagamentos/:id", PagamentoController.excluirPagamento);
export default routes;