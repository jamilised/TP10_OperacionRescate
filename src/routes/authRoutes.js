//const express = require("express"); --> Cambio esto por la línea de abajo
import express from "express";

//const { register, login } = require("../controllers/authController");
import { register, login } from "../controllers/authController.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Cambio "module.exports = router;" por:
export default router;