"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// db.ts
const sequelize_1 = require("sequelize");
const Tasks_1 = require("./models/Tasks");
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL } = process.env;
if (!DATABASE_URL) {
    throw new Error('DATABASE_URL no está definido en el archivo .env');
}
const sequelize = new sequelize_1.Sequelize(DATABASE_URL, {
    logging: false,
});
Tasks_1.Task.initialize(sequelize);
exports.default = sequelize;
