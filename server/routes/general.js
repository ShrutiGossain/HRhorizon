import Express from "express";
import { getUser } from "../controllers/general.js";

const router = Express.Router();

router.get("/user/:id", getUser);    // req.param {id} in controllers-> general.js-> try block

export default router; 
