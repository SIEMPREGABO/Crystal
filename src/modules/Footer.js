import React from "react";

export const footer=() =>{
    return (
        <div class="container navbar-fixed-bottom pt-5">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"></svg>
                    </a>
                    <span class="text-muted">© 2023 ESCOM</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><span class="text-muted" href="#">Crystal</span></li>
                    <li class="ms-3"><span class="text-muted" href="#">CRUD</span></li>
                    <li class="ms-3"><span class="text-muted" href="#">Tool</span></li>
                </ul>
            </footer>
        </div>

    );
}

export default footer;