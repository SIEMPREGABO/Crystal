import Footer from "./Footer";
import image from "../images/profile.png";
import { Link } from "react-router-dom";


export const register = () => {
    return (
        <div>
            <div className="container-fluid position-relative p-4">
                <div className="container-sm">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 p-md-3 mx-auto">
                        <div className="text-bg-dark overflow-hidden col">
                            <div className="mt-3 pt-3 ms-5 ps-5">
                                <h2 className="display-5">Bienvenido Gabriel</h2>
                                <p className="lead">#124246546</p>
                                <p className="lead">Unido desde 14/06/23</p>

                            </div>
                        </div>
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="text-bg-dark pe-5 me-5 pt-3 mt-3">
                                <img src={image} className="img-sm" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="card-header">
                            Tus proyectos activos
                        </div>
                        <ul className="list-group list-group-flush text-start">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body row justify-content-evenly">
                            <div className="col text-end pe-5">
                                <Link className="btn btn-dark btn-custom btn-xs" to="/">Crear Proyecto</Link>
                            </div>
                            <div className="col text-start ps-5">
                                <Link className="btn btn-dark btn-custom btn-xs" to="/">Unirse a Proyecto</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default register;