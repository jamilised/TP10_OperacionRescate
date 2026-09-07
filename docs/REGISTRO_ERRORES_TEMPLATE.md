# Registro de Errores

Completar una fila por cada error detectado.

| N | Archivo | Problema encontrado | Como lo detectaron | Solucion aplicada |
|---|---------|---------------------|--------------------|-------------------|
| 1 | src/ejemplo.js | El token no se verificaba | Prueba manual de ruta protegida | Se uso jwt.verify con manejo de excepcion |
| 2 | Todos | Quiero dejar los imports "más claros para mi" | Lo comparé con mi proyecto final | Cambié EJ: "const app = require("./app");" por "import app from "./app.js";" |
| 3 | Todos | Quiero dejar los exports "más claros para mi" | Lo comparé con mi proyecto final | Cambié EJ: "module.exports = router;" por "export default app;" |
| 4 | src/utils/token.js | Cuando me registro y me da un token no llego a usarlo porque vence muy rápido | Intentando ejecutar el endpoint MiUsuario | Cambié "expiresIn: "2s"" por "expiresIn: "15m"" |
| 5 | src/utils/token.js | Un token sin el ID del usuario no es útil para buscar luego a un usario específico | Ya que siempre el endpoint decía "usuario no encontrado" | En el return jwt.sign agrégo "id: user.id" |
| 6 | src/middleware/errorHandler.js | No se exportaba la función errorHandler | Daba un error en el código | Cambié "function" por "export const" |
| 7 | src/controllers/aurhController.js | Tenía errores en la primera línea de login y register | Daba un error en el código | Cambié "async function register" y "async function login" por "const register = async" y "const login = async" |
| 8 | src/controllers/aurhController.js | Comparaba la contraseña ya hasheada, hasheada de nuevo, con la normal | Nunca podía escribir la contraseña correcta ya que comparaba cosas distintas | Cambié "bcrypt.compare(user.password, password)" por "bcrypt.compare(password, user.password)" | 
| 9 | src/routes/userRoutes.js | Error ya que verifica luego de ejecutar la acción | Ponía mal el token y funcionaba igual | Cambio el orden "getProfile, authMiddleware" por el contrario |

## Guia de calidad para el informe

No alcanza con escribir "habia un error y lo arreglamos".

En cada caso expliquen:

1. Que ocurria.
2. Por que ocurria.
3. Como se soluciono.
4. Como validaron que quedo funcionando.

