"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// db.ts
const sequelize_1 = require("sequelize");
const Tasks_1 = require("./models/Tasks");
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, // Desactiva los registros SQL en la consola (puedes cambiarlo si deseas ver las consultas)
});
Tasks_1.Task.initialize(sequelize);
exports.default = sequelize;
