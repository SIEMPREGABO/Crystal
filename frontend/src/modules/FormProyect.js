import React from "react";
import { Link } from "react-router-dom";
export const FormProyect = () => {
    return (
        <div className="container-md ">
            <div className="container-fluid position-relative p-4 text-center">

                <div className="p-3 mb-3 text-center">
                    <h1>Ajustes del proyecto</h1>
                </div>

                <div className="pt-1 pb-3 row px-3 justify-content-evenly">
                    <label className="col-4 text-end">Titulo del proyecto: </label>
                    <div className="col px-2">
                        <input
                            className=" form-control"
                            type="text"
                            name="titulo"
                            placeholder='Título'

                        />
                    </div>
                </div>
                <div className="pt-1 pb-3 row px-3 justify-content-evenly">
                    <label className="col-4 text-end">Descripcion del proyecto: </label>
                    <div class="col">
                        <textarea class=" form-control " style={{ height: "75px" }} placeholder="Descripción del proyecto" id="floatingTextarea"></textarea>

                    </div>
                </div>

                <div className="row pt-3 pb-3">
                    <div className="col">
                        <label className="pe-3">Fecha de Inicio: </label>
                        <input
                            className="btn btn-info"
                            type="date"
                            name="fechainicio"

                        />
                    </div>
                    <div className=" col">
                        <label className="pe-3" >Fecha de finalización:</label>
                        <input
                            className="btn btn-info"
                            type="date"
                            name="fechatermino"
                        />
                    </div>
                </div>

                

                <div className="row pt-3 pb-3">
                    <div className="col text-end pt-2 ">
                        <label>Días para  la constitución del proyecto:</label>
                    </div>
                    <div className="col text-start ps-5">
                        <select class="btn btn-info dropdown-toggle px-3 mb-1" aria-label="Large select example">
                            <option selected>Días</option>
                            <option value="1">3</option>
                            <option value="2">4</option>
                            <option value="3">5</option>
                        </select>

                    </div>
                </div>

                <div className="row pt-3 pb-3">
                    <div className="col text-end pt-2">
                        <label>Entregas del proyecto:</label>
                    </div>
                    <div className="col text-start ps-5">
                        <select class="btn btn-info dropdown-toggle px-3 mb-1" aria-label="Large select example">
                            <option selected>Entregas</option>
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
                        <select class="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                            <option selected>Iteraciones</option>
                            <option value="1">3</option>
                            <option value="2">4</option>
                            <option value="3">5</option>
                        </select>
                    </div>
                </div>

                <div className="pt-4 row">
                    <div className="col text-center">
                        <Link className=" btn btn-dark " to="/panel" >Crear proyecto </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FormProyect;