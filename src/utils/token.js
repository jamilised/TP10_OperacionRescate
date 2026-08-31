//Cambio "const jwt = require("jsonwebtoken");" --> Cambio esto por la línea de abajo
import jwt from "jsonwebtoken";


function signToken(user) {
  return jwt.sign(
    { role: user.role },
    process.env.JWT_SECRETT || "super-secret",
    { expiresIn: "2s" }
  );
}

//Cambio "module.export =" por:
export { signToken };
