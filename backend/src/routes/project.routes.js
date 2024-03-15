import { Router } from "express";
import { validarToken } from "../middlewares/validate.token.js";
import { getTasks, createTask, getTask, updateTask, deleteTask, createProject, obtenerMensajes } from "../controllers/project.controller.js";
import { createSchema, taskSchema } from "../schemas/project.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router  = Router();

router.post('/createProject',validateSchema(createSchema), createProject)
router.get('/mensajes', obtenerMensajes);
router.get('/tasks', validarToken ,getTasks)
router.post('/tasks',validateSchema(taskSchema), validarToken ,createTask)
//router.get('/tasks/:id', validarToken ,getTask)
//router.delete('/tasks/:id', validarToken ,deleteTask)
//router.put('/tasks/:id', validarToken ,updateTask)

export default router;