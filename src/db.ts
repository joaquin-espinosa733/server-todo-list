// db.ts
import { Sequelize } from 'sequelize';
import { Task } from './models/Tasks';

require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, // Desactiva los registros SQL en la consola (puedes cambiarlo si deseas ver las consultas)
});

Task.initialize(sequelize);

export default sequelize;
