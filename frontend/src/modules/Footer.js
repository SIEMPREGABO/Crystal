import React from "react";

export const footer=() =>{
    return (
        <div className="container navbar-fixed-bottom pt-5">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"></svg>
                    </a>
                    <span className="text-muted">© 2023 ESCOM</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><span className="text-muted" href="#">Crystal</span></li>
                    <li className="ms-3"><span className="text-muted" href="#">CRUD</span></li>
                    <li className="ms-3"><span className="text-muted" href="#">Tool</span></li>
                </ul>
            </footer>
        </div>

    );
}

export default footer;