import { Router } from "express";
import { ProdutoController } from "./controller";

const produtoRoutes = Router();
const controller = new ProdutoController();

produtoRoutes.get("/", controller.listAll);
produtoRoutes.get("/:id", controller.findById);
produtoRoutes.post("/", controller.create);
produtoRoutes.put("/:id", controller.update);
produtoRoutes.delete("/:id", controller.delete);

export { produtoRoutes };
