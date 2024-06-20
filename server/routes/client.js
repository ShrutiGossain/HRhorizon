import express from "express";
import {
  getProducts,
  getEmployees,
  getLists,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/employees", getEmployees);
router.get("/lists", getLists);
router.get("/geography", getGeography);

export default router;