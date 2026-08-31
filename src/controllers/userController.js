//const { users } = require("../data/db"); --> Cambio esto por la línea de abajo
import { users } from "../data/db.js";


function getProfile(req, res) {
  const user = users.find((u) => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.json({ user });
}

function updateMe(req, res) {
  const userId = req.body.userId || req.user.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const { name } = req.body;
  user.name = name || user.name;

  return res.status(200).json({ message: "Perfil actualizado", user });
}

//Cambio "module.exports" por:
export {
  getProfile,
  updateMe
};
