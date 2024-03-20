import z from 'zod';

export const loginSchema = z.object({
    CORREO: z.string({
    }).nonempty({
        message: "El email es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/),
        { message: 'Correo Invalido' }),
    CONTRASENIA: z.string({
    }).nonempty({
        message: "La contraseña es requerida"
    }).min(8, { message: "Minimo 8 caracteres" })
});

export const resetSchema = z.object({
    CORREO: z.string().nonempty({
        message: "El correo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: 'Correo Invalido' }
    )
});


export const resetpassSchema = z.object({
    CONTRASENIA: z.string().nonempty({
        message: "La contraseña es requerida"
    }).min(8, { message: "Minimo 8 caracteres" }),
    repeatCONTRASENIA: z.string().nonempty({
        message: "La contraseña es requerida"
    }).min(8, {
        message: "Mínimo 8 caracteres"
    })
}).refine((data) => data.CONTRASENIA === data.repeatCONTRASENIA,{message: "Contraseñas no coinciden",path: ["repeatCONTRASENIA"]});
//Hacer un schema para proyectos
export const projectSchema = z.object({
    NOMBRE_PROYECTO: z.string().nonempty({
        required_error: 'El nombre del proyecto es requerido'
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Nombre de proyecto invalido" }
    ),
    OBJETIVO: z.string().nonempty({
        required_error: 'El objetivo del proyecto es requerido'
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Objetivo invalido" }
    ),
    DESCRIPCION_GNRL: z.string().nonempty({
        required_error: 'El descripcion del proyecto es requerido'
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Descripción invalida" }
    ),
    FECHA_INICIO: z.string().nonempty({
        required_error: 'La fecha de inicio es requerida'
    }),
    FECHA_TERMINO: z.string().nonempty({
        required_error: 'La fecha de termino es requerda'
    }),
    ENTREGAS: z.string().nonempty({
        required_error: 'Las entregas son requeridas'
    })
})

export const registerSchema = z.object({
    NOMBRE_USUARIO: z.string().nonempty({
        message: "EL nombre de usuario es requerido"
    }).regex(
        new RegExp(/^[a-zA-Z0-9\-\._]+$/), {message: "Nombre Usuario Invalido"}
    ),
    NUMERO_BOLETA: z.string().nonempty({
        message: "La boleta es requerida"
    }).regex(
        new RegExp(/^\d{10}$/),{message:  "Boleta Invalida"}
    ),
    NOMBRE_PILA: z.string().nonempty({
        message: "El nombre es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Nombre Invalido" }
    ),
    APELLIDO_PATERNO: z.string().nonempty({
        message: "El apellido paterno es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Apellido Paterno Invalido" }
    ),
    APELLIDO_MATERNO: z.string().nonempty({
        message: "El apellido materno es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Apellido Materno Invalido" }
    ),
    TELEFONO: z.string().nonempty({
        message: "El número es requerido"
    }).regex(
        new RegExp(/^\d{10}$/), { message: "Numero Invalido" }
    ),
    CORREO: z.string().nonempty({
        message: "El correo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: "Correo Invalido" }
    ),
    repeatCORREO: z.string().nonempty({
        message: "El correo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: "Correo Invalido" }
    ),
    CONTRASENIA: z.string().nonempty({
        message: "La contraseña es requerida"
    }).min(8, { message: "Minimo 8 caracteres" }),
    repeatCONTRASENIA: z.string().nonempty({
        message: "La contraseña es requerida"
    }).min(8, {
        message: "Mínimo 8 caracteres"
    })
}).refine((data) => data.CONTRASENIA === data.repeatCONTRASENIA,{message: "Contraseñas no coinciden",path: ["repeatCONTRASENIA"]})
.refine((data) => data.CORREO === data.repeatCORREO, {message: "Los correos no coinciden",path: ["repeatCORREO"]});
