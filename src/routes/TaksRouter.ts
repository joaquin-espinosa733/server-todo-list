import express from "express";
import { taskHandler, todas, deleteTaskHandler } from "../handlers/TasksHandler"
import { Router } from "express";

const TaskRouterr = Router();

TaskRouterr.post("/create", taskHandler);
TaskRouterr.get("/", todas);
TaskRouterr.delete("/eliminar/:id", deleteTaskHandler)


export default TaskRouterr;