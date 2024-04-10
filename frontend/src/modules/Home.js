import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Footer from "./Footer";
import Header from "./Header.js";
import ParticlesBackground  from "./ParticlesBackground.js";
import ear from "../images/Ear.jpg"
import human from "../images/Man.jpg"
import team from "../images/Team.jpg"
import shield from "../images/Escudo.jpg"
import cycles from "../images/Entregas.jpg"
import users from "../images/Users.jpg"
import tablero from '../images/tablero.png'
import logo from '../images/logoClear-c.png'
import '../css/home.css'


export const Home = () => {
    return (
        <>
        <Header/>
        <div className="divp">
        
            <main>
                <div className="position-relative overflow-hidden p-3 p-md-5  text-center bg-body-tertiary principal">
                    <div className="row">
                    <div className="col-sm-6 p-lg-5 mx-auto my-5">
                        <h1 className="display-3 fw-bold">Diseñado para estudiantes</h1>
                        <h3 className="fw-normal  mb-3" >Construye lo que quieras con <span className="titulo">C L E A R</span></h3>
                    </div>
                    </div>
                </div>
                
                <div className="container-md my-3 position-relative overflow-hidden">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 mx-auto">
                        <div className="text-bg-dark overflow-hidden col">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Mantén la coordinación y optimiza el desarrollo de tus proyectos</h2>
                                <ul className="lead mx-5 fs-2">
                                    <li>Planifica</li>
                                    <li>Superviza</li>
                                    <li>Publica</li>
                                    <li>Informa</li>
                                </ul>
                            </div>
                            {/*<img src={team} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>*/}
                        </div>
                        <div className="text-bg-dark text-center overflow-hidden col ms-5 my-auto">
                            <img src={tablero} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty "/>    
                        </div>
                    </div>
                </div>

                <div className="container-md my-3 position-relative overflow-hidden">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 mx-auto">
                        <div className="text-bg-dark overflow-hidden col p-5">
                            <div className="my-5 py-3">
                                <h2 className="display-5">Permite que los pilares de CRYSTAL te lleven al éxito en cualquier proyecto</h2>
                            </div>
                            {/*<img src={shield} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>*/}

                        </div>
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="mt-3 py-3 row">
                                <div className="col "></div>
                                <div className="col "> <img title="Trabajo en Equipo" src={team} alt="Imagen Predeterminada" className=" circle shadow-sm mx-auto rounded"/> </div>
                                <div className="col "> <img title="Seguridad Personal" src={shield} alt="Imagen Predeterminada" className=" circle shadow-sm mx-auto rounded"/> </div>
                                <div className="col "></div>
                            </div>
                            <div className="row">
                                <div className="col "><img title="Comunicación Osmótica" src={ear} alt="Imagen Predeterminada" className="circle shadow-sm mx-auto rounded"/> </div>
                                <div className="col "></div>
                                <div className="col "></div>
                                <div className="col "><img title="Enfoque en las Personas" src={human} alt="Imagen Predeterminada" className="circle shadow-sm mx-auto rounded"/> </div>
                            </div> 
                            <div className="row">
                                <div className="col "></div>
                                <div className="col "><img title="Interacción con Usuarios Expertos" src={users} alt="Imagen Predeterminada" className="circle shadow-sm mx-auto rounded "/> </div>
                                <div className="col "><img title="Entregas Frecuentes" src={cycles} alt="Imagen Predeterminada" className="circle shadow-sm mx-auto rounded"/> </div>
                                <div className="col "></div>
                            </div>      
                         </div>
                    </div>
                </div>

                <div className="container-md my-3 position-relative overflow-hidden">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 mx-auto">
                        <div className="text-bg-dark overflow-hidden col">
                            <div className="my-5 py-5">
                                <h2 className="display-5">Somos el primer gestor de proyectos que utiliza la metodología ágil CRYSTAL como base.</h2>
                            </div>
                            {/*<img src={users} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>*/}
                        </div>
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Bienvenido a ....</h2>
                            </div>
                            <img src={logo} alt="Imagen Predeterminada" className="mx-auto logo"/>
                            <h2 className="display-5 fw-bold logo-titulo">C L E A R</h2>
                            <div><Link className="mx-auto btn btn-warning my-5 rounded-pill fs-4" to="/login">¡Empezar!</Link></div>
                        </div>
                    </div>
                </div>

                <ParticlesBackground />    
            </main>
            
        </div>
        </>
    );
}


export default Home;