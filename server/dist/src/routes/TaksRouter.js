"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TasksHandler_1 = require("../handlers/TasksHandler");
const express_1 = require("express");
const TaskRouterr = (0, express_1.Router)();
TaskRouterr.post("/create", TasksHandler_1.taskHandler);
TaskRouterr.get("/", TasksHandler_1.todas);
TaskRouterr.delete("/eliminar/:id", TasksHandler_1.deleteTaskHandler);
exports.default = TaskRouterr;
