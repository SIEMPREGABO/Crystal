import { Link } from 'react-router-dom';
import '../css/App.css';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul id='list-format'>
                <li id='row'>
                    <Link className='nav-link text-info' to="/Proyecto/">Dashboard</Link>
                </li>
                <li id='row'>
                    <Link className='nav-link text-info' to="/Proyecto/roles">Asignar</Link>
                </li>
                <li id='row'>
                    <Link className='nav-link text-info' to="/Proyecto/tablero">Tablero</Link>
                </li>
                <li id='row'>
                    <Link className='nav-link text-info' to="/Proyecto/tareas">Tareas</Link>
                </li>
                <li id='row'>
                    <Link className='nav-link text-info' to="/Proyecto/calendario">Calendario</Link>
                </li>
                <li id='row'>
                    <Link className='nav-link text-info' to="/Proyecto/chat">Chat</Link>
                </li>
                <li id='row'>
                    <Link className='nav-link text-info' to="/Proyecto/entregas">Entregas</Link>
                </li>
                <li id='row'>
                    <Link className='nav-link text-info' to="/Proyecto/configuracion">Configuracion</Link>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;