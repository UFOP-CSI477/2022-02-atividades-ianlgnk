import { Router } from "express";
import { JobApplicationController } from "./controller";
import { jwtMiddleware } from "../../shared/middleware/jwt";

const jobApplicationRoutes = Router();
const controller = new JobApplicationController();

jobApplicationRoutes.get("/", jwtMiddleware, controller.listAll);
jobApplicationRoutes.get("/:id", jwtMiddleware, controller.findByPk);
jobApplicationRoutes.get(
  "/byJobPost/:id",
  jwtMiddleware,
  controller.findByJobPostId
);
jobApplicationRoutes.get("/byUser/:id", jwtMiddleware, controller.findByUserId);
jobApplicationRoutes.post("/", jwtMiddleware, controller.create);
jobApplicationRoutes.put("/:id", jwtMiddleware, controller.update);
jobApplicationRoutes.delete("/:id", jwtMiddleware, controller.delete);

export { jobApplicationRoutes };
