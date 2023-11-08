"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskHandler = exports.todas = exports.taskHandler = void 0;
const TasksControllers_1 = require("../controllers/TasksControllers");
const taskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, description, done } = req.body;
    try {
        const data = (0, TasksControllers_1.createTask)(id, title, description, done);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ error: "ocurrio un problema" });
    }
});
exports.taskHandler = taskHandler;
const todas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, TasksControllers_1.allTasks)();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ error: "no trajo las tareas" });
    }
});
exports.todas = todas;
const deleteTaskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const idNumber = parseInt(id, 0);
        const datas = yield (0, TasksControllers_1.deleteTasks)(idNumber);
        res.status(200).json(datas);
    }
    catch (error) {
        res.status(404).json({ error: "error al eliminar la tarea" });
    }
});
exports.deleteTaskHandler = deleteTaskHandler;
