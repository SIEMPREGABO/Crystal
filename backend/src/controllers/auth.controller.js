import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken, createPasswordToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { SECRET_TOKEN, SECRETPASS_TOKEN } from '../config.js';
import { sendemail } from '../middlewares/send.mail.js';


export const register = async (req, res) => {
    const { name, paternlastname, maternlastname, number, email, password } = req.body;
    try {

        const registeredUser = await User.findOne({ email });
        if (registeredUser) return res.status(400).json({ message: ["Usuario registrado"] });

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            paternlastname,
            maternlastname,
            number,
            email,
            password: passwordHash
        })
        console.log(newUser);
        const findUser = await newUser.save();

        //const token = await createAccessToken({ id: findUser._id });
        //res.cookie("token", token); La quite para no iniciar sesion al registrarse
        
        res.json({
            id: findUser._id,
            name: findUser.name,
            email: findUser.email,
            created: findUser.createdAt
        });
    }catch (error) {
        res.status(500).json({ message: [error.message] })
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({ email });
        if (!findUser) return res.status(400).json({ message: ["Usuario no registrado"] });

        const isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch) return res.status(400).json({ message: ["Contraseña incorrecta"] });
        const token = await createAccessToken({ id: findUser._id });
        if(!token) return res.status(500).json({message:["Error inesperado, intente nuevamente"]});

        res.cookie("token", token);
        res.json({
            id: findUser._id,
            name: findUser.name,
            email: findUser.email,
            created: findUser.createdAt,
            image: findUser.image
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const reset = async (req, res) => {
    try {
        const { email } = req.body;
        const findUser = await User.findOne({ email });
        if (!findUser) return res.status(400).json({ message: ["Usuario no registrado"] });
        
        const token = await createPasswordToken({ id: findUser.email });
        if(!token) return res.status(500).json({message:["Error inesperado, intente nuevamente"]});

        const emailsendend = await sendemail(findUser.email, token);
        if (!emailsendend) return res.status(400).json({ message: ["Error inesperado, intente nuevamente"] })
        res.status(200).json({
            message: "Correo enviado a su bandeja de entrada"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", { expires: new Date(0) })
    return res.sendStatus(200)
};

export const profile = async (req, res) => {
    const Userfind = await User.findById(req.user.id);
    if (!Userfind) return res.status(403).json({ message: "Usuario no encontrado" });

    return res.json({
        id: Userfind._id,
        name: Userfind.name,
        email: Userfind.email,
        created: Userfind.createdAt,
        updated: Userfind.updatedAt,
        image: Userfind.image
    });

}

export const image = async (req, res) => {
    const { email, image } = req.body;
    try {
        const userUpdated = await User.findOneAndUpdate({ email }, { $set: { image } }, { new: true });
        if (!userUpdated) return res.status(404).json({ message: "Error al cargar la imagen" });

        return res.json({
            id: userUpdated.id,
            email: userUpdated.email,
            name: userUpdated.name,
            image: userUpdated.image
        });
    } catch (error) {
        res.status(400).json({ message: [error.message] })
    }
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: ["No autorizado"] });

    jwt.verify(token, SECRET_TOKEN, async (error, user) => {
        if (error) return res.status(401).json({ message: ["No autorizado"] });

        const userFound = await User.findById(user.id);
        if (!userFound) return res.status(401).json({ message: ["No autorizado"] });

        return res.json({
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            paternlastname: userFound.paternlastname,
            maternlastname: userFound.maternlastname,
            createdAt: userFound.createdAt,
            image: userFound.image
        })
    })
}