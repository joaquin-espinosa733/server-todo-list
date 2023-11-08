//*importamos "Router" del modulo de express:
import { Router } from "express";
import TaskRouterr from "./TaksRouter";
const router = Router();

router.use("/task", TaskRouterr);


export default router;
