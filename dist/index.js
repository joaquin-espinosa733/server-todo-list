"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../server/src/db"));
const server_1 = __importDefault(require("../server/src/server"));
const port = 3001;
server_1.default.get('/', (req, res) => res.send('Hello World!'));
db_1.default.sync({ force: false })
    .then(() => {
    console.log('Database connected.');
    server_1.default.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch((error) => {
    console.error('Error connecting to the database:', error);
});
