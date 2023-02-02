import { Router } from "express";
import { UnidadeController } from "./controller";

const unidadeRoutes = Router();
const controller = new UnidadeController();

unidadeRoutes.get("/", controller.listAll);
unidadeRoutes.get("/:id", controller.findById);
unidadeRoutes.get("/nome/:name", controller.findByName);
unidadeRoutes.post("/", controller.create);
unidadeRoutes.put("/:id", controller.update);
unidadeRoutes.delete("/:id", controller.delete);

export { unidadeRoutes };
