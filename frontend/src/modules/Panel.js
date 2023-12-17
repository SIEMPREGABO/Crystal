import Footer from "./Footer";
import { useState } from "react";
import imagedefault from "../images/profile.png";
import { Link } from "react-router-dom";
import { useAuth } from '../context/authContext';
import moment from "moment";
import { useEffect } from "react";


export const Panel = () => {
    const { user } = useAuth();
    const fecha = moment.utc(user.created).format('DD-MM-YYYY');
    const [showDefaultimage, setShowDefaultimage] = useState(true);

    useEffect(() => {
        if (user.image === null) {
            setShowDefaultimage(false);
        } else {
            setShowDefaultimage(true);
        }
    })

    const handleImage = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const image = {
                    name: selectedFile.name,
                    type: selectedFile.type,
                    data: e.target.result,
                    size: selectedFile.size
                }
                const imagenJSONString = JSON.stringify(image);
                console.log(imagenJSONString);
            };
            reader.readAsDataURL(selectedFile)
        }
    }


    return (
        <div>
            <div className="container-fluid position-relative p-4">
                <div className="container-sm">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 p-md-3 mx-auto">
                        <div className="text-bg-dark overflow-hidden col">
                            <div className="mt-3 pt-3 ms-5 ps-5">

                                <h2 className="display-5">Bienvenido {user.name}</h2>
                                <p className="lead">ID:{user.id}</p>
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