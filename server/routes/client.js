import express from "express";
import { getAttritions } from "../controllers/client.js";

const router = express.Router();

router.get("/attritions", getAttritions);

export default router;