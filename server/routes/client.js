import express from "express";
import { getAttritions, getEmployees, getLists} from "../controllers/client.js";

const router = express.Router();

router.get("/attritions", getAttritions);
router.get("/employees", getEmployees); 
router.get("/lists", getLists); 

export default router;