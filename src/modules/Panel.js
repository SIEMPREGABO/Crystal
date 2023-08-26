import Footer from "./Footer";
import image from "../images/profile.png";
import { Link } from "react-router-dom";


export const register = () => {
    return (
        <div>
            <div class="container-fluid position-relative p-4">
                <div class="container-sm">
                    <div class="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 p-md-3 mx-auto">
                        <div class="text-bg-dark overflow-hidden col">
                            <div class="mt-3 pt-3 ms-5 ps-5">
                                <h2 class="display-5">Bienvenido Gabriel</h2>
                                <p class="lead">#124246546</p>
                                <p class="lead">Unido desde 14/06/23</p>

                            </div>
                        </div>
                        <div class="text-bg-dark text-center overflow-hidden col">
                            <div class="text-bg-dark pe-5 me-5 pt-3 mt-3">
                                <img src={image} class="img-sm" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div class="card ">
                        <div class="card-header">
                            Tus proyectos activos
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            
                        </ul>
                        <div class="card-body row justify-content-evenly">
                            <div class="col text-end pe-5">
                                <Link class="btn btn-dark btn-custom btn-xs" to="/">Crear Proyecto</Link>
                            </div>
                            <div class="col text-start ps-5">
                                <Link class="btn btn-dark btn-custom btn-xs" to="/">Unirse a Proyecto</Link>
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