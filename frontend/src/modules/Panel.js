import { Link } from "react-router-dom";
import { useAuth } from '../context/authContext';
import moment from "moment";
import { useEffect } from "react";
import { useProject } from "../context/projectContext";


export const Panel = () => {
    const { user } = useAuth();
    //const {getProjects} = useProject();
    const fecha = moment.utc(user.FECHA_CREACION).format('DD-MM-YYYY');

    useEffect(() => {
        //const projects = getProjects();
    })
 


    return (
        <div>
            <div className="container-fluid position-relative p-4">
                <div className="container-sm">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 p-md-3 mx-auto">
                        <div className="text-bg-dark overflow-hidden col">
                            <div className="mt-3 pt-3 ms-5 ps-5">

                                <h2 className="display-5">Bienvenido {user.NOMBRE_USUARIO}</h2>
                                <p className="lead">ID: {user.ID}</p>
                                <p className="lead">Unido desde {fecha}</p>


                            </div>
                        </div>


                    </div>
                    <div className="card ">
                        <div className="card-header">
                            Tus proyectos activos
                        </div>
                        <ul className="list-group list-group-flush text-start">
                            <Link className="list-group-item text-start" to="/Proyecto"> Desarrollo de videojuegos <strong className="fw-light" style={{ fontSize: '10px' }}>ID: 651229b4b8f7d43d44d8bfef</strong></Link>
                            <button className="list-group-item text-start">Proyecto de redes <strong className="fw-light" style={{ fontSize: '10px' }}>ID: 651229b4b8f7d43d44d8bfef</strong></button>
                            <button className="list-group-item text-start">Aplicacion móvil <strong className="fw-light" style={{ fontSize: '10px' }}>ID: 651229b4b8f7d43d44d8bfef</strong></button>
                        </ul>
                        <div className="card-body row justify-content-evenly">
                            <div className="col">
                                <div className="p-2 px-4 row justify-content-evenly">
                                    
                                        <input
                                            className="col"
                                            type="text"
                                            name="title"
                                            placeholder="ID del Proyecto"
                                            autoFocus
                                        />
                                    
                                    <div className="col">
                                        <input className=" btn btn-dark btn-custom-register " type="submit" value="Unirse a proyecto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col text-center pe-5 pt-2">
                                <Link className="btn btn-dark btn-custom-register" to="/configurar-proyecto">Crear Proyecto</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel;