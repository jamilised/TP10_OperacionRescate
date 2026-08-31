//const { users } = require("../data/db"); --> Cambio esto por la línea de abajo
import { users } from "../data/db.js";


function listUsers(req, res) {
  return res.status(200).json({
    total: users.length,
    users
  });
}

module.exports = {
  listUsers
};
