/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/containers/InsideExperience.scss';

const InsideExperience = () => {
  return (
    <div className='inside'>
      <div className='insideDescription'>
        {/* Imagen destacada */}
        <div className='contimages'>
          <img src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='chocolate-cake-on-chopping-board' />
        </div>
        {/* Descripción del reservacion */}
        <div className='infoReservation'>
          <h2 className='infoTitle'> Revisar y Pagar </h2>
          <br />
          <p className='infoDescription'>Puedes agregar más amigos a esta experiencia y confirmar tu reservación. Pueden asistir personas que tengan 10 años o más.</p>
          <h3>Duración</h3>
          <p className='infoTime'> 4 horas </p>
          <br />
          {/* Formulario de pago */}
          <div className='infoPay'>
            <label htmlFor='inputPeople'> Personas que asistiran</label>
            <input id='inputPeople' className='input' type='number' min='1' placeholder='1' />
            <label htmlFor=''>Monto Total</label>
            <input id='' type='text' pattern='[0-9]' />
            {/* Datos de la tarjeta */}
            <label htmlFor='inputCard'> Numero de la tarjeta</label>
            <input id='inputCard' type='text' pattern='[0-9]' minLength='18' maxLength='18' size='18' />
            <label htmlFor='inputExpiration'> Caducidad </label>
            <input id='inputExpiration' type='month' min='2019-01' />
            <label htmlFor=''> CVV </label>
            <input type='text' pattern='[0-9]' minLength='3' maxLength='3' size='3' />
            <button className='button' type='button'> Confirmar y pagar </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideExperience;
