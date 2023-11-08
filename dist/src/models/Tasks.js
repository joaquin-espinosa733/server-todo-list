"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
// Task.ts
const sequelize_1 = require("sequelize");
class Task extends sequelize_1.Model {
    static initialize(sequelize) {
        Task.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true, // Permitir que la base de datos genere automáticamente el valor
            },
            title: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            done: {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize,
            modelName: 'Task',
            tableName: 'tasks', // Opcional: establece el nombre de la tabla en la base de datos
        });
    }
}
exports.Task = Task;
