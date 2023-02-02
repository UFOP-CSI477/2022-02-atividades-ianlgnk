import { Router } from "express";
import { CidadeController } from "./controller";

const cidadeRoutes = Router();
const controller = new CidadeController();

cidadeRoutes.get("/", controller.listAll);
cidadeRoutes.get("/:id", controller.findById);
cidadeRoutes.get("/nome/:nome", controller.findByName);
cidadeRoutes.post("/", controller.create);
cidadeRoutes.put("/:id", controller.update);
cidadeRoutes.delete("/:id", controller.delete);

export { cidadeRoutes };
