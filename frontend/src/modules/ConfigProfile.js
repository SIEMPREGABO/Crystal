import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { zodResolver } from '@hookform/resolvers/zod';
import {  updateSchema } from "../schemas/auth";
import { useForm } from 'react-hook-form';

export const ConfigProfile = () => {
    const { user, updateUser, messageupdate, updateerrors } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(updateSchema),
        defaultValues: user
    });

    const onSubmit = handleSubmit(async (values) => {
        updateUser(values);
    })

    return (
        <div>
            <div className="container-fluid  p-4 text-center">
                {messageupdate && <div className=" bg-success mt-2 me-2 text-white shadow">{messageupdate}</div>}
                {updateerrors && <div className=" bg-danger mt-2 me-2 text-white shadow">{updateerrors}</div>}


                <div className=" col-md-9 px-2 mx-auto mt-5">
                <form className="" onSubmit={handleSubmit(onSubmit)} >
                        <label className="px-2 pt-4 pb-1 h3">Configuración del perfil</label>
                        <div className="pt-3 px-5 row align-items-center text-start">
                            <label className="col-4 ps-4">Nombre (s) </label>
                            <label className="col-4 ps-4">Apellido Paterno </label>
                            <label className="col-4 ps-4">Apellido Materno</label>

                        </div>

                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            <input
                                className="col-3"
                                type="text"
                                name="NOMBRE_PILA"
                                placeholder='Nombre (s)'
                                
                                {...register("NOMBRE_PILA", { required: true })}
                            />
                            <input
                                className="col-3"
                                type="text"
                                name="APELLIDO_PATERNO"
                                placeholder='Apellido Paterno'
                                
                                {...register("APELLIDO_PATERNO", { required: true })}
                            />
                            <input
                                className="col-3"
                                type="text"
                                placeholder='Apellido Materno'
                                name="APELLIDO_MATERNO"
                                
                                {...register("APELLIDO_MATERNO", { required: true })}
                            />
                        </div>

                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            {errors.NOMBRE_PILA &&
                                <div className=" col-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.NOMBRE_PILA.message}</div>
                                </div>}
                            {errors.APELLIDO_PATERNO &&
                                <div className=" col-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.APELLIDO_PATERNO.message}</div>
                                </div>}
                            {errors.APELLIDO_MATERNO &&
                                <div className=" col-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.APELLIDO_MATERNO.message}</div>
                                </div>}
                        </div>


                        <div className="pt-3 px-5 row align-items-center text-start">
                            <label className="col-4 ps-4">Nombre usuario </label>
                            <label className="col-4 ps-4">Boleta</label>
                        </div>
                        <div className="pt-1 pb-2 px-3 row ">
                            <input
                                className="col-3"
                                type="text"
                                name="NOMBRE_USUARIO"
                                placeholder='Nombre Usuario'
                                
                                {...register("NOMBRE_USUARIO", { required: true })}
                            />

                            <input
                                className="col-3"
                                type="text"
                                name="NUMERO_BOLETA"
                                placeholder='Nombre (s)'
                                
                                {...register("NUMERO_BOLETA", { required: true })}
                            />
                        </div>

                        <div className="pt-1 pb-2 px-3 row ">
                            {errors.NOMBRE_USUARIO &&
                                <div className=" col-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.NOMBRE_USUARIO.message}</div>
                                </div>}
                            {errors.NUMERO_BOLETA &&
                                <div className=" col-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.NUMERO_BOLETA.message}</div>
                                </div>}
                        </div>





                        <div className="pt-2 px-5 row align-items-start text-start">

                            <label className="col-6 ps-4">Número Celular </label>

                        </div>

                        <div className="pt-1 pb-2 ps-5 ms-4 row align-items-start">

                            <input
                                className="col-5"
                                name="TELEFONO"
                                type="text"
                                maxLength="10"

                                placeholder='xxxxxxxxxx'
                               
                                {...register("TELEFONO", { required: true })}

                            />



                        </div>

                        <div className="pt-1 pb-2 ps-5 ms-4 row align-items-start">
                            {errors.TELEFONO &&
                                <div className=" col-3">
                                    <div className=" bg-danger mt-2 text-white shadow ">{errors.TELEFONO.message}</div>
                                </div>}

                        </div>

                        <div className="pt-2 px-5 row align-items-start text-start">
                            <label className="col-6 ps-4">Correo </label>
                        </div>
                        <div className="pt-1 pb-2 ps-5 ms-4 row align-items-start">


                            <input
                                className="col-5"
                                type="email"
                                name="email"
                                placeholder='alguien@example.com'
                               
                                disabled
                                {...register("CORREO", { required: true })}
                            />
                        </div>
                        
                        <div className="pt-3 pb-2 px-3 justify-content-evenly">
                            <input className=" btn btn-dark " type="submit" value="Guardar" />
                        </div>



                        {/*
                        <div className="pt-3 px-5 row align-items-start text-start">
                            <label className="col-4 ps-4">Contraseña actual</label>

                        </div>

                        <div className="pt-1 pb-2 ps-5 ms-4 row align-items-start">
                            <input
                                className="col-3"
                                type="password"
                                placeholder='Contraseña actual'
                                name="password"

                            />

                        </div>

                        
                        <div className="pt-3 px-5 row align-items-start text-start">
                            <label className="col-4 ps-4">Contraseña nueva </label>
                            <label className="col-4 ps-4">Repetir contraseña </label>
                        </div>

                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            <input
                                className="col-3"
                                type="password"
                                name="newpassword"

                                placeholder='Contraseña nueva'

                            />
                            <input
                                className="col-3"
                                type="password"
                                name="repeatnewpassword"
                                placeholder='Contraseña nueva'

                            />
                            <div className="col-3">
                                <input className=" btn btn-dark btn-custom-config pb-3 " type="submit" value="Cambiar contraseña" />
                            </div>
                        </div>*/}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfigProfile;