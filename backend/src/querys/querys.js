import { getConnection } from "../database.js";

export function verificarUsuario(CORREO) {
    return new Promise(async (resolve, reject) => {
        const connection = await getConnection();
        const query = 'SELECT ID, CORREO, NOMBRE_USUARIO,CONTRASENIA, FECHA_CREACION FROM USUARIO WHERE CORREO = ?';
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

export function agregarUsuario(CORREO, NOMBRE_USUARIO, CONTRASENIA, NOMBRE_PILA, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO, NUMERO_BOLETA) {
    return new Promise(async (resolve, reject) => {
        const connection = await getConnection();
        const insertarQuery = 'INSERT INTO USUARIO (CORREO, NOMBRE_USUARIO, CONTRASENIA, NOMBRE_PILA, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO, NUMERO_BOLETA) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(insertarQuery,[CORREO, NOMBRE_USUARIO, CONTRASENIA, NOMBRE_PILA, APELLIDO_PATERNO, APELLIDO_MATERNO, TELEFONO, NUMERO_BOLETA],
            (insertarErr, insertarResults) => {
                if (insertarErr) {
                    reject(false);
                } else {
                    resolve(true);
                }
            }
        );
    });
};

export function extraerUsuario(CORREO) {
    return new Promise(async (resolve, reject) => {
        const connection = await getConnection();
        const query = 'SELECT ID, NOMBRE_USUARIO, FECHA_CREACION, CORREO,CONTRASENIA FROM USUARIO WHERE CORREO = ?';
        connection.query(query, [CORREO], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

export function autenticarUsuario(ID) {
    return new Promise(async (resolve, reject) => {
        const connection = await getConnection();
        const query = 'SELECT ID,NOMBRE_USUARIO, CORREO, FECHA_CREACION FROM USUARIO WHERE ID = ?';
        connection.query(query, [ID], (err, results) => {
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
