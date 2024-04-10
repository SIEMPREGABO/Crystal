import React from "react";
import { Link } from "react-router-dom";
import { useProject } from "../context/projectContext.js";
import {projectSchema} from "../schemas/project.js";
import {useState, useEffect, useForm, useNavigate} from "react";
import { useAuth } from '../context/authContext';
import { loginSchema } from '../schemas/auth.js';
import { zodResolver } from '@hookform/resolvers/zod'
export const FormProyect = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(projectSchema)
    });

    const navigate = useNavigate();
    const {  create, projecterrors, IsCreated, message} = useProject();
    

    const onSubmit = handleSubmit(async (values) => {
        create(values);
    })

    useEffect(() => {
        if(IsCreated) navigate("/panel");
    },[IsCreated]);

    return (
        <div className="container-md ">
            <div className="container-fluid position-relative p-4 text-center">
                {message && <div className=" bg-success mt-2 me-2 text-white shadow">{message}</div>}
                {projecterrors && <div className=" bg-danger mt-2 me-2 text-white shadow">{projecterrors}</div>}

                <div className="p-3 mb-3 text-center">
                    <h1>Crear proyecto</h1>
                </div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="pt-1 pb-3 row px-3 justify-content-evenly">
                    <label className="col-4 text-end">Titulo del proyecto: </label>
                    <div className="col px-2">
                        <input
                            className=" form-control"
                            type="text"
                            name="NOMBRE_PROYECTO"
                            placeholder='Título'
                            {...register("NOMBRE_PROYECTO",{required: true, message: "Campo requerido"})}
                        />
                    </div>

                    {errors.NOMBRE_PROYECTO && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.NOMBRE_PROYECTO.message}</div>}

                </div>


                <div className="pt-1 pb-3 row px-3 justify-content-evenly">
                    <label className="col-4 text-end">Descripcion del proyecto: </label>
                    <div className="col">
                        <textarea className=" form-control " 
                        style={{ height: "75px" }} 
                        placeholder="Descripción del proyecto" 
                        id="floatingTextarea"
                        name="DESCRIPCION_GNRL"
                        {...register("DESCRIPCION_GNRL",{required:true,message: "Campo requerido"})}
                        />

                    </div>
                    {errors.DESCRIPCION_GNRL && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.DESCRIPCION_GNRL.message}</div>}

                </div>
                <div className="pt-1 pb-3 row px-3 justify-content-evenly">
                    <label className="col-4 text-end">Objetivo del proyecto: </label>
                    <div className="col">
                        <textarea className=" form-control " 
                        style={{ height: "75px" }} 
                        placeholder="Objetivo del proyecto" 
                        id="floatingTextarea"
                        name="OBJETIVO"
                        {...register("OBJETIVO",{required:true,message: "Campo requerido"})}
                        />

                    </div>
                    {errors.OBJETIVO && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.OBJETIVO.message}</div>}

                </div>

                <div className="row pt-3 pb-3">
                    <div className="col">
                        <label className="pe-3">Fecha de Inicio: </label>
                        <input
                            className="btn btn-info"
                            type="date"
                            name="FECHA_INICIO"
                            {...register("FECHA_INICIO",{required:true,message: "Campo requerido"})}

                        />
                    </div>
                    {errors.FECHA_INICIO && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.FECHA_INICIO.message}</div>}

                    <div className=" col">
                        <label className="pe-3" >Fecha de finalización:</label>
                        <input
                            className="btn btn-info"
                            type="date"
                            name="FECHA_TERMINO"
                            {...register("FECHA_TERMINO",{required:true,message: "Campo requerido"})}

                        />
                    </div>
                    {errors.FECHA_TERMINO && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.FECHA_TERMINO.message}</div>}

                </div>

                

                {/*<div className="row pt-3 pb-3">
                    <div className="col text-end pt-2 ">
                        <label>Días para  la constitución del proyecto:</label>
                    </div>
                    <div className="col text-start ps-5">
                        <select className="btn btn-info dropdown-toggle px-3 mb-1" aria-label="Large select example">
                            <option selected>Días</option>
                            <option value="1">3</option>
                            <option value="2">4</option>
                            <option value="3">5</option>
                        </select>

                    </div>
                </div>
                
                <div className="row pt-3 pb-3">
                    <div className="col text-end pt-2">
                        <label>Iteraciones por entrega:</label>
                    </div>
                    <div className="col text-start ps-5">
                        <select className="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                            <option selected>Iteraciones</option>
                            <option value="1">3</option>
                            <option value="2">4</option>
                            <option value="3">5</option>
                        </select>
                    </div>
                </div>*/}

                <div className="row pt-3 pb-3">
                    <div className="col text-end pt-2">
                        <label>Entregas del proyecto:</label>
                    </div>
                    <div className="col text-start ps-5">
                        <select className="btn btn-info dropdown-toggle px-3 mb-1" 
                        aria-label="Large select example"
                        name="ENTREGAS"
                        {...register("ENTREGAS",{required:true,message: "Campo requerido"})}
                        >
                            <option selected>Entregas</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>

                    </div>
                    {errors.ENTREGAS && <div className=" bg-danger mt-2 me-2 text-white shadow">{errors.ENTREGAS.message}</div>}

                </div>

                

                <div className="pt-4 row">
                    <div className="col text-center">
                    <input className=" btn btn-dark btn-custom btn-xs " type="submit" value="Crear" />
                    </div>

                </div>
                </form>
            </div>
        </div>
    );
}

export default FormProyect;