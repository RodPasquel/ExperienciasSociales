import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Menu.scss';

const Menu = () => {
  /* console.log('state open menu ', open); */
  console.log('carga del meu');
  return (
    <nav className='navigation'>
      <div className='navigation__profile'>
        <span className='material-icons navigation--icon'>account_circle</span>
        <a href='#'> Nombre de usuario </a>
        <a href='#'>Cerrar Sesión</a>
      </div>
      <ul className='navigation__ul'>
        <li className='navigation__li'>
          <Link to='/login'>
            SingIn
          </Link>
        </li>
        <li className='navigation__li'>
          <a className='navigation__link' href='#'>
            SingUp
          </a>
        </li>
        <li className='navigation__li'>
          <a className='navigation__link' href='#'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
