import z from 'zod';

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