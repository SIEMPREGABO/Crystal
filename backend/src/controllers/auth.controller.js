import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { SECRET_TOKEN } from '../config.js';

export const register = async (req, res) => {
    const { name, paternlastname, maternlastname, number, email, password } = req.body;
    try {

        const registeredUser = await User.findOne({ email });
        if (registeredUser) return res.status(400).json({message: ["Usuario registrado"]});
        
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

        const token = await createAccessToken({ id: findUser._id });
        //res.cookie("token", token);
        res.json({
            id: findUser._id,
            name: findUser.name,
            email: findUser.email,
            created: findUser.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: [error.message] })
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({ email });
        if (!findUser) return res.status(400).json({ message: ["Usuario no registrado" ]});

        const isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch) return res.status(400).json({ message: ["Contraseña incorrecta"]});


        const token = await createAccessToken({ id: findUser._id });
        res.cookie("token", token);
        res.json({
            id: findUser._id,
            name: findUser.name,
            email: findUser.email,
            created: findUser.createdAt
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const logout = (req, res) => {
    res.cookie('token', "", { expires: new Date(0) })
    return res.sendStatus(200)
};

export const profile = async (req, res) => {
    const Userfind = await User.findById(req.user.id);
    if (!Userfind) return res.status(403).json({ message: "usuario no encontrado" });

    return res.json({
        id: Userfind._id,
        name: Userfind.name,
        email: Userfind.email,
        created: Userfind.createdAt,
        updated: Userfind.updatedAt
    });

}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message: ["No autorizado"]});

    jwt.verify(token, SECRET_TOKEN, async (error, user) =>{
        if(error) return res.status(401).json({message: ["No autorizado"]});

        const userFound = await User.findById(user.id);
        if(!userFound) return res.status(401).json({message: ["No autorizado"]});

        return res.json({
            id: userFound.id,
            nombre: userFound.name,
            paternlastname: userFound.paternlastname,
            maternlastname: userFound.maternlastname,
            createdAt: userFound.createdAt
        })
    })
}