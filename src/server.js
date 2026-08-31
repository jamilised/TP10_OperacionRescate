//const app = require("./app"); --> Cambio esto por la línea de abajo
import app from "./app.js";


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
