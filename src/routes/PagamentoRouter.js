import express from 'express';
import { listarPagamentos } from '../controllers/PagamentoController.js';

const router = express.Router();

router.get('/pagamentos', listarPagamentos);

router.get("/pagamentos", PagamentoController.listarPagamento);
router.get("/pagamentos/:id", PagamentoController.listarPagamentoPorId);
router.post("/pagamentos", PagamentoController.cadastrarPagamento);
router.put("/pagamentos/:id", PagamentoController.atualizarPagamento);
router.delete("/pagamentos/:id", PagamentoController.excluirPagamento);

export default router;