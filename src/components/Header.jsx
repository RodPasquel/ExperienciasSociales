/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import '../assets/styles/components/Header.scss';
import '../assets/styles/components/Menu.scss';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='header'>
      <Link to='/result'>
        <img className='header__img' src={logo} alt='BookingSystemPlatzi' />
      </Link>
      <span
        className='header--hamburger material-icons'
        onClick={() => setOpenMenu(!openMenu)}
      >
        menu
      </span>
      <nav className={!openMenu ? 'navigation' : 'navigation navigation-open'}>
        <div className='navigation__profile'>
          <span className='material-icons navigation--icon'>
            account_circle
          </span>
          <h3> Nombre de usuario </h3>
          <a href='#'>Cerrar Sesión</a>
        </div>
        <ul className='navigation__ul'>
          <li className='navigation__li'>
            <Link className='navigation__link' to='/login'>
              Login
            </Link>
          </li>
          <li className='navigation__li'>
            <Link className='navigation__link' to='/singup'>
              Registrate
            </Link>
          </li>
          <li className='navigation__li'>
            <Link className='navigation__link' to='/'>
              Busqueda
            </Link>
          </li>
          {/* <li className='navigation__li'>
            <Link className='navigation__link' to='/login'>
              Other
            </Link>
          </li>
          <li className='navigation__li'>
            <Link className='navigation__link' to='/login'>
              Other
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
