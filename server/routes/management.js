import express from "express";
import {getUserPerformance} from "../controllers/management.js";

const router = express.Router();
router.get("/performance", getUserPerformance); 

export default router;