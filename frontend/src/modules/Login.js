import { Link, useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import { useForm } from 'react-hook-form'
import { loginSchema } from '../schemas/auth.js';
import { useAuth } from '../context/authContext';
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react';


export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema)
    });
    const navigate = useNavigate();
    const { message,  signin, IsAuthenticated, errors: loginErrors} = useAuth();
    
    const onSubmit = handleSubmit(async (values) => {
        signin(values);
    })

    useEffect(() => {

        if(IsAuthenticated) navigate("/panel");
    },[IsAuthenticated]);

        

    return (
        <div>
            <div className="container-fluid position-relative p-4 text-center">
                {message && <div className=" bg-success mt-2 me-2 text-white shadow">{message}</div>}
                {loginErrors && <div className=" bg-danger mt-2 me-2 text-white shadow">{loginErrors}</div>}
                <div className="col-md-4 px-2 p-lg-3 mx-auto my-5">
                    <form className="shadow" onSubmit={handleSubmit(onSubmit)}>
                        <label className="px-2 pt-3 pb-1 h5">Ingresar</label>
                        <div className="p-4 row align-items-center">
                            <label className="col">Correo: </label>
                            <input
                                type="email"
                                name="email"
                                placeholder='alguien@example.com'
                                className="col"

                                {...register("email", { required: true, message: "campo requerido" })}
                            />

                            {errors.email && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.email.message}</div>}

                        </div>
                        <div className="pb-4 px-4 pt-2 row align-items-center">
                            <label className="col">Contraseña: </label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Contraseña'
                                className="col"

                                {...register("password", { required: true })}
                            />
                            {errors.password && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.password.message}</div>}
                        </div>
                        <div className="px-4 pb-4 pt-3 row align-items-center">
                            <div className="px-1  col">
                                <input className=" btn btn-dark btn-custom btn-xs " type="submit" value="Ingresar" />
                            </div>
                            <Link className="col h5" to="/register">Registrate</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;

