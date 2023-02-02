import { Router } from "express";
import { DistribuicaoController } from "./controller";

const distribuicaoRoutes = Router();
const controller = new DistribuicaoController();

distribuicaoRoutes.get("/", controller.listAll);
distribuicaoRoutes.get("/:id", controller.findById);
distribuicaoRoutes.post("/", controller.create);
distribuicaoRoutes.put("/:id", controller.update);
distribuicaoRoutes.delete("/:id", controller.delete);

export { distribuicaoRoutes };
