import React from 'react';
import '../assets/styles/components/Menu.scss';

const Menu = () => {
  /* console.log('state open menu ', open); */
  return (
    <nav className='navigation'>
      <div className='navigation__profile'>
        <span className='material-icons navigation--icon'>account_circle</span>
        <a href='#'> Nombre de usuario </a>
        <a href='#'>Cerrar Sesión</a>
      </div>
      <ul className='navigation__ul'>
        <li className='navigation__li'>
          <a className='navigation__link' href='#'>
            Iniciar Sesión
          </a>
        </li>
        <li className='navigation__li'>
          <a className='navigation__link' href='#'>
            Contacto
          </a>
        </li>
        <li className='navigation__li'>
          <a className='navigation__link' href='#'>
            Quick links
          </a>
        </li>
        <li className='navigation__li'>
          <a className='navigation__link' href='#'>
            Launchpad
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
