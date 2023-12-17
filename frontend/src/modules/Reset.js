import {  useNavigate } from 'react-router-dom';
import Footer from "./Footer.js";
import { useForm } from 'react-hook-form'
import { resetSchema } from '../schemas/auth.js';
import { useAuth } from '../context/authContext.js';
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react';

export const Reset = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resetSchema)
    });
    const navigate = useNavigate();
    const {reseterrors,  message, resetToken, IsSended } = useAuth();

    const onSubmit = handleSubmit(async (values) => {
        resetToken(values);
    });
    
    /*useEffect(() => {
        if(IsSended) console.log(IsSended);
    },[IsSended]);*/
    

    return (
        <div>
            <div className="container-fluid position-relative p-4 text-center">
            {message && <div className=" bg-success mt-2 me-2 text-white shadow">{message}</div>}
            {reseterrors && <div className=" bg-danger mt-2 me-2 text-white shadow">{reseterrors}</div>}
                <div className="col-md-4 px-2 p-lg-3 mx-auto my-5">
                    <form className="shadow" onSubmit={handleSubmit(onSubmit)}>
                    <label className="px-2 pt-4 pb-1 h4">Restablecer contraseña</label>
                        <div className="p-4 row align-items-center">
                            <label className="col">Introduzca el correo registrado: </label>
                            <input
                                type="email"
                                name="email"
                                placeholder='alguien@example.com'
                                className="col"
                                {...register("email", { required: true})}
                            />
                            {errors.email && <div className=" bg-danger mt-4 me-2 text-white shadow">{errors.email.message}</div>}

                        </div>
                        <div className="px-1 pb-4 pt-2 col">
                            <input className=" btn btn-dark btn-custom btn-xs " type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reset;

