import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/App.css';

export const Calendario = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (

    <div className="container-fluid  p-4 text-center">
      <h1>Calendario del proyecto</h1>
      <div className="text-center  mt-4 mb-2">

        <div className="centered-calendar">
          <Calendar onChange={onChange} value={date} />

        </div>

      </div>
      <div className='text-start'>
        <h2 className='pt-3 ps-4'>Nov 28 2023</h2>
        <p>{/*date.toString()*/}</p>
        <h4 className='ps-4'>Tareas activas</h4>

      </div>
      <div style={{ height: '400px' }} className="chat-dimension">
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
                <div className="col">
                  <input className=" btn btn-danger btn-custom px-4" type="submit" value="Eliminar" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Calendario;

