import Express from "express";
import { getUser, getDashboardStats } from "../controllers/general.js";

const router = Express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;

