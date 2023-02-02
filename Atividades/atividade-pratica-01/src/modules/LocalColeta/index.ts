import { Router } from "express";
import { LocalColetaController } from "./controller";

const localColetaRoutes = Router();
const controller = new LocalColetaController();

localColetaRoutes.get("/", controller.listAll);
localColetaRoutes.get("/:id", controller.findById);
localColetaRoutes.get("/nome/:name", controller.findByName);
localColetaRoutes.post("/", controller.create);
localColetaRoutes.put("/:id", controller.update);
localColetaRoutes.delete("/:id", controller.delete);

export { localColetaRoutes };
