import Footer from "./Footer";
import { registerSchema } from "../schemas/auth";
import { useAuth } from '../context/authContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema)
    });

    const { message, signup, IsAuthenticated, registererrors } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    useEffect(() => {
        if (IsAuthenticated) navigate("/panel");
    }, [IsAuthenticated]);


    return (
        <div>
            <div className="container-fluid position-relative p-4 text-center">
                {message && <div className=" bg-success mt-2 me-2 text-white shadow">{message}</div>}
                {registererrors && <div className=" bg-danger mt-2 me-2 text-white shadow">{registererrors}</div>}
                {errors.refine && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.refine.message}</div>}

                <div className="col-md-6 px-2 mx-auto mt-5">
                    <form className="shadow" onSubmit={handleSubmit(onSubmit)} >
                        <label className="px-2 pt-3 pb-1 h4">Registro</label>

                        <div className="pt-3 px-5 row align-items-center text-start">
                            <label className="col">Nombre de Usuario </label>
                            <label className="col ps-5">Boleta</label>
                        </div>

                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            <input
                                className="col-5"
                                type="text"
                                name="NOMBRE_USUARIO"
                                placeholder='Nombre Usuario'
                                {...register("NOMBRE_USUARIO", { required: true })}
                            />
                            <input
                                className="col-5"
                                type="text"
                                name="NUMERO_BOLETA"
                                placeholder='Boleta'
                                {...register("NUMERO_BOLETA", { required: true })}
                            />
                        </div>

                        <div className=" row justify-content-evenly">
                            {errors.NOMBRE_USUARIO &&
                                <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.NOMBRE_USUARIO.message}</div>
                                </div>}

                            {errors.NUMERO_BOLETA &&
                                <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.NUMERO_BOLETA.message}</div>
                                </div>}
                        </div>


                        <div className="pt-2 px-5 row align-items-center text-start">
                            <label className="col">Nombre (s) </label>
                            <label className="col ps-5">Apellido Paterno </label>
                        </div>

                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            <input
                                className="col-5"
                                type="text"
                                name="NOMBRE_PILA"
                                placeholder='Nombre'
                                {...register("NOMBRE_PILA", { required: true })}
                            />
                            <input
                                className="col-5"
                                type="text"
                                name="APELLIDO_PATERNO"
                                placeholder='Apellido Paterno'
                                {...register("APELLIDO_PATERNO", { required: true })}
                            />
                        </div>

                        <div className=" row justify-content-evenly">
                            {errors.NOMBRE_PILA &&
                                <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.NOMBRE_PILA.message}</div>
                                </div>}

                            {errors.APELLIDO_PATERNO &&
                                <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.APELLIDO_PATERNO.message}</div>
                                </div>}
                        </div>


                        <div className="pt-2 px-5 row align-items-center text-start">
                            <label className="col">Apellido Materno </label>
                            <label className="col ps-5">Número Celular </label>
                        </div>

                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            <input
                                className="col-5"
                                type="text"
                                placeholder='Apellido Materno'
                                name="APELLIDO_MATERNO"
                                {...register("APELLIDO_MATERNO", { required: true })}
                            />
                            <input
                                className="col-5"
                                name="TELEFONO"
                                type="text"
                                maxLength="12"

                                placeholder='xx-xxxx-xxxx'
                                {...register("TELEFONO", { required: true })}
                            />
                        </div>


                        <div className=" row justify-content-evenly">
                            {errors.APELLIDO_MATERNO &&
                                <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.APELLIDO_MATERNO.message}</div>
                                </div>}

                            {errors.TELEFONO &&
                                <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.TELEFONO.message}</div>
                                </div>}
                        </div>

                        <div className="pt-2 px-5 row align-items-center text-start">
                            <label className="col">Correo </label>
                            <label className="col ps-5">Confirmar correo </label>
                        </div>
                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            <input
                                className="col-5"
                                type="email"
                                name="CORREO"
                                placeholder='alguien@example.com'
                                {...register("CORREO", { required: true })}
                            />

                            <input
                                className="col-5"
                                type="email"
                                name="repeatCORREO"

                                placeholder='alguien@example.com'
                                {...register("repeatCORREO", { required: true })}
                            />
                        </div>


                        <div className=" row justify-content-evenly">
                            {errors.CORREO &&
                                <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.CORREO.message}</div>
                                </div>}

                            {errors.repeatCORREO &&
                                <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.repeatCORREO.message}</div>
                                </div>}
                        </div>


                        <div className="pt-2 px-5 row align-items-center text-start">
                            <label className="col">Contraseña </label>
                            <label className="col ps-5">Confirmar contraseña </label>
                        </div>
                        <div className="pt-1 pb-3 px-3 row justify-content-evenly">
                            <input
                                className="col-5"
                                type="password"
                                placeholder='Contraseña'
                                name="CONTRASENIA"
                                {...register("CONTRASENIA", { required: true })}
                            />
                            <input
                                className="col-5"
                                type="password"
                                name="repeatCONTRASENIA"

                                placeholder='Contraseña'
                                {...register("repeatCONTRASENIA", { required: true })}
                            />
                        </div>



                        <div className=" row justify-content-evenly">
                            {errors.CONTRASENIA &&
                                <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.CONTRASENIA?.message}</div>
                                </div>}

                            {errors.repeatCONTRASENIA &&
                                <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.repeatCONTRASENIA?.message}</div>
                                </div>}
                        </div>



                        <div className="px-5 pb-4 pt-3 row align-items-center">
                            <div className="col ps-4">
                                <input className=" btn btn-dark btn-custom btn-xs " type="submit" value="Registrarse" />
                            </div>
                            <Link className="col h5 pe-4" to="/login">Ingresar</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;