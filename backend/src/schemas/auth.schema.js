import {z} from 'zod';

export const registerSchema = z.object({
    NOMBRE_USUARIO: z.string().nonempty({
        message: "EL nombre de usuario es requerido"
    }).regex(
        new RegExp(/^[a-zA-Z0-9\-\._]+$/), {message: "Nombre Usuario Invalido"}
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
    CORREO: z.string().nonempty({
        message: "El correo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: "Correo Invalido" }
    ),
    CONTRASENIA: z.string({
        required_error: 'La contraseña es requerida'
    }).min(8, {message: "Mínimo 8 caracteres"}),
    TELEFONO: z.string().nonempty({
        message: "El número es requerido"
    }).regex(
        new RegExp(/^\d{10}$/), { message: "Numero Invalido " }
    ),
    NUMERO_BOLETA: z.string().nonempty({
        message: "La boleta es requerida"
    }).regex(
        new RegExp(/^\d{10}$/),{message:  "Boleta Invalida"}
    )
});

export const loginSchema = z.object({
    CORREO: z.string({
    }).nonempty({
        message: "El email es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/),
        { message: 'Correo Invalido' }),
    CONTRASENIA: z.string({
        required_error: 'La contraseña es requerida'
    }).min(8, {message: "Mínimo 8 caracteres"})
});

export const resetSchema = z.object({
    CORREO: z.string().nonempty({
        message: "El correo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: 'Correo Invalido' }
    )
});

export const resetpasswordSchema = z.object({
    CONTRASENIA: z.string({
        required_error: 'La contraseña es requerida'
    }).min(8, {message: "Mínimo 8 caracteres"})
});

export const updateSchema = z.object({
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
    CORREO: z.string({
    }).nonempty({
        message: "El email es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/),
        { message: 'Correo Invalido' })
});