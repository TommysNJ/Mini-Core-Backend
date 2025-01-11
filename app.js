import express from "express";
import cors from "cors";
import db from "./database/db.js";
import Empleado from "./models/Empleado.js";
import Departamento from "./models/Departamento.js";
import Gasto from "./models/Gasto.js";
import coreRoutes from "./routes/coreRoutes.js"; 

const app = express();

app.use(cors());
app.use(express.json());

// Relación: Empleado - Gasto (1-N)
Empleado.hasMany(Gasto, { foreignKey: "id_empleado", as: "gastos" });
Gasto.belongsTo(Empleado, { foreignKey: "id_empleado", as: "empleado" });

// Relación: Departamento - Gasto (1-N)
Departamento.hasMany(Gasto, { foreignKey: "id_departamento", as: "gastos" });
Gasto.belongsTo(Departamento, { foreignKey: "id_departamento", as: "departamento" });

// Rutas
app.use("/core", coreRoutes); // Ruta para las funcionalidades del core

// Conexión a la base de datos
try {
  await db.authenticate();
  console.log("Conexión exitosa con la base de datos");
} catch (error) {
  console.log(`Error de conexión: ${error}`);
}

// Iniciar el servidor
app.listen(8000, () => {
  console.log("Server UP running in http://localhost:8000/");
});

export default app;