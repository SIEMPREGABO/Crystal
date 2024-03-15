import { z } from 'zod';

export const createSchema = z.object({
    NOMBRE_PROYECTO: z.string({
        required_error: 'El nombre del proyecto es requerido'
    }),
    OBJETIVO: z.string({
        required_error: 'El objetivo del proyecto es requerido'
    }),
    DESCRIPCION: z.string({
        required_error: 'El descripcion del proyecto es requerido'
    }),
    FECHA_INICIO: z.string({
        required_error: 'La fecha de inicio es requerida'
    }),
    FECHA_TERMINO: z.string({
        required_error: 'La fecha de termino es requerda'
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