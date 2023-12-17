

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/App.css';


export const Dashboard = () => {


    const onChange = (newDate) => {

    };

    return (
        <div class="container">
            <div class="row">
                <div class="col-12 ">
                    <div className="position-relative p-4 text-center ">
                        <div className=" px-2 p-lg-3 mx-auto border-light">
                            <p>
                                <button class="form-select Without-border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Entrega #1
                                </button>
                            </p>
                            <div class="collapse border-light" id="collapseExample">
                                <div class="card card-body Without-border">
                                    <p>
                                        <button class="form-select Without-border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                            Iteracion #1
                                        </button>
                                    </p>
                                    <div class="collapse" id="collapseExample2">
                                        <div class="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-body Without-border">
                                    <p>
                                        <button class="form-select Without-border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                            Iteracion #2
                                        </button>
                                    </p>
                                    <div class="collapse" id="collapseExample3">
                                        <div class="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div className="position-relative p-4 text-center">
                        <div className=" px-2  mx-auto ">
                            <h5 className='pb-1'> Proxima entrega: 30 de diciembre</h5>
                            <div className="centered-calendar">
                                <Calendar onChange={onChange} value={new Date(2023, 11, 30)} />

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div className="position-relative p-4 text-center">
                        <div className=" px-2 p-lg-3 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chat-right-text px-2" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                            </svg>
                            <h5>Nuevos mensajes</h5>
                            <div className=''>
                                <ul id='list-format'>
                                    <li className='row'>
                                        <div style={{ textAlign: 'center' }} className="p-2">
                                            <div className="message-dimension" style={{ background: '#48ebfa' }}> <strong >Usuario#002:</strong>Tarea concluida </div>
                                        </div>
                                    </li>
                                    <li className='row'>
                                        <div style={{ textAlign: 'center' }} className="p-2">
                                            <div className="message-dimension" style={{ background: '#48ebfa' }}> <strong >Usuario#002:</strong>Listo para la entrega </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8">

                    <div className="position-relative px-4 pt-2 text-center">
                        <div className=" px-2 p-lg-3 mx-auto ">
                            <div style={{ height: '200px' }} className="chat-dimension">
                                <div className="card mb-3 text-center">
                                    <div className="card-body row  align-items-center">
                                        <div className='col text-end'>
                                            <div className='row text-center'>
                                                <h5 className="card-title ">Titulo: Concluir manual de usuario  </h5>
                                            </div>

                                            <div className='row text-center'>
                                                <p className="card-title ">Descripcion: Concluir manual de usuario  </p>
                                            </div>
                                        </div>

                                        <div className="dropdown col">
                                            <div className="row align-items-center">
                                                <div className="col text-center">
                                                    <p>Asignada a: Usuario</p>
                                                    <p>23 nov - 30 nov</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="position-relative p-4 text-center">
                        <h5>Usuarios activos</h5>
                        <div className=" px-2 p-lg-3 mx-auto my-3">
                            
                            <div className='row'>
                                <div className='col-1 text-end'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diamond-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z" />

                                    </svg>
                                </div>
                                <div className='col text-start'>
                                    <p>Usuario#001</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-1 text-end'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diamond-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z" />

                                    </svg>
                                </div>
                                <div className='col text-start'>
                                    <p>Usuario#002</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Dashboard;