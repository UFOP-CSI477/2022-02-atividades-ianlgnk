import { Router } from "express";
import { JobPostController } from "./controller";
import { jwtMiddleware } from "../../shared/middleware/jwt";

const jobPostRoutes = Router();
const controller = new JobPostController();

jobPostRoutes.get("/", jwtMiddleware, controller.listAll);
jobPostRoutes.get("/:id", jwtMiddleware, controller.findByPk);
jobPostRoutes.get("/byCompany/:id", jwtMiddleware, controller.findByCompanyId);
jobPostRoutes.post("/", jwtMiddleware, controller.create);
jobPostRoutes.put("/:id", jwtMiddleware, controller.update);
jobPostRoutes.delete("/:id", jwtMiddleware, controller.delete);

export { jobPostRoutes };
