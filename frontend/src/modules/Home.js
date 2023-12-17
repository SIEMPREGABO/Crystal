import Footer from "./Footer";
import ear from "../images/Ear.jpg"
import human from "../images/Man.jpg"
import team from "../images/Team.jpg"
import shield from "../images/Escudo.jpg"
import cycles from "../images/Entregas.jpg"
import users from "../images/Users.jpg"

export const Home = () => {
    return (
        <div>
            <main>
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                    <div className="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 className="display-3 fw-bold">Diseñado para estudiantes</h1>
                        <h3 className="fw-normal text-muted mb-3">Contruye lo que quieras con Clear</h3>
                    </div>
                </div>

                <div className="container-md">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 mx-auto">
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Trabajo en Equipo</h2>
                                <p className="lead">Procura el trabajo.</p>
                            </div>
                            <img src={team} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>    
                        </div>
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Enfoque humano</h2>
                                <p className="lead">Crece y avanza en Clear.</p>
                            </div>
                            <img src={human} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>    
                        </div>
                    </div>
                </div>

                <div className="container-md">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 mx-auto">
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Seguridad Personal</h2>
                                <p className="lead">Tu eres parte del proyecto.</p>
                            </div>
                            <img src={shield} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>    

                        </div>
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Comunicación Osmótica</h2>
                                <p className="lead">La información fluye al oido de todo el equipo.</p>
                            </div>
                                <img src={ear} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>    
                            
                        </div>
                    </div>
                </div>

                <div className="container-md">
                    <div className="row justify-content-evenly d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 mx-auto">
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Usuarios Expertos</h2>
                                <p className="lead">Interacción con usuarios expertos.</p>
                            </div>
                            <img src={users} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>    
                        </div>
                        <div className="text-bg-dark text-center overflow-hidden col">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Entrega frecuente</h2>
                                <p className="lead">Se realizan ciclos de entrega frecuente.</p>
                            </div>
                            <img src={cycles} alt="Imagen Predeterminada" className="shadow-sm mx-auto AppSty"/>    
                        </div>
                    </div>
                </div>

                
            </main>
        </div>
    );
}

export default Home;