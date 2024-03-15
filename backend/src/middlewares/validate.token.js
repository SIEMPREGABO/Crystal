import { SECRET_TOKEN,SECRETPASS_TOKEN } from '../config.js';
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

export const validarTokenPass = (req,res,next) => {
    const token = req.params.id;
    //console.log(req.params.id);
    if(!token) return res.status(401).json({message: "No autorizado"});
    
    jwt.verify(token, SECRETPASS_TOKEN, async (error, user) => {
        if (error) return res.status(401).json({message : ["Token no autorizado"]});
        req.user=user;
        next();
    })
}