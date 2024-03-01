import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Asignacion from "./Asignacion";
import Chat from "./Chat";
import Config from "./Config.js"
import Calendario from "./Calendario.js";
import Tareas from "./Tareas.js";
import Dashboard from "./Dashboard.js";
import Entregas from "./Entregas.js";
import Tablero from "./Tablero.js"

export const Proyecto = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="container">
                <Routes>
                    <Route path="" element={<Dashboard/>}/>
                    <Route path="roles" element={<Asignacion />} />
                    <Route path="tareas" element={<Tareas/>} />
                    <Route path="calendario" element={<Calendario/>} />
                    <Route path="chat" element={<Chat/> }/>
                    <Route path="entregas" element={<Entregas/> } />
                    <Route path="configuracion" element={<Config/>} />
                    <Route path="tablero" element={<Tablero/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default Proyecto;