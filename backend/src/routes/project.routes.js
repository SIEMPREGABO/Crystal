import { Router } from "express";
import { validarToken } from "../middlewares/validate.token.js";
import { getTasks, createTask, getTask, updateTask, deleteTask, createProject } from "../controllers/project.controller.js";
import { taskSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router  = Router();

router.post('/create',createProject)
router.get('/tasks', validarToken ,getTasks)
router.post('/tasks',validateSchema(taskSchema), validarToken ,createTask)
router.get('/tasks/:id', validarToken ,getTask)
router.delete('/tasks/:id', validarToken ,deleteTask)
router.put('/tasks/:id', validarToken ,updateTask)

export default router;