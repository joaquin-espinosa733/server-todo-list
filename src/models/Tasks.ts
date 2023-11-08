// Task.ts
import { DataTypes, Model, Sequelize } from 'sequelize';
import { AutoIncrement } from 'sequelize-typescript';

export class Task extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public done!: boolean;

    public static initialize(sequelize: Sequelize) {
        Task.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true, // Permitir que la base de datos genere automáticamente el valor
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                done: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                },
            },
            {
                sequelize,
                modelName: 'Task',
                tableName: 'tasks', // Opcional: establece el nombre de la tabla en la base de datos
            }
        );
    }
}
