// db.ts
import { Sequelize } from 'sequelize';
import { Task } from './models/Tasks';
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL } = process.env;

if (!DATABASE_URL) {
    throw new Error('DATABASE_URL no está definido en el archivo .env');
}

import pg from "pg";
const { Client } = pg;

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
    dialectModule: Client,
    logging: false,
});

Task.initialize(sequelize);

export default sequelize;
