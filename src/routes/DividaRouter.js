import express from 'express';
import { listarDividas } from '../controllers/DividaController.js';

const router = express.Router();

router.get('/dividas', listarDividas);

router.get("/dividas", DividaController.listarDividas);
router.get("/dividas/:id", DividaController.listasDividasPorId);
router.post("/dividas", DividaController.cadastrarDivida);
router.put("/dividas/:id", DividaController.atualizarDivida);
router.delete("/dividas/:id", DividaController.excluirDivida);

export default router;