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
exports.deleteTasks = exports.allTasks = exports.createTask = void 0;
// import { Tasks } from "../db";
const Tasks_1 = require("../models/Tasks");
// const createTask = async (newTask: TasksInterface) => {
//     const data = await Task.create({ newTask })
//     return data
// }
const createTask = (id, title, description, done) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Tasks_1.Task.create({ id, title, description, done });
    return data;
});
exports.createTask = createTask;
const allTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const all = yield Tasks_1.Task.findAll();
    return all;
});
exports.allTasks = allTasks;
const deleteTasks = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Tasks_1.Task.destroy({
        where: {
            id: id
        }
    });
    return task;
});
exports.deleteTasks = deleteTasks;
