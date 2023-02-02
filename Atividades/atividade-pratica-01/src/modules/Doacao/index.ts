import { Router } from "express";
import { DoacaoController } from "./controller";

const doacaoRoutes = Router();
const controller = new DoacaoController();

doacaoRoutes.get("/", controller.listAll);
doacaoRoutes.get("/:id", controller.findById);
doacaoRoutes.post("/", controller.create);
doacaoRoutes.put("/:id", controller.update);
doacaoRoutes.delete("/:id", controller.delete);

export { doacaoRoutes };
