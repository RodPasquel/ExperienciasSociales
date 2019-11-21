/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import '../assets/styles/containers/Reservation.scss';
import { Link } from 'react-router-dom';

class InsideExperience extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  }

  /*   onChange(e) {
      const target = e.target;
      const name = target.name;
      const value = target.value;
      console.log('name', name);
      console.log('value', value);
      const re = /^[0-9\b]+$/;
      if (value === '' || re.test(value)) {
        this.setState({ [name]: value });
      }
    } */

  render() {
    return (
      <section className='reservation'>
        <div className='infoDescription'>
          {/* Información del reservacion */}
          <div className='infoReservation'>
            <h2 className='infoTitle'> Revisar y Pagar </h2>
            <p className=''>Puedes agregar más amigos a esta experiencia y confirmar tu reservación. Pueden asistir personas que tengan 10 años o más.</p>
            <h3>Duración</h3>
            <p className='infoTime'> 4 horas </p>
            <h3>Costo por persona</h3>
            <p className='insideCost'> $ 1200 </p>
            <div>
              <Link to={`/inside`}> 
                <button className='button' type='button'>Cancelar</button>
              </Link>
            </div>
          </div>

          {/* Formulario de pago */}
          <form className='infoPay'>
            <h3>Información para el cobro</h3>
            <div>
              <label htmlFor='inputPeople'> Personas que asistiran</label>
              <input id='inputPeople' className='input' type='number' min='1' max='10' placeholder='1' />
            </div>
            <div>
              <label htmlFor=''>Monto Total</label>
              <input id='' type='text' pattern='[0-9]' readOnly />
            </div>
            {/* Datos de la tarjeta */}
            <h3>Forma de pago</h3>
            <label htmlFor='inputCard'> Numero de la tarjeta</label>
            <input
              id='inputCard'
              name='inputCard'
              type='text'
              minLength='18'
              maxLength='18'
              /* value={this.state.value}
              onChange={this.onChange} */
            />
            <label htmlFor='inputExpiration'> Caducidad </label>
            <input id='inputExpiration' type='month' min='2019-01' />
            <label htmlFor='inputCVV'> CVV </label>
            <input
              id='inputCVV'
              name='inputCVV'
              type='text'
              minLength='3'
              maxLength='3'
              /* value={this.state.value}
              onChange={this.onChange} */
            />
            <button className='button' type='button'> Confirmar y pagar </button>
          </form>
        </div>
      </section>
    );
  }
};

export default InsideExperience;
