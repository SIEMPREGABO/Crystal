import z from 'zod';

export const loginSchema = z.object({
    email: z.string({
    }).nonempty({
        message: "El email es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/),
        { message: 'Correo Invalido' }),
    password: z.string({
    }).nonempty({
        message: "La contraseña es requerida"
    }).min(8, { message: "Minimo 8 caracteres" })
});

export const resetSchema = z.object({
    email: z.string().nonempty({
        message: "El correo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: 'Correo Invalido' }
    )
});

export const registerSchema = z.object({
    name: z.string().nonempty({
        message: "El nombre es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Nombre Invalido" }
    ),
    paternlastname: z.string().nonempty({
        message: "El apellido paterno es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Apellido Paterno Invalido" }
    ),
    maternlastname: z.string().nonempty({
        message: "El apellido materno es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Apellido Materno Invalido" }
    ),
    number: z.string().nonempty({
        message: "El número es requerido"
    }).regex(
        new RegExp(/^(\d{2})[-](\d{4})[-](\d{4})$/), { message: "Numero Invalido 'xx-xxxx-xxxx'" }
    ),
    email: z.string().nonempty({
        message: "El correo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: "Correo Invalido" }
    ),
    repeatemail: z.string().nonempty({
        message: "El correo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: "Correo Invalido" }
    ),
    password: z.string().nonempty({
        message: "La contraseña es requerida"
    }).min(8, { message: "Minimo 8 caracteres" }),
    repeatpassword: z.string().nonempty({
        message: "La contraseña es requerida"
    }).min(8, {
        message: "Mínimo 8 caracteres"
    })
}).refine((data) => data.password === data.repeatpassword,{message: "Contraseñas no coinciden",path: ["repeatpassword"]})
.refine((data) => data.email === data.repeatemail, {message: "Los correos no coinciden",path: ["repeatemail"]});
