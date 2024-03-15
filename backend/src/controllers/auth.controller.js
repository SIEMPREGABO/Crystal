import bcrypt from 'bcryptjs'
import { createAccessToken, createPasswordToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { SECRET_TOKEN, SECRETPASS_TOKEN } from '../config.js';
import { sendemail, sendemailReset } from '../middlewares/send.mail.js';
import { actualizarPass, agregarUsuario, autenticarUsuario, extraerUsuario, verificarUsuario } from '../querys/querys.js';



export const register = async (req, res) => {
    const { CORREO, NOMBRE_USUARIO, CONTRASENIA, NOMBRE_PILA, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO, NUMERO_BOLETA } = req.body;
    try {
        //Verifica si existen el usuario
        const verificar = await verificarUsuario(CORREO);
        if (verificar.success) return res.status(400).json({ message: ["Usuario registrado"] });
        //Encripta la contraseña
        const passwordHash = await bcrypt.hash(CONTRASENIA, 10);
        //Agrega el usuario a la base
        const agregar = await agregarUsuario(CORREO, NOMBRE_USUARIO, passwordHash, NOMBRE_PILA, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO, NUMERO_BOLETA)
        if (!agregar) res.status(500).json({ message: ["Error del servidor, intentelo nuevamente"] });
        //Extrae el usuario desde la base
        const User = await extraerUsuario(CORREO);
        res.json({
            id: User[0].ID,
            NOMBRE_USUARIO: User[0].NOMBRE_USUARIO,
            CORREO: User[0].CORREO,
            FECHA_CREACION: User[0].FECHA_CREACION
        });
    } catch (error) {
        res.status(500).json({ message: [error.message] })
    }
}

export const login = async (req, res) => {
    const { CORREO, CONTRASENIA } = req.body;
    //console.log(CORREO, CONTRASENIA);
    try {
        //Verifica la existencia del usuario
        const verificar = await verificarUsuario(CORREO);
        if (!verificar.success) return res.status(400).json({ message: ["Usuario no registrado"] });
        //Compara las contraseñas        
        const isMatch = await bcrypt.compare(CONTRASENIA, verificar.userData[0].CONTRASENIA);
        if (!isMatch) return res.status(400).json({ message: ["Contraseña incorrecta"] });
        //Crea el token de acceso
        const token = await createAccessToken({ id: verificar.userData[0].ID });
        if (!token) return res.status(500).json({ message: ["Error inesperado, intente nuevamente"] });
        //Responde con el token y la info del usuario
        res.cookie("token", token);
        res.json({
            ID: verificar.userData[0].ID,
            CORREO: verificar.userData[0].CORREO,
            NOMBRE_USUARIO: verificar.userData[0].NOMBRE_USUARIO,
            FECHA_CREACION: verificar.userData[0].FECHA_CREACION
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const reset = async (req, res) => {
    try {
        const { CORREO } = req.body;
        //Verifica la existencia del usuario
        const verificar = await verificarUsuario(CORREO);
        if (!verificar.success) return res.status(400).json({ message: ["Usuario no registrado"] });
        //Crea el token para resetear la contraseña
        const token = await createPasswordToken({ id: verificar.userData[0].ID });
        if (!token) return res.status(500).json({ message: ["Error inesperado, intente nuevamente"] });
        //Envia el correo con el token
        const emailsendend = await sendemailReset(verificar.userData[0].CORREO, token);
        if (!emailsendend) return res.status(400).json({ message: ["Error inesperado, intente nuevamente"] })
        //Manda una respuesta al cliente
        res.status(200).json({
            message: "Correo enviado a su bandeja de entrada"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const resetpass = async (req, res) => {
    try {
        const token = req.user.id;
        //console.log("token: ", token);
        //if (!token) return res.status(401).json({ message: ["No autorizado"] });
        const verificar = await autenticarUsuario(token);
        if (!verificar.success) return res.status(400).json({ message: ["No autorizado"] });
        return res.json({
            ID: verificar.userData[0].ID,
            NOMBRE_USUARIO: verificar.userData[0].NOMBRE_USUARIO,
            CORREO: verificar.userData[0].CORREO,
            FECHA_CREACION: verificar.userData[0].FECHA_CREACION
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const changePassword = async (req, res) => {
    const { CORREO, CONTRASENIA } = req.body;
    try {
        const verificar = await actualizarPass(CORREO,CONTRASENIA);
        if (!verificar.success) return res.status(400).json({ message: verificar.error[0] });
        return res.json({
            mensaje : ["Contraseña cambiada"]
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}


export const logout = (req, res) => {
    res.cookie('token', "", { expires: new Date(0) })
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userData = await autenticarUsuario(req.user.id);
    if (!userData.success) return res.status(403).json({ message: "Usuario no encontrado" });

    return res.json({
        ID: userData.userData[0].ID,
        NOMBRE_USUARIO: userData.userData[0].NOMBRE_USUARIO,
        CORREO: userData.userData[0].CORREO,
        FECHA_CREACION: userData.userData[0].FECHA_CREACION
    });
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: ["No autorizado"] });
    jwt.verify(token, SECRET_TOKEN, async (error, user) => {
        if (error) return res.status(401).json({ message: ["No autorizado"] });
        const verificar = await autenticarUsuario(user.id);
        if (!verificar.success) return res.status(400).json({ message: ["No autorizado"] });
        return res.json({
            ID: verificar.userData[0].ID,
            NOMBRE_USUARIO: verificar.userData[0].NOMBRE_USUARIO,
            CORREO: verificar.userData[0].CORREO,
            FECHA_CREACION: verificar.userData[0].FECHA_CREACION
        })
    })
}

