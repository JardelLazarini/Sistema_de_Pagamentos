import express from 'express';
import { listarClientes } from '../controllers/ClienteController.js';

const router = express.Router();

router.get('/clientes', listarClientes);

router.get("/clientes", ClienteController.listarClientes);
router.get("/clientes/:id", ClienteController.listarClientePorId);
router.post("/clientes", ClienteController.cadastrarCliente);
router.put("/clientes/:id", ClienteController.atualizarCliente);
router.delete("/clientes/:id", ClienteController.excluirCliente);

export default router;
