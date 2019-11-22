/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../assets/images/background-login.jpg';
import '../assets/styles/containers/LoginRegister.scss';

const Register = () => (
  <section className='registro' style={{ backgroundImage: `url(${Background})` }}>
    <section className='registro__container'>
      <h2>Regístrate</h2>
      <form action='' className='registro__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='text' placeholder='Contraseña' />
        <button className='button'>Resgístrarme</button>
      </form>
      <p className='registro__container--login'>
        <Link to='/login'> Iniciar sesión </Link>
      </p>
    </section>
  </section>
);

export default Register;
