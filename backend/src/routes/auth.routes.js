import { Router } from "express";
import { login,register, logout, profile, verifyToken, image, reset } from "../controllers/auth.controller.js";
import {validarToken} from '../middlewares/validate.token.js';
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema,loginSchema, resetSchema } from "../schemas/auth.schema.js";
const router = Router();

router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
router.get('/profile',validarToken,profile);
router.get('/verify', verifyToken);
router.post('/image', image);
router.post('/reset',validateSchema(resetSchema),reset)

export default router;