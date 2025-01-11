import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Gasto = db.define(
  "gastos",
  {
    id_gasto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_empleado: {
      type: DataTypes.INTEGER,
      references: {
        model: "empleados",
        key: "id_empleado",
      },
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      references: {
        model: "departamentos",
        key: "id_departamento",
      },
    },
  },
  {
    timestamps: false, // Desactiva las columnas `createdAt` y `updatedAt`
  }
);

export default Gasto;