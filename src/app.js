//require("dotenv").config(); --> Cambio esto por la línea de abajo
import 'dotenv/config'

//const express = require("express"); --> Cambio esto por la línea de abajo
import express from "express";

///const morgan = require("morgan"); --> Cambio esto por la línea de abajo 
import morgan from "morgan";

//const authRoutes = require("./routes/authRoutes"); --> Cambio esto por la línea de abajo
import authRoutes from "./routes/authRoutes.js";

//const userRoutes = require("./routes/userRoutes"); --> Cambio esto por la línea de abajo
import userRoutes from "./routes/userRoutes.js";

//const adminRoutes = require("./routes/adminRoutes"); --> Cambio esto por la línea de abajo
import adminRoutes from "./routes/adminRoutes.js";

//const errorHandler = require("./middleware/errorHandler"); --> Cambio esto por la línea de abajo
import { errorHandler } from "./middleware/errorHandler.js";


const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use("/api/login", authRoutes); // Decía "loginn", lo cambié por "login"
app.use("/api/users", userRoutes);
app.use("/api/users", adminRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Operacion Rescate II"
  });
});

app.use(errorHandler);

// Cambio "module.exports = router;" por:
export default app;;