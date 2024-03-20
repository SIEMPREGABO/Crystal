import React from "react";


export const Asignacion = () => {
    return (

        <div className="container-fluid position-relative p-4">

            <div className="mb-3 text-center">
                <div className="card-body row  align-items-center">
                    <h5 className="card-title col-3">Agregar usuario: </h5>

                    <div className="col-3 text-start">
                        <input className=" px-4" type="text" value="Correo participante" />
                    </div>
                    <div className="col-3 text-start">
                        <input className=" btn btn-dark btn-custom px-4" type="submit" value="Agregar" />
                    </div>

                </div>
            </div>

            <div className="card mb-3 text-center">
                <div className="card-body row  align-items-center">
                    <h5 className="card-title col">Usuario #24243523425</h5>
                    <div className="dropdown col">
                        <div className="row">
                            <div className="col text-end">
                                <select className="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                                    <option selected>Asignar</option>
                                    <option value="1">Diseñador</option>
                                    <option value="2">Experto en Negocios</option>
                                    <option value="3">Usuario Embajador</option>
                                </select>
                            </div>
                            <div className="col">
                                <input className=" btn btn-danger btn-custom px-4" type="submit" value="Eliminar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 text-center">
                <div className="card-body row  align-items-center">
                    <h5 className="card-title col">Usuario #92938492373</h5>
                    <div className="dropdown col">
                        <div className="row">
                            <div className="col text-end">
                                <select className="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                                    <option selected>Asignar</option>
                                    <option value="1">Diseñador</option>
                                    <option value="2">Experto en Negocios</option>
                                    <option value="3">Usuario Embajador</option>
                                </select>
                            </div>
                            <div className="col">
                                <input className=" btn btn-danger btn-custom px-4" type="submit" value="Eliminar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 text-center">
                <div className="card-body row  align-items-center">
                    <h5 className="card-title col">Usuario #84748273438</h5>
                    <div className="dropdown col">
                        <div className="row">
                            <div className="col text-end">
                                <select className="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                                    <option selected>Asignar</option>
                                    <option value="1">Diseñador</option>
                                    <option value="2">Experto en Negocios</option>
                                    <option value="3">Usuario Embajador</option>
                                </select>
                            </div>
                            <div className="col">
                                <input className=" btn btn-danger btn-custom px-4" type="submit" value="Eliminar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 text-center">
                <div className="card-body row  align-items-center">
                    <h5 className="card-title col">Usuario #02398985949</h5>
                    <div className="dropdown col">
                        <div className="row">
                            <div className="col text-end">
                                <select className="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                                    <option selected>Asignar</option>
                                    <option value="1">Diseñador</option>
                                    <option value="2">Experto en Negocios</option>
                                    <option value="3">Usuario Embajador</option>
                                </select>
                            </div>
                            <div className="col">
                                <input className=" btn btn-danger btn-custom px-4" type="submit" value="Eliminar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-2">
            <input className=" btn btn-dark btn-custom-register btn-lg " type="submit" value="Guardar" />

            </div>


        </div>


    );
}

export default Asignacion;