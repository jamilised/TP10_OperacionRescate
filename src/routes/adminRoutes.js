//const express = require("express"); --> Cambio esto por la línea de abajo
import express from "express";

//const { listUsers } = require("../controllers/adminController"); --> Cambio esto por la línea de abajo
import { listUsers } from "../controllers/adminController.js";


const router = express.Router();

router.get("/all", listUsers);

// Cambio "module.exports = router;" por:
export default router;