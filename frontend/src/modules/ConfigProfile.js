import React from "react";
import { Link } from "react-router-dom";

export const ConfigProfile = () => {
    return (
        <div>
            <div className="container-fluid  p-4 text-center">


                <div className=" col-md-9 px-2 mx-auto mt-5">
                    <form className=""  >
                        <label className="px-2 pt-4 pb-1 h3">Configuración del perfil</label>
                        <div className="pt-3 px-5 row align-items-center text-start">
                            <label className="col-4 ps-4">Nombre (s) </label>
                            <label className="col-4 ps-4">Apellido Paterno </label>
                            <label className="col-4 ps-4">Apellido Materno </label>
                        </div>

                        <div className="pt-1 pb-2 px-3 row justify-content-evenly">
                            <input
                                className="col-3"
                                type="text"
                                name="name"
                                placeholder='Nombre (s)'

                            />
                            <input
                                className="col-3"
                                type="text"
                                name="paternlastname"
                                placeholder='Apellido Paterno'

                            />
                            <input
                                className="col-3"
                                type="text"
                                placeholder='Apellido Materno'
                                name="maternlastname"

                            />
                        </div>




                        <div className="pt-2 px-5 row align-items-start text-start">

                            <label className="col-6 ps-4">Número Celular </label>

                        </div>

                        <div className="pt-1 pb-2 ps-5 ms-4 row align-items-start">

                            <input
                                className="col-5"
                                name="number"
                                type="text"
                                maxLength="12"

                                placeholder='xx-xxxx-xxxx'

                            />



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

                            />


                        </div>

                        <div className="pt-3 pb-2 px-3 justify-content-evenly">
                        <input className=" btn btn-dark " type="submit" value="Guardar" />
                        </div>
                        



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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfigProfile;