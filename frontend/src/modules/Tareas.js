import React from "react";
import { useState } from "react";

export const Tareas = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
    };

    return (
        <div className="container-fluid position-relative p-4 text-center">
            <div className="row align-items-center shadow">
                <div className=" px-2 p-lg-5 mx-auto  col">
                    <label className="px-2 pt-3 pb-1 h3">Agregar tarea</label>
                    <form >
                        <div className="p-4 row align-items-center">
                            <h5 htmlFor="title" className="pb-2">Titulo</h5>
                            <input
                                type="text"
                                name="title"
                                placeholder="Titulo"
                                autoFocus
                            />
                        </div>
                        <div className="pb-4 px-4 pt-2 row align-items-center">
                            <label htmlFor="description" className="pb-2">Descripcion</label>

                            <textarea
                                name="description"
                                id="description"
                                rows="3"
                                placeholder="Descripcion"

                            ></textarea>
                        </div>
                        <div className="pb-4 px-4 pt-2 row align-items-center">
                            <div className="col">
                                <label htmlFor="date" className="px-2">Inicio</label>
                                <input type="date" name="date" />
                            </div>
                            <div className="col">
                                <label htmlFor="date" className="px-2">Termino</label>
                                <input type="date" name="date" />
                            </div>
                        </div>

                        <div className="pb-2 px-4 pt-2 row align-items-center">
                            <div className="col">
                                <select class="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                                    <option selected>Asignar a</option>
                                    <option value="1">Diseñador</option>
                                    <option value="2">Experto en Negocios</option>
                                    <option value="3">Usuario Embajador</option>
                                </select>
                            </div>
                            <div className="col">
                                <div className="px-2">
                                    <input
                                        type="checkbox"
                                        checked={isChecked2}
                                        onChange={handleCheckboxChange2}
                                    />

                                    <label>Tarea dependiente</label>
                                </div>
                                <input

                                    type="text"
                                    placeholder=" ID"
                                    value={inputValue2}
                                    onChange={(e) => setInputValue2(e.target.value)}
                                    disabled={!isChecked2}
                                />
                            </div>
                        </div>

                        <div className="pb-4 px-2 pt-2 row align-items-center">
                            <div className="col py-1">
                                <select class="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                                    <option selected>Prioridad</option>
                                    <option value="1">Diseñador</option>
                                    <option value="2">Experto en Negocios</option>
                                    <option value="3">Usuario Embajador</option>
                                </select>
                            </div>
                        </div>
                        <input className=" btn btn-info btn-custom btn-xs " type="submit" value="Guardar" />

                    </form>
                </div>


                <div className=" px-2 p-lg-5 mx-auto col">
                    <label className="px-2 pt-3 pb-1 h3">Actualizar tarea</label>
                    <form >
                        <div className="p-2 px-4 row align-items-center">
                            <h5 htmlFor="title" className="pb-2">ID Tarea</h5>
                            <input
                                className="col"
                                type="text"
                                name="title"
                                placeholder="ID"
                                autoFocus
                            />
                            <div className="col-4">
                                <input className=" btn btn-info " type="submit" value="Buscar" />
                            </div>
                        </div>
                        <div className="p-2 px-4 row align-items-center">
                            <h5 htmlFor="title" className="pb-2">Titulo</h5>
                            <input
                                type="text"
                                name="title"
                                placeholder="Titulo"
                                autoFocus
                            />
                        </div>
                        <div className="pb-4 px-4 pt-2 row align-items-center">
                            <label htmlFor="description" className="pb-2">Descripcion</label>

                            <textarea
                                name="description"
                                id="description"
                                rows="3"
                                placeholder="Descripcion"

                            ></textarea>
                        </div>
                        <div className="pb-4 px-4 pt-2 row align-items-center">
                            <div className="col">
                                <label htmlFor="date" className="px-2">Inicio</label>
                                <input type="date" name="date" />
                            </div>
                            <div className="col">
                                <label htmlFor="date" className="px-2">Termino</label>
                                <input type="date" name="date" />
                            </div>
                        </div>

                        <div className="pb-2 px-2 pt-2 row align-items-center">
                            <div className="col py-1">
                                <select class="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                                    <option selected>Asignar a</option>
                                    <option value="1">Diseñador</option>
                                    <option value="2">Experto en Negocios</option>
                                    <option value="3">Usuario Embajador</option>
                                </select>
                            </div>
                            <div className="col">
                                <div className="px-2">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />

                                    <label>Tarea dependiente</label>
                                </div>
                                <input

                                    type="text"
                                    placeholder=" ID"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    disabled={!isChecked}
                                />
                            </div>
                        </div>

                        <div className="pb-4 px-2 pt-2 row align-items-center">
                            <div className="col py-1">
                                <select class="btn btn-info btn-xs dropdown-toggle px-3 mb-1" aria-label="Large select example">
                                    <option selected>Prioridad</option>
                                    <option value="1">Diseñador</option>
                                    <option value="2">Experto en Negocios</option>
                                    <option value="3">Usuario Embajador</option>
                                </select>
                            </div>
                        </div>

                        <input className=" btn btn-info btn-custom btn-xs " type="submit" value="Guardar" />

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Tareas;