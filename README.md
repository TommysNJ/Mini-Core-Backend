# Sistema de Gestión de Gastos - Backend

## Descripción del Proyecto
El backend de este sistema está diseñado para gestionar y analizar los gastos de diferentes departamentos dentro de una organización. Implementa una API RESTful construida con **Node.js**, utilizando **Express** como framework de servidor y **Sequelize** como ORM para interactuar con una base de datos MySQL. 

El sistema permite:
- Consultar y analizar gastos.
- Filtrar gastos en base a rangos de fechas.
- Generar reportes consolidados por departamento, mostrando el total de gastos dentro de un rango de fechas definido por el usuario.

### Tecnologías utilizadas:
- **Node.js**: Para construir un backend escalable y eficiente.
- **Express**: Framework minimalista para manejar rutas y middleware.
- **Sequelize**: ORM que facilita la interacción con MySQL.
- **MySQL**: Base de datos relacional para almacenamiento seguro de información.

### Desafíos enfrentados y mejoras futuras:
- **Desafíos**: Configuración de relaciones complejas entre tablas y manejo de validaciones en consultas.
- **Futuras mejoras**: Implementar autenticación y permisos para roles específicos.

---

## Tabla de Contenidos
1. Instalación y Configuración
2. Uso del Proyecto
3. Rutas Disponibles
4. Créditos

---

## Instalación y Configuración
### Requisitos previos:
1. Tener **Node.js** y **MySQL** instalados.

### Pasos de instalación:
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta las migraciones para crear las tablas en la base de datos:
   ```bash
   npx sequelize-cli db:migrate
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```

---

## Uso del Proyecto
### Endpoints principales:
1. **Filtrar gastos por departamento:**
   - **Ruta:** `/core/gastos-por-departamento`
   - **Método:** `GET`
   - **Parámetros (query):** `fechaInicio`, `fechaFin`
   - **Descripción:** Devuelve una lista de departamentos con el total de sus gastos dentro del rango de fechas.

### Ejemplo de uso:
Consulta con rango de fechas:
```bash
GET http://localhost:8000/core/gastos-por-departamento?fechaInicio=2024-11-01&fechaFin=2024-11-30
```

---

## Créditos
Este proyecto fue desarrollado por **Tommy** con el objetivo de aprender y practicar la construcción de un backend eficiente y modular.

---
