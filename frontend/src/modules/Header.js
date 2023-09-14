import { Link, Outlet } from 'react-router-dom';


export const header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Crystal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link" to="/login">Ingresar</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/register">Registro</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}
export default header;