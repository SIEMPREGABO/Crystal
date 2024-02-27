//import mongoose from 'mongoose';
import mysql from 'promise-mysql';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

export const getConnection = () => {
    return connection;
};

/*module.exports = {
    getConnection
}*/
