import z from 'zod';

export const loginSchema = z.object({
    email: z.string({
    }).nonempty({
        message: "Este campo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/),
        { message: 'Correo Invalido' }),
    password: z.string({
    }).nonempty({
        message: "Este campo es requerido"
    }).min(8, { message: "Minimo 8 caracteres" })
});

export const registerSchema = z.object({
    name: z.string().nonempty({
        message: "Este campo es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Nombre Invalido" }
    ),
    paternlastname: z.string().nonempty({
        message: "Este campo es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Apellido Paterno Invalido" }
    ),
    maternlastname: z.string().nonempty({
        message: "Este campo es requerido"
    }).regex(
        new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/), { message: "Apellido Materno Invalido" }
    ),
    number: z.string().nonempty({
        message: "Este campo es requerido"
    }).regex(
        new RegExp(/^(\d{2})[-](\d{4})[-](\d{4})$/), { message: "Numero Invalido 'xx-xxxx-xxxx'" }
    ),
    email: z.string().nonempty({
        message: "Este campo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: "Email Invalido" }
    ),
    repeatemail: z.string().nonempty({
        message: "Este campo es requerido"
    }).regex(
        new RegExp(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/), { message: "Email Invalido" }
    ),
    password: z.string().nonempty({
        message: "Este campo es requerido"
    }).min(8, { message: "Minimo 8 caracteres" }),
    repeatpassword: z.string().nonempty({
        message: "Este campo es requerido"
    }).min(8, {
        message: "Minimo 8 caracteres"
    })
}).refine((data) => data.password === data.repeatpassword,{message: "Pass matc"})
.refine((data) => data.email === data.repeatemail, {message: "email no coinciden"});
