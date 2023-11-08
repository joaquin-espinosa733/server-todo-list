"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = exports.models = exports.conn = void 0;
require("dotenv").config();
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const { DB_USER, DB_PASSWORD, DB_HOST, } = process.env;
const sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/tasks`, {
    logging: false,
    native: false,
});
const basename = path_1.default.basename(__filename);
const modelDefiners = [];
fs_1.default.readdirSync(path_1.default.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
    modelDefiners.push(require(path_1.default.join(__dirname, '/models', file)));
});
modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
// const { Tasks } = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);
//*relacion de muchos a muchos entre countries y actividades:
// db.ts
exports.conn = sequelize;
exports.models = sequelize.models; // Esto exporta todos los modelos
exports.Tasks = sequelize.models.Tasks; // Esto exporta el modelo 'Tasks'
