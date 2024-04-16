import express from "express";
import DividaController from "../controllers/DividaController.js";
const routes = express.Router();
routes.get("/dividas", DividaController.listarDividas);
routes.get("/dividas/:id", DividaController.listasDividasPorId);
routes.post("/dividas", DividaController.cadastrarDivida);
routes.put("/dividas/:id", DividaController.atualizarDivida);
routes.delete("/dividas/:id", DividaController.excluirDivida);
export default routes;