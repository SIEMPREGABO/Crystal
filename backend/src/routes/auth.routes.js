import { Router } from "express";
import { login,register, logout, profile } from "../controllers/auth.controller.js";
import {validarToken} from '../middlewares/validate.token.js';
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema,loginSchema } from "../schemas/auth.schema.js";
const router = Router();

router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
router.get('/profile',validarToken,profile);

export default router;