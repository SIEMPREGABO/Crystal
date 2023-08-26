import { Link, Outlet } from 'react-router-dom';


export const header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Crystal</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Link</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/">Action</Link></li>
                                    <li><Link class="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><Link class="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item"><Link class="nav-link" to="/login">Login</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/register">Register</Link></li>
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