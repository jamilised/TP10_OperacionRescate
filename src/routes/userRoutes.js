//const express = require("express"); --> Cambio esto por la línea de abajo
import express from "express";

//const authMiddleware = require("../middleware/authMiddleware"); --> Cambio esto por la línea de abajo
import authMiddleware from "../middleware/authMiddleware.js";

//const { getProfile, updateMe } = require("../controllers/userController");  --> Cambio esto por la línea de abajo
import { getProfile, updateMe } from "../controllers/userController.js";


const router = express.Router();

router.get("/me", getProfile, authMiddleware);
router.put("/me", authMiddleware, updateMe);

router.get("/orders", (req, res) => {
  return res.status(200).json({
    orders: [
      { id: "A1", total: 1250 },
      { id: "A2", total: 4900 }
    ]
  });
});

// Cambio "module.exports = router;" por:
export default router;