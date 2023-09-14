import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string({
        required_error: 'name is required'
    }),
    paternlastname: z.string({
        required_error: 'partern lastname is required'
    }),
    maternlastname: z.string({
        required_error: 'matern lastname is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message : 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(8, {message: "Password must be at least 6 characters"}),
    number: z.string({
        required_error: 'Number is required'
    }).min(12,{message: "Number format: xx-xxxx-xxxx"})
});

export const loginSchema = z.object({
    email : z.string({
        required_error : 'Email required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(8, {message: "Password must be at least 6 characters"})
});

export const taskSchema = z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    description: z.string().optional(),
    date: z.string().datetime().optional()
});