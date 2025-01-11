import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Empleado = db.define(
  "empleados",
  {
    id_empleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Desactiva las columnas `createdAt` y `updatedAt`
  }
);

export default Empleado;