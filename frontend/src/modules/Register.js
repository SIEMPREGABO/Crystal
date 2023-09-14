import Footer from "./Footer";
import { registerSchema } from "../schemas/auth";
import { useAuth } from '../context/authContext';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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

    const { signup, IsAuthenticated ,IsRegistered, errors: registerErrors } = useAuth();
    const navigate = useNavigate();
    
    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    useEffect(() => {

        if(IsAuthenticated){
            navigate("/panel");
        }else{
            if(IsRegistered) navigate("/login"); 
        }
    },[IsRegistered,IsAuthenticated]);


    return (
        <div>
            <div className="container-fluid position-relative p-4 text-center">
                {registerErrors && <div className=" bg-danger mt-2 me-2 text-white shadow">{registerErrors}</div>}
                <div className="col-md-6 px-2 mx-auto mt-5">
                    <form className="shadow" onSubmit={handleSubmit(onSubmit)} >
                        <label className="px-2 pt-3 pb-1 h4">Registro</label>
                        <div className="pt-3 px-5 row align-items-center text-start">
                            <label className="col">Nombre (s) </label>
                            <label className="col ps-5">Apellido Paterno </label>
                        </div>

                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            <input
                                className="col-5"
                                type="text"
                                name="name"
                                placeholder='Nombre'
                                {...register("name", { required: true })}
                            />
                            <input
                                className="col-5"
                                type="text"
                                name="paternlastname"
                                placeholder='Apellido Paterno'
                                {...register("paternlastname", { required: true })}
                            />
                        </div>

                        <div className=" row justify-content-evenly">
                            {errors.name &&
                                <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.name.message}</div>
                                </div>}

                            {errors.paternlastname &&
                                <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.paternlastname.message}</div>
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
                                name="maternlastname"
                                {...register("maternlastname", { required: true })}
                            />
                            <input
                                className="col-5"
                                name="number"
                                type="text"
                                maxLength="12"

                                placeholder='xx-xxxx-xxxx'
                                {...register("number", { required: true })}
                            />
                        </div>


                        <div className=" row justify-content-evenly">
                            {errors.maternlastname &&
                                <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.maternlastname.message}</div>
                                </div>}

                            {errors.number &&
                                <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.number.message}</div>
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
                                name="email"
                                placeholder='alguien@example.com'
                                {...register("email", { required: true })}
                            />

                            <input
                                className="col-5"
                                type="email"
                                name="repeatemail"

                                placeholder='alguien@example.com'
                                {...register("repeatemail", { required: true })}
                            />
                        </div>


                        <div className=" row justify-content-evenly">
                            {errors.email &&
                            <div className=" col-5 ps-3">
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.email.message}</div>
                            </div>}

                            {errors.repeatemail &&
                            <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.repeatemail.message}</div>
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
                                    <div className=" bg-danger mt-2  text-white shadow fs-6">{errors.password.message}</div>
                            </div>}

                            {errors.repeatpassword &&
                            <div className=" col-5 pe-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.repeatpassword.message}</div>
                            </div>}
                        </div>

                        <div className="px-5 pb-4 pt-3 row align-items-center">
                            <div className="col ps-4">
                                <input className=" btn btn-dark btn-custom btn-xs " type="submit" value="Registrarse" />
                            </div>
                            <Link className="col h5 pe-4" to="/register">Ingresar</Link>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;