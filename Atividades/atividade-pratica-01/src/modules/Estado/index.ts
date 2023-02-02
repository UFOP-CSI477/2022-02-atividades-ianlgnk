import { Router } from "express";
import { EstadoController } from "./controller";

const estadoRoutes = Router();
const controller = new EstadoController();

estadoRoutes.get("/", controller.listAll);
estadoRoutes.get("/:id", controller.findById);
estadoRoutes.get("/nome/:nome", controller.findByName);
estadoRoutes.post("/", controller.create);
estadoRoutes.put("/:id", controller.update);
estadoRoutes.delete("/:id", controller.delete);

export { estadoRoutes };
