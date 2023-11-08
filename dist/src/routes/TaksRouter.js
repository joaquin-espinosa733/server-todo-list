"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TasksHandler_1 = __importDefault(require("../handlers/TasksHandler"));
const express_1 = require("express");
const TaskRouterr = (0, express_1.Router)();
TaskRouterr.post("/create", TasksHandler_1.default);
exports.default = TaskRouterr;
