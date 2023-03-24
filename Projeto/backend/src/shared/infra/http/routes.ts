import { Router } from "express";
import { userRoutes } from "../../../modules/User";
import { jobPostRoutes } from "../../../modules/JobPost";
import { jobApplicationRoutes } from "../../../modules/JobApplication";

const router = Router();

// set routes from modules
router.use("/user", userRoutes);
router.use("/jobPost", jobPostRoutes);
router.use("/jobApplication", jobApplicationRoutes);

export default router;
