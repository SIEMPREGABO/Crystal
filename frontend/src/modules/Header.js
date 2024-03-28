import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import logo from '../images/logoClear-c.png';
import '../css/header.css';
export const Header = () => {

    const {  IsAuthenticated, logout} = useAuth();
    
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info bg-opacity-25 sticky-top" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{width: 300+"px"}}><img src={logo} style={{height: 75+"px", marginLeft: 50 + "px", display: 'inline-block'}} alt="LogoCrystalClear"/><h1 className='titulo' style={{display: 'inline-block', color: '#fff'}}>C L E A R</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        </div>
                        <div className="d-flex">
                            {IsAuthenticated ? (
                                <>
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                <Link className="nav-link" to="/register" ><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" /></Link>
                                            </svg>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" to="/configurar-perfil">Configuración</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/" onClick={() => {
                                            logout();
                                        }}>Cerrar Sesión</Link></li>
                                    </ul>
                                </>) : (<> <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item i-lista-i1" ><Link className="nav-link border-light rounded-pill" to="/login" style={{color: '#fff'}}>Iniciar Sesión</Link></li>
                                    <li className="nav-item i-lista-i2" ><Link className="nav-link border-light rounded-pill" to="/register" style={{color: '#fff'}}>Registrarse</Link></li>
                                </ul></>)}
                        </div>
                    </div>
                </div>
            </nav >
            <Outlet />
        </div >
    );
}
export default Header;