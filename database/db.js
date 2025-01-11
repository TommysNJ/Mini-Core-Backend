import { Sequelize } from "sequelize";

const db = new Sequelize('gestion_gastos', 'root', 'mgpCcDoxSXwZMGVGHpuTiQWsDqEguCtP', {
    host: 'viaduct.proxy.rlwy.net',
    dialect: 'mysql',
    port: 35881 // Añade el puerto de la conexión
});

export default db;