import { z } from 'zod';

export const createSchema = z.object({
    NOMBRE_PROYECTO: z.string().nonempty({
        required_error: 'El nombre del proyecto es requerido'
    }),
    OBJETIVO: z.string().nonempty({
        required_error: 'El objetivo del proyecto es requerido'
    }),
    DESCRIPCION_GNRL: z.string().nonempty({
        required_error: 'El descripcion del proyecto es requerido'
    }),
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

export const taskSchema = z.object({
    NOMBRE: z.string({
        required_error: 'EL nombre de la tarea es reuquerido'
    }),
    DESCRIPCION: z.string({
        required_error: 'LA descripcion de la tarea es requerida'
    }),
    ESTADO: z.string({
        required_error: 'Estado de la tarea es requerido'
    }),
    FECHA_INICIO: z.string({
        required_error: 'La fecha de inicio es requerida'
    }),
    FECHA_TERMINO: z.string({
        required_error: 'La fecha de termino es requerida'
    }),
    FECHA_MAXIMA_TERMINO: z.string({
        required_error: 'La fecha maxima de termino es requerida'
    })
})