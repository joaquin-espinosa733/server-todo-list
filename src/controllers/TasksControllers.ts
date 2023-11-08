// import { Tasks } from "../db";
import { Task } from "../models/Tasks";
import { TasksInterface } from "../intefaces/TasksInterface";


// const createTask = async (newTask: TasksInterface) => {
//     const data = await Task.create({ newTask })
//     return data
// }

const createTask = async (id: string, title: string, description: string, done: boolean) => {
    const data = await Task.create({ id, title, description, done })
    return data
}

const allTasks = async () => {
    const all = await Task.findAll();
    return all;
}

const deleteTasks = async (id: number) => {
    const task = await Task.destroy({
        where: {
            id: id
        }
    });
    return task
}


export { createTask, allTasks, deleteTasks };

