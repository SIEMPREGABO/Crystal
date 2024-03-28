import { Router } from "express";
import { login,register, logout, verifyToken, reset, resetpass, updateUser } from "../controllers/auth.controller.js";
//import {validarToken,validarTokenPass} from '../middlewares/validate.token.js';
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema,loginSchema, resetSchema, resetpasswordSchema, updateSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
//router.get('/profile',validarToken,profile);
router.get('/verify', verifyToken);
router.post('/reset',validateSchema(resetSchema),reset);
router.post('/resetpass',validateSchema(resetpasswordSchema), resetpass);
//router.post('/changepass',,changePassword);
router.post('/updateuser',validateSchema(updateSchema),updateUser);

export default router;