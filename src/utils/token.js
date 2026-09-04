//Cambio "const jwt = require("jsonwebtoken");" --> Cambio esto por la línea de abajo
import jwt from "jsonwebtoken";


function signToken(user) {
  return jwt.sign(
    {
      id: user.id, // Agrego el user ID 
      role: user.role 
    },
    process.env.JWT_SECRETT || "super-secret",
    { expiresIn: "15m" } // Cambio que expire en 2 segundos por 15 minutos
  );
}

//Cambio "module.export =" por:
export { signToken };
