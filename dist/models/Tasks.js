"use strict";
// task.js (modelo)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const sequelize_1 = require("sequelize");
class Task extends sequelize_1.Model {
}
exports.Task = Task;
module.exports = (sequelize) => {
    Task.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: sequelize_1.DataTypes.ENUM("easy", "higth", "nomal"),
            allowNull: false,
        },
        duracion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: "Task",
    });
    return Task;
};
