import { Response, Request } from "express";
import { createTask, allTasks, deleteTasks } from "../controllers/TasksControllers";
import { TasksInterface } from "../intefaces/TasksInterface";

const taskHandler = async (req: Request, res: Response) => {
    const { id, title, description, done } = req.body;
    try {
        const data = createTask(id, title, description, done);
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ error: "ocurrio un problema" })
    }
}

const todas = async (req: Request, res: Response) => {
    try {
        const data = await allTasks();
        res.status(200).json(data);

    } catch (error) {
        res.status(404).json({ error: "no trajo las tareas" })
    }
}

const deleteTaskHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const idNumber = parseInt(id, 0);
        const datas = await deleteTasks(idNumber);
        res.status(200).json(datas)
    } catch (error) {
        res.status(404).json({error:"error al eliminar la tarea"})
    }
}

export { taskHandler, todas, deleteTaskHandler };