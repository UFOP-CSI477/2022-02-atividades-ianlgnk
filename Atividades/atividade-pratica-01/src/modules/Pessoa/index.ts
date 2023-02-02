import { Router } from "express";
import { PessoaController } from "./controller";

const pessoaRoutes = Router();
const controller = new PessoaController();

pessoaRoutes.get("/", controller.listAll);
pessoaRoutes.get("/:id", controller.findById);
pessoaRoutes.get("/nome/:nome", controller.findByName);
pessoaRoutes.post("/", controller.create);
pessoaRoutes.put("/:id", controller.update);
pessoaRoutes.delete("/:id", controller.delete);

export { pessoaRoutes };
