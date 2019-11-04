import React, { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import '../assets/styles/components/Header.scss';
import '../assets/styles/components/Menu.scss';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='header'>
      <img className='header__img' src={logo} alt='BookingSystemPlatzi' />
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
          <a href='#'> Nombre de usuario </a>
          <a href='#'>Cerrar Sesión</a>
        </div>
        <ul className='navigation__ul'>
          <li className='navigation__li'>
            <a className='navigation__link' href='#'>
              Loguin
            </a>
          </li>
          <li className='navigation__li'>
            <a className='navigation__link' href='#'>
              Contact
            </a>
          </li>
          <li className='navigation__li'>
            <a className='navigation__link' href='#'>
              Item 1
            </a>
          </li>
          <li className='navigation__li'>
            <a className='navigation__link' href='#'>
              Item 2
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
