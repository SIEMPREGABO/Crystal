import {  useNavigate } from 'react-router-dom';
import Footer from "./Footer.js";
import { useForm } from 'react-hook-form'
import { resetSchema } from '../schemas/auth.js';
import { useAuth } from '../context/authContext.js';
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react';

export const ResetPass = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resetSchema)
    });

    const navigate = useNavigate();
    const {resetpasserrors,  message, resetToken, IsSended } = useAuth();

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
            {resetpasserrors && <div className=" bg-danger mt-2 me-2 text-white shadow">{resetpasserrors}</div>}
                <div className="col-md-4 px-2 p-lg-3 mx-auto my-5">
                    <form className="shadow" onSubmit={handleSubmit(onSubmit)}>
                    <label className="px-2 pt-4 pb-1 h4">Restablecer contraseña</label>
                    <div className="pt-2 px-5 row align-items-center text-start">
                            <label className="col">Contraseña </label>
                            <label className="col ps-5">Confirmar contraseña </label>
                        </div>
                        <div className="pt-1 pb-3 px-3 row justify-content-evenly">
                            <input
                                className="col-5"
                                type="password"
                                placeholder='Contraseña'
                                name="password"
                                {...register("password", { required: true })}
                            />
                            <input
                                className="col-5"
                                type="password"
                                name="repeatpassword"

                                placeholder='Contraseña'
                                {...register("repeatpassword", { required: true })}
                            />
                            
                        </div>

                        <div className=" row justify-content-evenly">
                            {errors.password &&
                            <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.password?.message}</div>
                            </div>}

                            {errors.repeatpassword &&
                            <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.repeatpassword?.message}</div>
                            </div>}
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

export default ResetPass;

