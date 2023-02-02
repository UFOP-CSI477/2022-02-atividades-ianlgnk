import { Router } from "express";
import { TipoSanguineoController } from "./controller";

const tipoSanguineoRoutes = Router();
const controller = new TipoSanguineoController();

tipoSanguineoRoutes.get("/", controller.listAll);
tipoSanguineoRoutes.get("/:id", controller.findById);
tipoSanguineoRoutes.post("/", controller.create);
tipoSanguineoRoutes.put("/:id", controller.update);
tipoSanguineoRoutes.delete("/:id", controller.delete);

export { tipoSanguineoRoutes };
