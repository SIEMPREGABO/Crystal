import {z} from 'zod';

export const registerSchema = z.object({
    NOMBRE_USUARIO: z.string({
        required_error: 'El nombre de usuario es requerido'
    }),
    NOMBRE_PILA: z.string({
        required_error: 'El nombre es requerido'
    }),
    APELLIDO_PATERNO: z.string({
        required_error: 'El apellido paterno es requerido'
    }),
    APELLIDO_MATERNO: z.string({
        required_error: 'El apellido materno es requerido'
    }),
    CORREO: z.string({
        required_error: 'El email es requerido'
    }).email({
        message : 'Correo Invalido'
    }),
    CONTRASENIA: z.string({
        required_error: 'La contraseña es requerida'
    }).min(8, {message: "Mínimo 8 caracteres"}),
    TELEFONO: z.string({
        required_error: 'El número es requerido'
    }).min(12,{message: "Numero Invalido 'xx-xxxx-xxxx'"}),
    NUMERO_BOLETA: z.string({
        required_error: 'El número de boleta es requerido'
    }).min(10,{message: "El numero de boleta es de 10 dígitos"})
});

export const loginSchema = z.object({
    CORREO : z.string({
        required_error : 'El email es requerido'
    }).email({
        message: 'Correo Invalido'
    }),
    CONTRASENIA: z.string({
        required_error: 'La contraseña es requerida'
    }).min(8, {message: "Mínimo 8 caracteres"})
});

export const resetSchema = z.object({
    CORREO : z.string({
        required_error : 'El email es requerido'
    }).email({
        message: 'Correo Invalido'
    })
});

export const resetpasswordSchema = z.object({
    CONTRASENIA: z.string({
        required_error: 'La contraseña es requerida'
    }).min(8, {message: "Mínimo 8 caracteres"})
});

export const taskSchema = z.object({
    title: z.string({
      required_error: "Titulo es requerido",
    }),
    description: z.string().optional(),
    date: z.string().datetime().optional()
});