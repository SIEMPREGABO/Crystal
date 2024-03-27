import { promise } from "zod";
import { getConnection } from "../database.js";

export function registrarProyecto(CORREO) {
    return new Promise(async (resolve, reject) => {
        const connection = await getConnection();
        const query = 'SELECT ID, CORREO, NOMBRE_USUARIO,CONTRASENIA, FECHA_CREACION,NOMBRE_PILA,APELLIDO_PATERNO,APELLIDO_MATERNO,TELEFONO,NUMERO_BOLETA  FROM USUARIO WHERE CORREO = ? ';
        connection.query(query, [CORREO], (err, results) => {
            if (err) {
                reject(err);
            } else {  
                if (results.length > 0) {
                    resolve({success:true, userData:results});
                } else {
                    resolve(false);
                }
            }
        });
    });
};