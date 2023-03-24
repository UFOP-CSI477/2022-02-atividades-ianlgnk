import { Router } from "express";
import { UserController } from "./controller";
import { jwtMiddleware } from "../../shared/middleware/jwt";

const userRoutes = Router();
const controller = new UserController();

userRoutes.get("/", jwtMiddleware, controller.listAll);
userRoutes.get("/:id", jwtMiddleware, controller.findByPk);
userRoutes.put("/:id", jwtMiddleware, controller.update);
userRoutes.delete("/:id", jwtMiddleware, controller.delete);

userRoutes.post("/", controller.create);
userRoutes.post("/login", controller.login);

export { userRoutes };
