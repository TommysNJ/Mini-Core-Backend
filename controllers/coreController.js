import { Op, literal } from "sequelize";
import Gasto from "../models/Gasto.js";
import Departamento from "../models/Departamento.js";

export const getGastosPorDepartamento = async (req, res) => {
    try {
        const { fechaInicio, fechaFin } = req.query;

        // Validar que las fechas se hayan enviado
        if (!fechaInicio || !fechaFin) {
            return res.status(400).json({ message: "Por favor, proporciona ambas fechas (inicio y fin)." });
        }

        // Obtener todos los departamentos
        const departamentos = await Departamento.findAll();

        // Crear un mapa inicial para almacenar los totales por departamento
        const departamentoData = {};

        // Inicializar los datos de cada departamento
        for (const departamento of departamentos) {
            departamentoData[departamento.id_departamento] = {
                departamento: departamento.nombre,
                total: 0
            };
        }

        // Consultar los gastos dentro del rango de fechas (ignorando horas)
        const gastos = await Gasto.findAll({
            where: literal(`
                DATE(fecha) >= '${fechaInicio}' AND DATE(fecha) <= '${fechaFin}'
            `),
            include: [
                {
                    model: Departamento,
                    as: "departamento", // Alias definido en app.js
                    attributes: ["id_departamento", "nombre"]
                }
            ]
        });

        // Sumar los montos de los gastos por departamento
        for (const gasto of gastos) {
            const departamentoId = gasto.id_departamento;

            if (departamentoData[departamentoId]) {
                departamentoData[departamentoId].total += parseFloat(gasto.monto);
            }
        }

        // Convertir el objeto en un array de resultados
        const resultado = Object.values(departamentoData);

        res.json(resultado);
    } catch (error) {
        console.error("Error al obtener los gastos por departamento:", error);
        res.status(500).json({ message: "Error al generar el reporte de gastos por departamento." });
    }
};