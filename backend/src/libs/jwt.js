import { SECRET_TOKEN, SECRETPASS_TOKEN } from "../config.js";
import jwt from 'jsonwebtoken'
import {URIPASS } from '../config.js';

export function createAccessToken(payload){
    return new Promise((resolve,reject) => {
        jwt.sign(
            payload, SECRET_TOKEN,{expiresIn : '1d'},(err, token) => {
                if(err) reject (err)
                resolve(token)
            }
        );
    });
} 

export function createPasswordToken(payload){
    return new Promise((resolve,reject) => {
        jwt.sign(payload, SECRETPASS_TOKEN ,{expiresIn : '10m'},(err, token) => {
                if(err) reject (err)
                const link = `${URIPASS}${token}`
                resolve(link)
            }
        );
    });
} 

