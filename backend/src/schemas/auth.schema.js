import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string({
        required_error: 'El nombre es requerido'
    }),
    paternlastname: z.string({
        required_error: 'El apellido paterno es requerido'
    }),
    maternlastname: z.string({
        required_error: 'El apellido materno es requerido'
    }),
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message : 'Correo Invalido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(8, {message: "Mínimo 8 caracteres"}),
    number: z.string({
        required_error: 'El número es requerido'
    }).min(12,{message: "Numero Invalido 'xx-xxxx-xxxx'"})
});

export const loginSchema = z.object({
    email : z.string({
        required_error : 'Email required'
    }).email({
        message: 'Correo Invalido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(8, {message: "Mínimo 8 caracteres"})
});

export const resetSchema = z.object({
    email : z.string({
        required_error : 'Email required'
    }).email({
        message: 'Correo Invalido'
    })
});

export const taskSchema = z.object({
    title: z.string({
      required_error: "Titulo es requerido",
    }),
    description: z.string().optional(),
    date: z.string().datetime().optional()
});