import { SECRET_TOKEN } from '../config.js';
import jwt from 'jsonwebtoken';

export const validarToken = (req,res,next) => {
    const token = req.cookies['token'];
    //console.log(token);
    if(!token) return res.status(401).json({message: "No autorizado"});

    jwt.verify(token, SECRET_TOKEN, (err, user) => {
        if(err) return res.status(403).json({message: "Usuario no valido"});
        //console.log(user);
        req.user = user;
        next();  
    })
}