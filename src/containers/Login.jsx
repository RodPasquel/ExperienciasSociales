/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/LoginRegister.scss';
import googleIcon from '../assets/icons/google.png';
import twitterIcon from '../assets/icons/twitter.png';
import Background from '../assets/images/background-login.jpg';

const Login = () => (
  <section className='login' style={{ backgroundImage: `url(${Background})` }}>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form action='' className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='text' placeholder='Contraseña' />
        <button className='button' type='button'> Iniciar sesión </button>
        <div className='login__container--remember'>
          <label>
            <input type='checkbox' name='' id='checkbox__record' value='checkbox' />
            Recuerdame
          </label>
          <a href='#'>
            Olvidé mi contraseña
          </a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
          Iniciar sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Google' />
          Iniciar sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta <Link to='/register'> Regístrate </Link>
      </p>
    </section>
  </section>
);

export default Login;
