import express from 'express';
import { getGastosPorDepartamento } from '../controllers/coreController.js';

const router = express.Router();

// Ruta para obtener gastos por departamento
router.get('/gastos-por-departamento', getGastosPorDepartamento);

export default router;