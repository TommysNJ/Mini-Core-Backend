import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Departamento = db.define(
  "departamentos",
  {
    id_departamento: {
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

export default Departamento;